import { Stack } from 'expo-router'
import {WeeklyIFAConsumptionScreen} from '../../../features/odisha/weeklyifaconsumption/screen'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Weekly IFA Consumption SMS',
        }}
      />
      <WeeklyIFAConsumptionScreen />
    </>
  )
}
