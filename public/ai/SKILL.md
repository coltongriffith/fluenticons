---
name: fluent-icons
description: Find Microsoft Fluent UI icons and their exact @fluentui/react-icons component names. Use whenever you add, pick or change a Fluent icon, instead of guessing an icon or component name.
---

# Fluent Icons

Look up Microsoft Fluent UI System Icons with Fluent Icons (https://fluenticons.co) instead of
guessing names. Guessed names like `UserLock24Regular` often don't exist; every name Fluent
Icons returns does.

## With the MCP server (preferred)

If the `fluent-icons` MCP server is connected (`claude mcp add --transport http fluent-icons https://fluenticons.co/mcp`):

1. `search_icons` with what the icon should mean: `{"query": "user permissions"}`.
2. For several icons in one UI (navigation, menus, tabs), `recommend_icons` with
   `{"items": [{"label": "Billing", "description": "invoices"}, …]}` so they share one style and size.
3. `get_icon` to check other sizes/styles exist; `get_icon_code` for code on other platforms.

## Without MCP

Use the HTTP API (JSON, no key):

```bash
curl -s "https://fluenticons.co/api/v1/icons/search?q=user+permissions&limit=5"
curl -s "https://fluenticons.co/api/v1/icons/PersonLock"
curl -s "https://fluenticons.co/api/v1/icons/PersonLock/code?platform=react&style=filled&size=20"
curl -s -X POST "https://fluenticons.co/api/v1/icons/recommend" -H "content-type: application/json" \
  -d '{"items": ["Home", "Projects", "Billing", "Settings"], "style": "regular", "size": 24}'
```

## Rules

- Search by meaning ("billing", "delete", "upload file"); results are ranked best first.
- Use `react.component` and `react.import` from the response exactly, e.g.
  `import { PersonLock24Regular } from "@fluentui/react-icons";`
- Keep one style (regular or filled) and one size (usually 20 or 24) across a UI.
- Never build a component name for a size or style the response doesn't list.
- If nothing fits, try a more literal word ("lock" rather than "permissions") or `find_similar_icons`.
