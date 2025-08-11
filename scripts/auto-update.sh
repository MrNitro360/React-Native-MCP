#!/bin/bash
# Auto-update script for React Native MCP Server
# Place this in your local development workflow

echo "🚀 Auto-updating React Native MCP Server..."

# Navigate to MCP directory
cd "C:/Users/david/Desktop/React-Native MCP"

# Pull latest changes
echo "📥 Pulling latest changes from GitHub..."
git pull origin master

# Check if there were changes to source files
if git diff --name-only HEAD~1 HEAD | grep -E "(src/|package\.json|tsconfig\.json)"; then
    echo "🔧 Source changes detected, rebuilding..."
    
    # Install dependencies if package.json changed
    if git diff --name-only HEAD~1 HEAD | grep "package.json"; then
        echo "📦 Installing dependencies..."
        npm install
    fi
    
    # Build the project
    echo "🏗️ Building project..."
    npm run build
    
    # Copy to global MCP directory
    echo "📋 Copying to global MCP directory..."
    cp -r build/* "C:/mcp-servers/react-native-guide/"
    
    # Restart MCP server
    echo "🔄 Restarting MCP server..."
    claude mcp remove react-native-guide
    claude mcp add react-native-guide node C:/mcp-servers/react-native-guide/build/index.js -s user
    
    echo "✅ MCP server updated successfully!"
    claude mcp list
else
    echo "ℹ️ No source changes detected, skipping rebuild."
fi

echo "🎉 Auto-update complete!"
