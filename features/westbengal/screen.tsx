import {useRouter} from 'expo-router'
import {View} from 'react-native'
import {FlatList} from 'react-native-gesture-handler'
import {Button, Text} from 'react-native-paper'

export function WestBengalScreen() {
  const childScreens = [
    {
      slug: 'mdmrunning',
      name: 'MDM Running',
    },
    {
      slug: 'mdmnotrunning',
      name: 'MDM Not Running',
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
          onPress={() => router.push(`/westbengal/${item.slug}`)}
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
