import { ScrollView, View, Text, Button, StyleSheet, TextInput } from 'react-native'

export default function EditTodoScreen() {
  return (
    <ScrollView>
      <View>
        <Text> Name todo </Text>
        <TextInput>
          <Text>Name Todo</Text>
        </TextInput>
      </View>
    </ScrollView>
  )
}
