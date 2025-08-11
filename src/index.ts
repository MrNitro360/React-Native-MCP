#!/usr/bin/env node

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { ReactNativeTools } from "./tools/index.js";
import { ReactNativeResources } from "./resources/index.js";
import { ReactNativePrompts } from "./prompts/index.js";

/**
 * React Native MCP Server - v1.0.1
 * Enhanced with automatic npm publishing via GitHub Actions
 * React Native MCP Server
 * 
 * This server provides React Native development guidance, best practices,
 * and tools based on the official React Native documentation.
 */

// Create the MCP server instance
const server = new McpServer({
  name: "react-native-mcp-server",
  version: "1.0.0"
});

// Initialize tools, resources, and prompts
const tools = new ReactNativeTools(server);
const resources = new ReactNativeResources(server);
const prompts = new ReactNativePrompts(server);

// Register all components
tools.register();
resources.register();
prompts.register();

async function main() {
  // Use stdio transport for command-line usage
  const transport = new StdioServerTransport();
  
  // Connect to the transport
  await server.connect(transport);
  
  // Server is now running
  console.error("React Native MCP Server is running...");
}

// Handle graceful shutdown
process.on('SIGINT', async () => {
  console.error("Shutting down React Native MCP Server...");
  await server.close();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  console.error("Shutting down React Native MCP Server...");
  await server.close();
  process.exit(0);
});

// Start the server
main().catch((error) => {
  console.error("Failed to start React Native MCP Server:", error);
  process.exit(1);
});
