import * as React from 'react';
import {Button, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {logout} from '../actions/auth';
import ProductList from '../components/ProductList';

const HomeScreen = ({logout, auth: {isAuthenticated}}) => {
  return isAuthenticated ? (
    <View>
      <Text>Welcome!</Text>

      <Button title="Sign out" onPress={() => logout()} />
      <ProductList />
    </View>
  ) : (
    <View>
      <ProductList />
    </View>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {logout})(HomeScreen);
