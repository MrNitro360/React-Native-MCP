# React Native MCP Server

A Model Context Protocol (MCP) server providing comprehensive guidance and best practices for React Native development based on official React Native documentation.

## Overview

This MCP server offers:

- **Tools**: Analyze React Native code, optimize performance, get architecture advice, and debug issues
- **Resources**: Access to React Native documentation, best practices, performance guides, and platform-specific guides
- **Prompts**: Templates for code reviews, architecture design, performance optimization, debugging assistance, migration guidance, and testing strategies

## Features

### Tools Available

1. **analyze_component** - Analyze React Native components for best practices
2. **optimize_performance** - Get performance optimization recommendations  
3. **architecture_advice** - Receive architectural guidance for React Native apps
4. **debug_issue** - Get help debugging React Native problems

### Resources Available

1. **react-native-docs** - Official React Native documentation
2. **best-practices-guide** - Comprehensive best practices guide
3. **performance-guide** - Performance optimization strategies
4. **common-patterns** - Common React Native patterns and solutions
5. **platform-guide** - Platform-specific guides for iOS and Android

### Prompts Available

1. **react-native-code-review** - Review code for best practices
2. **react-native-architecture** - Design app architecture
3. **react-native-performance** - Optimize app performance
4. **react-native-debug** - Debug React Native issues
5. **react-native-migration** - Guide for version migrations
6. **react-native-testing** - Testing strategy implementation

## Installation

1. Clone or download this repository

2. Install dependencies:

   ```bash
   npm install
   ```

3. Build the project:

   ```bash
   npm run build
   ```

## Usage

### Running the Server

Start the server with stdio transport:

```bash
npm start
```

Or run directly:

```bash
node build/index.js
```

### Using with MCP Clients

This server implements the Model Context Protocol and can be used with any MCP-compatible client. The server communicates via stdio transport.

#### Example Client Configuration

For Claude Desktop or other MCP clients, add this server to your configuration:

```json
{
  "mcpServers": {
    "react-native-guide": {
      "command": "node",
      "args": ["path/to/react-native-mcp-server/build/index.js"],
      "env": {}
    }
  }
}
```

### Example Usage

#### Tool Usage

```javascript
// Analyze a React Native component
{
  "tool": "analyze_component",
  "arguments": {
    "component_code": "const MyComponent = () => { return <View><Text>Hello</Text></View>; }",
    "component_type": "functional"
  }
}

// Get performance optimization advice
{
  "tool": "optimize_performance", 
  "arguments": {
    "performance_scenario": "Large list rendering slowly",
    "current_approach": "Using FlatList with 1000+ items"
  }
}
```

#### Resource Access

```javascript
// Access best practices guide
{
  "resource": "best-practices-guide"
}

// Get iOS-specific guidance
{
  "resource": "platform-guide",
  "uri": "rn://platform/ios"
}
```

#### Prompt Usage

```javascript
// Code review prompt
{
  "prompt": "react-native-code-review",
  "arguments": {
    "code": "// Your React Native code here",
    "focus_area": "performance"
  }
}

// Architecture design prompt
{
  "prompt": "react-native-architecture",
  "arguments": {
    "app_description": "E-commerce mobile app with user authentication",
    "scale": "medium",
    "platforms": "both"
  }
}
```

## Development

### Project Structure

```text
src/
├── index.ts          # Main server entry point
├── tools/           # Tool implementations
│   └── index.ts     # React Native analysis tools
├── resources/       # Resource providers  
│   └── index.ts     # Documentation and guides
└── prompts/         # Prompt templates
    └── index.ts     # Development guidance prompts
```

### Building

```bash
npm run build
```

### Development Mode

For development with auto-reload:

```bash
npm run dev
```

## Key Capabilities

### Component Analysis

- Code quality assessment
- Performance optimization suggestions
- Best practices validation
- Accessibility compliance checking

### Architecture Guidance

- Project structure recommendations
- State management strategies
- Navigation patterns
- Platform-specific considerations

### Performance Optimization

- Rendering optimization
- Memory management
- Bundle size optimization
- Animation performance

### Debugging Assistance

- Common error resolution
- Platform-specific debugging
- Performance profiling guidance
- Development tool recommendations

### Migration Support

- Version upgrade guidance
- Breaking changes documentation
- Migration planning
- Compatibility assessment

### Testing Strategies

- Unit testing approaches
- Integration testing patterns
- E2E testing setup
- Platform-specific testing

## License

MIT License

Copyright (c) 2025 React Native MCP Server

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Contributing

Contributions are welcome! Please feel free to submit issues and pull requests.

## Support

For questions or support, please refer to the official React Native documentation or create an issue in this repository.
