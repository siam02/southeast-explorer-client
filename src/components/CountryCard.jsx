import PropTypes from 'prop-types';
const CountryCard = ({ country }) => {
    const { image, country_Name, short_description } = country;
    return (
        <div className="card w-96 bg-base-100 shadow-xl image-full">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body text-center justify-center">
                <h2 className="card-title justify-center text-3xl">{country_Name}</h2>
                <p className='grow-0'>{short_description}</p>
            </div>
        </div>
    );
};

CountryCard.propTypes = {
    country: PropTypes.object.isRequired
}

export default CountryCard;