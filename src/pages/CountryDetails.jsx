import { useLoaderData } from "react-router-dom";
import TouristsSpotCard from "../components/TouristsSpotCard";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const CountryDetails = () => {

    const country = useLoaderData();

    const { country_Name, short_description, image } = country;

    const [spots, setSpots] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/tourists-spot?country_Name=${country_Name}`)
            .then(res => res.json())
            .then(data => {
                setSpots(data);
            })
            .catch(error => {
                console.log(error);
                toast.error(error);
            })
    }, [country_Name])

    return (
        <div className="my-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="flex flex-col justify-center">
                    <h1 className="text-4xl mb-4 font-black">{country_Name}</h1>
                    <p className="text-lg">{short_description}</p>
                </div>
                <div>
                    <img src={image} alt="" className="rounded-xl" />
                </div>
            </div>
            <div className="my-28">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold">Tourists Spots in {country_Name}</h2>
                    <p className="max-w-3xl mt-4 mx-auto">Explore all tourists spots located in {country_Name} with stunning sceneries! Book and enjoy the awesome beauty of our world</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {spots.map((spot) => <TouristsSpotCard key={spot._id} spot={spot} ></TouristsSpotCard>)}
                </div>
            </div>
        </div>
    );
};

export default CountryDetails;