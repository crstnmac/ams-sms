import { Stack } from 'expo-router'
import { DailyConsumptionScreen } from '../../../features/odisha/dailyconsumption/screen'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Daily Meals Consumption SMS',
        }}
      />
      <DailyConsumptionScreen />
    </>
  )
}
