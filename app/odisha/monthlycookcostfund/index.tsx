import {Stack} from 'expo-router'
import {MonthlyCookCostFund} from '../../../features/odisha/monthlycookcostfund/screen'
import CustomNavigationBar from '../../../components/CustomNavigationBar'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Monthly Cooking Cost Fund SMS',
          header: (
            props // @ts-ignore
          ) => <CustomNavigationBar {...props} />,
        }}
      />
      <MonthlyCookCostFund />
    </>
  )
}
