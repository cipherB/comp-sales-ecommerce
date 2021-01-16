import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import CompContainer from '../components/CompContainer'
import {Link} from 'react-router-dom'


export const Computers = () => {
    return (
        <>
            <Hero hero="computersHero" >
                <Banner title='Our computers'>
                    <Link to='/' className='btn-primary'>
                        return home
                    </Link>
                </Banner>
            </Hero>
            <CompContainer />
        </>
    )
}

export default Computers