import { McpServer, ResourceTemplate } from "@modelcontextprotocol/sdk/server/mcp.js";
import { Variables } from "@modelcontextprotocol/sdk/shared/uriTemplate.js";

/**
 * React Native Resources
 * 
 * Provides access to React Native documentation, guides, and reference materials
 */
export class ReactNativeResources {
  constructor(private server: McpServer) {}

  register() {
    // Official React Native Documentation
    this.server.resource(
      "react-native-docs",
      "https://reactnative.dev/docs/getting-started",
      {
        title: "React Native Documentation",
        description: "Official React Native documentation and guides",
        mimeType: "text/markdown"
      },
      async () => ({
        contents: [
          {
            uri: "https://reactnative.dev/docs/getting-started",
            text: this.getDocumentationContent("getting-started")
          }
        ]
      })
    );

    // Best Practices Guide
    this.server.resource(
      "best-practices-guide",
      "rn://best-practices",
      {
        title: "React Native Best Practices",
        description: "Comprehensive guide to React Native best practices",
        mimeType: "text/markdown"
      },
      async () => ({
        contents: [
          {
            uri: "rn://best-practices",
            text: this.getBestPracticesGuide()
          }
        ]
      })
    );

    // Performance Guide
    this.server.resource(
      "performance-guide",
      "rn://performance",
      {
        title: "React Native Performance Guide",
        description: "Performance optimization strategies and techniques",
        mimeType: "text/markdown"
      },
      async () => ({
        contents: [
          {
            uri: "rn://performance",
            text: this.getPerformanceGuide()
          }
        ]
      })
    );

    // Common Patterns
    this.server.resource(
      "common-patterns",
      "rn://patterns",
      {
        title: "React Native Common Patterns",
        description: "Common patterns and solutions for React Native development",
        mimeType: "text/markdown"
      },
      async () => ({
        contents: [
          {
            uri: "rn://patterns",
            text: this.getCommonPatterns()
          }
        ]
      })
    );

    // Platform-Specific Guides
    const platformTemplate = new ResourceTemplate("rn://platform/{platform}", {
      list: async () => ({
        resources: [
          {
            uri: "rn://platform/ios",
            name: "iOS Development Guide",
            description: "iOS-specific React Native development guide",
            mimeType: "text/markdown"
          },
          {
            uri: "rn://platform/android", 
            name: "Android Development Guide",
            description: "Android-specific React Native development guide",
            mimeType: "text/markdown"
          }
        ]
      })
    });

    this.server.resource(
      "platform-guide",
      platformTemplate,
      {
        title: "Platform-Specific Guide",
        description: "Platform-specific development guides for iOS and Android",
        mimeType: "text/markdown"
      },
      async (uri: URL, variables: Variables) => ({
        contents: [
          {
            uri: uri.toString(),
            text: this.getPlatformGuide(variables.platform as string)
          }
        ]
      })
    );
  }

  private getDocumentationContent(section: string): string {
    const sections: Record<string, string> = {
      "getting-started": `
# React Native Documentation

## Getting Started

React Native combines the best parts of native development with React, a best-in-class JavaScript library for building user interfaces.

### Key Concepts:
- **Write Once, Run Anywhere**: Create platform-specific versions of components
- **Native Performance**: React Native apps are rendered using real native components
- **Fast Refresh**: See changes instantly while developing
- **Large Ecosystem**: Access to native platform APIs and third-party libraries

### Development Environment Setup:
1. Install Node.js (version 12 or higher)
2. Install React Native CLI: \`npm install -g react-native-cli\`
3. Setup platform-specific development tools:
   - **iOS**: Xcode (macOS only)
   - **Android**: Android Studio

### Creating Your First App:
\`\`\`bash
npx react-native init MyFirstApp
cd MyFirstApp
npx react-native run-ios    # for iOS
npx react-native run-android # for Android
\`\`\`

### Core Components:
- **View**: Basic building block, similar to div
- **Text**: Display text content
- **Image**: Display images
- **ScrollView**: Scrollable container
- **FlatList**: Efficient list rendering
- **TextInput**: Text input field

### Navigation:
Use React Navigation for handling navigation:
\`\`\`bash
npm install @react-navigation/native
npm install @react-navigation/native-stack
\`\`\`
      `
    };

    return sections[section] || "Documentation section not found.";
  }

  private getBestPracticesGuide(): string {
    return `
# React Native Best Practices Guide

## 1. Project Structure

### Recommended Folder Structure:
\`\`\`
src/
├── components/     # Reusable UI components
├── screens/       # Screen components
├── navigation/    # Navigation setup
├── services/      # API and external services
├── utils/         # Helper functions and utilities
├── hooks/         # Custom React hooks
├── types/         # TypeScript type definitions
├── constants/     # App constants and configuration
└── assets/        # Images, fonts, and other static assets
\`\`\`

## 2. Component Design

### Use Functional Components with Hooks:
\`\`\`jsx
import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const MyComponent = ({ onPress, title }) => {
  const [count, setCount] = useState(0);

  const handlePress = useCallback(() => {
    onPress?.(count);
  }, [onPress, count]);

  return (
    <View>
      <Text>{title}</Text>
      <TouchableOpacity onPress={handlePress}>
        <Text>Count: {count}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(MyComponent);
\`\`\`

### Key Principles:
- Use TypeScript for type safety
- Implement proper prop validation
- Use memo() for performance optimization
- Follow consistent naming conventions
- Implement proper error boundaries

## 3. State Management

### For Simple State:
- Use useState for local component state
- Use useContext for shared state across components
- Use useReducer for complex state logic

### For Complex Applications:
\`\`\`jsx
// Using Redux Toolkit
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: { profile: null, loading: false },
  reducers: {
    setProfile: (state, action) => {
      state.profile = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});
\`\`\`

## 4. Performance Best Practices

### List Optimization:
\`\`\`jsx
import { FlatList } from 'react-native';

const OptimizedList = ({ data }) => (
  <FlatList
    data={data}
    keyExtractor={(item) => item.id}
    getItemLayout={(data, index) => ({
      length: ITEM_HEIGHT,
      offset: ITEM_HEIGHT * index,
      index,
    })}
    removeClippedSubviews={true}
    maxToRenderPerBatch={10}
    windowSize={10}
    renderItem={({ item }) => <MemoizedListItem item={item} />}
  />
);
\`\`\`

### Image Optimization:
- Use appropriate image formats (WebP for Android, optimized PNG/JPEG for iOS)
- Implement lazy loading for images
- Use FastImage for better performance
- Resize images appropriately

## 5. Code Quality

### ESLint and Prettier Configuration:
\`\`\`json
{
  "extends": [
    "@react-native-community/eslint-config",
    "prettier"
  ],
  "rules": {
    "react-hooks/exhaustive-deps": "warn",
    "no-unused-vars": "error",
    "prefer-const": "error"
  }
}
\`\`\`

### Testing Strategy:
- Unit tests with Jest and React Native Testing Library
- Integration tests for critical user flows
- E2E tests with Detox
- Visual regression testing

## 6. Security Best Practices

### Data Protection:
- Use Keychain (iOS) and Keystore (Android) for sensitive data
- Implement certificate pinning
- Validate all user inputs
- Use HTTPS for all network requests
- Implement proper authentication flows

### Code Protection:
- Obfuscate sensitive code
- Use ProGuard (Android) and similar tools
- Implement runtime application self-protection (RASP)
- Regular security audits

## 7. Platform-Specific Considerations

### iOS Specific:
- Follow iOS Human Interface Guidelines
- Use iOS-specific components when appropriate
- Handle safe areas properly
- Implement proper Dark Mode support

### Android Specific:
- Follow Material Design guidelines
- Handle Android back button properly
- Implement proper permission handling
- Consider Android-specific features (widgets, intents)

## 8. Development Workflow

### Version Control:
- Use meaningful commit messages
- Implement feature branches
- Use pull request reviews
- Tag releases properly

### CI/CD Pipeline:
- Automated testing on pull requests
- Automated builds for releases
- Code quality checks
- Automated deployment to app stores

## 9. Debugging and Monitoring

### Development Tools:
- React Native Debugger
- Flipper for debugging
- Metro bundler for build monitoring
- Hot reloading for faster development

### Production Monitoring:
- Crash reporting (Crashlytics, Sentry)
- Performance monitoring
- User analytics
- Error tracking and alerting
`;
  }

  private getPerformanceGuide(): string {
    return `
# React Native Performance Optimization Guide

## 1. JavaScript Performance

### Optimize Re-renders:
\`\`\`jsx
// Use React.memo to prevent unnecessary re-renders
const ExpensiveComponent = React.memo(({ data, onPress }) => {
  return (
    <View>
      {/* Expensive rendering logic */}
    </View>
  );
});

// Use useCallback for event handlers
const MyComponent = () => {
  const [count, setCount] = useState(0);
  
  const handlePress = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  return <ExpensiveComponent onPress={handlePress} />;
};
\`\`\`

### Use useMemo for Expensive Calculations:
\`\`\`jsx
const MyComponent = ({ items, filter }) => {
  const filteredItems = useMemo(() => {
    return items.filter(item => item.category === filter);
  }, [items, filter]);

  return <FlatList data={filteredItems} />;
};
\`\`\`

## 2. List Performance

### FlatList Optimization:
\`\`\`jsx
const OptimizedFlatList = ({ data }) => (
  <FlatList
    data={data}
    keyExtractor={(item, index) => \`\${item.id}-\${index}\`}
    
    // Performance props
    removeClippedSubviews={true}
    maxToRenderPerBatch={5}
    updateCellsBatchingPeriod={100}
    initialNumToRender={10}
    windowSize={10}
    
    // Fixed height optimization
    getItemLayout={(data, index) => ({
      length: ITEM_HEIGHT,
      offset: ITEM_HEIGHT * index,
      index,
    })}
    
    renderItem={({ item }) => <MemoizedListItem item={item} />}
  />
);
\`\`\`

### VirtualizedList for Custom Lists:
\`\`\`jsx
import { VirtualizedList } from 'react-native';

const CustomVirtualizedList = ({ data }) => (
  <VirtualizedList
    data={data}
    getItemCount={() => data.length}
    getItem={(data, index) => data[index]}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => <ListItem item={item} />}
  />
);
\`\`\`

## 3. Image Performance

### Optimize Image Loading:
\`\`\`jsx
import FastImage from 'react-native-fast-image';

const OptimizedImage = ({ source, style }) => (
  <FastImage
    style={style}
    source={{
      uri: source,
      priority: FastImage.priority.normal,
      cache: FastImage.cacheControl.immutable,
    }}
    resizeMode={FastImage.resizeMode.cover}
  />
);
\`\`\`

### Image Caching Strategy:
- Use appropriate cache policies
- Implement progressive image loading
- Use placeholder images
- Optimize image sizes for different screen densities

## 4. Animation Performance

### Use Native Animations:
\`\`\`jsx
import Reanimated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const AnimatedComponent = () => {
  const translateX = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  const startAnimation = () => {
    translateX.value = withSpring(100);
  };

  return (
    <Reanimated.View style={animatedStyle}>
      {/* Animated content */}
    </Reanimated.View>
  );
};
\`\`\`

### Animation Best Practices:
- Use native drivers when possible
- Avoid animating layout properties
- Use transform and opacity for smooth animations
- Implement gesture-driven animations

## 5. Navigation Performance

### Lazy Loading Screens:
\`\`\`jsx
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

// Lazy load heavy screens
const HeavyScreen = React.lazy(() => import('./HeavyScreen'));

const App = () => (
  <Stack.Navigator screenOptions={{ lazy: true }}>
    <Stack.Screen 
      name="Heavy" 
      component={HeavyScreen}
      options={{ 
        freezeOnBlur: true,
        headerShown: false 
      }}
    />
  </Stack.Navigator>
);
\`\`\`

## 6. Memory Management

### Prevent Memory Leaks:
\`\`\`jsx
const MyComponent = () => {
  useEffect(() => {
    const subscription = someEventEmitter.addListener('event', handler);
    
    // Cleanup function
    return () => {
      subscription.remove();
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      // Do something
    }, 1000);

    return () => clearInterval(timer);
  }, []);
};
\`\`\`

### Optimize Component Unmounting:
- Remove event listeners
- Cancel ongoing network requests
- Clear timers and intervals
- Unsubscribe from external services

## 7. Bundle Size Optimization

### Code Splitting:
\`\`\`jsx
// Dynamic imports for large libraries
const loadHeavyLibrary = async () => {
  const module = await import('heavy-library');
  return module.default;
};
\`\`\`

### Bundle Analysis:
\`\`\`bash
# Analyze bundle size
npx react-native bundle \\
  --platform android \\
  --dev false \\
  --entry-file index.js \\
  --bundle-output android-bundle.js \\
  --assets-dest android-assets
\`\`\`

## 8. Network Performance

### API Optimization:
\`\`\`jsx
// Use React Query for efficient data fetching
import { useQuery } from 'react-query';

const MyComponent = () => {
  const { data, isLoading, error } = useQuery(
    ['userData', userId],
    () => fetchUserData(userId),
    {
      staleTime: 5 * 60 * 1000, // 5 minutes
      cacheTime: 10 * 60 * 1000, // 10 minutes
    }
  );

  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorMessage />;

  return <UserProfile data={data} />;
};
\`\`\`

### Request Optimization:
- Implement request debouncing
- Use request cancellation
- Implement proper caching strategies
- Optimize payload sizes

## 9. Platform-Specific Optimizations

### iOS Optimizations:
- Use CADisplayLink for smooth animations
- Implement proper memory warnings handling
- Optimize for different device sizes and capabilities

### Android Optimizations:
- Use ProGuard for release builds
- Implement proper background task handling
- Optimize for various Android versions and devices

## 10. Monitoring and Profiling

### Performance Monitoring Tools:
- Flipper Performance Plugin
- React DevTools Profiler
- Metro bundler performance monitor
- Native platform profilers (Instruments, Android Profiler)

### Key Metrics to Monitor:
- App startup time
- Frame rate (maintain 60 FPS)
- Memory usage
- Bundle size
- Network request performance
- Crash rates
`;
  }

  private getCommonPatterns(): string {
    return `
# React Native Common Patterns

## 1. Custom Hooks Patterns

### useAsync Hook for Data Fetching:
\`\`\`jsx
import { useState, useEffect, useCallback } from 'react';

export const useAsync = (asyncFunction, immediate = true) => {
  const [status, setStatus] = useState('idle');
  const [value, setValue] = useState(null);
  const [error, setError] = useState(null);

  const execute = useCallback(async (...args) => {
    setStatus('pending');
    setValue(null);
    setError(null);

    try {
      const response = await asyncFunction(...args);
      setValue(response);
      setStatus('success');
    } catch (error) {
      setError(error);
      setStatus('error');
    }
  }, [asyncFunction]);

  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);

  return { execute, status, value, error };
};

// Usage
const MyComponent = () => {
  const { value: userData, status, error } = useAsync(fetchUserData);

  if (status === 'pending') return <LoadingSpinner />;
  if (status === 'error') return <ErrorMessage error={error} />;
  
  return <UserProfile data={userData} />;
};
\`\`\`

### useKeyboard Hook:
\`\`\`jsx
import { useState, useEffect } from 'react';
import { Keyboard } from 'react-native';

export const useKeyboard = () => {
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', (e) => {
      setKeyboardHeight(e.endCoordinates.height);
      setIsKeyboardVisible(true);
    });

    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardHeight(0);
      setIsKeyboardVisible(false);
    });

    return () => {
      showSubscription?.remove();
      hideSubscription?.remove();
    };
  }, []);

  return { keyboardHeight, isKeyboardVisible };
};
\`\`\`

## 2. Component Composition Patterns

### Higher-Order Component (HOC) for Loading States:
\`\`\`jsx
import React from 'react';
import { View, ActivityIndicator } from 'react-native';

export const withLoading = (WrappedComponent) => {
  return ({ isLoading, ...props }) => {
    if (isLoading) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" />
        </View>
      );
    }

    return <WrappedComponent {...props} />;
  };
};

// Usage
const UserList = withLoading(({ users }) => (
  <FlatList data={users} renderItem={renderUser} />
));
\`\`\`

### Render Props Pattern:
\`\`\`jsx
const DataProvider = ({ children, url }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData(url)
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [url]);

  return children({ data, loading, error });
};

// Usage
<DataProvider url="/api/users">
  {({ data, loading, error }) => {
    if (loading) return <LoadingSpinner />;
    if (error) return <ErrorMessage error={error} />;
    return <UserList users={data} />;
  }}
</DataProvider>
\`\`\`

## 3. Form Handling Patterns

### Custom Form Hook:
\`\`\`jsx
import { useState, useCallback } from 'react';

export const useForm = (initialValues, validationSchema) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const setValue = useCallback((field, value) => {
    setValues(prev => ({ ...prev, [field]: value }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: null }));
    }
  }, [errors]);

  const setFieldTouched = useCallback((field) => {
    setTouched(prev => ({ ...prev, [field]: true }));
  }, []);

  const validate = useCallback(() => {
    const newErrors = {};
    
    Object.keys(validationSchema).forEach(field => {
      const validator = validationSchema[field];
      const error = validator(values[field]);
      if (error) newErrors[field] = error;
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [values, validationSchema]);

  const handleSubmit = useCallback((onSubmit) => {
    const isValid = validate();
    if (isValid) {
      onSubmit(values);
    }
  }, [values, validate]);

  return {
    values,
    errors,
    touched,
    setValue,
    setFieldTouched,
    handleSubmit,
    isValid: Object.keys(errors).length === 0,
  };
};
\`\`\`

## 4. Error Boundary Pattern

### Global Error Boundary:
\`\`\`jsx
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Log error to crash reporting service
    console.error('Error caught by boundary:', error, errorInfo);
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <View style={styles.errorContainer}>
          <Text style={styles.errorTitle}>Something went wrong</Text>
          <Text style={styles.errorMessage}>
            {this.state.error?.message || 'An unexpected error occurred'}
          </Text>
          <TouchableOpacity style={styles.retryButton} onPress={this.handleRetry}>
            <Text style={styles.retryText}>Try Again</Text>
          </TouchableOpacity>
        </View>
      );
    }

    return this.props.children;
  }
}
\`\`\`

## 5. Navigation Patterns

### Typed Navigation:
\`\`\`tsx
// types/navigation.ts
export type RootStackParamList = {
  Home: undefined;
  Profile: { userId: string };
  Settings: { tab?: string };
};

// hooks/useTypedNavigation.ts
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';

export const useTypedNavigation = () => {
  return useNavigation<NativeStackNavigationProp<RootStackParamList>>();
};

// Usage in component
const MyComponent = () => {
  const navigation = useTypedNavigation();
  
  const goToProfile = () => {
    navigation.navigate('Profile', { userId: '123' });
  };
};
\`\`\`

## 6. Storage Patterns

### Async Storage Hook:
\`\`\`jsx
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';

export const useAsyncStorage = (key, defaultValue) => {
  const [value, setValue] = useState(defaultValue);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadValue = async () => {
      try {
        const stored = await AsyncStorage.getItem(key);
        if (stored !== null) {
          setValue(JSON.parse(stored));
        }
      } catch (error) {
        console.error('Error loading from AsyncStorage:', error);
      } finally {
        setLoading(false);
      }
    };

    loadValue();
  }, [key]);

  const updateValue = async (newValue) => {
    try {
      setValue(newValue);
      await AsyncStorage.setItem(key, JSON.stringify(newValue));
    } catch (error) {
      console.error('Error saving to AsyncStorage:', error);
    }
  };

  const removeValue = async () => {
    try {
      setValue(defaultValue);
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.error('Error removing from AsyncStorage:', error);
    }
  };

  return { value, updateValue, removeValue, loading };
};
\`\`\`

## 7. Theme and Styling Patterns

### Theme Provider Pattern:
\`\`\`jsx
import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const theme = {
    colors: {
      primary: isDark ? '#BB86FC' : '#6200EE',
      background: isDark ? '#121212' : '#FFFFFF',
      surface: isDark ? '#1E1E1E' : '#F5F5F5',
      text: isDark ? '#FFFFFF' : '#000000',
    },
    spacing: {
      xs: 4,
      sm: 8,
      md: 16,
      lg: 24,
      xl: 32,
    },
  };

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <ThemeContext.Provider value={{ theme, isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Usage
const MyComponent = () => {
  const { theme } = useTheme();
  
  return (
    <View style={{ backgroundColor: theme.colors.background }}>
      <Text style={{ color: theme.colors.text }}>Hello World</Text>
    </View>
  );
};
\`\`\`

## 8. Performance Optimization Patterns

### Memoized Selectors:
\`\`\`jsx
import { useMemo } from 'react';
import { useSelector } from 'react-redux';

export const useFilteredUsers = (filter) => {
  const users = useSelector(state => state.users.list);
  
  return useMemo(() => {
    return users.filter(user => 
      user.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [users, filter]);
};
\`\`\`

### Debounced Input:
\`\`\`jsx
import { useState, useEffect } from 'react';

export const useDebouncedValue = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

// Usage
const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebouncedValue(searchTerm, 300);

  useEffect(() => {
    if (debouncedSearchTerm) {
      performSearch(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  return (
    <TextInput
      value={searchTerm}
      onChangeText={setSearchTerm}
      placeholder="Search..."
    />
  );
};
\`\`\`

These patterns provide a solid foundation for building scalable and maintainable React Native applications while following best practices and industry standards.
`;
  }

  private getPlatformGuide(platform: string): string {
    const guides: Record<string, string> = {
      ios: `
# iOS-Specific Development Guide

## 1. iOS Setup and Configuration

### Xcode Configuration:
- Use latest stable Xcode version
- Configure signing and capabilities properly
- Set up development teams and provisioning profiles
- Configure app icons and launch screens

### Info.plist Configuration:
\`\`\`xml
<key>NSAppTransportSecurity</key>
<dict>
  <key>NSAllowsArbitraryLoads</key>
  <true/>
  <key>NSExceptionDomains</key>
  <dict>
    <key>your-api-domain.com</key>
    <dict>
      <key>NSTemporaryExceptionAllowsInsecureHTTPLoads</key>
      <true/>
    </dict>
  </dict>
</dict>
\`\`\`

## 2. iOS-Specific Components

### Safe Area Handling:
\`\`\`jsx
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const IOSScreen = () => {
  const insets = useSafeAreaInsets();
  
  return (
    <View style={{
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
      paddingLeft: insets.left,
      paddingRight: insets.right,
    }}>
      {/* Your content */}
    </View>
  );
};
\`\`\`

### iOS-Specific Navigation:
\`\`\`jsx
import { Platform } from 'react-native';

const screenOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'ios' ? '#F8F8F8' : '#2196F3',
  },
  headerTintColor: Platform.OS === 'ios' ? '#007AFF' : '#FFFFFF',
  gestureEnabled: Platform.OS === 'ios',
};
\`\`\`

## 3. iOS Human Interface Guidelines

### Design Principles:
- **Clarity**: Clear and understandable interface
- **Deference**: UI should defer to content
- **Depth**: Use visual layers and realistic motion

### Navigation Patterns:
- Tab bars for peer information categories
- Navigation bars for hierarchical content
- Modal views for self-contained tasks

### Typography:
\`\`\`jsx
const IOSTypography = {
  largeTitle: { fontSize: 34, fontWeight: '700' },
  title1: { fontSize: 28, fontWeight: '400' },
  title2: { fontSize: 22, fontWeight: '400' },
  title3: { fontSize: 20, fontWeight: '400' },
  headline: { fontSize: 17, fontWeight: '600' },
  body: { fontSize: 17, fontWeight: '400' },
  callout: { fontSize: 16, fontWeight: '400' },
  subhead: { fontSize: 15, fontWeight: '400' },
  footnote: { fontSize: 13, fontWeight: '400' },
  caption1: { fontSize: 12, fontWeight: '400' },
  caption2: { fontSize: 11, fontWeight: '400' },
};
\`\`\`

## 4. iOS-Specific Features

### Push Notifications:
\`\`\`jsx
import PushNotificationIOS from '@react-native-community/push-notification-ios';

// Request permissions
PushNotificationIOS.requestPermissions({
  alert: true,
  badge: true,
  sound: true,
});

// Handle notifications
PushNotificationIOS.addEventListener('notification', (notification) => {
  console.log('Received notification:', notification);
});
\`\`\`

### Keychain Access:
\`\`\`jsx
import * as Keychain from 'react-native-keychain';

// Store credentials
await Keychain.setInternetCredentials(
  'server',
  'username',
  'password'
);

// Retrieve credentials
const credentials = await Keychain.getInternetCredentials('server');
\`\`\`

## 5. iOS Performance Optimization

### Memory Management:
- Use autoreleasing pools properly
- Monitor memory warnings
- Implement proper image caching
- Use lazy loading for heavy views

### Animation Optimization:
\`\`\`jsx
import { UIManager, Platform } from 'react-native';

// Enable LayoutAnimation on Android
if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

// iOS-optimized animations
const iosOptimizedAnimation = {
  duration: 300,
  create: {
    type: LayoutAnimation.Types.easeInEaseOut,
    property: LayoutAnimation.Properties.opacity,
  },
  update: {
    type: LayoutAnimation.Types.easeInEaseOut,
  },
};
\`\`\`

## 6. iOS Testing and Debugging

### Xcode Instruments:
- Use Time Profiler for performance analysis
- Use Allocations for memory leak detection
- Use Core Animation for UI performance
- Use Network for API debugging

### iOS Simulator:
- Test on different device sizes
- Simulate memory warnings
- Test different iOS versions
- Use device conditions (poor network, etc.)

## 7. iOS Deployment

### App Store Guidelines:
- Follow App Store Review Guidelines
- Implement proper privacy policies
- Use App Store Connect for metadata
- Test with TestFlight before release

### Build Configuration:
\`\`\`bash
# Build for release
npx react-native run-ios --configuration Release

# Create archive
xcodebuild -workspace YourApp.xcworkspace \\
  -scheme YourApp \\
  -configuration Release \\
  -archivePath YourApp.xcarchive \\
  archive
\`\`\`
      `,
      android: `
# Android-Specific Development Guide

## 1. Android Setup and Configuration

### Android Studio Configuration:
- Use latest stable Android Studio version
- Configure SDK and build tools
- Set up virtual devices (AVDs)
- Configure Gradle properly

### Gradle Configuration:
\`\`\`gradle
// android/app/build.gradle
android {
    compileSdkVersion 34
    buildToolsVersion "34.0.0"
    
    defaultConfig {
        minSdkVersion 21
        targetSdkVersion 34
        versionCode 1
        versionName "1.0"
    }
    
    buildTypes {
        release {
            minifyEnabled true
            proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'
        }
    }
}
\`\`\`

## 2. Android-Specific Components

### Navigation Drawer:
\`\`\`jsx
import { DrawerLayoutAndroid } from 'react-native';

const AndroidDrawer = () => {
  const drawer = useRef(null);

  const navigationView = (
    <View style={styles.drawer}>
      <Text style={styles.drawerText}>Navigation Menu</Text>
    </View>
  );

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition="left"
      renderNavigationView={() => navigationView}
    >
      <View style={styles.container}>
        <TouchableOpacity onPress={() => drawer.current.openDrawer()}>
          <Text>Open Drawer</Text>
        </TouchableOpacity>
      </View>
    </DrawerLayoutAndroid>
  );
};
\`\`\`

### Android Hardware Back Button:
\`\`\`jsx
import { BackHandler } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

const AndroidScreen = () => {
  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        // Handle back press
        return true; // Prevent default behavior
      };

      const backHandler = BackHandler.addEventListener('hardwareBackPress', onBackPress);
      return () => backHandler.remove();
    }, [])
  );

  return <View>{/* Screen content */}</View>;
};
\`\`\`

## 3. Material Design Guidelines

### Design Principles:
- **Material metaphor**: Inspired by paper and ink
- **Bold, graphic, intentional**: Focus on typography and imagery
- **Motion provides meaning**: Smooth and meaningful transitions

### Color System:
\`\`\`jsx
const MaterialColors = {
  primary: '#2196F3',
  primaryVariant: '#1976D2',
  secondary: '#FF4081',
  secondaryVariant: '#F50057',
  background: '#FFFFFF',
  surface: '#FFFFFF',
  error: '#F44336',
  onPrimary: '#FFFFFF',
  onSecondary: '#FFFFFF',
  onBackground: '#000000',
  onSurface: '#000000',
  onError: '#FFFFFF',
};
\`\`\`

### Material Components:
\`\`\`jsx
// FloatingActionButton
import { TouchableOpacity } from 'react-native';

const FAB = ({ onPress, icon }) => (
  <TouchableOpacity
    style={styles.fab}
    onPress={onPress}
    activeOpacity={0.8}
  >
    {icon}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    right: 20,
    bottom: 20,
    backgroundColor: '#2196F3',
    borderRadius: 28,
    elevation: 8,
  },
});
\`\`\`

## 4. Android Permissions

### Runtime Permissions:
\`\`\`jsx
import { PermissionsAndroid } from 'react-native';

const requestCameraPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: 'Cool Photo App Camera Permission',
        message: 'Cool Photo App needs access to your camera so you can take awesome pictures.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      }
    );
    
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('Camera permission granted');
    } else {
      console.log('Camera permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
};
\`\`\`

### Manifest Permissions:
\`\`\`xml
<!-- android/app/src/main/AndroidManifest.xml -->
<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.CAMERA" />
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
\`\`\`

## 5. Android-Specific Features

### Notification Channels (Android 8.0+):
\`\`\`jsx
import PushNotification from 'react-native-push-notification';

PushNotification.createChannel(
  {
    channelId: "default-channel",
    channelName: "Default Channel",
    channelDescription: "A default channel for notifications",
    playSound: true,
    soundName: "default",
    importance: 4,
    vibrate: true,
  },
  (created) => console.log(\`Channel created: \${created}\`)
);
\`\`\`

### Android Intents:
\`\`\`jsx
import { Linking } from 'react-native';

// Open external app
const openMaps = (latitude, longitude) => {
  const url = \`geo:\${latitude},\${longitude}\`;
  Linking.openURL(url);
};

// Share content
import { Share } from 'react-native';

const shareContent = async () => {
  try {
    const result = await Share.share({
      message: 'Check out this amazing app!',
    });
  } catch (error) {
    console.error(error.message);
  }
};
\`\`\`

## 6. Android Performance Optimization

### ProGuard Configuration:
\`\`\`
# android/app/proguard-rules.pro
-keep class com.yourapp.** { *; }
-keep class com.facebook.react.** { *; }
-keep class com.facebook.hermes.** { *; }

# React Native specific
-dontwarn com.facebook.react.**
-dontwarn com.facebook.hermes.**
\`\`\`

### Memory Optimization:
\`\`\`jsx
// Use RecyclerListView for large lists
import { RecyclerListView, DataProvider, LayoutProvider } from 'recyclerlistview';

const AndroidOptimizedList = ({ data }) => {
  const dataProvider = new DataProvider((r1, r2) => r1 !== r2).cloneWithRows(data);
  
  const layoutProvider = new LayoutProvider(
    index => 'NORMAL',
    (type, dim) => {
      dim.width = Dimensions.get('window').width;
      dim.height = 100;
    }
  );

  return (
    <RecyclerListView
      dataProvider={dataProvider}
      layoutProvider={layoutProvider}
      rowRenderer={renderRow}
    />
  );
};
\`\`\`

## 7. Android Testing and Debugging

### ADB Commands:
\`\`\`bash
# View logs
adb logcat | grep ReactNativeJS

# Install APK
adb install app-release.apk

# Reverse port for development
adb reverse tcp:8081 tcp:8081

# Screenshot
adb shell screencap -p /sdcard/screenshot.png
\`\`\`

### Android Studio Profiler:
- CPU profiler for performance analysis
- Memory profiler for leak detection
- Network profiler for API monitoring
- Energy profiler for battery usage

## 8. Android Deployment

### Play Store Requirements:
- Target latest API level
- Use App Bundle format
- Follow Play Store policies
- Implement proper content ratings

### Build Commands:
\`\`\`bash
# Build debug APK
npx react-native run-android

# Build release APK
cd android && ./gradlew assembleRelease

# Build App Bundle
cd android && ./gradlew bundleRelease
\`\`\`

### Signing Configuration:
\`\`\`gradle
// android/app/build.gradle
signingConfigs {
    release {
        storeFile file('your-keystore.keystore')
        storePassword 'your-store-password'
        keyAlias 'your-key-alias'
        keyPassword 'your-key-password'
    }
}
\`\`\`
      `
    };

    return guides[platform] || "Platform guide not available.";
  }
}
