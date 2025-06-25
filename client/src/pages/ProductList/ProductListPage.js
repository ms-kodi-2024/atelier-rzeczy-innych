import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProducts } from '../../features/products/productsSlice';
import ProductList from '../../components/ProductList/ProductList';

const ProductListPage = () => {
  const dispatch = useDispatch();
  const { slug } = useParams();
  const products = useSelector((state) => state.products.items);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const filteredProducts = slug
    ? products.filter((product) => product.category === slug)
    : products;

  return (
    <div>
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default ProductListPage;
