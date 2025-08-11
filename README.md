# React Native MCP Server

A comprehensive Model Context Protocol (MCP) server providing expert React Native development guidance, code analysis, security auditing, and optimization strategies for professional mobile app development.

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

### � Comprehensive Analysis Tools

- **Codebase Analysis** - Full project analysis for security, performance, and quality
- **Component Analysis** - Individual component or entire codebase evaluation  
- **Performance Optimization** - Memory management, bundle size, rendering optimization
- **Security Auditing** - Vulnerability detection, secret scanning, secure coding practices
- **Code Quality Assessment** - Complexity analysis, refactoring suggestions, best practices
- **Deprecated Feature Detection** - Outdated API identification and migration guidance
- **Accessibility Compliance** - Screen reader support, inclusive design recommendations
- **Testing Gap Analysis** - Test coverage evaluation and testing strategy suggestions
- **Package & Dependency Auditing** - Version updates, security patches, migration paths

### 🛡️ Security & Quality Focus

- **Hardcoded Secret Detection** - API keys, tokens, passwords in code
- **Insecure Request Identification** - HTTP vs HTTPS, data exposure risks
- **Code Injection Prevention** - eval() usage, XSS vulnerability detection
- **Error Handling Analysis** - Missing try-catch blocks, unhandled promises
- **Performance Anti-patterns** - Memory leaks, inefficient rendering, large bundles

### 📚 Expert Resources

- **Official Documentation** - Complete React Native API references and guides
- **Performance Optimization** - Advanced techniques for mobile app performance
- **Platform-Specific Guides** - iOS and Android development best practices
- **Architecture Patterns** - Scalable app structure and state management
- **Security Best Practices** - Mobile app security guidelines and implementation

### 🎨 Intelligent Prompts

- **Code Review Workflows** - Systematic component and architecture evaluation
- **Performance Optimization** - Targeted performance improvement strategies  
- **Architecture Design** - Scalable project structure planning
- **Debugging Assistance** - Platform-specific troubleshooting guidance
- **Migration Planning** - Version upgrades and library migration strategies
- **Testing Strategies** - Comprehensive testing approach recommendations

## 💡 Usage Examples

### Comprehensive Codebase Analysis

```bash
# Full project analysis (security, performance, quality, accessibility)
claude "analyze_codebase_comprehensive"

# Focus on specific areas
claude "analyze_codebase_comprehensive focusing on security and deprecated_features"

# Performance-only analysis
claude "analyze_codebase_performance"

# Single component analysis (or entire codebase if no code provided)
claude "analyze_component"
```

### Real-World Examples

```bash
# Security audit
"Scan my React Native project for security vulnerabilities"

# Performance optimization
"Analyze my app for performance bottlenecks and memory leaks"

# Code quality assessment  
"Review my codebase for refactoring opportunities and best practices"

# Accessibility compliance
"Check my app for accessibility issues and recommendations"

# Dependency management
"Audit my packages for outdated or deprecated dependencies"
```

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

### 🎯 Professional Analysis Capabilities

- **Comprehensive Codebase Analysis** - Security, performance, quality, accessibility in one scan
- **Enterprise-Grade Security Auditing** - Vulnerability detection and secure coding validation
- **Performance Optimization Intelligence** - Memory, rendering, and bundle size optimization
- **Code Quality Assessment** - Complexity analysis, refactoring suggestions, maintainability metrics
- **Accessibility Compliance** - Screen reader support, inclusive design recommendations
- **Testing Strategy Guidance** - Coverage analysis, testing best practices, automation recommendations

### 🛠️ Technical Features

- **7 Specialized Analysis Tools** for comprehensive React Native evaluation
- **6 Expert Prompt Templates** for development workflows and decision making
- **5 Resource Libraries** with React Native documentation and best practices
- **Severity-Based Reporting** - Critical, high, medium, and low priority issue classification
- **Actionable Recommendations** - Specific suggestions with implementation guidance
- **Platform Awareness** - iOS and Android specific considerations and optimizations

### 🏢 Enterprise Ready

- **Professional Reporting** - Executive summaries with prioritized recommendations  
- **Security-First Approach** - Vulnerability scanning and secure development practices
- **Scalability Guidance** - Architecture patterns for large-scale mobile applications
- **Compliance Support** - Accessibility standards and mobile app security guidelines

## 🤝 Contributing

Contributions are welcome! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.

## 🔗 Links

- [Repository](https://github.com/MrNitro360/React-Native-MCP)
- [Issues](https://github.com/MrNitro360/React-Native-MCP/issues)
- [Model Context Protocol](https://modelcontextprotocol.io/)
- [React Native Documentation](https://reactnative.dev/)
