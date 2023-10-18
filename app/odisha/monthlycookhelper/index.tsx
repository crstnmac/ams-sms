import {Stack} from 'expo-router'
import {MonthlyCookHelper} from '../../../features/odisha/monthlycookhelper/screen'
import CustomNavigationBar from '../../../components/CustomNavigationBar'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Monthly Cook/Helper SMS',
          header: (
            props // @ts-ignore
          ) => <CustomNavigationBar {...props} />,
        }}
      />
      <MonthlyCookHelper />
    </>
  )
}
