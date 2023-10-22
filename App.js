import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import NewPage from './screens/NewPage'; 
import HomePage from './screens/HomePage';
import RegPage from './screens/RegPage';
import Profile from './screens/Profile';

const Stack = createNativeStackNavigator();

const customScreenInterpolator = ({ current, layouts }) => {
  return {
    cardStyle: {
      transform: [
        {
          translateX: current.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [layouts.screen.width, 0],
          }),
        },
      ],
    },
  };
};


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false, 
        }}
      >
        <Stack.Screen 
          name="HomeScreen" 
          component={HomeScreen} 
          options={{
            gestureEnabled: false, 
          }}
        />
        <Stack.Screen 
          name="NewPage" 
          component={NewPage} 
          options={{
            gestureEnabled: true, 
          }}
        />
        <Stack.Screen 
          name="HomePage" 
          component={HomePage} 
          options={{
            gestureEnabled: false,
             cardStyleInterpolator: customScreenInterpolator,
          }}
        />
        <Stack.Screen 
          name="RegPage" 
          component={RegPage} 
          options={{
          gestureEnabled: true,
          }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            gestureEnabled: true,
            cardStyleInterpolator: customScreenInterpolator,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
