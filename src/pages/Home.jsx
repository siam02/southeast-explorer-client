import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { SiteDetailsContext } from "../providers/SiteDetailsProvider";
import { Typewriter } from "react-simple-typewriter";

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import { useLoaderData } from "react-router-dom";

import { Navigation } from 'swiper/modules';
import TouristsSpotCard from "../components/TouristsSpotCard";
import CountryCard from "../components/CountryCard";
import { toast } from "react-toastify";

const Home = () => {

    const { siteName } = useContext(SiteDetailsContext);
    const spots = useLoaderData();
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/country`)
            .then(res => res.json())
            .then(data => {
                setCountries(data);
            })
            .catch(error => {
                console.log(error);
                toast.error(error);
            })
    }, [])


    return (
        <div>
            <Helmet>
                <title>Home - {siteName}</title>
            </Helmet>
            <div className="hero my-28">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="lg:w-1/2 w-full">
                        <h1 className="text-5xl font-bold">Explore <span className="text-red-600"><Typewriter words={['Southeast Asia', 'Bangladesh', 'Thailand', 'Malaysia', 'Vietnam', 'Cambodia']} loop={0} /></span></h1>
                        <p className="py-6">Embark on an unforgettable journey through the vibrant cultures and breathtaking landscapes of Southeast Asia.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                    <div className="lg:w-1/2 w-full">
                        <Swiper
                            navigation={true}
                            modules={[Navigation]}
                            loop={true}
                            className="rounded-xl"
                        >
                            {
                                spots.map(spot => <SwiperSlide key={spot._id}><img src={spot.image} className="rounded-xl" alt="" /></SwiperSlide>)
                            }
                        </Swiper>
                    </div>
                </div>
            </div>
            <div className="my-28">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold">All Tourists Spots</h2>
                    <p className="max-w-3xl mt-4 mx-auto">Explore a myriad of captivating destinations with our All Tourist Spots section, showcasing the diverse beauty of Southeast Asia and beyond.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {spots.map((spot) => <TouristsSpotCard key={spot._id} spot={spot} ></TouristsSpotCard>)}
                </div>
            </div>
            <div className="my-28">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold">All Countries</h2>
                    <p className="max-w-3xl mt-4 mx-auto">Explore diverse cultures and stunning landscapes with our All Countries section, showcasing the best of Southeast Asia and beyond.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {countries.map((country) => <CountryCard key={country._id} country={country} ></CountryCard>)}
                </div>
            </div>
        </div>
    );
};

export default Home;