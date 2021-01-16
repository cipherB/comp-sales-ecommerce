import React from 'react';
import Computer from './Computer';

export default function CompList({computers}) {
    if(computers.length === 0){
        return(
            <div className='empty-search' >
                <h3>Unfortunately no computers matched your search parameters</h3>
            </div>
        )
    }
    return (
        <div>
            <section className='computerslist' >
            <div className='computerslist-center' >
                {
                    computers.map(item => {
                        return <Computer key={item.id} computer={item} />;
                    })
                }
            </div>
        </section>
        </div>
    )
}
