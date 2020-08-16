import React, {useEffect} from 'react';
import {Button, Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {addToCart, updateCart} from '../actions/cart';
import {
  filterProducts,
  getProductCategories,
  getProducts,
  resetFilterProducts,
} from '../actions/product';

const ProductList = ({
  getProducts,
  loading,
  product,
  filteredProducts,
  resetFilterProducts,
  filterProducts,
  getProductCategories,
  categories,
  addToCart,
  isAuthenticated,
  cart,
  updateCart,
}) => {
  useEffect(() => {
    getProducts();
    getProductCategories();
  }, [getProducts, getProductCategories]);

  useEffect(() => {
    resetFilterProducts();
  }, []);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
      marginLeft: 20,
    },
    productImage: {
      width: 200,
      height: 200,
    },
    productContainer: {
      marginBottom: 30,
    },
  });

  return (
    <ScrollView style={styles.container}>
      {product.map((e) => {
        return (
          <View key={e._id} style={styles.productContainer}>
            <Image
              source={{
                uri: e.image,
              }}
              style={styles.productImage}
            />
            <Text>{e.title}</Text>
            <Text>{`$ ${e.price}`}</Text>
            <Text>{e.description}</Text>
            <Button title="Order Now" />
          </View>
        );
      })}
    </ScrollView>
  );
};

const mapStateToProps = (state) => ({
  product: state.product.products,
  loading: state.product.loading,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, {
  getProducts,
  filterProducts,
  resetFilterProducts,
  getProductCategories,
  addToCart,
  updateCart,
})(ProductList);
