import {Stack} from 'expo-router'
import {MonthlyCookHelper} from '../../../features/odisha/monthlycookhelper/screen'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Monthly Cook/Helper SMS',
        }}
      />
      <MonthlyCookHelper />
    </>
  )
}
