import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const TouristsSpotCard = ({ spot }) => {
    return (
        <div className="bg-white flex flex-col shadow-md rounded-md">
            <img src={spot.image} alt={spot.tourists_spot_name} className="w-full h-48 object-cover" />
            <div className="p-4 flex flex-col gap-2 h-full">
                <h3 className="text-lg font-semibold">{spot.tourists_spot_name}</h3>
                <p className="text-sm text-gray-600">{spot.location}</p>
                <p className="text-sm text-gray-600 mb-2">{spot.short_description}</p>
                <div className="flex justify-between grow">
                    <p className="text-sm text-gray-600">Average Cost: ${spot.average_cost}</p>
                    <p className="text-sm text-gray-600">Visitors Per Year: {spot.totalVisitorsPerYear}</p>
                </div>
                <div className="text-right mt-2">
                    <Link to={`/tourist-spot/${spot._id}`} className="text-indigo-600 hover:text-indigo-700 font-medium">
                        View Details
                    </Link>
                </div>
            </div>
        </div >
    );
};

TouristsSpotCard.propTypes = {
    spot: PropTypes.object.isRequired
}

export default TouristsSpotCard;