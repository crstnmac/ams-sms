import CustomNavigationBar from '../components/CustomNavigationBar'
import {HomeScreen} from '../features/home/screen'
import { Stack } from 'expo-router'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'AMS-SMS',
          header: (
            props // @ts-ignore
          ) => <CustomNavigationBar {...props} />,
        }}
      />
      <HomeScreen />
    </>
  )
}
