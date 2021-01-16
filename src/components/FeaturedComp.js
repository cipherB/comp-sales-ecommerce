import React, { Component } from 'react'
import {ComputerContext} from '../context'
import Loading from './Loading'
import Computer from './Computer'
import Title from './Title'

export class FeaturedComp extends Component {

    static contextType = ComputerContext;
    render() {
        let { loading, featuredComps:computers } = this.context
        computers = computers.map(computer => {
            return <Computer key={computer.id} computer={computer} />
        })
        return (
            <section className='featured-comps' >
                <Title title='featured-comps' />
                <div className='featured-comps-center' >
                    {loading ? <Loading/> : computers}
                </div>
            </section>
        )
    }
}

export default FeaturedComp
