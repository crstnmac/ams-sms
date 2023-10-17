import {Stack} from 'expo-router'
import {MDMNotRunning} from '../../../features/westbengal/mdmnotrunning/screen'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'MDM Not Running',
        }}
      />
      <MDMNotRunning />
    </>
  )
}
