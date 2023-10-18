import {Stack} from 'expo-router'
import {MonthlyFoodGrain} from '../../../features/odisha/monthlyfoodgrain/screen'
import CustomNavigationBar from '../../../components/CustomNavigationBar'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Monthly Foodgrain Balance SMS',
          header: (
            props // @ts-ignore
          ) => <CustomNavigationBar {...props} />,
        }}
      />
      <MonthlyFoodGrain />
    </>
  )
}
