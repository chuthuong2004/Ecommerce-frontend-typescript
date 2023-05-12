import { IProduct } from '@/models';
import { productApi } from '@/services';
import React, { useEffect, useState } from 'react';

interface Props {
  query?: string;
  sort?: string;
}

const useSearchProducts = ({ query = '', sort }: Props) => {
  console.log({ query, sort });

  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const fetchProducts = async ({ query = '', sort }: Props) => {
    const params = {
      limit: 0,
      page: 1,
      sort: sort,
    };
    setLoading(true);
    const res = await productApi.search(query, params);
    setProducts(res.data);
    setLoading(false);
  };
  useEffect(() => {
    fetchProducts({ query, sort });
  }, [query, sort]);
  console.log({ loading, products });

  return { loading, products };
};

export default useSearchProducts;
