import {View} from 'react-native'
import React from 'react'
import {Button, TextInput,Text} from 'react-native-paper'
import {Controller, useForm} from 'react-hook-form'
import * as SMS from 'expo-sms'
import BottomSheetSelect from '../../../components/BottomSheetSelect'

type MonthlyCookFormInputs = {
  numOfHelpers: string
  totalNumberOfAbsents: string
}

export function MonthlyCookHelper() {
  const {
    handleSubmit,
    watch,
    control,
    formState: {errors},
  } = useForm<MonthlyCookFormInputs>()

  const numberOfHelpers = [
    {
      value: '1',
      label: '1',
    }, {
      value: '2',
      label: '2',
    }, {
      value: '3',
      label: '3',
    },
    {
      value: '4',
      label: '4',
    },
    {
      value: '5',
      label: '5',
    }, {
      value: '6',
      label: '6',
    }, {
      value: '7',
      label: '7',
    }
  ]

  async function onSubmit(data: MonthlyCookFormInputs) {
    const smsAvailable = await SMS.isAvailableAsync()
    if (smsAvailable) {
      SMS.sendSMSAsync(
        ['15544'],
        `MDMODI C${data.numOfHelpers}A${data.totalNumberOfAbsents}`
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
      <Text
        style={{
          fontSize: 24,
          fontWeight: '500',
          textAlign: 'center',
        }}
      >
        Monthly CCH absent report
      </Text>
      <View style={{height: 16}} />
      <Controller
        control={control}
        render={({field: {onChange, onBlur, value, name}}) => (
          <BottomSheetSelect
            label="Please Choose cook cum helper"
            selectedOption={numberOfHelpers.find((r) => r.value === value)}
            onSelect={onChange}
            options={numberOfHelpers}
          />
        )}
        name="numOfHelpers"
      />
      {errors.numOfHelpers && <Text>This is required.</Text>}
      <View style={{height: 16}} />

      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            label="Total number of absents"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            keyboardType="numeric"
          />
        )}
        name="totalNumberOfAbsents"
      />
      {errors.totalNumberOfAbsents && <Text>This is required.</Text>}
      <View style={{height: 16}} />

      <TextInput
        label="Message"
        value={`MDMODI C${watch('numOfHelpers') ? watch('numOfHelpers') : 0}A${
          watch('totalNumberOfAbsents') ? watch('totalNumberOfAbsents') : 0
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
