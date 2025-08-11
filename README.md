# React Native MCP Server

A comprehensive Model Context Protocol (MCP) server providing expert React Native development guidance, best practices, and optimization strategies.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- Claude CLI or Claude Desktop

### Installation

```bash
# Clone the repository
git clone https://github.com/MrNitro360/React-Native-MCP.git
cd React-Native-MCP

# Install dependencies
npm install

# Build the server
npm run build

# Add to Claude CLI (global access)
claude mcp add react-native-guide node ./build/index.js -s user
```

## 🎯 Features

### 🛠️ Analysis Tools

- **Component Analysis** - Code quality assessment and best practices validation
- **Performance Optimization** - FlatList optimization, memory management, bundle size reduction
- **Architecture Guidance** - Project structure, state management, navigation patterns
- **Debug Assistance** - Platform-specific debugging and error resolution

### 📚 Resources

- Official React Native documentation
- Performance optimization guides
- Platform-specific best practices (iOS/Android)
- Common development patterns and solutions

### 📝 Prompt Templates

- Code review workflows
- Architecture design planning
- Performance optimization strategies
- Migration guidance and testing approaches

## 💡 Usage Examples

### With Claude CLI

```bash
# Start interactive session
claude

# Example queries:
# "Analyze this React Native component for performance issues"
# "What's the best architecture for a React Native e-commerce app?"
# "How do I optimize a FlatList with 10,000+ items?"
# "Debug this navigation crash on iOS"
```

### With Claude Desktop

Add to your `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "react-native-guide": {
      "command": "node",
      "args": ["/path/to/React-Native-MCP/build/index.js"],
      "env": {}
    }
  }
}
```

## 🏗️ Development

```bash
# Development mode with auto-reload
npm run dev

# Build for production
npm run build

# Run in production
npm start
```

## 📋 What You Get

- **4 Comprehensive Tools** for React Native analysis and optimization
- **6 Specialized Prompts** for development workflows
- **5 Resource Libraries** with React Native documentation and guides
- **Expert Guidance** based on official React Native best practices
- **Platform Awareness** for iOS and Android specific considerations

## 🤝 Contributing

Contributions are welcome! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.

## 🔗 Links

- [Repository](https://github.com/MrNitro360/React-Native-MCP)
- [Issues](https://github.com/MrNitro360/React-Native-MCP/issues)
- [Model Context Protocol](https://modelcontextprotocol.io/)
- [React Native Documentation](https://reactnative.dev/)
