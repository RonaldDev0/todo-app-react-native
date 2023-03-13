import { View, Text, StyleSheet, Button, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'

// Componets
import { TodoList } from '../components'


export default function HomeScreen() {
  const { navigate } = useNavigation()

  return (
  <ScrollView style={style.container}>
    <TodoList />
    <View>
      <Button title='New Todo' onPress={() => navigate('AddTodoScreen')} />
    </View>
  </ScrollView>
  )
}

const style = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 4,
  }
})
