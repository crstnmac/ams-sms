import {View, Text} from 'react-native'
import React from 'react'
import {Button, TextInput} from 'react-native-paper'
import {Controller, useForm} from 'react-hook-form'
import * as SMS from 'expo-sms'
import BottomSheetSelect from '../../../components/BottomSheetSelect'

type MealsNotServedFormInputs = {
  totalNumOfStudentsPresent: string
  reason: string
}

export default function MealsNotServed() {
  const {
    handleSubmit,
    watch,
    control,
    formState: {errors},
  } = useForm<MealsNotServedFormInputs>({
    mode: 'onChange',
    defaultValues: {
      totalNumOfStudentsPresent: '0',
      reason: '0',
    },
  })

  async function onSubmit(data: MealsNotServedFormInputs) {
    const smsAvailable = await SMS.isAvailableAsync()
    if (smsAvailable) {
      SMS.sendSMSAsync(
        ['15544'],
        `MDMODI M${data.totalNumOfStudentsPresent}N${data.reason}`
      )
    } else {
      console.log('SMS is not available on this device')
    }
  }

  const reasons = [
    {
      value: '1',
      label: 'Funds not available',
    },
    {
      value: '2',
      label: 'Food Grains not available',
    },
    {
      value: '3',
      label: 'Fuel Not available',
    },
    {
      value: '4',
      label: 'CCH Absent',
    },
    {
      value: '5',
      label: 'Dispute between Agencies',
    },
    {
      value: '6',
      label: 'Court Case',
    },
    {
      value: '7',
      label: 'Natural Calamity',
    },
    {
      value: '8',
      label: 'Non-service by Agencies',
    },
    {
      value: '9',
      label: 'Others',
    },
  ]

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
            keyboardType="numeric"
            value={value}
          />
        )}
        name="totalNumOfStudentsPresent"
      />
      {errors.totalNumOfStudentsPresent && <Text>This is required.</Text>}
      <View style={{height: 16}} />

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
        value={`MDMODI M${
          watch('totalNumOfStudentsPresent')
            ? watch('totalNumOfStudentsPresent')
            : 0
        }N${watch('reason') ? watch('reason') : 0}`}
      />

      <View style={{height: 16}} />

      <Button
        icon="send"
        mode="contained"
        onPress={handleSubmit(onSubmit)}
        contentStyle={{flexDirection: 'row-reverse', padding: 6}}
      >
        Send SMS
      </Button>
    </View>
  )
}
