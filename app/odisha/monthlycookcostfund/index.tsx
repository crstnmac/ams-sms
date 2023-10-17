import { Stack } from 'expo-router'
import { MonthlyCookCostFund } from '../../../features/odisha/monthlycookcostfund/screen'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Monthly Cooking Cost Fund SMS',
        }}
      />
      <MonthlyCookCostFund />
    </>
  )
}
