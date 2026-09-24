// The Fluent Icons MCP server: /mcp (see agent/mcp.js).
import { handleMcp } from "../agent/mcp.js";

export const onRequest = (context) => handleMcp(context);
