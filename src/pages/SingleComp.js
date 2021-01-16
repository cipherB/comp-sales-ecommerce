import React, { Component } from 'react';
import defaultBcg from '../images/defaultImg/home-office-1.jpg';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import {ComputerContext} from '../Context';


export class SingleComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg
        }
    }
    static contextType = ComputerContext;


    render() {
        const {getComputer} = this.context;
        const computer = getComputer(this.state.slug);
        console.log(computer)
        if(!computer){
            return <div className='error' >
                <h3>no such computer could be found...</h3>
                <Link to='/computers' className='btn-primary'>
                    back to computers
                </Link>
            </div>
        }
        const {name, description, price, extras, images} = computer
        const [...defaultImg] = images;
        return (
            <>
                <Banner title={`${name} computer`}>
                    <Link to='/computers' className='btn-primary'>
                        back to computers
                    </Link>
                </Banner>
                <section className='single-computer' >
                    <div className='single-computer-images' >
                        {defaultImg.map((item, index)=>{
                            return <img key={index} src={item} alt={name}/>
                        })}
                    </div>
                    <div className='single-computer-info' >
                        <article className='desc' >
                            <h3>details</h3>
                            <p> {description} </p>
                        </article>
                        <article className='info' >
                            <h3>info</h3>
                            <h6>price: ${price}</h6>
                        </article>
                    </div>
                </section>
                <section className='computer-extras' >
                    <h6>extras</h6>
                    <ul className='extras' >
                        {extras.map((item, index)=>{
                            return <li key={index} >- {item} </li>
                        })}
                    </ul>
                </section>
            </>
        )
    }
}

export default SingleComp
