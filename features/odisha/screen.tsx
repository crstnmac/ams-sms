import {useRouter} from 'expo-router'
import {View} from 'react-native'
import {FlatList} from 'react-native-gesture-handler'
import {Button, Text} from 'react-native-paper'

export function OdishaScreen() {
  const childScreens = [
    {
      slug: 'dailyconsumption',
      name: 'Daily meals consumption SMS',
    },
    {
      slug: 'weeklyifaconsumption',
      name: 'Weekly IFA Tablet Consumption SMS',
    },
    {
      slug: 'monthlycookhelper',
      name: 'Monthly Cook/Helper SMS',
    },
    {
      slug: 'monthlyfoodgrainbalance',
      name: 'Monthly Food Grain Balance SMS',
    },
    {
      slug: 'monthlycookcostfund',
      name: 'Monthly Cooking Cost/Fund Balance SMS',
    },
  ]
  const router = useRouter()

  return (
    <FlatList
      keyboardDismissMode="on-drag"
      keyboardShouldPersistTaps="handled"
      contentInsetAdjustmentBehavior="always"
      data={childScreens}
      contentContainerStyle={{
        padding: 16,
      }}
      renderItem={({item}) => (
        <Button
          contentStyle={{
            padding: 6,
          }}
          mode="outlined"
          onPress={() => router.push(`/odisha/${item.slug}`)}
        >
          <Text>{item.name}</Text>
        </Button>
      )}
      ItemSeparatorComponent={() => (
        <View
          style={{
            height: 16,
          }}
        />
      )}
    />
  )
}
