import { OdishaScreen } from '../../features/odisha/screen'
import { Stack } from 'expo-router'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Odisha',
        }}
      />
      <OdishaScreen />
    </>
  )
}
