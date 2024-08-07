import Footer from 'components/Footer/Footer'
import Header from 'components/Header/Header'

import React, { useEffect, useState } from 'react'
import Secssion1 from './Secssion1'
import CarouselHome from './Carosel'
import ProductCarousel from './ProductCarousel'
import productApi from 'api/productApi'
import Catagories from './Catagories'
import Secssion2 from './Secssion2'


export default function HomePage() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const { data } = await productApi.getAll({ _page: 10, _limit: 12 });
                setProducts(data);
            } catch (error) {
                console.log('Failed to fetch products: ', error);
            }
        })();
    }, []);
    return (
        <>
            <Header />
            <CarouselHome />
            <ProductCarousel products={products} />
            <Catagories />
            <Secssion2 />
            <Secssion1 />

            <Footer />
        </>
    )
}
