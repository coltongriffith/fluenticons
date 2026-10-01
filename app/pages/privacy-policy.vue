<template>
  <div class="container mx-auto px-4 sm:px-8 py-8">
    <div class="prose dark:prose-invert max-w-3xl">
      <h1>Privacy Policy</h1>
      <p class="text-sm">Last updated: 1 October 2026</p>
      <p>
        This policy explains what information is collected when you use fluenticons.co (the
        "Site"), why, and the choices you have. The Site is operated by Colton Griffith
        ("we", "us"). Contact: <a href="mailto:colton@fluenticons.co">colton@fluenticons.co</a>.
      </p>

      <h2>Summary</h2>
      <ul>
        <li>You don't need an account, and we don't ask for your name or email to use the Site.</li>
        <li>Your favorites and theme choice are stored only in your own browser.</li>
        <li>We use Google Analytics to understand how the Site is used, and Google AdSense to show ads. Both use cookies or similar technologies and collect usage data.</li>
        <li>We don't sell your personal information.</li>
      </ul>

      <h2>Information collected</h2>

      <h3>Stored in your browser only</h3>
      <p>
        The Site saves your favorite icons and your light/dark mode preference in your browser's
        local storage so they're there next time you visit. This data never leaves your device,
        and we can't see it. You can clear it at any time by clearing your browser's site data.
      </p>

      <h3>Hosting and security logs</h3>
      <p>
        The Site is served by Cloudflare. Like any web host, Cloudflare processes technical data
        such as your IP address, browser type and the pages requested, in order to deliver the
        Site and protect it from abuse. See
        <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener">Cloudflare's privacy policy</a>.
      </p>

      <h3>Analytics</h3>
      <p>
        We use Google Analytics to measure how many people visit, which pages and features they
        use, and roughly where they come from. Google Analytics uses cookies and collects usage
        data such as pages viewed, device and browser type, approximate location (derived from
        your IP address) and referring websites. We use this only in aggregate to improve the
        Site. You can opt out with the
        <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener">Google Analytics Opt-out Browser Add-on</a>.
      </p>

      <h3>Advertising</h3>
      <p>
        We use Google AdSense to show ads, which keeps the Site free. Google and its partners use
        cookies and similar technologies to serve ads, measure their performance and, where
        permitted, personalize them based on your visits to this and other websites.
      </p>
      <ul>
        <li>
          You can turn off personalized ads in
          <a href="https://adssettings.google.com" target="_blank" rel="noopener">Google's Ads Settings</a>,
          or opt out of some third-party vendors' use of cookies at
          <a href="https://www.aboutads.info/choices" target="_blank" rel="noopener">aboutads.info</a>.
        </li>
        <li>
          Learn more in
          <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener">How Google uses information from sites or apps that use its services</a>.
        </li>
        <li>
          Visitors in the European Economic Area, the United Kingdom and Switzerland are asked for
          consent through Google's consent message before personalized ads or non-essential
          cookies are used. You can change your choice at any time from the privacy link shown
          in that message.
        </li>
      </ul>

      <h2>Agent API, MCP server and plugins</h2>
      <p>
        This section covers our <NuxtLink to="/ai/">API and MCP server</NuxtLink>
        (<code>fluenticons.co/api/v1</code> and <code>fluenticons.co/mcp</code>), the Fluenticons
        plugin for Claude Code and Codex, the command-line tool, and connectors added in apps such
        as ChatGPT and Claude.
      </p>
      <ul>
        <li>
          <strong>What we receive.</strong> Only what a tool call contains: search words, icon
          names, the labels and descriptions sent to <code>recommend_icons</code>, and the style,
          size and platform asked for. We also receive the client's name and version (such as
          "claude-code" or "openai-mcp") and its User-Agent and IP address. We never receive
          your conversation, code, files or account details from the AI app you use; that app's
          own privacy policy covers them.
        </li>
        <li>
          <strong>What we record.</strong> In Google Analytics: the search words (first 100
          characters), recommended item labels, the icons returned or requested, the platform,
          style and size, the kind of client, and whether it was set up through our plugin. We
          don't record the descriptions sent to <code>recommend_icons</code> or any other request
          content.
        </li>
        <li>
          <strong>IP addresses.</strong> Used only to apply rate limits and, combined with the
          User-Agent, to make a one-way hash that changes every month, so repeat use can be
          counted without identifying you. The address itself is not stored or sent to Google.
        </li>
        <li>
          <strong>Retention.</strong> Rate-limit counters last one minute and recent searches are
          kept in server memory for up to 30 minutes (to connect a search with the icon then
          requested), and neither is written to storage. Google Analytics keeps event data for
          up to 14 months.
        </li>
        <li>
          <strong>Sharing.</strong> We share this data only with Google (Analytics) and Cloudflare
          (hosting), who process it for us. We don't sell it or use it for advertising.
        </li>
        <li>
          <strong>Links in results.</strong> Links to icon pages carry <code>utm_source</code>
          and <code>utm_medium</code> tags naming the kind of client, so visits from AI tools can be
          counted. When you open one, the website's own analytics apply (see above).
        </li>
      </ul>

      <h2>Information you send us</h2>
      <p>
        If you email us or open a GitHub issue, we receive whatever you include, such as your
        email address or GitHub username. We use it only to respond. GitHub issues are public.
      </p>

      <h2>Legal bases (EEA/UK visitors)</h2>
      <p>
        We rely on your consent for analytics and advertising cookies where the law requires it,
        and on our legitimate interest in operating, securing and improving the Site for hosting
        logs and aggregate measurement.
      </p>

      <h2>Your rights and choices</h2>
      <p>
        Depending on where you live, you may have the right to access, correct, delete or object
        to the processing of your personal information, and to withdraw consent. Because we
        don't hold accounts or profiles, most data about your visit is held by Google and
        Cloudflare. Use the controls linked above, or email us and we'll help where we can.
        California residents can use the same controls to opt out of personalized advertising.
      </p>

      <h2>Children</h2>
      <p>
        The Site is a design and development tool and isn't directed at children under 13. We
        don't knowingly collect personal information from children.
      </p>

      <h2>Links to other sites</h2>
      <p>
        The Site links to other websites, such as GitHub, Microsoft and sponsors. Their privacy
        practices are their own. Please review their policies.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this policy as the Site or the law changes. The date at the top shows the
        latest version.
      </p>

      <h2>Contact</h2>
      <p>
        Questions or requests: <a href="mailto:colton@fluenticons.co">colton@fluenticons.co</a>.
      </p>
    </div>
  </div>
</template>

<script setup>
useSeo({
  title: "Privacy Policy",
  description:
    "What information fluenticons.co collects, how Google Analytics and Google AdSense use cookies, and the choices you have.",
  path: "/privacy-policy",
});
</script>
