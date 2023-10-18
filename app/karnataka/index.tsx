import CustomNavigationBar from '../../components/CustomNavigationBar'
import {KarnatakaScreen} from '../../features/karnataka/screen'
import {Stack} from 'expo-router'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Karnataka',
          header: (props) => // @ts-ignore
            <CustomNavigationBar {...props} />,
        }}
      />
      <KarnatakaScreen />
    </>
  )
}
