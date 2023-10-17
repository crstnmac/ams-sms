import {useState} from 'react'
import {View} from 'react-native'
import {ScrollView} from 'react-native-gesture-handler'
import BottomSheetSelect, {Option} from '../../../components/BottomSheetSelect'
import IFANotServed from './ifa-not-served'
import IFAServed from './ifa-served'

export function WeeklyIFAConsumptionScreen() {
  const options = [
    {value: 'served', label: 'IFA Tablets Served'},
    {value: 'notServed', label: 'IFA Tablets Not Served'},
  ]

  const [selectedOption, setSelectedOption] = useState<Option>(options[0])

  const handleSelect = (value: string) => {
    const option = options.find((option) => option.value === value)
    if (option) {
      setSelectedOption(option)
    }
  }

  return (
    <View
      style={{
        padding: 16,
        flex: 1,
      }}
    >
      <BottomSheetSelect
        label="Please choose an option"
        selectedOption={selectedOption}
        onSelect={handleSelect}
        options={options}
      />
      <View
        style={{
          height: 16,
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        {selectedOption.value === 'served' ? <IFAServed /> : <IFANotServed />}
      </ScrollView>
    </View>
  )
}
