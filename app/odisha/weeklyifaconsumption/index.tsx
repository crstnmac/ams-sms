import {Stack} from 'expo-router'
import {WeeklyIFAConsumptionScreen} from '../../../features/odisha/weeklyifaconsumption/screen'
import CustomNavigationBar from '../../../components/CustomNavigationBar'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Weekly IFA Consumption SMS',
          header: (
            props // @ts-ignore
          ) => <CustomNavigationBar {...props} />,
        }}
      />
      <WeeklyIFAConsumptionScreen />
    </>
  )
}
