import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const TouristsSpotCard = ({ spot, showImage, showCountryName, showTotalVisitor, showTravelTime, showShortDescription }) => {
    return (
        <div className="bg-white dark:bg-slate-950 flex flex-col shadow-md rounded-md">
            {
                showImage ?
                    <img src={spot.image} alt={spot.tourists_spot_name} className="w-full h-48 object-cover rounded-t-md" />
                    :
                    ''
            }
            <div className="p-4 flex flex-col h-full">
                <div className='flex justify-between gap-2 mb-2'>
                    <h3 className="text-lg font-semibold">{spot.tourists_spot_name}</h3>
                    <span className='text-lg font-bold'>${spot.average_cost}</span>
                </div>
                {
                    showCountryName ?
                        <p className="text-base">{spot.location}, {spot.country_Name}</p>
                        :
                        ""
                }

                {
                    showShortDescription && <p className='text-sm my-4'>{spot.short_description}</p>
                }

                <div className='grow text-sm text-gray-600 dark:text-gray-400'>
                    {
                        showTotalVisitor && showTravelTime ?
                            <div>
                                <p className='mb-2 mt-4 font-bold'>At A Glance:</p>
                                <ul className='ml-7 list-disc'>
                                    {
                                        showTotalVisitor && <li><strong>Visitors Per Year:</strong> {spot.totalVisitorsPerYear}</li>
                                    }
                                    {
                                        showTravelTime && <li><strong>Travel Time:</strong> {spot.travel_time}</li>
                                    }

                                    <li><strong>Seasonality:</strong> {spot.seasonality}</li>
                                </ul>
                            </div>
                            :
                            <p><strong>Seasonality:</strong> {spot.seasonality}</p>

                    }

                </div>
                <div className="text-right mt-2">
                    <Link to={`/tourists-spot/${spot._id}`} className="text-indigo-600 dark:text-indigo-400 dark:hover:text-indigo-500 hover:text-indigo-700 font-medium">
                        View Details
                    </Link>
                </div>
            </div>
        </div >
    );
};

TouristsSpotCard.propTypes = {
    spot: PropTypes.object.isRequired,
    showImage: PropTypes.bool,
    showCountryName: PropTypes.bool,
    showTotalVisitor: PropTypes.bool,
    showShortDescription: PropTypes.bool,
    showTravelTime: PropTypes.bool
}

export default TouristsSpotCard;