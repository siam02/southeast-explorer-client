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
        fetch(`https://southest-explorer-server-12zvd66g0.vercel.app/country`)
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
                <div className="hero-content grid grid-cols-1 lg:grid-cols-2">
                    <div className="w-full">
                        <h1 className="text-5xl font-bold">Explore <span className="text-red-600"><Typewriter words={['Southeast Asia', 'Bangladesh', 'Thailand', 'Malaysia', 'Vietnam', 'Cambodia']} loop={0} /></span></h1>
                        <p className="py-6">Embark on an unforgettable journey through the vibrant cultures and breathtaking landscapes of Southeast Asia.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                    <div className="w-full flex">
                        <Swiper
                            navigation={true}
                            modules={[Navigation]}
                            loop={true}
                            className="rounded-xl"
                        >
                            {
                                spots.map(spot => <SwiperSlide key={spot._id} className="rounded-xl"><img src={spot.image} className="rounded-xl" alt="" /></SwiperSlide>)
                            }
                        </Swiper>
                    </div>
                </div>
            </div>
            <div className="my-28">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold">Tourists Spots</h2>
                    <p className="max-w-3xl mt-4 mx-auto">Explore a myriad of captivating destinations with our All Tourist Spots section, showcasing the diverse beauty of Southeast Asia and beyond.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {spots.map((spot) => <TouristsSpotCard key={spot._id} spot={spot} showImage={true} showTravelTime={true} showShortDescription={true} showCountryName={true} showTotalVisitor={true}></TouristsSpotCard>)}
                </div>
            </div>
            <div className="my-28">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold">Countries</h2>
                    <p className="max-w-3xl mt-4 mx-auto">Explore diverse cultures and stunning landscapes with our All Countries section, showcasing the best of Southeast Asia and beyond.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {countries.map((country) => <CountryCard key={country._id} country={country} ></CountryCard>)}
                </div>
            </div>
            <div className="my-28">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div>
                        <h2 className="text-4xl font-bold">Adventure Escapes</h2>
                        <div className="mt-4 text-gray-700">
                            <p className="mb-2">Embark on thrilling adventures with our &quot;Adventure Escapes&quot; section, where you can explore the untamed beauty of nature and challenge your limits. Discover hidden treasures through:</p>
                            <ul className="ml-7 mb-2 text-gray-900 list-disc font-medium">
                                <li>Jungle treks</li>
                                <li>Exhilarating water sports</li>
                                <li>Adrenaline-pumping activities</li>
                            </ul>
                            <p>Unleash your inner explorer and immerse yourself in breathtaking landscapes, from dense rainforests to rugged mountains, as you embark on unforgettable journeys.</p>
                        </div>
                    </div>
                    <div>
                        <iframe height="315" className="rounded-xl mx-auto w-full" src="https://www.youtube.com/embed/teLKdgOOlhs?si=wqpBDDZaGgrXzvJz" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-4 py-12">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold">Why Choose Us</h2>
                    <p className="max-w-3xl mt-4 mx-auto">Choose us for your next adventure because we offer expert guides, customized experiences, and prioritize your safety every step of the way.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="p-6">
                            <svg className="h-12 w-12 text-indigo-600 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <h3 className="text-xl font-semibold mb-2">Expert Guides</h3>
                            <p className="text-gray-600">Our experienced guides are passionate about sharing their knowledge and ensuring you have a memorable journey.</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="p-6">
                            <svg className="h-12 w-12 text-indigo-600 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                            <h3 className="text-xl font-semibold mb-2">Customized Experiences</h3>
                            <p className="text-gray-600">We tailor each experience to your preferences, ensuring every moment is personalized and unforgettable.</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="p-6">
                            <svg className="h-12 w-12 text-indigo-600 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            <h3 className="text-xl font-semibold mb-2">Safety First</h3>
                            <p className="text-gray-600">Your safety is our top priority, with rigorous safety measures and expert guidance every step of the way.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;