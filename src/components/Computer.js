import React from 'react';
import {Link} from 'react-router-dom';
import defaultImg from '../images/defaultImg/workstation.jpg';
import PropTypes from'prop-types';

export default function Computer({computer}) {
    const {name, slug, images, price} = computer;

    return (
        <article className='computer' >
            <div className='img-container' >
                <img src={images[0] || defaultImg} alt='single-computer' />
                <div className='price-top' >
                    <h6> ${price} </h6>
                </div>
                <Link to={`/computers/${slug}`} className='btn-primary computer-link'>
                    Features
                </Link>
            </div>
            <p className='computer-info' > {name} </p>
        </article>
    )
}

Computer.propTypes = {
    computer: PropTypes.shape({
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        price: PropTypes.number.isRequired
    })
}