import React from 'react';
import { Zoom  } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const images = [
  'https://k.nooncdn.com/cms/pages/20210617/eea586c5b3ebba2bdb906fad7d20440e/en_banner-01.gif',
  'https://k.nooncdn.com/cms/pages/20210617/fe39881258642fbd5a9776d830255e0f/en_noon-slider-ENBD-01.png',
  'https://k.nooncdn.com/cms/pages/20201020/79a2e38e27583a1a5db92d21097f3b8e/en_slider-emaar-uae-emaar.png',
  'https://k.nooncdn.com/cms/pages/20210618/05d06610a37178740842157e152cc461/en_slider-01-2DAYS.png',
  'https://k.nooncdn.com/cms/pages/20210617/fb9afb6b163f90f9add09d4e54456e26/en_hero.gif',
];

const Slideshow = () => {
    return (
      <div className="slide-container">
        <Zoom  scale={0.4}>
          {
            images.map((each, index) => <img key={index} style={{width: "100%"}} src={each} />)
          }
        </Zoom >
      </div>
    )
}

export default Slideshow;
