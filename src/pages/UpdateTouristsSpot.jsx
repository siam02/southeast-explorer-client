import { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { SiteDetailsContext } from "../providers/SiteDetailsProvider";
import Swal from 'sweetalert2'
import { toast } from "react-toastify";
import { useLoaderData } from "react-router-dom";

const UpdateTouristsSpot = () => {

    const [updateText, setUpdateText] = useState('Update');
    const { siteName } = useContext(SiteDetailsContext);

    const spot = useLoaderData();
    const { image, tourists_spot_name, country_Name, location, short_description, average_cost, seasonality, travel_time, totalVisitorsPerYear } = spot;

    const [spotImage, setSpotImage] = useState(image);

    const handleSubmit = e => {
        e.preventDefault();

        setUpdateText(
            <span className="loading loading-spinner loading-xs"></span>
        )

        const form = e.target;
        const image = form.image.value;
        const tourists_spot_name = form.tourists_spot_name.value;
        const country_Name = form.country_Name.value;
        const location = form.location.value;
        const short_description = form.short_description.value;
        const average_cost = parseInt(form.average_cost.value);
        const seasonality = form.seasonality.value;
        const travel_time = form.travel_time.value;
        const totalVisitorsPerYear = form.totalVisitorsPerYear.value;

        const updateTouristsSpot = { image, tourists_spot_name, country_Name, location, short_description, average_cost, seasonality, travel_time, totalVisitorsPerYear }

        fetch(`http://localhost:5000/tourists-spot/${spot._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateTouristsSpot)
        })
            .then(res => res.json())
            .then(data => {
                setUpdateText("Update");
                setSpotImage(image);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Tourists Spot Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Awesome'
                    })
                }
            })
            .catch(error => {
                toast.error(error);
            })


    }

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <Helmet>
                <title>Update Tourists Spot - {tourists_spot_name} - {siteName}</title>
            </Helmet>
            <h2 className="text-3xl font-bold mb-4">Update Tourists Spot: {tourists_spot_name}</h2>
            <div className="mb-4">
                <img src={spotImage} alt="" className="w-full" />
            </div>
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                            Image (URL)
                        </label>
                        <input
                            id="image"
                            name="image"
                            type="text"
                            required
                            defaultValue={image}
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        />
                    </div>
                    <div>
                        <label htmlFor="tourists_spot_name" className="block text-sm font-medium text-gray-700">
                            Tourists Spot Name
                        </label>
                        <input
                            id="tourists_spot_name"
                            name="tourists_spot_name"
                            type="text"
                            required
                            defaultValue={tourists_spot_name}
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        />
                    </div>
                    <div>
                        <label htmlFor="country_Name" className="block text-sm font-medium text-gray-700">
                            Country Name
                        </label>
                        <input
                            id="country_Name"
                            name="country_Name"
                            type="text"
                            required
                            defaultValue={country_Name}
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        />
                    </div>
                    <div>
                        <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                            Location
                        </label>
                        <input
                            id="location"
                            name="location"
                            type="text"
                            required
                            defaultValue={location}
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        />
                    </div>
                    <div className="md:col-span-2">
                        <label htmlFor="short_description" className="block text-sm font-medium text-gray-700">
                            Short Description
                        </label>
                        <textarea
                            id="short_description"
                            name="short_description"
                            required
                            defaultValue={short_description}
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        ></textarea>
                    </div>
                    <div>
                        <label htmlFor="average_cost" className="block text-sm font-medium text-gray-700">
                            Average Cost
                        </label>
                        <input
                            id="average_cost"
                            name="average_cost"
                            type="number"
                            required
                            defaultValue={average_cost}
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        />
                    </div>
                    <div>
                        <label htmlFor="seasonality" className="block text-sm font-medium text-gray-700">
                            Seasonality
                        </label>
                        <input
                            id="seasonality"
                            name="seasonality"
                            type="text"
                            required
                            defaultValue={seasonality}
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        />
                    </div>
                    <div>
                        <label htmlFor="travel_time" className="block text-sm font-medium text-gray-700">
                            Travel Time
                        </label>
                        <input
                            id="travel_time"
                            name="travel_time"
                            type="text"
                            required
                            defaultValue={travel_time}
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        />
                    </div>
                    <div>
                        <label htmlFor="totalVisitorsPerYear" className="block text-sm font-medium text-gray-700">
                            Total Visitors Per Year
                        </label>
                        <input
                            id="totalVisitorsPerYear"
                            name="totalVisitorsPerYear"
                            type="text"
                            required
                            defaultValue={totalVisitorsPerYear}
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        />
                    </div>
                </div>
                <div className="mt-4">
                    <button
                        type="submit"
                        className="w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        {updateText}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateTouristsSpot;