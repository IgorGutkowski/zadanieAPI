import React from 'react';
import PropTypes from 'prop-types';
import { FaStar, FaRegStar } from 'react-icons/fa';

const Star = ({ selected = false, onClick = f => f }) => (
    <div onClick={onClick} style={{ cursor: 'pointer' }}>
        {selected ? <FaStar color="gold" size="25" /> : <FaRegStar color="grey" size="25" />}
    </div>
);

Star.propTypes = {
    selected: PropTypes.bool,
    onClick: PropTypes.func
};

const Rating = ({ totalStars = 5, rating = 0, onRatingChange = f => f }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <div style={{ marginBottom: '5px' }}><strong>Oceń przepis:</strong></div>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                {[...Array(totalStars)].map((n, i) => (
                    <Star
                        key={i}
                        selected={i < rating}
                        onClick={() => onRatingChange(i + 1)}
                    />
                ))}
            </div>
        </div>
    );
};

Rating.propTypes = {
    totalStars: PropTypes.number,
    rating: PropTypes.number,
    onRatingChange: PropTypes.func
};

export default Rating;
