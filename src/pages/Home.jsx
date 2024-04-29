import { useContext } from "react";
import { Helmet } from "react-helmet";
import { SiteDetailsContext } from "../providers/SiteDetailsProvider";
import { Typewriter } from "react-simple-typewriter";

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

const Home = () => {

    const { siteName } = useContext(SiteDetailsContext);


    return (
        <div>
            <Helmet>
                <title>Home - {siteName}</title>
            </Helmet>
            <div className="hero my-28">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="lg:w-1/2 w-full">
                        <h1 className="text-5xl font-bold">Explore <span className="text-red-600"><Typewriter words={['Southeast Asia', 'Bangladesh', 'Thailand', 'Malaysia', 'Vietnam', 'Cambodia']} /></span></h1>
                        <p className="py-6">Embark on an unforgettable journey through the vibrant cultures and breathtaking landscapes of Southeast Asia.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                    <div className="lg:w-1/2 w-full">
                        <Swiper
                            spaceBetween={50}
                            slidesPerView={3}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                        >
                            <SwiperSlide>Slide 1</SwiperSlide>
                            <SwiperSlide>Slide 2</SwiperSlide>
                            <SwiperSlide>Slide 3</SwiperSlide>
                            <SwiperSlide>Slide 4</SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;