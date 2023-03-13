import { View, Text, StyleSheet, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'


export default function HomeScreen() {
  const { navigate } = useNavigation()
  return (
    <View>
      <Text
        style={{
          fontSize: 30,
          textAlign: 'center',
          marginTop: '20%'
        }}
      >
        HomeScreen
      </Text>
      <Button
        title='Go to Add Todo Screen'
        onPress={() => navigate('Add Todo')}
      />
    </View>
  )
}
