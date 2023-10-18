import {Stack} from 'expo-router'
import {WestBengalScreen} from '../../features/westbengal/screen'
import CustomNavigationBar from '../../components/CustomNavigationBar'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'West Bengal',
          header: (
            props // @ts-ignore
          ) => <CustomNavigationBar {...props} />,
        }}
      />
      <WestBengalScreen />
    </>
  )
}
