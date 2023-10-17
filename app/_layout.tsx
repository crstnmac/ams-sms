import FontAwesome from '@expo/vector-icons/FontAwesome'
import {ThemeProvider} from '@react-navigation/native'
import {useFonts} from 'expo-font'
import {SplashScreen, Stack} from 'expo-router'
import {useEffect, useMemo} from 'react'
import {useColorScheme} from 'react-native'
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native'
export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router'
import {
  MD3DarkTheme,
  MD3LightTheme,
  PaperProvider,
  adaptNavigationTheme,
} from 'react-native-paper'
import {useMaterial3Theme} from '@pchmn/expo-material3-theme'

import {GestureHandlerRootView} from 'react-native-gesture-handler'

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  })

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error
  }, [error])

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) {
    return null
  }

  return <RootLayoutNav />
}

const {LightTheme, DarkTheme} = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
  reactNavigationDark: NavigationDarkTheme,
})

function RootLayoutNav() {
  const colorScheme = useColorScheme()

  const {theme} = useMaterial3Theme({
    sourceColor: '#6200ee',
  })

  const paperTheme = useMemo(
    () =>
      colorScheme === 'dark'
        ? {
            ...MD3DarkTheme,
            ...LightTheme,
            colors: theme.dark,
          }
        : {
            ...MD3LightTheme,
            ...DarkTheme,
            colors: theme.light,
          },
    [colorScheme, theme]
  )
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <PaperProvider theme={paperTheme}>
        <ThemeProvider // @ts-ignore
          value={paperTheme}
        >
          <Stack />
        </ThemeProvider>
      </PaperProvider>
    </GestureHandlerRootView>
  )
}
