import React from 'react'
import Header from './Header';
import AdBlock from './Adblock';
import Slideshow from './Carousel';
import Circlecard from './Circlecard';
import Card from './Card';
import NiveaBlock from './niveaBlock'
import MegaDeals from './MegaDeals'
import BottomTagline from './BottomTagline'
import MyFooter from './Footer'
function Noon() {
    return (
        <div>
            <Header/>
            <div className="mainContainer">
            <AdBlock/>
            <Slideshow/>
            </div>
            <Circlecard/>
            <Card/>
            <NiveaBlock/>
            <MegaDeals/>
            <BottomTagline/>
            <MyFooter/>
        </div>
    )
}

export default Noon
