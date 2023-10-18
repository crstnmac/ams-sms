import {Stack} from 'expo-router'
import {MDMNotRunning} from '../../../features/westbengal/mdmnotrunning/screen'
import CustomNavigationBar from '../../../components/CustomNavigationBar'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'MDM Not Running',
          header: (
            props // @ts-ignore
          ) => <CustomNavigationBar {...props} />,
        }}
      />
      <MDMNotRunning />
    </>
  )
}
