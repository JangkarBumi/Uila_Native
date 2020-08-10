import React, {useState} from 'react';
import {Alert, Button, Text, TextInput, View} from 'react-native';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View>
      <Text>Login Screen</Text>
      <TextInput
        onChangeText={(email) => setEmail(email)}
        placeholder="Your Email"
      />
      <TextInput
        secureTextEntry={true}
        onChangeText={(password) => setPassword(password)}
        placeholder="Your Password"
      />
      <Button title="Submit" onPress={() => Alert.alert(email, password)} />
    </View>
  );
};

export default Login;
