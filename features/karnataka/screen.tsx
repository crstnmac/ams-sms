import React, {useCallback, useEffect, useMemo} from 'react'
import {useInputStore} from '../../features/karnataka/store/useInputStore'
import * as SMS from 'expo-sms'
import DateTimePicker from '../../components/DateTimePicker'
import {ScrollView} from 'react-native-gesture-handler'
import {View} from 'react-native'
import {Button, TextInput} from 'react-native-paper'

export function KarnatakaScreen() {
  const {
    numOfTeachers,
    classes,
    setMessage,
    setTotalNum,
    date,
    setDate,
    setNumOfTeachers,
    setClasses,
  } = useInputStore(
    ({
      numOfTeachers,
      classes,
      setMessage,
      setTotalNum,
      date,
      setNumOfTeachers,
      setDate,
      setClasses,
    }) => ({
      numOfTeachers,
      classes,
      setMessage,
      setTotalNum,
      date,
      setNumOfTeachers,
      setDate,
      setClasses,
    })
  )

  const classValues = Object.values(classes)

  const totalNum = useMemo(() => {
    return classValues.reduce((acc, curr) => {
      const num = parseInt(curr)
      if (isNaN(num)) {
        return acc
      }
      return acc + num
    }, 0)
  }, [classValues])

  const message = useMemo(() => {
    const formattedDate = date?.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    })
    const classValuesString = classValues.join(', ')
    return `KARMDM\n${formattedDate}, ${numOfTeachers}, ${classValuesString}`
  }, [date, numOfTeachers, classValues])

  useEffect(() => {
    setMessage(message)
    setTotalNum(totalNum.toString())
  }, [message, totalNum, setMessage, setTotalNum])

  const handleSendSms = useCallback(() => {
    SMS.sendSMSAsync(['15544'], message)
  }, [message])

  return (
    <ScrollView
      keyboardDismissMode="on-drag"
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
      contentInsetAdjustmentBehavior="always"
      style={{
        padding: 16,
      }}
      contentContainerStyle={{
        paddingBottom: 45,
      }}
    >
      <DateTimePicker
        date={date}
        onChange={(params) => {
          setDate(params.date as Date)
        }}
      />
      <View
        style={{
          height: 16,
        }}
      />
      <TextInput
        placeholder="Enter the number of teachers"
        value={numOfTeachers === '0' ? '' : numOfTeachers}
        onChangeText={setNumOfTeachers}
        keyboardType="numeric"
        label="Enter the number of teachers"
      />
      <View
        style={{
          height: 16,
        }}
      />
      <TextInput
        placeholder="Class 1"
        value={classes.class1}
        onChangeText={(text) => {
          setClasses({...classes, class1: text})
        }}
        label={'Class 1'}
        keyboardType="numeric"
      />
      <View
        style={{
          height: 16,
        }}
      />
      <TextInput
        placeholder="Class 2"
        label={'Class 2'}
        value={classes.class2}
        onChangeText={(text) => {
          setClasses({...classes, class2: text})
        }}
        keyboardType="numeric"
      />
      <View
        style={{
          height: 16,
        }}
      />
      <TextInput
        placeholder="Class 3"
        label={'Class 3'}
        value={classes.class3}
        onChangeText={(text) => {
          setClasses({...classes, class3: text})
        }}
        keyboardType="numeric"
      />
      <View
        style={{
          height: 16,
        }}
      />
      <TextInput
        placeholder="Class 4"
        label={'Class 4'}
        value={classes.class4}
        onChangeText={(text) => {
          setClasses({...classes, class4: text})
        }}
        keyboardType="numeric"
      />
      <View
        style={{
          height: 16,
        }}
      />
      <TextInput
        placeholder="Class 5"
        label={'Class 5'}
        value={classes.class5}
        onChangeText={(text) => {
          setClasses({...classes, class5: text})
        }}
        keyboardType="numeric"
      />
      <View
        style={{
          height: 16,
        }}
      />
      <TextInput
        placeholder="Class 6"
        label={'Class 6'}
        value={classes.class6}
        onChangeText={(text) => {
          setClasses({...classes, class6: text})
        }}
        keyboardType="numeric"
      />
      <View
        style={{
          height: 16,
        }}
      />
      <TextInput
        placeholder="Class 7"
        label={'Class 7'}
        value={classes.class7}
        onChangeText={(text) => {
          setClasses({...classes, class7: text})
        }}
        keyboardType="numeric"
      />
      <View
        style={{
          height: 16,
        }}
      />
      <TextInput
        placeholder="Class 8"
        label={'Class 8'}
        value={classes.class8}
        onChangeText={(text) => {
          setClasses({...classes, class8: text})
        }}
        keyboardType="numeric"
      />
      <View
        style={{
          height: 16,
        }}
      />
      <TextInput
        placeholder="Class 9"
        label={'Class 9'}
        value={classes.class9}
        onChangeText={(text) => {
          setClasses({...classes, class9: text})
        }}
        keyboardType="numeric"
      />
      <View
        style={{
          height: 16,
        }}
      />
      <TextInput
        placeholder="Class 10"
        label={'Class 10'}
        value={classes.class10}
        onChangeText={(text) => {
          setClasses({...classes, class10: text})
        }}
        keyboardType="numeric"
      />
      <View
        style={{
          height: 16,
        }}
      />
      <TextInput
        label={'Total number of students'}
        editable={false}
        value={totalNum.toString()}
      ></TextInput>
      <View
        style={{
          height: 16,
        }}
      />
      <TextInput
        editable={false}
        value={message}
        numberOfLines={2}
        contentStyle={{
          height: 40,
        }}
      />
      <View
        style={{
          height: 16,
        }}
      />
      <Button
        icon="send"
        contentStyle={{flexDirection: 'row-reverse'}}
        mode="contained"
        onPress={handleSendSms}
      >
        Send SMS
      </Button>
    </ScrollView>
  )
}
