import {Stack} from 'expo-router'
import {MonthlyFoodGrain} from '../../../features/odisha/monthlyfoodgrain/screen'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Monthly Foodgrain Balance SMS',
        }}
      />
      <MonthlyFoodGrain />
    </>
  )
}
