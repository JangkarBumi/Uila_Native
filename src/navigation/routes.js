import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {useSelector} from 'react-redux';
import Login from '../components/Login';
import CartScreen from '../screens/CartScreen';
// import SignUp from '../screens/auth/SignUp';
import HomeScreen from '../screens/HomeScreen';
import OrderScreen from '../screens/OrderScreen'

export const Route = () => {
  const Tab = createBottomTabNavigator();
  const token = useSelector((state) => state.auth.token);
  return (
    <NavigationContainer>
      {token ? (
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Cart" component={CartScreen} />
          <Tab.Screen name="Order" component={OrderScreen} />
        </Tab.Navigator>
      ) : (
        <Tab.Navigator>
          <Tab.Screen name="Login" component={Login} />
          {/* <Tab.Screen name="Signup" component={Signup} /> */}
        </Tab.Navigator>
      )}
    </NavigationContainer>
  );
};
