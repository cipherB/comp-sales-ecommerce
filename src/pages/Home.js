import React from 'react';
import Banner from '../components/Banner'
import Services from '../components/Services'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import i1 from '../images/defaultImg/apple.jpg';
import i2 from '../images/defaultImg/home-office-1.jpg';
import i3 from '../images/defaultImg/home-office-2.jpg';
import i4 from '../images/defaultImg/workstation.jpg';

const photos = [
    {
        name: 'photos1',
        src: i1
    },
    {
        name: 'photos2',
        src: i2
    },
    {
        name: 'photos3',
        src: i3
    },
    {
        name: 'photos4',
        src: i4
    }
]
export const Home = () => {

    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        arrows: true,
        slidesToScroll: 1,
        className: "slides"
    }
    return (
        <div >
            <Slider {...settings} >
                {photos.map((items)=> {
                    return(
                        <>
                            <div className="slide" >
                                <span>
                                    <Banner title="Hello" subtitle="Welcome to our computer sales site" />
                                </span>
                                <img width="100%" src={items.src} alt="no display" />
                            </div>
                        </>
                    )
                })}
            </Slider>
            <Services />
        </div>
    )
}

export default Home