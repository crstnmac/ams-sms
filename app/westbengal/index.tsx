import {Stack} from 'expo-router'
import {WestBengalScreen} from '../../features/westbengal/screen'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'West Bengal',
        }}
      />
      <WestBengalScreen />
    </>
  )
}
