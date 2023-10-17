import {View, Text} from 'react-native'
import React from 'react'
import {Button, TextInput} from 'react-native-paper'
import {Controller, useForm} from 'react-hook-form'
import * as SMS from 'expo-sms'
import BottomSheetSelect from '../../../components/BottomSheetSelect'

type MDMNotRunningFormInputs = {
  totalNumOfStudentsPresent: string
  reason: string
}

export function MDMNotRunning() {
  const {
    handleSubmit,
    watch,
    control,
    formState: {errors},
  } = useForm<MDMNotRunningFormInputs>({
    mode: 'onChange',
    defaultValues: {
      reason: '0',
    },
  })

  async function onSubmit(data: MDMNotRunningFormInputs) {
    const smsAvailable = await SMS.isAvailableAsync()
    if (smsAvailable) {
      SMS.sendSMSAsync(
        ['15544'],
        `WBMDMS NM RN${data.reason}`
      )
    } else {
      console.log('SMS is not available on this device')
    }
  }

  const reasons = [
    {
      value: '1',
      label: 'Non availability of Food grains',
    },
    {
      value: '2',
      label: 'Absence of Cook-Cum-Helpers',
    },
    {
      value: '3',
      label: 'Non Availability of funds/cooking cost/ Ingredients',
    },
    {
      value: '4',
      label: 'Food not arrived from NGO/SHG',
    },
    {
      value: '5',
      label: 'Holiday in School',
    },
    {
      value: '6',
      label: 'Others',
    },
  ]

  return (
    <View
      style={{
        padding: 16,
      }}
    >

      <Controller
        control={control}
        render={({field: {onChange, onBlur, value, name}}) => (
          <BottomSheetSelect
            label="Please choose a reason for not serving"
            selectedOption={reasons.find((r) => r.value === value)}
            onSelect={onChange}
            options={reasons}
          />
        )}
        name="reason"
      />
      {errors.totalNumOfStudentsPresent && <Text>This is required.</Text>}
      <View style={{height: 16}} />

      <TextInput
        label="Message"
        value={`WBMDMS NM RN${watch('reason')}`}
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
