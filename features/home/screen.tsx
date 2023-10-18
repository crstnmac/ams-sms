import {Stack, useRouter} from 'expo-router'
import {View} from 'react-native'
import {FlatList} from 'react-native-gesture-handler'
import {Button, Text} from 'react-native-paper'
import CustomNavigationBar from '../../components/CustomNavigationBar'

export function HomeScreen() {
  const states = [
    {
      name: 'Karnataka',
      slug: 'karnataka',
    },
    {
      name: 'Odisha',
      slug: 'odisha',
    },
    {
      name: 'West Bengal',
      slug: 'westbengal',
    },
  ]

  const router = useRouter()

  return (
    <>
      <Stack.Screen
        options={{
          title: 'AMS-SMS',
          headerShown: true,
          header: (
            props // @ts-ignore
          ) => <CustomNavigationBar {...props} />,
        }}
      />
      <FlatList
        keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps="handled"
        contentInsetAdjustmentBehavior="always"
        style={{
          flex: 1,
        }}
        contentContainerStyle={{
          padding: 16,
        }}
        ListHeaderComponent={() => (
          <View
            style={{
              marginBottom: 16,
            }}
          >
            <Text
              style={{
                fontSize: 30,
                fontWeight: '500',
                textAlign: 'center',
              }}
            >
              Select your state
            </Text>
          </View>
        )}
        data={states}
        renderItem={({item}) => (
          <Button
            mode="contained"
            contentStyle={{
              padding: 16,
            }}
            labelStyle={{
              fontSize: 20,
            }}
            style={{
              borderRadius: 26,
            }}
            key={item.slug}
            onPress={() => router.push(`/${item.slug}`)}
          >
            {item.name}
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
    </>
  )
}
