import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// Screens
import { HomeScreen, AddTodoScreen, EditTodoScreen } from './screens'

// Icons
import { MaterialCommunityIcons, Entypo, Ionicons } from 'react-native-vector-icons'

const Tab = createBottomTabNavigator()
const HomeStackNavigator = createNativeStackNavigator()

function HomeStack () {
  return (
    <HomeStackNavigator.Navigator
      initialRouteName='HomeScreen'
    >
      <HomeStackNavigator.Screen
        name='HomeScreen'
        component={HomeScreen}
      />
      <HomeStackNavigator.Screen
        name='Add Todo'
        component={AddTodoScreen}
      />
    </HomeStackNavigator.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Home'
        screenOptions={{
          tabBarActiveTintColor: 'purple'
        }}
      >
        <Tab.Screen
          name='Home'
          component={HomeStack}
          options={{
            tabBarLabel: 'Feed',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name='home' color={color} size={size} />
            ),
            tabBarBadge: 5,
            headerShown: false
          }}
        />
        <Tab.Screen
          name='Add Todo'
          component={AddTodoScreen}
          options={{
            tabBarLabel: 'Explore',
            tabBarIcon: ({ color, size }) => (
              <Entypo  name='plus' color={color} size={size}/>
            )
          }}
        />
        <Tab.Screen
          name='Edit Todo'
          component={EditTodoScreen}
          options={{
            tabBarLabel: 'Chat',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name='chatbox'  color={color} size={size} />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

