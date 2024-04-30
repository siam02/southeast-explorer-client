import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const CountryCard = ({ country }) => {
    const { image, country_Name, short_description, _id } = country;
    return (
        <Link to={`/country/${_id}`} className="card bg-base-100 shadow-xl image-full">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body text-center justify-center">
                <h2 className="card-title justify-center text-3xl">{country_Name}</h2>
                <p className='grow-0'>{short_description}</p>
            </div>
        </Link>
    );
};

CountryCard.propTypes = {
    country: PropTypes.object.isRequired
}

export default CountryCard;