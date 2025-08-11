import { describe, test, expect } from '@jest/globals';

describe('React Native MCP Server', () => {
  test('should have valid package configuration', () => {
    const pkg = require('../package.json');
    
    expect(pkg.name).toBe('@mrnitro360/react-native-mcp-guide');
    expect(pkg.main).toBe('build/index.js');
    expect(pkg.type).toBe('module');
    expect(pkg.engines.node).toBe('>=18.0.0');
  });

  test('should have required dependencies', () => {
    const pkg = require('../package.json');
    
    expect(pkg.dependencies).toHaveProperty('@modelcontextprotocol/sdk');
    expect(pkg.dependencies).toHaveProperty('zod');
  });

  test('should have proper bin configuration', () => {
    const pkg = require('../package.json');
    
    expect(pkg.bin).toHaveProperty('react-native-mcp-guide');
    expect(pkg.bin['react-native-mcp-guide']).toBe('./build/index.js');
  });

  test('should include only build files in npm package', () => {
    const pkg = require('../package.json');
    
    expect(pkg.files).toContain('build/');
  });
});
