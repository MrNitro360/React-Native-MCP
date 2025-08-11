# React Native MCP Server

<div align="center">

[![npm version](https://badge.fury.io/js/%40mrnitro360%2Freact-native-mcp-guide.svg)](https://badge.fury.io/js/%40mrnitro360%2Freact-native-mcp-guide)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Model Context Protocol](https://img.shields.io/badge/MCP-1.0.0-blue.svg)](https://modelcontextprotocol.io/)
[![Auto-Deploy](https://github.com/MrNitro360/React-Native-MCP/actions/workflows/auto-deploy.yml/badge.svg)](https://github.com/MrNitro360/React-Native-MCP/actions/workflows/auto-deploy.yml)

*Your AI-powered React Native development companion for enterprise-grade mobile applications*

🔄 **Fully automated updates** - Every code change automatically publishes to npm with version management

</div>

A comprehensive Model Context Protocol server that provides expert React Native development guidance, security analysis, performance optimization, and best practices. Built for professional developers and enterprise teams who demand quality, security, and scalability.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- Claude CLI or Claude Desktop

### Installation

#### ⚡ Automated Installation (Recommended)

The server is automatically published to npm with every update. Get the latest version instantly:

```bash
# Install the latest version
npm install -g @mrnitro360/react-native-mcp-guide

# Add to Claude CLI
claude mcp add react-native-guide npx @mrnitro360/react-native-mcp-guide
```

#### 🔄 Easy Updates

Stay current with the latest features and improvements:

```bash
# Update to latest version
npm update -g @mrnitro360/react-native-mcp-guide

# Remove and re-add to Claude CLI to use latest version
claude mcp remove react-native-guide
claude mcp add react-native-guide npx @mrnitro360/react-native-mcp-guide
```

#### 🛠️ Development Installation (From Source)

For contributors or those who want to modify the server:

```bash
# Clone the repository
git clone https://github.com/MrNitro360/React-Native-MCP.git
cd React-Native-MCP

# Install dependencies
npm install

# Build the server
npm run build

# Add to Claude CLI
claude mcp add react-native-guide node ./build/index.js
```

### Verification

```bash
# Verify installation
claude mcp list
```

You should see `react-native-guide` listed and connected.

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

### � Package Management & Dependencies

- **Automatic Package Upgrades** - Check for outdated packages and provide upgrade recommendations
- **Dependency Conflict Resolution** - Detect and resolve dependency tree conflicts
- **Security Vulnerability Auditing** - Scan for security issues and provide automated fixes
- **Package Migration Assistance** - Migrate deprecated packages to modern alternatives
- **React Native Compatibility Checks** - Ensure packages work with current RN version
- **Peer Dependency Management** - Resolve missing peer dependencies and version conflicts

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

### Package Management & Dependency Resolution

```bash
# Check for package updates and upgrade recommendations
claude "upgrade_packages"

# Automatically apply safe package updates
claude "upgrade_packages with auto_apply=true and update_level=minor"

# Resolve dependency conflicts
claude "resolve_dependencies"

# Automatically fix dependency conflicts
claude "resolve_dependencies with fix_conflicts=true"

# Security audit of packages
claude "audit_packages"

# Auto-fix security vulnerabilities
claude "audit_packages with auto_fix=true"

# Migrate deprecated packages
claude "migrate_packages"

# Automatically migrate specific packages
claude "migrate_packages with auto_migrate=true"
```

#### Package Management Features

**Upgrade Management**
- Automated update checking for outdated packages
- Intelligent update levels (patch, minor, major, all)
- React Native compatibility validation
- Optional automatic application of safe updates

**Dependency Resolution**
- Conflict detection in dependency tree
- Resolution suggestions for dependency issues
- Peer dependency management
- Automatic conflict fixing

**Security Auditing**
- Vulnerability scanning for all dependencies
- Severity-based filtering (low, moderate, high, critical)
- Automated security patches where possible
- Comprehensive vulnerability reporting

**Package Migration**
- Deprecated package detection
- Migration paths to modern alternatives
- Automated migration with proper commands
- React Native specific package migrations
claude "resolve_dependencies with fix_conflicts=true"

# Security audit of packages
claude "audit_packages"

# Auto-fix security vulnerabilities
claude "audit_packages with auto_fix=true"

# Migrate deprecated packages
claude "migrate_packages"

# Automatically migrate specific packages
claude "migrate_packages with auto_migrate=true"
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

# Package management
"Check my packages for updates and security vulnerabilities"
"Upgrade my React Native project to the latest stable version"
"Resolve dependency conflicts in my package.json"
"Migrate deprecated packages to their modern alternatives"
"Fix security vulnerabilities in my dependencies"

# Dependency troubleshooting
"Why is my app failing to build after updating dependencies?"
"How do I resolve version conflicts between React Native and my packages?"
"What packages are deprecated and need migration?"
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

#### For NPM Installation (Recommended)
Add to your `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "react-native-guide": {
      "command": "npx",
      "args": ["@mrnitro360/react-native-mcp-guide"],
      "env": {}
    }
  }
}
```

#### For Development/Source Installation
Add to your `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "react-native-guide": {
      "command": "node",
      "args": ["/absolute/path/to/React-Native-MCP/build/index.js"],
      "env": {}
    }
  }
}
```

**💡 Path Examples:**
- **Windows**: `C:\\Users\\YourUsername\\Desktop\\React-Native-MCP\\build\\index.js`
- **macOS/Linux**: `/Users/YourUsername/Desktop/React-Native-MCP/build/index.js`
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

## 🤖 Automated Publishing

This project features a fully automated CI/CD pipeline:

- **Automatic Version Management** - Semantic versioning with auto-increment
- **Continuous Deployment** - Every merge to main triggers npm publishing
- **GitHub Releases** - Automated release notes and version tagging
- **Quality Assurance** - Build validation before publishing

### How Updates Work

1. Code changes merged to `main` branch
2. GitHub Actions automatically increments version
3. Builds and tests the package
4. Publishes to npm registry
5. Creates GitHub release with changelog
6. Users get latest version with `npm update`

### Staying Updated

```bash
# Check current version
npm list -g @mrnitro360/react-native-mcp-guide

# Update to latest
npm update -g @mrnitro360/react-native-mcp-guide

# Reconfigure Claude CLI with latest version
claude mcp remove react-native-guide
claude mcp add react-native-guide npx @mrnitro360/react-native-mcp-guide
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

- **NPM Package**: [@mrnitro360/react-native-mcp-guide](https://www.npmjs.com/package/@mrnitro360/react-native-mcp-guide)
- **GitHub Repository**: [React-Native-MCP](https://github.com/MrNitro360/React-Native-MCP)
- **Issues & Support**: [GitHub Issues](https://github.com/MrNitro360/React-Native-MCP/issues)
- **Model Context Protocol**: [Official Documentation](https://modelcontextprotocol.io/)
- **React Native**: [Official Documentation](https://reactnative.dev/)

---

<div align="center">

**Built with ❤️ for the React Native community**

*Empowering developers to build secure, performant, and accessible mobile applications*

</div>
