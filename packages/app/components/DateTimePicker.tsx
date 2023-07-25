import { useCallback, useEffect, useState } from 'react'
import { Pressable } from 'react-native'
import { XStack, Input } from 'tamagui'
import { Calendar } from '@tamagui/lucide-icons'
import { DatePickerModal, DatePickerModalSingleProps } from 'react-native-paper-dates'

interface datePickerProps {
  date?: Date
  onChange?: DatePickerModalSingleProps['onChange']
}

const DateTimePicker = function DatePicker(props: datePickerProps) {
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setDate(props.date)
  }, [props.date])

  const onDismissSingle = useCallback(() => {
    setOpen(false)
  }, [setOpen])

  const onConfirmSingle = useCallback(
    (params) => {
      setOpen(false)
      setDate(params.date)
    },
    [setOpen, setDate]
  )

  return (
    <Pressable onPress={() => setOpen(true)}>
      <XStack alignItems={'center'} justifyContent="flex-end">
        <Input pointerEvents="none" editable={false} flexGrow={1}>
          {date?.toLocaleDateString('en-GB', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
          })}
        </Input>

        <XStack paddingRight={10} position="absolute">
          <Calendar />
        </XStack>
      </XStack>
      <DatePickerModal
        locale="en"
        mode="single"
        visible={open}
        onDismiss={onDismissSingle}
        date={date}
        onConfirm={onConfirmSingle}
        onChange={props.onChange}
      />
    </Pressable>
  )
}

export default DateTimePicker
