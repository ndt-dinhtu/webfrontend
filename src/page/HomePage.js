import Footer from 'components/Footer/Footer'
import Header from 'components/Header/Header'

import React, { useEffect, useState } from 'react'
import Secssion1 from './Secssion1'
import CarouselHome from './Carosel'
import ProductCarousel from './ProductCarousel'
import productApi from 'api/productApi'
import Catagories from './Catagories'
import Secssion2 from './Secssion2'
import ScrollToTop from 'components/scrollToTop/ScrollToTop'
import OnSaleProductCarousel from './OnSaleProductCarousel'


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
            <OnSaleProductCarousel />
            <Catagories />
            <Secssion2 />
            <Secssion1 />
            <ScrollToTop />
            <Footer />
        </>
    )
}
