# React Native MCP Server

<div align="center">

[![npm version](https://badge.fury.io/js/%40mrnitro360%2Freact-native-mcp-guide.svg)](https://badge.fury.io/js/%40mrnitro360%2Freact-native-mcp-guide)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Model Context Protocol](https://img.shields.io/badge/MCP-1.0.0-blue.svg)](https://modelcontextprotocol.io/)

*Enterprise-grade React Native development companion with comprehensive analysis, security auditing, and automated package management*

</div>

A sophisticated Model Context Protocol server that provides enterprise-level React Native development guidance, comprehensive codebase analysis, security auditing, performance optimization, and intelligent package management. Built for professional development teams and large-scale applications.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- Claude CLI or Claude Desktop

### Installation

#### NPM (Recommended)
```bash
npm install -g @mrnitro360/react-native-mcp-guide
claude mcp add react-native-guide npx @mrnitro360/react-native-mcp-guide
```

#### From Source
```bash
git clone https://github.com/MrNitro360/React-Native-MCP.git
cd React-Native-MCP
npm install
npm run build
claude mcp add react-native-guide node ./build/index.js
```

## 🎯 Enterprise Features

### 🔍 Comprehensive Analysis Suite

#### **Component & Codebase Analysis**
- **`analyze_component`** - Deep analysis of React Native components with best practice validation
- **`analyze_codebase_performance`** - Enterprise-grade performance analysis with focus areas:
  - List rendering optimization
  - Navigation performance
  - Animation efficiency  
  - Memory usage patterns
  - Bundle size analysis
  - App startup time optimization
- **`analyze_codebase_comprehensive`** - Full enterprise codebase audit including:
  - Security vulnerability detection
  - Code quality assessment
  - Refactoring opportunities
  - Deprecated feature identification
  - Accessibility compliance
  - Testing gap analysis
  - Upgrade recommendations

#### **Performance Optimization Engine**
- **`optimize_performance`** - Targeted optimization strategies for:
  - List rendering (FlatList, VirtualizedList)
  - Navigation performance
  - Animation optimization
  - Memory leak detection
  - Bundle size reduction
  - Startup time improvement

#### **Architecture & Debugging Intelligence**
- **`architecture_advice`** - Enterprise architecture guidance for:
  - Simple applications
  - Complex multi-feature apps
  - Enterprise-scale applications
  - Library development
  - Monorepo structures
- **`debug_issue`** - Platform-specific debugging for:
  - Crash analysis
  - Performance bottlenecks
  - UI layout issues
  - Navigation problems
  - State management issues
  - Network connectivity
  - Platform-specific bugs

### 📦 Advanced Package Management

#### **Intelligent Upgrade Management**
- **`upgrade_packages`** - Automated package lifecycle management:
  - Smart update level selection (patch, minor, major, all)
  - React Native compatibility validation
  - Breaking change detection
  - Automatic safe update application
  - Security vulnerability integration
  - Multi-package manager support (npm, yarn, pnpm)

#### **Dependency Conflict Resolution**
- **`resolve_dependencies`** - Enterprise dependency management:
  - Dependency tree conflict detection
  - Peer dependency resolution
  - Version conflict analysis
  - Automatic conflict fixing
  - Resolution strategy recommendations

#### **Security & Vulnerability Management**
- **`audit_packages`** - Comprehensive security auditing:
  - Vulnerability scanning with severity classification
  - Automated security patch application
  - Compliance reporting (low, moderate, high, critical)
  - Security best practice recommendations
  - Supply chain security analysis

#### **Package Migration & Modernization**
- **`migrate_packages`** - Intelligent package modernization:
  - Deprecated package detection
  - Migration path recommendations
  - Automated migration execution
  - React Native version compatibility
  - Breaking change management

### 📚 Expert Resources & Guidance

#### **Intelligent Prompt Templates**
- Code review workflows with enterprise standards
- Performance optimization strategies
- Architecture design patterns
- Security audit procedures
- Migration planning templates
- Testing strategy development

#### **Documentation & Best Practices**
- Official React Native API references
- Enterprise development patterns
- Security implementation guides
- Performance optimization techniques
- Platform-specific best practices
- Accessibility compliance standards

## 💡 Usage Examples

### Enterprise Codebase Analysis
```bash
# Full enterprise audit
claude "analyze_codebase_comprehensive"

# Security-focused analysis
claude "analyze_codebase_comprehensive with analysis_types=['security', 'deprecated_features']"

# Performance optimization analysis
claude "analyze_codebase_performance with focus_areas=['memory_usage', 'bundle_size']"
```

### Advanced Package Management
```bash
# Intelligent package upgrades with auto-apply
claude "upgrade_packages with auto_apply=true and update_level='minor' and check_vulnerabilities=true"

# Resolve complex dependency conflicts
claude "resolve_dependencies with fix_conflicts=true and generate_resolutions=true"

# Enterprise security audit with auto-fix
claude "audit_packages with auto_fix=true and severity_threshold='moderate'"

# Automated package migration
claude "migrate_packages with auto_migrate=true"
```

### Performance & Architecture
```bash
# Enterprise architecture guidance
claude "architecture_advice with project_type='enterprise_app' and features=['authentication', 'offline_sync', 'analytics']"

# Performance optimization for large lists
claude "optimize_performance with scenario='list_rendering' and platform='both'"

# Debug complex issues
claude "debug_issue with issue_type='performance' and platform='ios' and error_message='Memory warning'"
```

## Claude Desktop Configuration

```json
{
  "mcpServers": {
    "react-native-guide": {
      "command": "npx",
      "args": ["@mrnitro360/react-native-mcp-guide"]
    }
  }
}
```

## 🏗️ Development

```bash
npm run dev    # Development mode with auto-reload
npm run build  # Production build
npm start      # Run production server
npm test       # Run tests
```

## 📊 What You Get

### Enterprise-Grade Analysis
- **11 Specialized Tools** for comprehensive React Native development
- **Multi-dimensional Analysis** covering security, performance, quality, and accessibility
- **Automated Workflows** for package management and dependency resolution
- **Intelligence-Driven Recommendations** with actionable insights

### Professional Features
- **Cross-Platform Support** for npm, yarn, and pnpm
- **Security-First Approach** with vulnerability detection and automated fixes
- **Scalability Focus** with enterprise architecture patterns
- **Developer Productivity** enhancement through automation

### Expert Resources
- **6 Intelligent Prompt Templates** for professional workflows
- **5 Comprehensive Resource Libraries** with official documentation
- **Platform-Specific Guidance** for iOS and Android optimization
- **Best Practice Integration** aligned with industry standards

## License

MIT - see [LICENSE](LICENSE) for details.
