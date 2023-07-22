import { Button, Input, Label, ScrollView, Text, TextArea, Theme, XStack, YStack } from '@my/ui'
import React, { useCallback, useEffect, useMemo } from 'react'
import { useInputStore } from 'app/store/useInputStore'
import * as SMS from 'expo-sms'
import { Send } from '@tamagui/lucide-icons'
import DateTimePicker from 'app/components/DateTimePicket'

export function HomeScreen() {
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

  const totalNum = useMemo(
    () =>
      classValues.reduce((total, num) => {
        const parsedNum = Number(num)
        return isNaN(parsedNum) ? total : total + parsedNum
      }, 0),
    [classValues]
  )

  const message = useMemo(() => {
    const formattedDate = date?.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    })
    const classValuesString = classValues.join(', ')
    return `KARMDM ${formattedDate}, ${numOfTeachers}, ${classValuesString}`
  }, [date, numOfTeachers, classValues])

  useEffect(() => {
    setMessage(message)
    setTotalNum(totalNum.toString())
  }, [message, totalNum, setMessage, setTotalNum])

  const handleSendSms = useCallback(() => {
    SMS.sendSMSAsync(['15544'], message)
  }, [message])

  return (
    <ScrollView>
      <YStack f={1} p="$4" space>
        <Label fontSize={'$8'} fontWeight={'700'} textAlign="center">
          KARNATAKA
        </Label>
        <DateTimePicker
          date={date}
          onConfirm={(date) => {
            setDate(date)
          }}
          type="date"
        />
        <Input
          placeholder="Enter the number of teachers"
          value={numOfTeachers === '0' ? '' : numOfTeachers}
          onChangeText={setNumOfTeachers}
          keyboardType="numeric"
        />
        <Label>Enter the number of students in each class</Label>
        <XStack space ai={'center'}>
          <Text>Class 1</Text>
          <Input
            placeholder="Class 1"
            f={1}
            value={classes.class1}
            onChangeText={(text) => {
              setClasses({ ...classes, class1: text })
            }}
            keyboardType="numeric"
          />
        </XStack>
        <XStack space ai={'center'}>
          <Text>Class 2</Text>
          <Input
            placeholder="Class 2"
            f={1}
            value={classes.class2}
            onChangeText={(text) => {
              setClasses({ ...classes, class2: text })
            }}
            keyboardType="numeric"
          />
        </XStack>
        <XStack space ai={'center'}>
          <Text>Class 3</Text>
          <Input
            placeholder="Class 3"
            f={1}
            value={classes.class3}
            onChangeText={(text) => {
              setClasses({ ...classes, class3: text })
            }}
            keyboardType="numeric"
          />
        </XStack>
        <XStack space ai={'center'}>
          <Text>Class 4</Text>
          <Input
            placeholder="Class 4"
            f={1}
            value={classes.class4}
            onChangeText={(text) => {
              setClasses({ ...classes, class4: text })
            }}
            keyboardType="numeric"
          />
        </XStack>
        <XStack space ai={'center'}>
          <Text>Class 5</Text>
          <Input
            placeholder="Class 5"
            f={1}
            value={classes.class5}
            onChangeText={(text) => {
              setClasses({ ...classes, class5: text })
            }}
            keyboardType="numeric"
          />
        </XStack>
        <XStack space ai={'center'}>
          <Text>Class 6</Text>
          <Input
            placeholder="Class 6"
            f={1}
            value={classes.class6}
            onChangeText={(text) => {
              setClasses({ ...classes, class6: text })
            }}
            keyboardType="numeric"
          />
        </XStack>
        <XStack space ai={'center'}>
          <Text>Class 7</Text>
          <Input
            placeholder="Class 7"
            f={1}
            value={classes.class7}
            onChangeText={(text) => {
              setClasses({ ...classes, class7: text })
            }}
            keyboardType="numeric"
          />
        </XStack>
        <XStack space ai={'center'}>
          <Text>Class 8</Text>
          <Input
            placeholder="Class 8"
            f={1}
            value={classes.class8}
            onChangeText={(text) => {
              setClasses({ ...classes, class8: text })
            }}
            keyboardType="numeric"
          />
        </XStack>
        <XStack space ai={'center'}>
          <Text>Class 9</Text>
          <Input
            placeholder="Class 9"
            f={1}
            value={classes.class9}
            onChangeText={(text) => {
              setClasses({ ...classes, class9: text })
            }}
            keyboardType="numeric"
          />
        </XStack>
        <XStack space ai={'center'}>
          <Text>Class 10</Text>
          <Input
            placeholder="Class 10"
            f={1}
            value={classes.class10}
            onChangeText={(text) => {
              setClasses({ ...classes, class10: text })
            }}
            keyboardType="numeric"
          />
        </XStack>
        <Label>Total Number of Students:</Label>
        <Input editable={false}>{totalNum}</Input>
        <TextArea editable={false} value={message} numberOfLines={2} />
        <Theme name={'green_alt1'}>
          <Button onPress={handleSendSms} iconAfter={Send}>
            Send SMS
          </Button>
        </Theme>
      </YStack>
    </ScrollView>
  )
}
