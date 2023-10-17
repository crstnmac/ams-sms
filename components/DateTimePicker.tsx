import {SetStateAction, useCallback, useEffect, useState} from 'react'
import {Button} from 'react-native-paper'
import {
  DatePickerModal,
  DatePickerModalSingleProps,
} from 'react-native-paper-dates'

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
    (params: {date: SetStateAction<Date | undefined>}) => {
      setOpen(false)
      setDate(params.date)
    },
    [setOpen, setDate]
  )

  return (
    <Button
      contentStyle={{
        padding: 6,
      }}
      icon="calendar"
      onPress={() => setOpen(true)}
      mode="contained"
    >
      {date?.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      })}
      <DatePickerModal
        locale="en"
        mode="single"
        visible={open}
        onDismiss={onDismissSingle}
        date={date}
        onConfirm={onConfirmSingle}
        onChange={props.onChange}
      />
    </Button>
  )
}

export default DateTimePicker
