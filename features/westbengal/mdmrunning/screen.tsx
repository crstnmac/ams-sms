import {View, Text} from 'react-native'
import React from 'react'
import {Button, TextInput} from 'react-native-paper'
import {Controller, useForm} from 'react-hook-form'
import * as SMS from 'expo-sms'

type MealsServedFormInputs = {
  todaysCoverage: string
  preprimaryCoverage: string
  classItoIVCoverage: string
  classVCoverage: string
  classVItoVIICoverage: string
}

export function MDMRunning() {
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
        `WBMDMS TC${data.todaysCoverage} RC${data.preprimaryCoverage} PC${data.classItoIVCoverage} VC${data.classVCoverage} UV${data.classVItoVIICoverage}`
      )
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
            label="Todays Coverage"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            keyboardType="numeric"
          />
        )}
        name="todaysCoverage"
      />
      {errors.todaysCoverage && <Text>This is required.</Text>}
      <View style={{height: 16}} />

      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            label="Preprimary Coverage"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            keyboardType="numeric"
          />
        )}
        name="preprimaryCoverage"
      />
      {errors.preprimaryCoverage && <Text>This is required.</Text>}
      <View style={{height: 16}} />

      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            label="Class I to IV Coverage"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            keyboardType="numeric"
          />
        )}
        name="classItoIVCoverage"
      />
      {errors.classItoIVCoverage && <Text>This is required.</Text>}
      <View style={{height: 16}} />

      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            label="Class V Coverage"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            keyboardType="numeric"
          />
        )}
        name="classVCoverage"
      />
      {errors.classVCoverage && <Text>This is required.</Text>}
      <View style={{height: 16}} />

      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            label="Class VI to VII Coverage"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            keyboardType="numeric"
          />
        )}
        name="classVItoVIICoverage"
      />
      {errors.classVItoVIICoverage && <Text>This is required.</Text>}
      <View style={{height: 16}} />

      <TextInput
        label="Message"
        value={`WBMDMS ${
          watch('todaysCoverage') ? `TC${watch('todaysCoverage')}` : ''.trim()
        } ${
          watch('preprimaryCoverage')
            ? `RC${watch('preprimaryCoverage')}`
            : ''.trim()
        } ${
          watch('classItoIVCoverage')
            ? `PC${watch('classItoIVCoverage')}`
            : ''.trim()
        } ${
          watch('classVCoverage') ? `VC${watch('classVCoverage')}` : ''.trim()
        } ${
          watch('classVItoVIICoverage')
            ? `UV${watch('classVItoVIICoverage')}`
            : ''.trim()
        }`.trim()}
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
