import { View, Text, ScrollView } from 'react-native'

// Data
import { Todos, todo } from '../database/Todos'

// Components
import Todo from './Todo'

function Background() {
  return (
    <View>
      <Text>
        You don't have to do
      </Text>
    </View>
  )
}

export default function TodoList() {
  return (
    Todos?.map(({ id, name }: todo) => <Todo key={id} name={name} />)
  )
}
