import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";

/**
 * React Native Prompts
 * 
 * Provides prompt templates for React Native development guidance
 */
export class ReactNativePrompts {
  constructor(private server: McpServer) {}

  register() {
    // Code Review Prompt
    this.server.prompt(
      "react-native-code-review",
      "Review React Native code for best practices and improvements",
      {
        code: z.string().describe("The React Native code to review"),
        focus_area: z.string().optional().describe("Specific area to focus on (performance, security, accessibility, etc.)"),
      },
      async (args) => ({
        messages: [
          {
            role: "user",
            content: {
              type: "text",
              text: this.getCodeReviewPrompt(args.code, args.focus_area),
            },
          },
        ],
      })
    );

    // Architecture Design Prompt
    this.server.prompt(
      "react-native-architecture",
      "Design React Native app architecture",
      {
        app_description: z.string().describe("Description of the app to be built"),
        scale: z.string().optional().describe("Expected scale (small, medium, large)"),
        platforms: z.string().optional().describe("Target platforms (iOS, Android, both)"),
      },
      async (args) => ({
        messages: [
          {
            role: "user",
            content: {
              type: "text",
              text: this.getArchitecturePrompt(
                args.app_description,
                args.scale,
                args.platforms
              ),
            },
          },
        ],
      })
    );

    // Performance Optimization Prompt
    this.server.prompt(
      "react-native-performance",
      "Optimize React Native app performance",
      {
        performance_issue: z.string().describe("Description of the performance issue"),
        component_type: z.string().optional().describe("Type of component having issues (list, animation, navigation, etc.)"),
        platform: z.string().optional().describe("Platform where issue occurs (iOS, Android, both)"),
      },
      async (args) => ({
        messages: [
          {
            role: "user",
            content: {
              type: "text",
              text: this.getPerformancePrompt(
                args.performance_issue,
                args.component_type,
                args.platform
              ),
            },
          },
        ],
      })
    );

    // Debugging Help Prompt
    this.server.prompt(
      "react-native-debug",
      "Debug React Native issues",
      {
        error_message: z.string().describe("The error message or issue description"),
        steps_to_reproduce: z.string().optional().describe("Steps to reproduce the issue"),
        environment: z.string().optional().describe("Development environment details"),
      },
      async (args) => ({
        messages: [
          {
            role: "user",
            content: {
              type: "text",
              text: this.getDebuggingPrompt(
                args.error_message,
                args.steps_to_reproduce,
                args.environment
              ),
            },
          },
        ],
      })
    );

    // Migration Guide Prompt
    this.server.prompt(
      "react-native-migration",
      "Guide for React Native migrations and upgrades",
      {
        current_version: z.string().describe("Current React Native version"),
        target_version: z.string().describe("Target React Native version"),
        project_complexity: z.string().optional().describe("Project complexity (simple, moderate, complex)"),
      },
      async (args) => ({
        messages: [
          {
            role: "user",
            content: {
              type: "text",
              text: this.getMigrationPrompt(
                args.current_version,
                args.target_version,
                args.project_complexity
              ),
            },
          },
        ],
      })
    );

    // Testing Strategy Prompt
    this.server.prompt(
      "react-native-testing",
      "React Native testing strategy and implementation",
      {
        testing_scope: z.string().describe("Scope of testing needed (unit, integration, e2e, all)"),
        app_features: z.string().optional().describe("Key app features to test"),
        existing_tests: z.string().optional().describe("Description of existing test setup"),
      },
      async (args) => ({
        messages: [
          {
            role: "user",
            content: {
              type: "text",
              text: this.getTestingPrompt(
                args.testing_scope,
                args.app_features,
                args.existing_tests
              ),
            },
          },
        ],
      })
    );
  }

  private getCodeReviewPrompt(code: string, focusArea?: string): string {
    return `
Please review the following React Native code and provide detailed feedback on best practices, potential improvements, and any issues you identify.

${focusArea ? `Focus Area: ${focusArea}` : ''}

Code to Review:
\`\`\`jsx
${code}
\`\`\`

Please analyze the code for:

1. **Code Quality & Best Practices**
   - Component structure and organization
   - React hooks usage and patterns
   - TypeScript type safety (if applicable)
   - Error handling and edge cases

2. **Performance Considerations**
   - Re-rendering optimization
   - Memory management
   - List rendering efficiency
   - Animation performance

3. **React Native Specific**
   - Platform-specific implementations
   - Native component usage
   - Navigation patterns
   - State management

4. **Accessibility**
   - Screen reader support
   - Touch targets and gestures
   - Color contrast and visual accessibility

5. **Security**
   - Data validation and sanitization
   - Secure storage practices
   - API communication security

6. **Maintainability**
   - Code readability and documentation
   - Component reusability
   - Testing considerations

Please provide specific, actionable recommendations with code examples where appropriate.
`;
  }

  private getArchitecturePrompt(appDescription: string, scale?: string, platforms?: string): string {
    return `
I need help designing the architecture for a React Native application.

**App Description:** ${appDescription}
${scale ? `**Expected Scale:** ${scale}` : ''}
${platforms ? `**Target Platforms:** ${platforms}` : ''}

Please provide comprehensive architectural guidance covering:

1. **Project Structure**
   - Folder organization and file naming conventions
   - Component hierarchy and organization
   - Module separation and boundaries

2. **State Management**
   - Recommended state management solution (Context, Redux, Zustand, etc.)
   - Data flow patterns
   - Local vs global state considerations

3. **Navigation Architecture**
   - Navigation library recommendations
   - Screen organization and routing
   - Deep linking strategy

4. **Data Layer**
   - API integration patterns
   - Data fetching and caching strategies
   - Offline data handling

5. **Code Organization**
   - Component composition patterns
   - Custom hooks strategy
   - Utility and helper organization

6. **Performance Architecture**
   - Bundle splitting and code organization
   - Image and asset optimization
   - Memory management strategies

7. **Platform Considerations**
   - Platform-specific code organization
   - Native module integration
   - Platform-specific UI adaptations

8. **Development Workflow**
   - Development environment setup
   - Build and deployment pipeline
   - Testing strategy integration

9. **Scalability Considerations**
   - Code splitting and lazy loading
   - Performance monitoring
   - Error tracking and logging

Please provide specific recommendations with code examples and explain the reasoning behind each architectural decision.
`;
  }

  private getPerformancePrompt(performanceIssue: string, componentType?: string, platform?: string): string {
    return `
I'm experiencing performance issues in my React Native application and need optimization guidance.

**Performance Issue:** ${performanceIssue}
${componentType ? `**Component Type:** ${componentType}` : ''}
${platform ? `**Platform:** ${platform}` : ''}

Please provide detailed optimization strategies covering:

1. **Root Cause Analysis**
   - Potential causes for this type of performance issue
   - Diagnostic tools and techniques to identify bottlenecks
   - Profiling strategies specific to React Native

2. **JavaScript Performance**
   - React optimization techniques (memoization, callbacks, etc.)
   - Bundle size and loading optimizations
   - JavaScript thread management

3. **UI Performance**
   - Rendering optimization techniques
   - Layout and animation performance
   - Native UI thread considerations

4. **Memory Management**
   - Memory leak prevention
   - Image and asset optimization
   - Component lifecycle management

5. **Platform-Specific Optimizations**
   - iOS-specific performance techniques
   - Android-specific optimizations
   - Platform-appropriate component choices

6. **List and Scroll Performance**
   - FlatList vs VirtualizedList optimization
   - Item rendering and caching strategies
   - Scroll performance improvements

7. **Network and Data**
   - API request optimization
   - Data caching strategies
   - Background data handling

8. **Animation Performance**
   - Native animation drivers
   - Gesture handling optimization
   - 60 FPS maintenance strategies

9. **Monitoring and Metrics**
   - Performance monitoring tools
   - Key metrics to track
   - Continuous performance improvement

Please provide specific, actionable solutions with code examples and implementation guidance.
`;
  }

  private getDebuggingPrompt(errorMessage: string, stepsToReproduce?: string, environment?: string): string {
    return `
I'm encountering an issue in my React Native application and need debugging assistance.

**Error/Issue:** ${errorMessage}
${stepsToReproduce ? `**Steps to Reproduce:** ${stepsToReproduce}` : ''}
${environment ? `**Environment:** ${environment}` : ''}

Please help me debug this issue by providing:

1. **Issue Analysis**
   - Potential root causes for this error
   - Common scenarios that lead to this issue
   - Related React Native version or platform considerations

2. **Debugging Strategies**
   - Step-by-step debugging approach
   - Tools and techniques to investigate further
   - Logging and monitoring suggestions

3. **Common Solutions**
   - Known fixes for this type of issue
   - Configuration changes that might resolve it
   - Code patterns that can prevent this issue

4. **Platform-Specific Considerations**
   - iOS-specific debugging techniques
   - Android-specific investigation methods
   - Platform differences that might cause this issue

5. **Development Environment**
   - Environment setup issues that could contribute
   - Tool-specific debugging approaches
   - Version compatibility considerations

6. **Code Investigation**
   - Areas of code to examine
   - Potential problematic patterns
   - Best practices to implement

7. **Testing and Validation**
   - How to verify the fix works
   - Regression testing approaches
   - Monitoring to prevent recurrence

8. **Prevention Strategies**
   - Code patterns to prevent similar issues
   - Development practices to adopt
   - Tools and linting rules to implement

Please provide specific debugging steps, potential solutions, and code examples where applicable.
`;
  }

  private getMigrationPrompt(currentVersion: string, targetVersion: string, projectComplexity?: string): string {
    return `
I need guidance for migrating my React Native application from version ${currentVersion} to ${targetVersion}.

${projectComplexity ? `**Project Complexity:** ${projectComplexity}` : ''}

Please provide a comprehensive migration guide covering:

1. **Pre-Migration Assessment**
   - Breaking changes between versions
   - Deprecated features and APIs
   - Third-party library compatibility

2. **Migration Planning**
   - Step-by-step migration roadmap
   - Risk assessment and mitigation strategies
   - Rollback planning

3. **Core Dependencies**
   - React Native CLI updates
   - Metro bundler changes
   - Platform-specific updates (iOS/Android)

4. **Code Changes Required**
   - API updates and replacements
   - Component and prop changes
   - Hook and lifecycle modifications

5. **Third-Party Libraries**
   - Library compatibility matrix
   - Update strategies for dependencies
   - Alternative libraries if needed

6. **Build System Updates**
   - Gradle changes (Android)
   - Xcode project updates (iOS)
   - Build script modifications

7. **Configuration Updates**
   - Metro configuration changes
   - Babel and TypeScript updates
   - ESLint and tooling updates

8. **Testing Strategy**
   - Migration testing approach
   - Regression testing priorities
   - Platform-specific testing needs

9. **Performance Considerations**
   - Performance improvements in new version
   - Potential performance regressions
   - Optimization opportunities

10. **Common Issues and Solutions**
    - Known migration problems
    - Community-reported issues
    - Troubleshooting guides

11. **Post-Migration Steps**
    - Verification checklist
    - Performance monitoring
    - User acceptance testing

Please provide specific migration steps, code examples, and timeline estimates for the migration process.
`;
  }

  private getTestingPrompt(testingScope: string, appFeatures?: string, existingTests?: string): string {
    return `
I need help developing a comprehensive testing strategy for my React Native application.

**Testing Scope:** ${testingScope}
${appFeatures ? `**Key App Features:** ${appFeatures}` : ''}
${existingTests ? `**Existing Test Setup:** ${existingTests}` : ''}

Please provide detailed testing guidance covering:

1. **Testing Strategy Overview**
   - Testing pyramid for React Native apps
   - Test coverage goals and priorities
   - Testing tool recommendations

2. **Unit Testing**
   - Jest configuration for React Native
   - Component testing with React Native Testing Library
   - Hook testing strategies
   - Utility function testing

3. **Integration Testing**
   - API integration testing
   - Navigation flow testing
   - State management testing
   - Cross-component interaction testing

4. **End-to-End Testing**
   - Detox setup and configuration
   - E2E test scenarios and priorities
   - Platform-specific E2E considerations
   - CI/CD integration for E2E tests

5. **Component Testing**
   - Component isolation and mocking
   - Props and state testing
   - Event handling verification
   - Accessibility testing

6. **Platform-Specific Testing**
   - iOS-specific testing considerations
   - Android-specific testing needs
   - Platform behavior differences
   - Device-specific testing strategies

7. **Performance Testing**
   - Performance benchmarking
   - Memory leak detection
   - Rendering performance testing
   - Animation and gesture testing

8. **Snapshot Testing**
   - When and how to use snapshot tests
   - Snapshot test maintenance
   - Visual regression testing

9. **Mock Strategies**
   - Native module mocking
   - API and network mocking
   - Navigation mocking
   - Third-party library mocking

10. **Test Organization**
    - Test file structure and naming
    - Test data management
    - Shared test utilities
    - Test environment configuration

11. **Continuous Integration**
    - CI/CD pipeline integration
    - Automated test execution
    - Test result reporting
    - Test failure handling

12. **Testing Best Practices**
    - Test writing guidelines
    - Maintainable test patterns
    - Test debugging strategies
    - Code coverage analysis

Please provide specific implementation examples, tool configurations, and test code samples for the recommended testing approach.
`;
  }
}
