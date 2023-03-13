import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function Todo({ name }) {
  const { navigate } = useNavigation()

  return (
    <View>
      <TouchableOpacity
        onPress={() => navigate('EditTodoScreen')}
      >
        <Text>
          {name}
        </Text>
      </TouchableOpacity>
    </View>
  )
}
