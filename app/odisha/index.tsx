import CustomNavigationBar from '../../components/CustomNavigationBar'
import {OdishaScreen} from '../../features/odisha/screen'
import {Stack} from 'expo-router'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Odisha',
          header: (
            props // @ts-ignore
          ) => <CustomNavigationBar {...props} />,
        }}
      />
      <OdishaScreen />
    </>
  )
}
