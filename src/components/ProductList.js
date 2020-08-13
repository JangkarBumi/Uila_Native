import React, {Fragment, useEffect} from 'react';
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

  return <Fragment>{console.log(product)}</Fragment>;
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
