import {Stack} from 'expo-router'
import {DailyConsumptionScreen} from '../../../features/odisha/dailyconsumption/screen'
import CustomNavigationBar from '../../../components/CustomNavigationBar'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Daily Meals Consumption SMS',
          header: (
            props // @ts-ignore
          ) => <CustomNavigationBar {...props} />,
        }}
      />
      <DailyConsumptionScreen />
    </>
  )
}
