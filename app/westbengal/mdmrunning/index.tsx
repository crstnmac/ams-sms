import {Stack} from 'expo-router'
import {MDMRunning} from '../../../features/westbengal/mdmrunning/screen'
import CustomNavigationBar from '../../../components/CustomNavigationBar'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'MDM Running',
          header: (
            props // @ts-ignore
          ) => <CustomNavigationBar {...props} />,
        }}
      />
      <MDMRunning />
    </>
  )
}
