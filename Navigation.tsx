import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// Screens
import { HomeScreen, AddTodoScreen, EditTodoScreen } from './screens'


const HomeStackNavigator = createNativeStackNavigator()


export default function App() {
  return (
    <NavigationContainer>
      <HomeStackNavigator.Navigator
      initialRouteName='HomeScreen'
      >
      <HomeStackNavigator.Screen
        name='HomeScreen'
        component={HomeScreen}
      />
      <HomeStackNavigator.Screen
        name='AddTodoScreen'
        component={AddTodoScreen}
      />
      <HomeStackNavigator.Screen
        name='EditTodoScreen'
        component={EditTodoScreen}
      />
    </HomeStackNavigator.Navigator>
    </NavigationContainer>
  )
}

