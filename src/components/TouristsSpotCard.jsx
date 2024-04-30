import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const TouristsSpotCard = ({ spot }) => {
    return (
        <div className="bg-white flex flex-col shadow-md rounded-md">
            <img src={spot.image} alt={spot.tourists_spot_name} className="w-full h-48 object-cover rounded-t-md" />
            <div className="p-4 flex flex-col gap-2 h-full">
                <h3 className="text-lg font-semibold">{spot.tourists_spot_name}</h3>
                <p className="text-sm text-gray-600">{spot.location}</p>
                <div className='grow text-sm text-gray-600'>
                    <p className='mb-2 font-bold'>At A Glance:</p>
                    <ul className='ml-7 list-disc'>
                        <li><strong>Average Cost:</strong> ${spot.average_cost}</li>
                        <li><strong>Visitors Per Year:</strong> {spot.totalVisitorsPerYear}</li>
                        <li><strong>Travel Time:</strong> {spot.travel_time}</li>
                        <li><strong>Seasonality:</strong> {spot.seasonality}</li>
                    </ul>
                </div>
                <div className="text-right mt-2">
                    <Link to={`/tourists-spot/${spot._id}`} className="text-indigo-600 hover:text-indigo-700 font-medium">
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