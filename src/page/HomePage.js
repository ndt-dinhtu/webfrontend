import Footer from 'components/Footer/Footer'
import Header from 'components/Header/Header'

import React from 'react'
import Secssion1 from './Secssion1'
import CarouselHome from './Carosel'

export default function HomePage() {
    return (
        <>
            <Header />
            <CarouselHome />
            <Secssion1 />
            <Footer />
        </>
    )
}
