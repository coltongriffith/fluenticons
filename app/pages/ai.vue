<template>
  <div class="container mx-auto px-4 sm:px-8 py-8">
    <div class="max-w-3xl">
      <div class="prose dark:prose-invert max-w-none">
        <h1>Fluent Icons for AI coding agents</h1>
        <p class="lead">
          Give your coding agent the Microsoft Fluent UI icon library so it stops guessing icon
          names. It can search icons by meaning, get component names that really exist in
          <code>@fluentui/react-icons</code>, generate correct imports and pick a consistent set
          of icons for your interface.
        </p>
        <p>
          It's free, with no signup or API key. Connect it as an <strong>MCP server</strong> (Claude
          Code, Cursor, Codex, VS Code and other MCP clients), call the <strong>HTTP API</strong>
          directly, or use the <strong>command line</strong>.
        </p>
      </div>

      <!-- Setup -->
      <section id="setup" class="mt-8">
        <h2 class="text-2xl font-bold mb-3">Connect your agent</h2>
        <div class="flex flex-wrap gap-1 border-b dark:border-gray-700 mb-3" role="tablist" aria-label="Client">
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
            <p class="text-sm text-gray-600 dark:text-gray-300 mb-2 mt-3" v-html="step.text" />
            <div v-if="step.code" class="relative">
              <pre class="rounded-lg bg-gray-900 text-gray-100 text-sm p-4 pr-16 overflow-x-auto"><code>{{ step.code }}</code></pre>
              <button
                class="absolute top-2 right-2 rounded-md bg-gray-700 hover:bg-gray-600 text-white text-xs px-2 py-1"
                @click="copy(step.code, tab.key, step.kind || tab.kind)"
              >
                Copy
              </button>
            </div>
          </template>
        </div>
        <p class="text-sm text-gray-600 dark:text-gray-300 mt-4">
          Then ask your agent something like <em>"Add a Fluent icon for user permissions to the
          sidebar"</em> or <em>"Pick Fluent icons for Home, Projects, Analytics, Billing and
          Settings"</em>.
        </p>
      </section>

      <!-- Try it -->
      <section id="try" class="mt-10">
        <h2 class="text-2xl font-bold mb-3">Try it</h2>
        <p class="text-sm text-gray-600 dark:text-gray-300 mb-3">
          This is what your agent gets back. Describe an icon in your own words:
        </p>
        <form class="flex gap-2" @submit.prevent="tryIt">
          <input
            v-model="demoQuery"
            type="search"
            maxlength="200"
            aria-label="Describe an icon"
            placeholder="e.g. user permissions, billing, upload file"
            class="form-input flex-1 min-w-0 rounded-lg border-gray-300 dark:border-gray-700 dark:bg-gray-900 text-sm"
          />
          <button class="rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2">Search</button>
        </form>
        <div v-if="demo.error" class="mt-3 text-sm text-red-600">{{ demo.error }}</div>
        <ul v-if="demo.results.length" class="mt-4 divide-y dark:divide-gray-700 border rounded-lg dark:border-gray-700">
          <li v-for="r in demo.results" :key="r.slug" class="flex items-center gap-3 px-3 py-2 text-sm">
            <IconMask :src="r.svgUrl" class="h-6 w-6 shrink-0" />
            <NuxtLink :to="r.url.replace(SITE_URL, '')" class="font-medium hover:underline truncate">{{ r.displayName }}</NuxtLink>
            <code class="ml-auto text-xs truncate">{{ r.react?.component }}</code>
          </li>
        </ul>
        <details v-if="demo.json" class="mt-3 text-sm">
          <summary class="cursor-pointer text-gray-600 dark:text-gray-300">Raw JSON response</summary>
          <pre class="mt-2 rounded-lg bg-gray-900 text-gray-100 text-xs p-4 overflow-x-auto max-h-96"><code>{{ demo.json }}</code></pre>
        </details>
      </section>

      <div class="prose dark:prose-invert max-w-none mt-10">
        <h2 id="tools">What your agent can do</h2>
        <table>
          <thead>
            <tr><th>MCP tool</th><th>What it returns</th></tr>
          </thead>
          <tbody>
            <tr><td><code>search_icons</code></td><td>Icons that match a meaning or name ("user permissions", "billing"), best first, each with its React component and import.</td></tr>
            <tr><td><code>recommend_icons</code></td><td>One icon per UI item (navigation, menus, settings sections) in a single style and size, without repeats, plus one import line.</td></tr>
            <tr><td><code>get_icon</code></td><td>Every style and size of an icon, exact component names, platforms with published code, SVG URLs and related icons.</td></tr>
            <tr><td><code>get_icon_code</code></td><td>Code for one variant: React, SVG, Blazor, Flutter, WinUI/WPF, icon font, Android, iOS or Power Apps, where Microsoft publishes it.</td></tr>
            <tr><td><code>find_similar_icons</code></td><td>Alternatives to an icon, for when the first match isn't quite right.</td></tr>
          </tbody>
        </table>
        <p>
          Results come from the same catalogue as this website: {{ roughCount(stats.designs) }} icon
          designs from Microsoft's <code>@fluentui/svg-icons</code> {{ stats.svgIcons }}, updated
          when Microsoft publishes a release. Names that don't exist are never returned: a wrong
          name gets a "not found" error with suggestions.
        </p>

        <h2 id="api">HTTP API</h2>
        <p>
          JSON over HTTPS at <code>https://fluenticons.co/api/v1</code>. No key needed; CORS is
          open, so it works from browsers too.
        </p>
        <h3>Search</h3>
        <pre><code>{{ api.search }}</code></pre>
        <p>
          Optional parameters: <code>style</code> (regular, filled, color, light),
          <code>size</code> (10–48), <code>platform</code> (adds that platform's code to each
          result), <code>limit</code> (1–50, default 10), <code>exact=true</code> (exact name only)
          and <code>category</code> (a keyword such as <code>security</code>).
        </p>
        <pre><code>{{ api.searchResponse }}</code></pre>
        <h3>One icon</h3>
        <pre><code>{{ api.get }}</code></pre>
        <p>
          Accepts <code>PersonLock</code>, <code>person_lock</code>, <code>person-lock</code> or a
          component name such as <code>PersonLock20Filled</code>. Returns styles, sizes, every
          component name, platforms, SVG URLs and related icons.
        </p>
        <h3>Code</h3>
        <pre><code>{{ api.code }}</code></pre>
        <p>Platforms: react, svg, blazor, flutter, xaml, font, android, ios, powerapps.</p>
        <h3>Recommend icons for a UI</h3>
        <pre><code>{{ api.recommend }}</code></pre>
        <pre><code>{{ api.recommendResponse }}</code></pre>
        <p>
          Errors are JSON too: <code>{"error": {"code": "icon_not_found", "message": …,
          "suggestions": […]}}</code> with status 400, 404 or 429. The limit is
          120 requests per minute per IP address; responses carry
          <code>X-RateLimit-Remaining</code>.
        </p>

        <h2 id="cli">Command line</h2>
        <p>No install needed (Node 18 or later):</p>
      </div>
      <div v-for="(line, i) in cliLines" :key="i" class="relative mt-2">
        <pre class="rounded-lg bg-gray-900 text-gray-100 text-sm p-4 pr-16 overflow-x-auto"><code>{{ line }}</code></pre>
        <button
          class="absolute top-2 right-2 rounded-md bg-gray-700 hover:bg-gray-600 text-white text-xs px-2 py-1"
          @click="copy(line, 'cli', 'cli')"
        >
          Copy
        </button>
      </div>
      <div class="prose dark:prose-invert max-w-none mt-4">
        <p>
          Also: <code>get PersonLock</code>, <code>code PersonLock --platform flutter</code>,
          <code>--style filled</code>, <code>--size 20</code> and <code>--json</code>.
        </p>

        <h2 id="instructions">Instructions for your agent</h2>
        <p>
          Add this to your project's <code>AGENTS.md</code>, <code>CLAUDE.md</code>, Cursor rules
          or <code>.github/copilot-instructions.md</code> so the agent uses Fluent Icons whenever
          it picks an icon:
        </p>
      </div>
      <div class="relative mt-2">
        <pre class="rounded-lg bg-gray-900 text-gray-100 text-sm p-4 pr-16 overflow-x-auto whitespace-pre-wrap"><code>{{ instructions }}</code></pre>
        <button
          class="absolute top-2 right-2 rounded-md bg-gray-700 hover:bg-gray-600 text-white text-xs px-2 py-1"
          @click="copy(instructions, 'instructions', 'instructions')"
        >
          Copy
        </button>
      </div>
      <div class="prose dark:prose-invert max-w-none mt-4">
        <p>
          For Claude Code there's also a ready-made skill:
          <a href="/ai/SKILL.md" @click="track('ai_install_click', { client: 'claude-code', kind: 'skill_download' })">SKILL.md</a>
          (see the Claude Code tab above). A summary for language models is at
          <a href="/llms.txt">/llms.txt</a>.
        </p>

        <h2 id="faq">Questions</h2>
        <h3>Is it free?</h3>
        <p>Yes. There's no signup, API key or paid plan.</p>
        <h3>What does it send or store?</h3>
        <p>
          Your agent only sends the words it searches for and the icon names it asks about — never
          your code. We count requests (search words, icons returned, platform, and the kind of
          client) to improve results. See the <NuxtLink to="/privacy-policy/">privacy policy</NuxtLink>.
        </p>
        <h3>Does it use an AI model?</h3>
        <p>
          No. Search matches icon names, Microsoft's keywords and a list of synonyms ("billing"
          finds Payment, Receipt and Wallet), so it's fast and returns the same result every time.
          Your agent does the thinking; Fluent Icons makes sure the names are real.
        </p>
        <h3>Is this an official Microsoft service?</h3>
        <p>
          No. Fluenticons is an independent project. The icons are Microsoft's
          <a href="https://github.com/microsoft/fluentui-system-icons" target="_blank" rel="noopener">Fluent UI System Icons</a>,
          used under the MIT License.
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
      { text: "Add the MCP server (run in your project, or add <code>--scope user</code> for every project):", code: `claude mcp add --transport http fluent-icons ${MCP_URL}` },
      {
        text: "Optional: add the Fluent Icons skill so Claude reaches for it whenever it picks an icon:",
        code: "mkdir -p .claude/skills/fluent-icons && curl -fsSL https://fluenticons.co/ai/SKILL.md -o .claude/skills/fluent-icons/SKILL.md",
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
        text: "Add this to <code>.cursor/mcp.json</code> in your project (or <code>~/.cursor/mcp.json</code> for all projects):",
        code: JSON.stringify({ mcpServers: { "fluent-icons": { url: MCP_URL } } }, null, 2),
      },
    ],
  },
  {
    key: "codex",
    label: "Codex",
    kind: "mcp",
    steps: [
      {
        text: "Add this to <code>~/.codex/config.toml</code> (used by the Codex CLI and IDE extension):",
        code: `[mcp_servers.fluent-icons]\nurl = "${MCP_URL}"`,
      },
      { text: "Add the <a href=\"#instructions\">instructions below</a> to your <code>AGENTS.md</code> so Codex uses it.", kind: "instructions" },
    ],
  },
  {
    key: "vscode",
    label: "VS Code / Copilot",
    kind: "mcp",
    steps: [
      {
        text: "Add this to <code>.vscode/mcp.json</code> in your project, then start the server from that file or the MCP view:",
        code: JSON.stringify({ servers: { "fluent-icons": { type: "http", url: MCP_URL } } }, null, 2),
      },
    ],
  },
  {
    key: "other",
    label: "Other MCP clients",
    kind: "mcp",
    steps: [
      {
        text: "Fluent Icons is a remote MCP server using the Streamable HTTP transport, with no authentication. Point any MCP client at:",
        code: MCP_URL,
      },
      {
        text: "In Claude (web and desktop): Settings → Connectors → Add custom connector, with the URL above. With the OpenAI Responses API, add it as a remote MCP tool:",
        code: JSON.stringify({ type: "mcp", server_label: "fluent-icons", server_url: MCP_URL, require_approval: "never" }, null, 2),
      },
    ],
  },
  {
    key: "api",
    label: "HTTP API",
    kind: "api",
    steps: [
      { text: "Any agent that can run shell commands or fetch URLs can use the API directly:", code: 'curl "https://fluenticons.co/api/v1/icons/search?q=user+permissions&limit=5"' },
      { text: 'See the <a href="#api">API reference</a> below.' },
    ],
  },
  {
    key: "cli",
    label: "CLI",
    kind: "cli",
    steps: [{ text: "No install needed (Node 18 or later):", code: `${CLI} search "user security"` }],
  },
];

const activeSetup = ref("claude-code");
function pickSetup(key) {
  activeSetup.value = key;
  track(key === "api" ? "ai_api_docs_view" : "ai_setup_tab", { client: key });
}

const toast = useToast();
async function copy(text, client, kind) {
  try {
    await navigator.clipboard.writeText(text);
    toast.show("Copied");
    track("ai_install_click", { client, kind });
    if (kind === "mcp") track("ai_mcp_connect_click", { client });
    if (kind === "cli") track("ai_cli_copy", { client });
  } catch (err) {
    toast.error(err.message);
  }
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
  "Free MCP server, API and CLI for Microsoft's Fluent UI icons. Claude Code, Cursor, Codex and Copilot search icons by meaning and get real @fluentui/react-icons names.";
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
