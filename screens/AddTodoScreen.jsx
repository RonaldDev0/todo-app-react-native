import { ScrollView, View, Text, Button, StyleSheet, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function AddTodoScreen() {
  const { navigate } = useNavigation()

  return (
    <ScrollView style={style.container}>
      <View style={style.view}>
        <Text style={style.text}> Name todo </Text>
        <TextInput placeholder='example 123' style={style.text}/>
      </View>
      <View style={style.view }>
        <Button
          title='Save Todo'
          onPress={() => navigate('HomeScreen')}
        />
      </View>
    </ScrollView>
  )
}

const style = StyleSheet.create({
  container: {
    padding: 50,
    marginTop: 150
  },
  view : {
    margin: 30
  },
  text: {
    fontSize: 20
  }
})
