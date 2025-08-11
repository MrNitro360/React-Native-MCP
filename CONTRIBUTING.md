# Contributing to React Native MCP Server

Thank you for your interest in contributing to the React Native MCP Server! This document provides guidelines for contributing to this project.

## Getting Started

1. **Fork the repository** on GitHub

2. **Clone your fork** locally:

   ```bash
   git clone https://github.com/YOUR_USERNAME/React-Native-MCP.git
   cd React-Native-MCP
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

4. **Build the project**:

   ```bash
   npm run build
   ```

## Development Workflow

1. **Create a new branch** for your feature or fix:

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** following our coding standards

3. **Test your changes**:

   ```bash
   npm run build
   npm test
   ```

4. **Commit your changes** with a descriptive message:

   ```bash
   git commit -m "Add: Description of your changes"
   ```

5. **Push to your fork**:

   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create a Pull Request** on GitHub

## Code Style Guidelines

- Use TypeScript for all new code
- Follow existing code formatting and style
- Use Zod for input validation
- Include JSDoc comments for public APIs
- Use descriptive variable and function names

## Adding New Features

### Adding New Tools

1. Add tool definition in `src/tools/index.ts`
2. Include Zod schema for input validation
3. Provide comprehensive error handling
4. Update README.md with tool documentation

### Adding New Resources

1. Add resource in `src/resources/index.ts`
2. Use ResourceTemplate for dynamic content when appropriate
3. Update README.md with resource documentation

### Adding New Prompts

1. Add prompt in `src/prompts/index.ts`
2. Include Zod schema for arguments
3. Update README.md with prompt documentation

## Testing

- Ensure all existing tests pass
- Add tests for new functionality
- Test with different MCP clients when possible

## Documentation

- Update README.md for new features
- Include code examples in documentation
- Update JSDoc comments for API changes

## Reporting Issues

When reporting issues, please include:

- Clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Environment information (Node.js version, OS, etc.)
- Relevant code snippets or error messages

## Pull Request Guidelines

- **Title**: Use a clear, descriptive title
- **Description**: Explain what your PR does and why
- **Testing**: Describe how you tested your changes
- **Documentation**: Update relevant documentation
- **Breaking Changes**: Clearly mark any breaking changes

## Questions?

Feel free to open an issue for questions about contributing or reach out to the maintainers.

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
