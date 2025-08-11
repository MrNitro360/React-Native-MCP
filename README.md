# React Native MCP Server

<div align="center">

[![npm version](https://badge.fury.io/js/%40mrnitro360%2Freact-native-mcp-guide.svg)](https://badge.fury.io/js/%40mrnitro360%2Freact-native-mcp-guide)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Model Context Protocol](https://img.shields.io/badge/MCP-1.0.0-blue.svg)](https://modelcontextprotocol.io/)

*Your AI-powered React Native development companion providing expert guidance, analysis, and package management*

🔄 **Automated publishing available** - Ready for CI/CD integration with version management

</div>

A Model Context Protocol server that provides React Native development guidance, component analysis, performance optimization, and comprehensive package management. Built to help developers maintain high-quality, secure, and well-optimized React Native applications.

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

### 🔧 Analysis & Development Tools

- **Component Analysis** (`analyze_component`) - Analyze individual React Native components or entire codebases for best practices
- **Performance Analysis** (`analyze_codebase_performance`) - Comprehensive performance analysis with focus areas like list rendering, navigation, animations, and memory usage
- **Comprehensive Analysis** (`analyze_codebase_comprehensive`) - Full codebase analysis including performance, security, code quality, and accessibility
- **Performance Optimization** (`optimize_performance`) - Get specific optimization suggestions for different performance scenarios
- **Architecture Guidance** (`architecture_advice`) - Project structure and architecture recommendations
- **Debugging Assistance** (`debug_issue`) - Platform-specific debugging guidance for common issues

### 📦 Package Management & Dependencies

- **Package Upgrades** (`upgrade_packages`) - Automated package update checking with support for different update levels (patch, minor, major)
- **Dependency Resolution** (`resolve_dependencies`) - Detect and resolve dependency conflicts and peer dependency issues
- **Security Auditing** (`audit_packages`) - Comprehensive security vulnerability scanning with automated fixes
- **Package Migration** (`migrate_packages`) - Migrate deprecated packages to modern alternatives
- **Cross-Platform Support** - Works with npm, yarn, and pnpm package managers

### 📚 Resources & Guidance

- **Official Documentation** - Access to React Native API references and guides
- **Best Practices Guide** - Comprehensive development best practices
- **Performance Optimization Guides** - Advanced optimization techniques
- **Security Guidelines** - Mobile app security recommendations
- **Platform-Specific Resources** - iOS and Android development guidance

### 🎨 Intelligent Prompts

- **Code Review Workflows** - Systematic component and architecture evaluation prompts
- **Performance Analysis** - Targeted performance improvement strategy prompts
- **Architecture Design** - Project structure planning prompts
- **Debugging Assistance** - Troubleshooting guidance prompts
- **Migration Planning** - Version upgrade and library migration prompts

## 💡 Usage Examples

### Component & Codebase Analysis

```bash
# Analyze a single React Native component
claude "analyze_component with code='<your component code>'"

# Analyze entire codebase (if no code provided)
claude "analyze_component"

# Performance-focused codebase analysis
claude "analyze_codebase_performance"

# Focus on specific performance areas
claude "analyze_codebase_performance with focus_areas=['list_rendering', 'memory_usage']"

# Comprehensive codebase analysis
claude "analyze_codebase_comprehensive"

# Comprehensive analysis focusing on specific areas
claude "analyze_codebase_comprehensive with analysis_types=['security', 'performance']"
```

### Package Management & Dependencies

```bash
# Check for package updates
claude "upgrade_packages"

# Automatically apply minor and patch updates
claude "upgrade_packages with auto_apply=true and update_level='minor'"

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

### Performance & Architecture Guidance

```bash
# Get performance optimization suggestions
claude "optimize_performance with scenario='list_rendering'"

# Architecture advice for different project types
claude "architecture_advice with project_type='enterprise_app'"

# Debugging guidance for specific issues
claude "debug_issue with issue_type='performance' and platform='ios'"
```

### Real-World Examples

```bash
# Component analysis
"Analyze my React Native component for performance issues and best practices"

# Package management
"Check my packages for updates and security vulnerabilities"
"Upgrade my React Native project dependencies safely"
"Resolve dependency conflicts in my package.json"
"Migrate deprecated packages to their modern alternatives"

# Performance optimization
"Analyze my app's FlatList performance with 10,000+ items"
"Optimize my React Native app's bundle size"
"Find memory leaks in my React Native app"

# Architecture guidance
"What's the best architecture for a React Native e-commerce app?"
"How should I structure a large-scale React Native application?"

# Debugging assistance
"Debug this navigation crash on iOS"
"Why is my app failing to build after updating dependencies?"
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

### Local Development

```bash
# Clone the repository
git clone https://github.com/MrNitro360/React-Native-MCP.git
cd React-Native-MCP

# Install dependencies
npm install

# Development mode with auto-reload
npm run dev

# Build for production
npm run build

# Run the built server
npm start
```

### Testing & Validation

```bash
# Build the project
npm run build

# Test with Claude CLI
claude mcp add react-native-guide node ./build/index.js
claude mcp list

# Verify the server is working
claude "analyze_component"
```

## 📋 What You Get

### 🎯 Core Analysis Capabilities

- **11 Specialized Tools** - Complete React Native development toolkit including component analysis, performance optimization, and comprehensive package management
- **Component & Codebase Analysis** - Analyze individual components or entire projects for best practices, performance issues, and security concerns
- **Package Management Suite** - Upgrade packages, resolve dependencies, audit security, and migrate deprecated packages with automated workflows
- **Performance Optimization** - Targeted suggestions for list rendering, navigation, animations, memory usage, and bundle size optimization
- **Architecture Guidance** - Project structure recommendations for different scales and types of applications

### 🛠️ Technical Features

- **Cross-Platform Package Management** - Works with npm, yarn, and pnpm package managers
- **Automated Security Auditing** - Vulnerability scanning with severity-based filtering and automated fixes
- **Intelligent Upgrade Management** - Smart package updates with React Native compatibility checking
- **Dependency Conflict Resolution** - Detect and resolve dependency tree conflicts automatically
- **Debugging Assistance** - Platform-specific troubleshooting for iOS and Android

### 📚 Resources & Documentation

- **6 Expert Prompt Templates** - Pre-built prompts for code review, architecture design, performance analysis, and migration planning
- **5 Resource Libraries** - Access to React Native documentation, best practices, and platform-specific guides
- **Comprehensive Guidance** - Documentation, best practices, performance optimization techniques, and security guidelines

### 🏢 Professional Features

- **Enterprise Ready** - Suitable for large-scale applications with comprehensive analysis and reporting
- **Security First** - Built-in security auditing and vulnerability detection
- **Scalability Focused** - Architecture patterns and optimization strategies for growing applications
- **Developer Productivity** - Automated workflows for common development tasks and maintenance

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
