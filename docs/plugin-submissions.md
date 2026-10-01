# Plugin directory submissions

Drafts for listing Fluenticons in Anthropic's and OpenAI's directories. The plugin itself is the
[coltongriffith/fluenticons-plugin](https://github.com/coltongriffith/fluenticons-plugin) repository; the MCP server is `https://fluenticons.co/mcp` (no sign-in).

## Shared listing text

- **Name:** Fluenticons
- **Subtitle (≤ 30 chars):** Fluent UI icon search for code
- **Short description:** Search Microsoft's Fluent UI System Icons by meaning and get exact
  `@fluentui/react-icons` component names and code, instead of guessing.
- **Long description:** Find Microsoft Fluent UI System Icons by meaning ("user permissions",
  "billing", "delete") and get component names that exist in `@fluentui/react-icons`, with imports
  and code for React, SVG, Blazor, Flutter, WinUI/WPF, the icon font, Android, iOS and Power Apps.
  Pick a matching set for navigation or menus in one call. Search is deterministic: it matches icon
  names, Microsoft's keywords and a synonym list, so it never invents an icon. Free, no sign-in.
  Fluenticons is independent and not affiliated with Microsoft; the icons are Microsoft's, under
  the MIT License.
- **Category:** Developer tools / Coding
- **Website / docs:** https://fluenticons.co/ai/
- **Privacy policy:** https://fluenticons.co/privacy-policy/
- **Terms:** https://fluenticons.co/terms/
- **Support:** https://fluenticons.co/contact/ (colton@fluenticons.co)
- **Icon:** `assets/icon.png` in the plugin repository (512 × 512)
- **Authentication:** none
- **Tools (all read-only):** search_icons, recommend_icons, get_icon, get_icon_code, find_similar_icons
- **Data handled:** search words and icon names (counted for analytics); the tools don't ask for
  code, files or personal data.

## Anthropic (claude.ai/directory/manage)

Submit twice: as an **MCP connector** (URL above, "No sign-in") and as a **plugin**
(Plugin bundle, repository `coltongriffith/fluenticons-plugin`, no path).

## OpenAI (platform.openai.com plugins)

Needs: verified org (individual or business), a project with global (not EU) data residency,
domain verification (send the token so `/.well-known/openai-apps-challenge` can serve it), a
video walkthrough, and these test cases.

**Should use the plugin**

1. "Find a Fluent UI icon for user permissions and give me the React import."
   Expect: search_icons; answer names a component such as `PersonLock24Regular` with its import.
2. "Pick Fluent icons for my sidebar: Home, Projects, Analytics, Billing, Settings."
   Expect: recommend_icons; five different icons, same style and size, one import line.
3. "Does the Fluent Delete icon come in a 20 px filled version? What's the component?"
   Expect: get_icon; answer `Delete20Filled`.
4. "Give me the Flutter code for the Fluent 'search' icon."
   Expect: get_icon_code with platform flutter; answer uses `FluentIcons.search_24_regular`.
5. "Show me alternatives to the Fluent PersonLock icon."
   Expect: find_similar_icons; several related icons.

**Should not use the plugin**

1. "Draw me a cat icon as an SVG." (creating new artwork, not finding Fluent icons)
2. "Which Material Symbols icon should I use for settings?" (a different icon set)
3. "What's the weather in Seattle?" (unrelated)
