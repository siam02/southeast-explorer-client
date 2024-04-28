import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useLoaderData } from "react-router-dom";
import { SiteDetailsContext } from "../providers/SiteDetailsProvider";
import TouristsSpotCard from "../components/TouristsSpotCard";
import { toast } from "react-toastify";

const AllTouristsSpot = () => {

    const loadedTouristsSpot = useLoaderData();
    const [touristsSpots, setTouristsSpots] = useState(loadedTouristsSpot);
    const { siteName } = useContext(SiteDetailsContext);



    const handleSort = (sort) => {
        console.log(sort);
        fetch(`http://localhost:5000/tourists-spot?sortOrder=${sort}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setTouristsSpots(data);
        })
        .catch(error => {
            toast.error(error);
        })
    }

    return (
        <div className="mx-auto px-4 py-8">
            <Helmet>
                <title>All Tourists Spot - {siteName}</title>
            </Helmet>
            <div className="flex justify-between mb-4 lg:flex-row flex-col">
                <h2 className="text-3xl font-bold mb-4">All Tourists Spots</h2>
                <div>
                    <details className="dropdown">
                        <summary className="m-1 btn">Sort By</summary>
                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                            <li><button onClick={() => handleSort('desc')}>Average Cost</button></li>
                        </ul>
                    </details>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {touristsSpots.map((spot) => <TouristsSpotCard key={spot._id} spot={spot} ></TouristsSpotCard>)}
            </div>
        </div>
    );
};

export default AllTouristsSpot;