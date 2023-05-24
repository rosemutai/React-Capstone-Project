import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

const CountryCard = ({ country, active }) => (
  <Link to={country}>
    <div
      className="card w-48 h-48 border border-grey-50 object-contain relative flex flex-col justify-between
        items-end text-white pr-3"
    >
      <div className="span-icon absolute z-50 pt-5">
        <span className="material-symbols-outlined">arrow_circle_right</span>
      </div>
      <div className="absolute z-50 w-1/2  h-24 pb-3 mt-24 text-end flex flex-col justify-end break-words ">
        <h4 className="font-bold text-sm tracking-wide uppercase  basis-1/4">
          {country}
        </h4>
        <p className="font-semibold text-sm">{active}</p>
      </div>
    </div>
  </Link>
);

CountryCard.defaultProps = {
  active: '',
};

CountryCard.propTypes = {
  country: PropTypes.string.isRequired,
  active: PropTypes.string,
};
export default CountryCard;
