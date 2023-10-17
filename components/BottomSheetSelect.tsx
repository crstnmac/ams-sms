import React from 'react'
import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetView,
} from '@gorhom/bottom-sheet'
import {View} from 'react-native'
import {Portal, RadioButton, TextInput} from 'react-native-paper'

export interface Option {
  label: string
  value: string
}

interface BottomSheetSelectProps {
  options: Option[]
  selectedOption: Option | undefined
  onSelect: (value: string) => void
  label: string
}

const BottomSheetSelect = ({
  options,
  selectedOption,
  onSelect,
  label
}: BottomSheetSelectProps) => {
  const sheetRef = React.useRef<BottomSheetModal>(null)

  return (
    <View>
      <TextInput
        editable={false}
        onPressIn={() => {
          sheetRef.current?.present()
        }}
        label={label}
        right={
          <TextInput.Icon
            icon={'chevron-down'}
            onPress={() => {
              sheetRef.current?.present()
            }}
          />
        }
        value={selectedOption?.label ?? 'Select an option'}
      />

      <Portal>
        <BottomSheetModalProvider>
          <BottomSheetModal
            stackBehavior="replace"
            ref={sheetRef}
            enableDynamicSizing={true}
            enablePanDownToClose={true}
            style={{
              backgroundColor: 'white',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 6,
              },
              shadowOpacity: 0.37,
              shadowRadius: 7.49,

              elevation: 12,
            }}
            animateOnMount={true}
            enableDismissOnClose={true}
          >
            <BottomSheetView
              style={{
                padding: 10,
                paddingBottom: 20
              }}
            >
              <RadioButton.Group
                onValueChange={(value) => {
                  const option = options.find(
                    (option) => option.value === value
                  )
                  if (option) {
                    onSelect(option.value)
                    sheetRef.current?.close()
                  }
                }}
                value={selectedOption?.value ?? ''}
              >
                {options.map((option) => (
                  <RadioButton.Item
                    key={option.value}
                    label={option.label}
                    value={option.value}
                    status={
                      selectedOption?.value === option.value
                        ? 'checked'
                        : 'unchecked'
                    }
                  />
                ))}
              </RadioButton.Group>
            </BottomSheetView>
          </BottomSheetModal>
        </BottomSheetModalProvider>
      </Portal>
    </View>
  )
}

export default BottomSheetSelect
