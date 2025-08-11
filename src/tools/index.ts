import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";

/**
 * React Native Tools
 * 
 * Provides tools for React Native development guidance and analysis
 */
export class ReactNativeTools {
  constructor(private server: McpServer) {}

  register() {
    // Component Analysis Tool
    this.server.tool(
      "analyze_component",
      "Analyze React Native component for best practices",
      {
        code: z.string().describe("React Native component code to analyze"),
        type: z.enum(["functional", "class", "hook"]).optional().describe("Component type")
      },
      async ({ code, type }) => {
        const analysis = this.analyzeComponent(code, type);
        return {
          content: [
            {
              type: "text",
              text: analysis
            }
          ]
        };
      }
    );

    // Performance Optimization Tool
    this.server.tool(
      "optimize_performance",
      "Get performance optimization suggestions for React Native",
      {
        scenario: z.enum([
          "list_rendering",
          "navigation",
          "animations",
          "memory_usage",
          "bundle_size",
          "startup_time"
        ]).describe("Performance scenario to optimize"),
        platform: z.enum(["ios", "android", "both"]).optional().describe("Target platform")
      },
      async ({ scenario, platform = "both" }) => {
        const suggestions = this.getPerformanceOptimizations(scenario, platform);
        return {
          content: [
            {
              type: "text", 
              text: suggestions
            }
          ]
        };
      }
    );

    // Architecture Guidance Tool
    this.server.tool(
      "architecture_advice",
      "Get React Native architecture and project structure advice",
      {
        project_type: z.enum([
          "simple_app",
          "complex_app", 
          "enterprise_app",
          "library",
          "monorepo"
        ]).describe("Type of React Native project"),
        features: z.array(z.string()).optional().describe("Key features of the app")
      },
      async ({ project_type, features = [] }) => {
        const advice = this.getArchitectureAdvice(project_type, features);
        return {
          content: [
            {
              type: "text",
              text: advice
            }
          ]
        };
      }
    );

    // Debugging Guide Tool
    this.server.tool(
      "debug_issue",
      "Get debugging guidance for React Native issues",
      {
        issue_type: z.enum([
          "crash",
          "performance",
          "ui_layout",
          "navigation",
          "state_management",
          "network",
          "platform_specific"
        ]).describe("Type of issue to debug"),
        platform: z.enum(["ios", "android", "both"]).optional().describe("Platform where issue occurs"),
        error_message: z.string().optional().describe("Error message if available")
      },
      async ({ issue_type, platform = "both", error_message }) => {
        const guidance = this.getDebuggingGuidance(issue_type, platform, error_message);
        return {
          content: [
            {
              type: "text",
              text: guidance
            }
          ]
        };
      }
    );
  }

  private analyzeComponent(code: string, type?: string): string {
    const issues: string[] = [];
    const suggestions: string[] = [];

    // Basic analysis patterns
    if (code.includes("useState") && code.includes("useEffect")) {
      if (!code.includes("useCallback") && code.includes("onPress")) {
        issues.push("Missing useCallback for event handlers can cause unnecessary re-renders");
        suggestions.push("Wrap event handlers in useCallback to prevent child re-renders");
      }
    }

    if (code.includes("FlatList") && !code.includes("keyExtractor")) {
      issues.push("FlatList missing keyExtractor prop");
      suggestions.push("Add keyExtractor prop to FlatList for better performance");
    }

    if (code.includes("ScrollView") && code.includes("map(")) {
      issues.push("Using map() inside ScrollView instead of FlatList");
      suggestions.push("Consider using FlatList for better performance with large lists");
    }

    if (code.includes("StyleSheet.create") && code.includes("flex: 1")) {
      suggestions.push("Good use of StyleSheet.create and flex layout");
    }

    // Generate analysis report
    let analysis = "## React Native Component Analysis\\n\\n";
    
    if (type) {
      analysis += `**Component Type:** ${type}\\n\\n`;
    }

    if (issues.length > 0) {
      analysis += "### Issues Found:\\n";
      issues.forEach((issue, index) => {
        analysis += `${index + 1}. ${issue}\\n`;
      });
      analysis += "\\n";
    }

    if (suggestions.length > 0) {
      analysis += "### Suggestions:\\n";
      suggestions.forEach((suggestion, index) => {
        analysis += `${index + 1}. ${suggestion}\\n`;
      });
      analysis += "\\n";
    }

    if (issues.length === 0) {
      analysis += "### ✅ No major issues found\\n\\n";
    }

    analysis += "### Additional Best Practices:\\n";
    analysis += "- Use TypeScript for better type safety\\n";
    analysis += "- Implement proper error boundaries\\n";
    analysis += "- Follow React Native naming conventions\\n";
    analysis += "- Use memo() for expensive components\\n";
    analysis += "- Implement proper accessibility props\\n";

    return analysis;
  }

  private getPerformanceOptimizations(scenario: string, platform: string): string {
    const optimizations: Record<string, string> = {
      list_rendering: `
## List Rendering Optimizations

### FlatList Best Practices:
- Use \`keyExtractor\` for unique keys
- Implement \`getItemLayout\` for fixed-size items
- Use \`removeClippedSubviews\` for long lists
- Set \`maxToRenderPerBatch\` and \`windowSize\`
- Use \`memo\` for list item components

### Example:
\`\`\`jsx
<FlatList
  data={items}
  keyExtractor={(item) => item.id}
  getItemLayout={(data, index) => ({
    length: ITEM_HEIGHT,
    offset: ITEM_HEIGHT * index,
    index,
  })}
  removeClippedSubviews={true}
  maxToRenderPerBatch={10}
  windowSize={10}
  renderItem={({ item }) => <MemoizedItem item={item} />}
/>
\`\`\`
      `,
      navigation: `
## Navigation Performance

### React Navigation Optimizations:
- Use lazy loading for screens
- Implement proper screen options
- Use \`useFocusEffect\` instead of \`useEffect\`
- Optimize header components
- Use \`freezeOnBlur\` for heavy screens

### Example:
\`\`\`jsx
const Stack = createNativeStackNavigator();

<Stack.Navigator screenOptions={{ lazy: true }}>
  <Stack.Screen 
    name="Heavy"
    component={HeavyScreen}
    options={{ freezeOnBlur: true }}
  />
</Stack.Navigator>
\`\`\`
      `,
      animations: `
## Animation Performance

### Use Native Animations:
- Prefer Reanimated 3 over Animated API
- Use \`useSharedValue\` and \`useAnimatedStyle\`
- Run animations on UI thread
- Avoid animating layout properties

### Example:
\`\`\`jsx
import { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';

const offset = useSharedValue(0);

const animatedStyle = useAnimatedStyle(() => ({
  transform: [{ translateX: offset.value }],
}));

// Trigger animation
offset.value = withSpring(100);
\`\`\`
      `,
      memory_usage: `
## Memory Management

### Best Practices:
- Remove event listeners in useEffect cleanup
- Avoid memory leaks with proper cleanup
- Use image optimization
- Implement proper cache management
- Monitor memory usage with Flipper

### Example:
\`\`\`jsx
useEffect(() => {
  const subscription = someService.subscribe(handler);
  
  return () => {
    subscription.unsubscribe();
  };
}, []);
\`\`\`
      `,
      bundle_size: `
## Bundle Size Optimization

### Techniques:
- Use Metro bundle analyzer
- Implement code splitting
- Remove unused dependencies
- Use Hermes engine
- Enable minification in production

### Commands:
\`\`\`bash
# Analyze bundle
npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android-bundle.js --assets-dest android-assets

# Enable Hermes (android/app/build.gradle)
project.ext.react = [
  enableHermes: true
]
\`\`\`
      `,
      startup_time: `
## Startup Time Optimization

### Strategies:
- Minimize initial bundle size
- Use lazy loading
- Optimize splash screen
- Reduce initial renders
- Use Hermes for faster startup

### Implementation:
- Move heavy computations to background
- Use React.Suspense for lazy components
- Optimize image loading
- Minimize synchronous operations
      `
    };

    let result = optimizations[scenario] || "Performance optimization guidance not available for this scenario.";
    
    if (platform !== "both") {
      result += `\\n\\n### Platform-Specific Notes (${platform.toUpperCase()}):`;
      if (platform === "ios") {
        result += "\\n- Use iOS-specific optimizations like CADisplayLink\\n- Consider iOS memory warnings\\n- Optimize for different device sizes";
      } else {
        result += "\\n- Use Android-specific optimizations like ProGuard\\n- Consider Android background limitations\\n- Optimize for various Android versions";
      }
    }

    return result;
  }

  private getArchitectureAdvice(projectType: string, features: string[]): string {
    const architectures: Record<string, string> = {
      simple_app: `
## Simple App Architecture

### Recommended Structure:
\`\`\`
src/
├── components/          # Reusable UI components
├── screens/            # Screen components
├── navigation/         # Navigation configuration
├── services/          # API and external services
├── utils/             # Helper functions
├── types/             # TypeScript type definitions
└── constants/         # App constants
\`\`\`

### State Management:
- Use React Context for simple global state
- useState/useReducer for local state
- Consider Zustand for medium complexity

### Key Patterns:
- Functional components with hooks
- Custom hooks for reusable logic
- Proper error boundaries
      `,
      complex_app: `
## Complex App Architecture

### Recommended Structure:
\`\`\`
src/
├── components/
│   ├── common/         # Shared components
│   └── feature/        # Feature-specific components
├── screens/
├── navigation/
├── store/             # State management
├── services/
│   ├── api/           # API layer
│   ├── storage/       # Persistent storage
│   └── notifications/ # Push notifications
├── hooks/             # Custom hooks
├── utils/
├── types/
└── config/            # App configuration
\`\`\`

### State Management:
- Redux Toolkit for complex state
- React Query for server state
- Context for theme/auth state

### Additional Patterns:
- Feature-based organization
- Dependency injection
- Error boundaries at feature level
      `,
      enterprise_app: `
## Enterprise App Architecture

### Recommended Structure:
\`\`\`
src/
├── features/          # Feature modules
│   ├── auth/
│   ├── dashboard/
│   └── settings/
├── shared/
│   ├── components/
│   ├── hooks/
│   ├── services/
│   └── utils/
├── core/
│   ├── navigation/
│   ├── store/
│   └── config/
└── assets/
\`\`\`

### Enterprise Patterns:
- Micro-frontend architecture
- Strict TypeScript usage
- Comprehensive testing strategy
- CI/CD integration
- Code quality gates
- Security best practices

### State Management:
- Redux Toolkit with RTK Query
- Normalized state structure
- Middleware for logging/analytics
      `,
      library: `
## React Native Library Architecture

### Structure:
\`\`\`
├── src/
│   ├── index.ts       # Main export
│   ├── components/    # Library components
│   ├── hooks/         # Custom hooks
│   ├── utils/         # Utilities
│   └── types/         # Type definitions
├── example/           # Example app
├── docs/              # Documentation
└── __tests__/         # Tests
\`\`\`

### Best Practices:
- Peer dependencies for React Native
- TypeScript definitions
- Comprehensive documentation
- Example implementation
- Automated testing
- Semantic versioning
      `,
      monorepo: `
## Monorepo Architecture

### Structure with Nx/Lerna:
\`\`\`
packages/
├── mobile/            # React Native app
├── shared/
│   ├── components/    # Shared UI components
│   ├── utils/         # Shared utilities
│   └── types/         # Shared types
├── api/               # Backend API
└── web/               # Web app (optional)
\`\`\`

### Benefits:
- Code sharing between platforms
- Consistent tooling
- Atomic deployments
- Shared dependencies

### Tools:
- Nx for monorepo management
- Metro for React Native bundling
- Shared ESLint/Prettier configs
      `
    };

    let advice = architectures[projectType] || "Architecture advice not available for this project type.";
    
    if (features.length > 0) {
      advice += "\\n\\n### Feature-Specific Considerations:\\n";
      features.forEach(feature => {
        advice += `- **${feature}**: Consider dedicated module/service\\n`;
      });
    }

    return advice;
  }

  private getDebuggingGuidance(issueType: string, platform: string, errorMessage?: string): string {
    const debugGuides: Record<string, string> = {
      crash: `
## Crash Debugging Guide

### General Steps:
1. **Check logs**: Use \`npx react-native log-ios\` or \`npx react-native log-android\`
2. **Enable debugging**: Set \`__DEV__\` flag
3. **Use crash reporting**: Integrate Crashlytics or Sentry
4. **Check native logs**: Xcode Console or Android Logcat

### Common Crash Causes:
- Null pointer exceptions
- Memory issues
- Native module conflicts
- Improper bridge calls

### Tools:
- React Native Debugger
- Flipper
- Metro bundler logs
      `,
      performance: `
## Performance Debugging

### Profiling Tools:
1. **React DevTools Profiler**
2. **Metro performance monitor**
3. **Native profilers** (Instruments for iOS, Android Profiler)
4. **Flipper performance plugin**

### Common Issues:
- Unnecessary re-renders
- Heavy computations on main thread
- Large bundle sizes
- Memory leaks

### Solutions:
- Use React.memo and useMemo
- Move heavy work to background threads
- Implement virtualization for lists
- Profile with Flipper
      `,
      ui_layout: `
## UI Layout Debugging

### Debug Tools:
1. **Inspector**: Shake device → "Show Inspector"
2. **Layout visualization**: Enable border/margins in dev
3. **Flexbox debugger**: Use Flipper Layout plugin

### Common Layout Issues:
- Flex layout conflicts
- Text overflow
- Platform-specific rendering differences
- Keyboard covering inputs

### Solutions:
\`\`\`jsx
// Debug styles
const debugStyle = __DEV__ ? { borderWidth: 1, borderColor: 'red' } : {};

// Keyboard aware layouts
import { KeyboardAvoidingView } from 'react-native';
\`\`\`
      `,
      navigation: `
## Navigation Debugging

### Debug Steps:
1. Check navigation logs
2. Verify screen registration
3. Test navigation params
4. Check navigation state

### Common Issues:
- Screen not registered
- Invalid navigation params
- Navigation state corruption
- Deep linking issues

### Tools:
- React Navigation DevTools
- Navigation state logging
- Link testing utilities
      `,
      state_management: `
## State Management Debugging

### Redux DevTools:
- Use Redux DevTools Extension
- Track action dispatching
- Monitor state changes
- Time travel debugging

### Common Issues:
- Mutating state directly
- Async action handling
- State normalization
- Memory leaks in subscriptions

### Best Practices:
- Use Redux Toolkit
- Implement proper middleware
- Use selectors for derived state
- Clean up subscriptions
      `,
      network: `
## Network Debugging

### Debug Tools:
1. **Network inspector**: Flipper Network plugin
2. **Charles Proxy**: For request/response inspection
3. **Metro bundler**: Check bundle loading
4. **Console logs**: Log API responses

### Common Issues:
- CORS errors
- Timeout issues
- SSL certificate problems
- API endpoint changes

### Solutions:
\`\`\`jsx
// Network error handling
const fetchData = async () => {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Network error');
    return await response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    // Handle error appropriately
  }
};
\`\`\`
      `,
      platform_specific: `
## Platform-Specific Debugging

### iOS Debugging:
- Use Xcode for native debugging
- Check iOS simulator logs
- Test on physical devices
- Use Instruments for profiling

### Android Debugging:
- Use Android Studio debugger
- Check Logcat for native logs
- Test on different Android versions
- Use Android Profiler

### Common Platform Differences:
- Text rendering
- Navigation behavior
- Permission handling
- File system access
      `
    };

    let guidance = debugGuides[issueType] || "Debugging guidance not available for this issue type.";
    
    if (errorMessage) {
      guidance += `\\n\\n### Error Message Analysis:\\n\`\`\`\\n${errorMessage}\\n\`\`\`\\n`;
      guidance += "**Suggestions based on error:**\\n";
      
      if (errorMessage.includes("Cannot read property")) {
        guidance += "- Check for null/undefined values\\n- Add proper null checks\\n";
      }
      if (errorMessage.includes("Network request failed")) {
        guidance += "- Check network connectivity\\n- Verify API endpoints\\n- Check CORS settings\\n";
      }
      if (errorMessage.includes("Module not found")) {
        guidance += "- Verify import paths\\n- Check if module is installed\\n- Clear Metro cache\\n";
      }
    }

    return guidance;
  }
}
