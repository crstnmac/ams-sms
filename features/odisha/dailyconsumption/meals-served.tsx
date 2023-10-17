import {View, Text} from 'react-native'
import React from 'react'
import {Button, TextInput} from 'react-native-paper'
import {Controller, useForm} from 'react-hook-form'
import * as SMS from 'expo-sms'

type MealsServedFormInputs = {
  totalNumOfStudentsPresent: string
  totalNumOfMealsServed: string
}

export default function MealsServed() {
  const {
    handleSubmit,
    watch,
    control,
    formState: {errors},
  } = useForm<MealsServedFormInputs>()

  async function onSubmit(data: MealsServedFormInputs) {
    const smsAvailable = await SMS.isAvailableAsync()
    if (smsAvailable) {
      SMS.sendSMSAsync(
        ['15544'],
        `MDMODI M${data.totalNumOfMealsServed}Y${data.totalNumOfStudentsPresent}`
      )
    } else {
      console.log('SMS is not available on this device')
    }
  }

  return (
    <View>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            label="Total number of meals served"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            keyboardType="numeric"
          />
        )}
        name="totalNumOfMealsServed"
      />
      {errors.totalNumOfMealsServed && <Text>This is required.</Text>}
      <View style={{height: 16}} />

      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            label="Total number of students present"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            keyboardType="numeric"
          />
        )}
        name="totalNumOfStudentsPresent"
      />
      {errors.totalNumOfStudentsPresent && <Text>This is required.</Text>}
      <View style={{height: 16}} />

      <TextInput
        label="Message"
        value={`MDMODI M${
          watch('totalNumOfMealsServed') ? watch('totalNumOfMealsServed') : 0
        }Y${
          watch('totalNumOfStudentsPresent')
            ? watch('totalNumOfStudentsPresent')
            : 0
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
