import {View, Text} from 'react-native'
import React from 'react'
import {Button, TextInput} from 'react-native-paper'
import {Controller, useForm} from 'react-hook-form'
import * as SMS from 'expo-sms'

type FoodFormInputs = {
  available: string
  used: string
}

export function MonthlyFoodGrain() {
  const {
    handleSubmit,
    watch,
    control,
    formState: {errors},
  } = useForm<FoodFormInputs>()

  async function onSubmit(data: FoodFormInputs) {
    const smsAvailable = await SMS.isAvailableAsync()
    if (smsAvailable) {
      SMS.sendSMSAsync(['15544'], `MDMODI F${data.available}U${data.used}`)
    } else {
      console.log('SMS is not available on this device')
    }
  }

  return (
    <View
      style={{
        padding: 16,
      }}
    >
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            label="Food grain available in KG"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            keyboardType="numeric"
          />
        )}
        name="available"
      />
      {errors.available && <Text>This is required.</Text>}
      <View style={{height: 16}} />

      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            label="Food grain Used in KG"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            keyboardType="numeric"
          />
        )}
        name="used"
      />
      {errors.used && <Text>This is required.</Text>}
      <View style={{height: 16}} />

      <TextInput
        label="Message"
        value={`MDMODI F${watch('available') ? watch('available') : 0}U${
          watch('used') ? watch('used') : 0
        }`}
      />

      <View style={{height: 16}} />

      <Button
        icon="send"
        mode="contained"
        onPress={handleSubmit(onSubmit)}
        contentStyle={{flexDirection: 'row-reverse'}}
      >
        Send SMS
      </Button>
    </View>
  )
}
