import {Stack} from 'expo-router'
import {MDMRunning} from '../../../features/westbengal/mdmrunning/screen'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'MDM Running',
        }}
      />
      <MDMRunning />
    </>
  )
}
