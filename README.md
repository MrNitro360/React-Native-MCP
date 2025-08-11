# React Native MCP Server

<div align="center">

[![npm version](https://badge.fury.io/js/%40mrnitro360%2Freact-native-mcp-guide.svg)](https://badge.fury.io/js/%40mrnitro360%2Freact-native-mcp-guide)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Model Context Protocol](https://img.shields.io/badge/MCP-1.0.0-blue.svg)](https://modelcontextprotocol.io/)
[![Auto-Deploy](https://github.com/MrNitro360/React-Native-MCP/actions/workflows/auto-deploy.yml/badge.svg)](https://github.com/MrNitro360/React-Native-MCP/actions/workflows/auto-deploy.yml)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue.svg)](https://www.typescriptlang.org/)
[![React Native](https://img.shields.io/badge/React%20Native-0.72+-blue.svg)](https://reactnative.dev/)

**Professional AI-powered React Native development companion for enterprise-grade mobile applications**

*Automated updates • Industry best practices • Comprehensive testing • Enterprise security*

</div>

## Overview

A comprehensive Model Context Protocol (MCP) server designed for professional React Native development teams. This tool provides intelligent code analysis, automated testing solutions, security auditing, and performance optimization guidance following industry best practices.

**Key Benefits:**
- 🚀 **Accelerated Development** - Automated code analysis and test generation
- 🔒 **Enterprise Security** - Comprehensive vulnerability scanning and secure coding practices  
- 📊 **Quality Assurance** - Industry-standard testing frameworks and coverage analysis
- ⚡ **Performance Optimization** - Advanced profiling and optimization recommendations
- 🎯 **Best Practices** - Expert guidance following React Native community standards

---

## Quick Start

### Prerequisites

- **Node.js** 18.0 or higher
- **Claude CLI** or **Claude Desktop**
- **React Native** development environment

### Installation

#### Automated Installation (Recommended)

```bash
# Install globally via npm
npm install -g @mrnitro360/react-native-mcp-guide

# Configure with Claude CLI
claude mcp add react-native-guide npx @mrnitro360/react-native-mcp-guide
```

#### Development Installation

```bash
# Clone repository
git clone https://github.com/MrNitro360/React-Native-MCP.git
cd React-Native-MCP

# Install dependencies and build
npm install && npm run build

# Add to Claude CLI
claude mcp add react-native-guide node ./build/index.js
```

### Verification

```bash
claude mcp list
```

Verify that `react-native-guide` appears as **Connected** ✅

---

## Core Features

### 🧪 Advanced Testing Suite

| Feature | Description | Frameworks |
|---------|-------------|------------|
| **Automated Test Generation** | Industry-standard test suites for components | Jest, Testing Library |
| **Coverage Analysis** | Detailed reports with improvement strategies | Jest Coverage, LCOV |
| **Strategy Evaluation** | Testing approach analysis and recommendations | Unit, Integration, E2E |
| **Framework Integration** | Multi-platform testing support | Detox, Maestro, jest-axe |

### 🔍 Comprehensive Analysis Tools

| Analysis Type | Capabilities | Output |
|---------------|--------------|--------|
| **Security Auditing** | Vulnerability detection, secure coding validation | Risk-prioritized reports |
| **Performance Profiling** | Memory, rendering, bundle optimization | Actionable recommendations |
| **Code Quality** | Complexity analysis, refactoring suggestions | Maintainability metrics |
| **Accessibility** | WCAG compliance, screen reader support | Compliance reports |

### 📦 Dependency Management

- **Automated Package Auditing** - Security vulnerabilities and outdated dependencies
- **Intelligent Upgrades** - React Native compatibility validation
- **Conflict Resolution** - Dependency tree optimization
- **Migration Assistance** - Deprecated package modernization

### 📚 Expert Knowledge Base

- **React Native Documentation** - Complete API references and guides
- **Architecture Patterns** - Scalable application design principles  
- **Platform Guidelines** - iOS and Android specific best practices
- **Security Standards** - Mobile application security frameworks

---

## Usage Examples

### Testing & Quality Assurance

```bash
# Generate comprehensive component tests
claude "generate_component_test with component_name='LoginForm' and test_type='comprehensive'"

# Analyze testing strategy
claude "analyze_testing_strategy with focus_areas=['unit', 'accessibility', 'performance']"

# Generate coverage report
claude "analyze_test_coverage with coverage_threshold=85"
```

### Code Analysis & Optimization

```bash
# Comprehensive codebase analysis
claude "analyze_codebase_comprehensive"

# Performance optimization
claude "analyze_codebase_performance"

# Security audit
claude "analyze_codebase_security"
```

### Dependency Management

```bash
# Package upgrade recommendations
claude "upgrade_packages with update_level='minor'"

# Resolve dependency conflicts
claude "resolve_dependencies with fix_conflicts=true"

# Security vulnerability audit
claude "audit_packages with auto_fix=true"
```

### Real-World Scenarios

| Scenario | Command | Outcome |
|----------|---------|---------|
| **Pre-deployment Security Check** | `"Scan my React Native project for security vulnerabilities"` | Comprehensive security report |
| **Performance Bottleneck Analysis** | `"Analyze my app for performance bottlenecks and memory leaks"` | Optimization roadmap |
| **Code Quality Review** | `"Review my codebase for refactoring opportunities"` | Quality improvement plan |
| **Accessibility Compliance** | `"Check my app for accessibility issues and recommendations"` | WCAG compliance report |
| **Component Test Generation** | `"Generate comprehensive tests for my LoginScreen component"` | Complete test suite |
| **Testing Strategy Optimization** | `"Analyze my current testing strategy and suggest improvements"` | Testing roadmap |

---

## Claude Desktop Integration

### NPM Installation Configuration

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

### Development Configuration

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

**Configuration Paths:**
- **Windows:** `C:\Users\{Username}\Desktop\React-Native-MCP\build\index.js`
- **macOS/Linux:** `/Users/{Username}/Desktop/React-Native-MCP/build/index.js`

---

## Development & Maintenance

### Local Development

```bash
# Development with hot reload
npm run dev

# Production build
npm run build

# Production server
npm start
```

### Continuous Integration

This project implements enterprise-grade CI/CD:

- ✅ **Automated Version Management** - Semantic versioning with auto-increment
- ✅ **Continuous Deployment** - Automatic npm publishing on merge
- ✅ **Release Automation** - GitHub releases with comprehensive changelogs
- ✅ **Quality Gates** - Build validation and testing before deployment

### Update Management

```bash
# Check current version
npm list -g @mrnitro360/react-native-mcp-guide

# Update to latest version
npm update -g @mrnitro360/react-native-mcp-guide

# Reconfigure Claude CLI
claude mcp remove react-native-guide
claude mcp add react-native-guide npx @mrnitro360/react-native-mcp-guide
```

---

## Technical Specifications

### 🎯 Analysis Capabilities

- **Comprehensive Codebase Analysis** - Multi-dimensional quality assessment
- **Enterprise Security Auditing** - Vulnerability detection and mitigation strategies
- **Performance Intelligence** - Memory, rendering, and bundle optimization
- **Quality Metrics** - Complexity analysis and maintainability scoring
- **Accessibility Compliance** - WCAG 2.1 AA standard validation
- **Testing Strategy Optimization** - Coverage analysis and framework recommendations

### 🛠️ Technical Architecture

- **10 Specialized Analysis Tools** - Complete React Native development lifecycle coverage
- **6 Expert Prompt Templates** - Structured development workflows
- **5 Resource Libraries** - Comprehensive documentation and best practices
- **Industry-Standard Test Generation** - Automated test suite creation
- **Multi-Framework Integration** - Jest, Detox, Maestro, and accessibility tools
- **Real-time Coverage Analysis** - Detailed reporting with improvement strategies

### 🏢 Enterprise Features

- **Professional Reporting** - Executive-level summaries with prioritized recommendations
- **Security-First Architecture** - Comprehensive vulnerability assessment
- **Scalability Planning** - Large-scale application design patterns
- **Compliance Support** - Industry standards and regulatory requirements
- **Multi-Platform Optimization** - iOS and Android specific considerations

---

## Support & Community

### Resources

- 📦 **[NPM Package](https://www.npmjs.com/package/@mrnitro360/react-native-mcp-guide)** - Official package repository
- 🐙 **[GitHub Repository](https://github.com/MrNitro360/React-Native-MCP)** - Source code and development
- 🐛 **[Issue Tracker](https://github.com/MrNitro360/React-Native-MCP/issues)** - Bug reports and feature requests
- 📖 **[MCP Documentation](https://modelcontextprotocol.io/)** - Model Context Protocol specification
- ⚛️ **[React Native Docs](https://reactnative.dev/)** - Official React Native documentation

### Contributing

We welcome contributions from the React Native community. Please review our [Contributing Guidelines](CONTRIBUTING.md) for development standards and submission processes.

### License

This project is licensed under the [MIT License](LICENSE). See the license file for detailed terms and conditions.

---

<div align="center">

**Professional React Native Development Made Simple**

*Empowering development teams to build secure, performant, and accessible mobile applications with confidence*

[Get Started](https://www.npmjs.com/package/@mrnitro360/react-native-mcp-guide) • [Documentation](https://github.com/MrNitro360/React-Native-MCP) • [Community](https://github.com/MrNitro360/React-Native-MCP/issues)

</div>
