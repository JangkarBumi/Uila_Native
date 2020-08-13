import * as React from 'react';
import {Button, TextInput, View} from 'react-native';
import {connect} from 'react-redux';
import {login} from '../actions/auth';

const SignInScreen = ({login}) => {
  const [email, setEmail] = React.useState('zeha@mail.com');
  const [password, setPassword] = React.useState('123456');

  return (
    <View>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Sign in" onPress={() => login({email, password})} />
    </View>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, {login})(SignInScreen);
