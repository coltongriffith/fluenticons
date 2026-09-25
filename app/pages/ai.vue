<template>
  <div class="container mx-auto px-4 sm:px-8 py-8">
    <div class="max-w-3xl">
      <p class="font-mono text-xs uppercase tracking-wider text-gray-500 mb-3">MCP server · HTTP API · CLI</p>
      <h1 class="text-3xl sm:text-4xl font-bold mb-4">Fluent Icons for coding agents</h1>
      <p class="text-gray-600 dark:text-gray-300 mb-8">
        Search Microsoft's Fluent UI System Icons by meaning and get component names that exist in
        <code class="rounded bg-gray-100 dark:bg-gray-800 px-1 py-0.5 text-sm">@fluentui/react-icons</code>.
        Works with Claude Code, Cursor, Codex, VS Code and any MCP client. Free, no API key.
      </p>

      <dl class="grid sm:grid-cols-[9rem_1fr] rounded-lg border dark:border-gray-700 text-sm divide-y sm:divide-y-0 dark:divide-gray-700 mb-12">
        <template v-for="(row, i) in endpoints" :key="row.label">
          <dt class="px-4 pt-3 sm:py-3 text-gray-500" :class="i && 'sm:border-t dark:border-gray-700'">{{ row.label }}</dt>
          <dd class="px-4 pb-3 sm:py-3 font-mono break-all" :class="i && 'sm:border-t dark:border-gray-700'">{{ row.value }}</dd>
        </template>
      </dl>

      <!-- Setup -->
      <section id="setup" class="mb-12">
        <h2 class="text-2xl font-bold mb-3">Setup</h2>
        <div class="flex flex-wrap gap-1 border-b dark:border-gray-700 mb-4" role="tablist" aria-label="Client">
          <button
            v-for="tab in setupTabs"
            :key="tab.key"
            role="tab"
            class="px-3 py-2 text-sm -mb-px border-b-2"
            :class="tab.key === activeSetup ? 'border-blue-600 font-semibold' : 'border-transparent text-gray-500 hover:text-gray-900 dark:hover:text-white'"
            :aria-selected="tab.key === activeSetup"
            @click="pickSetup(tab.key)"
          >
            {{ tab.label }}
          </button>
        </div>
        <div v-for="tab in setupTabs" v-show="tab.key === activeSetup" :key="tab.key" role="tabpanel">
          <h3 class="sr-only">{{ tab.label }}</h3>
          <template v-for="(step, i) in tab.steps" :key="i">
            <p v-if="step.text" class="text-sm text-gray-600 dark:text-gray-300 mt-3">{{ step.text }}</p>
            <CodeBlock v-if="step.code" :code="step.code" :label="step.label" @copy="copied(tab.key, step.kind || tab.kind)" />
          </template>
        </div>
      </section>

      <!-- Live query -->
      <section id="try" class="mb-12">
        <h2 class="text-2xl font-bold mb-3">Test a query</h2>
        <form class="relative flex items-center overflow-hidden rounded-full bg-gray-50 dark:bg-gray-700 focus-within:bg-gray-100 dark:focus-within:bg-gray-800" @submit.prevent="tryIt">
          <input
            v-model="demoQuery"
            type="search"
            maxlength="200"
            aria-label="Describe an icon"
            placeholder="user permissions, billing, upload file…"
            class="flex-1 min-w-0 h-10 bg-transparent px-6 text-sm focus:outline-none"
          />
          <button class="h-10 w-12 flex-center border-l border-gray-200 dark:border-gray-600 text-gray-500" aria-label="Search">
            <FluentSvg ui="search_24_filled" class="h-5 w-5" /><span class="sr-only">Search</span>
          </button>
        </form>
        <p v-if="demo.error" class="mt-3 text-sm text-gray-500">{{ demo.error }}</p>
        <table v-if="demo.results.length" class="mt-4 w-full text-sm">
          <tbody class="divide-y dark:divide-gray-700">
            <tr v-for="r in demo.results" :key="r.slug">
              <td class="py-2 w-8"><IconMask :src="r.svgUrl" class="h-5 w-5" /></td>
              <td class="py-2"><NuxtLink :to="r.url.replace(SITE_URL, '')" class="hover:underline">{{ r.displayName }}</NuxtLink></td>
              <td class="py-2 text-right font-mono text-xs text-gray-500">{{ r.react?.component }}</td>
            </tr>
          </tbody>
        </table>
        <CodeBlock v-if="demo.json" :code="demo.json" label="Response" />
      </section>

      <div class="prose dark:prose-invert max-w-none">
        <h2 id="tools">MCP tools</h2>
        <table>
          <thead>
            <tr><th>Tool</th><th>Returns</th></tr>
          </thead>
          <tbody>
            <tr><td><code>search_icons</code></td><td>Icons matching a meaning or name, best first, with the React component and import.</td></tr>
            <tr><td><code>recommend_icons</code></td><td>One icon per UI item in a shared style and size, with a single import line.</td></tr>
            <tr><td><code>get_icon</code></td><td>Styles, sizes, component names, platforms, SVG URLs and related icons.</td></tr>
            <tr><td><code>get_icon_code</code></td><td>Code for one variant: React, SVG, Blazor, Flutter, WinUI/WPF, icon font, Android, iOS or Power Apps.</td></tr>
            <tr><td><code>find_similar_icons</code></td><td>Related icons.</td></tr>
          </tbody>
        </table>
        <p>
          Data: {{ roughCount(stats.designs) }} designs from <code>@fluentui/svg-icons</code>
          {{ stats.svgIcons }}, updated with each Microsoft release. Unknown names return
          <code>icon_not_found</code> with suggestions.
        </p>

        <h2 id="api">HTTP API</h2>
        <p>Base URL <code>https://fluenticons.co/api/v1</code>. JSON, no key, CORS enabled.</p>
        <table>
          <thead>
            <tr><th>Endpoint</th><th>Description</th></tr>
          </thead>
          <tbody>
            <tr><td><code>GET /icons/search?q=</code></td><td>Search. Optional <code>style</code>, <code>size</code>, <code>platform</code>, <code>limit</code> (1–50), <code>exact</code>, <code>category</code>.</td></tr>
            <tr><td><code>GET /icons/{icon}</code></td><td>One icon. Accepts <code>PersonLock</code>, <code>person_lock</code> or <code>PersonLock20Filled</code>.</td></tr>
            <tr><td><code>GET /icons/{icon}/code</code></td><td><code>platform</code>: react, svg, blazor, flutter, xaml, font, android, ios, powerapps.</td></tr>
            <tr><td><code>POST /icons/recommend</code></td><td>A set of icons for UI items.</td></tr>
          </tbody>
        </table>
      </div>
      <CodeBlock :code="api.search" label="Request" @copy="copied('api', 'api')" />
      <CodeBlock :code="api.searchResponse" label="Response" />
      <CodeBlock :code="api.recommend" label="Request" @copy="copied('api', 'api')" />
      <CodeBlock :code="api.recommendResponse" label="Response" />
      <div class="prose dark:prose-invert max-w-none">
        <p>
          Errors: <code>{"error": {"code", "message"}}</code> with status 400, 404 or 429. Limit:
          120 requests per minute per IP (<code>X-RateLimit-Remaining</code>).
        </p>

        <h2 id="cli">CLI</h2>
        <p>Node 18 or later, nothing to install.</p>
      </div>
      <CodeBlock :code="cliLines.join('\n')" label="Terminal" @copy="copied('cli', 'cli')" />
      <div class="prose dark:prose-invert max-w-none">
        <p>
          Also <code>get</code>, <code>code --platform flutter</code>, <code>--style</code>,
          <code>--size</code> and <code>--json</code>.
        </p>

        <h2 id="instructions">Agent instructions</h2>
        <p>
          For <code>AGENTS.md</code>, <code>CLAUDE.md</code>, Cursor rules or
          <code>.github/copilot-instructions.md</code>. Claude Code users can install
          <a href="/ai/SKILL.md" @click="track('ai_install_click', { client: 'claude-code', kind: 'skill_download' })">SKILL.md</a>
          instead; <a href="/llms.txt">/llms.txt</a> has a summary for language models.
        </p>
      </div>
      <CodeBlock :code="instructions" label="AGENTS.md" @copy="copied('instructions', 'instructions')" />

      <div class="prose dark:prose-invert max-w-none mt-12">
        <h2 id="faq">FAQ</h2>
        <h3>Is it free?</h3>
        <p>Yes. No signup, key or paid plan.</p>
        <h3>What is sent or stored?</h3>
        <p>
          Search words and icon names, never your code. Requests are counted (query, icons
          returned, platform, client type) to improve results. See the
          <NuxtLink to="/privacy-policy/">privacy policy</NuxtLink>.
        </p>
        <h3>Does it use a language model?</h3>
        <p>
          No. Search matches names, Microsoft's keywords and a synonym list, so results are fast
          and deterministic.
        </p>
        <h3>Is it official?</h3>
        <p>
          No. Fluenticons is independent. The icons are Microsoft's
          <a href="https://github.com/microsoft/fluentui-system-icons" target="_blank" rel="noopener">Fluent UI System Icons</a>
          (MIT License).
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { track } from "../utils/analytics";

const MCP_URL = "https://fluenticons.co/mcp";
const CLI = "npx -y https://fluenticons.co/cli.tgz";

const instructions = `## Icons

This project uses Microsoft's Fluent UI icons (@fluentui/react-icons). Never guess icon component names.
- Find icons with the Fluent Icons MCP server (tools search_icons, recommend_icons, get_icon, get_icon_code) or, without MCP, the API: https://fluenticons.co/api/v1/icons/search?q=<what the icon means>
- Search for what the icon should mean ("user permissions", "billing"), then use a returned component name exactly, e.g. import { PersonLock24Regular } from "@fluentui/react-icons".
- For several icons in one UI (navigation, menus, tabs), use recommend_icons so they share one style and size.
- Before using another size or style, check it exists with get_icon; don't build names yourself.`;

const setupTabs = [
  {
    key: "claude-code",
    label: "Claude Code",
    kind: "mcp",
    steps: [
      { code: `claude mcp add --transport http fluent-icons ${MCP_URL}`, label: "Terminal" },
      { text: "Add --scope user to enable it in every project. Optional skill:" },
      {
        code: "mkdir -p .claude/skills/fluent-icons && curl -fsSL https://fluenticons.co/ai/SKILL.md -o .claude/skills/fluent-icons/SKILL.md",
        label: "Terminal",
        kind: "skill",
      },
    ],
  },
  {
    key: "cursor",
    label: "Cursor",
    kind: "mcp",
    steps: [
      {
        code: JSON.stringify({ mcpServers: { "fluent-icons": { url: MCP_URL } } }, null, 2),
        label: ".cursor/mcp.json",
      },
      { text: "Use ~/.cursor/mcp.json to enable it for all projects." },
    ],
  },
  {
    key: "codex",
    label: "Codex",
    kind: "mcp",
    steps: [
      { code: `[mcp_servers.fluent-icons]\nurl = "${MCP_URL}"`, label: "~/.codex/config.toml" },
      { text: "Shared by the Codex CLI and IDE extension. Add the agent instructions below to AGENTS.md." },
    ],
  },
  {
    key: "vscode",
    label: "VS Code / Copilot",
    kind: "mcp",
    steps: [
      {
        code: JSON.stringify({ servers: { "fluent-icons": { type: "http", url: MCP_URL } } }, null, 2),
        label: ".vscode/mcp.json",
      },
      { text: "Start the server from the file or the MCP view." },
    ],
  },
  {
    key: "other",
    label: "Other MCP clients",
    kind: "mcp",
    steps: [
      { text: "Streamable HTTP, no authentication.", code: MCP_URL, label: "URL" },
      { text: "Claude (web and desktop): Settings → Connectors → Add custom connector. OpenAI Responses API:" },
      {
        code: JSON.stringify({ type: "mcp", server_label: "fluent-icons", server_url: MCP_URL, require_approval: "never" }, null, 2),
        label: "tools[]",
      },
    ],
  },
  {
    key: "api",
    label: "HTTP API",
    kind: "api",
    steps: [
      { code: 'curl "https://fluenticons.co/api/v1/icons/search?q=user+permissions&limit=5"', label: "Terminal" },
      { text: "For agents without MCP support. Reference below." },
    ],
  },
  {
    key: "cli",
    label: "CLI",
    kind: "cli",
    steps: [{ code: `${CLI} search "user security"`, label: "Terminal" }],
  },
];

const activeSetup = ref("claude-code");
function pickSetup(key) {
  activeSetup.value = key;
  track(key === "api" ? "ai_api_docs_view" : "ai_setup_tab", { client: key });
}

const endpoints = [
  { label: "MCP server", value: MCP_URL },
  { label: "HTTP API", value: "https://fluenticons.co/api/v1" },
  { label: "CLI", value: `${CLI} --help` },
];

// Analytics for the Copy buttons (CodeBlock copies and confirms).
function copied(client, kind) {
  track("ai_install_click", { client, kind });
  if (kind === "mcp") track("ai_mcp_connect_click", { client });
  if (kind === "cli") track("ai_cli_copy", { client });
}

const cliLines = [
  `${CLI} search "user security"`,
  `${CLI} search billing --react`,
  `${CLI} recommend "Home, Projects, Analytics, Billing, Settings"`,
];

const api = {
  search: 'curl "https://fluenticons.co/api/v1/icons/search?q=user+permissions&limit=3"',
  searchResponse: `{
  "query": "user permissions",
  "count": 3,
  "results": [
    {
      "name": "PersonLock",
      "slug": "person_lock",
      "displayName": "Person Lock",
      "score": 0.81,
      "styles": ["regular", "filled"],
      "sizes": [16, 20, 24],
      "keywords": ["human", "contact", "guest", "security", "safety", "access", …],
      "react": {
        "component": "PersonLock24Regular",
        "package": "@fluentui/react-icons",
        "import": "import { PersonLock24Regular } from \\"@fluentui/react-icons\\";",
        "style": "regular",
        "size": 24
      },
      "svgUrl": "https://cdn.jsdelivr.net/npm/@fluentui/svg-icons@…/icons/person_lock_24_regular.svg",
      "url": "https://fluenticons.co/icon/person-lock/"
    },
    …
  ]
}`,
  get: 'curl "https://fluenticons.co/api/v1/icons/PersonLock"',
  code: 'curl "https://fluenticons.co/api/v1/icons/PersonLock/code?platform=react&style=filled&size=20"',
  recommend: `curl -X POST "https://fluenticons.co/api/v1/icons/recommend" \\
  -H "content-type: application/json" \\
  -d '{
    "items": [
      { "label": "Home", "description": "main dashboard" },
      { "label": "Projects", "description": "customer projects" },
      { "label": "Analytics", "description": "performance metrics" },
      { "label": "Billing", "description": "subscriptions and invoices" },
      { "label": "Settings", "description": "application settings" }
    ],
    "style": "regular",
    "size": 24
  }'`,
  recommendResponse: `{
  "recommendations": [
    { "label": "Home", "icon": "Home", "component": "Home24Regular", "confidence": 1, … },
    { "label": "Projects", "icon": "Folder", "component": "Folder24Regular", … },
    { "label": "Analytics", "icon": "DataPie", "component": "DataPie24Regular", … },
    { "label": "Billing", "icon": "Receipt", "component": "Receipt24Regular", … },
    { "label": "Settings", "icon": "Settings", "component": "Settings24Regular", … }
  ],
  "import": "import { Home24Regular, Folder24Regular, DataPie24Regular, Receipt24Regular, Settings24Regular } from \\"@fluentui/react-icons\\";"
}`,
};

// ---- Live demo (the real API) ---------------------------------------------------
const demoQuery = ref("");
const demo = reactive({ results: [], json: "", error: "" });
async function tryIt() {
  const q = demoQuery.value.trim();
  if (!q) return;
  demo.error = "";
  try {
    // Counted here as ai_demo_search, so the API doesn't count it again.
    const res = await fetch(`/api/v1/icons/search?q=${encodeURIComponent(q)}&limit=6`, {
      headers: { "x-fluenticons-no-track": "1" },
    });
    const body = await res.json();
    if (!res.ok) throw new Error(body.error?.message || `HTTP ${res.status}`);
    demo.results = body.results;
    demo.json = JSON.stringify(body, null, 2);
    if (!body.results.length) demo.error = body.hint || "No icons found.";
    track("ai_demo_search", { search_term: q.toLowerCase().slice(0, 100), result_count: body.results.length });
  } catch (err) {
    demo.results = [];
    demo.json = "";
    demo.error = `Couldn't search: ${err.message}`;
  }
}

onMounted(() => track("ai_page_view"));

const description =
  "MCP server, HTTP API and CLI for Microsoft's Fluent UI icons. Claude Code, Cursor, Codex and Copilot search by meaning and get valid @fluentui/react-icons names.";
useSeo({ title: "Fluent Icons for AI agents: MCP server & API", description, path: "/ai" });
useJsonLd({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    ["Is the Fluent Icons MCP server free?", "Yes. There's no signup, API key or paid plan."],
    [
      "How do I add Fluent Icons to Claude Code?",
      `Run: claude mcp add --transport http fluent-icons ${MCP_URL}`,
    ],
    [
      "How do I add Fluent Icons to Cursor?",
      `Add {"mcpServers": {"fluent-icons": {"url": "${MCP_URL}"}}} to .cursor/mcp.json.`,
    ],
    [
      "Does the Fluent Icons API return real React component names?",
      "Yes. Every component it returns exists in @fluentui/react-icons; unknown names return a not-found error with suggestions.",
    ],
  ].map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })),
});
</script>
