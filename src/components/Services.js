import React, { Component } from 'react'
import {FaLaptop, FaThumbsUp, FaTruck, FaPhoneAlt} from 'react-icons/fa'
import Title from './Title'

export default class Services extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             services: [
                 {
                     icon:<FaLaptop/>,
                     title:'Best Computers',
                     info: 'Id consequat pariatur esse non commodo labore culpa labore veniam occaecat occaecat.'
                 },
                 {
                    icon:<FaThumbsUp/>,
                    title:'Very Efficient',
                    info: 'Id consequat pariatur esse non commodo labore culpa labore veniam occaecat occaecat.'
                },
                {
                    icon:<FaTruck/>,
                    title:'Fast delivery',
                    info: 'Id consequat pariatur esse non commodo labore culpa labore veniam occaecat occaecat.'
                },
                {
                    icon:<FaPhoneAlt/>,
                    title:'Immediate Feedback',
                    info: 'Id consequat pariatur esse non commodo labore culpa labore veniam occaecat occaecat.'
                }
             ]
        }
    }
    
    render() {
        return (
            <section className='services'>
                <Title title='services' />
                <div className='services-center' >
                    {this.state.services.map((item, index)=> {
                        return(
                            <article key={index} className='service' >
                                <span> {item.icon} </span>
                                <h6> {item.title} </h6>
                                <p> {item.info} </p>
                            </article>
                        );
                    })}
                </div>
            </section>
        )
    }
}
