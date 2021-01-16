import React from 'react';
import {useContext} from 'react';
import {ComputerContext} from '../Context';
import Title from '../components/Title';

//get all unique values
const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}


export default function CompFilter({computers}) {

    const context = useContext(ComputerContext);
    const {
        handleChange,type,brand,price,minPrice,maxPrice
    } = context;

    //get unique types
    let types = getUnique(computers, 'type');
    //add all
    types = ['all', ...types];
    //map to jsx
    types = types.map((item, index) => {
        return <option value={item} key={index} > {item} </option>
    });

    //get unique brands
    let brands = getUnique(computers, 'brand');
    //add all
    brands = ['all', ...brands];
    //map to jsx
    brands = brands.map((item, index) => {
        return <option value={item} key={index} > {item} </option>
    });

    return (
        <section className='filter-container' >
            <Title title='search computers' />
            <form className='filter-form' >
                {/*select type*/}
                <div className='form-group' >
                    <label htmlFor='type' >computer type</label>
                    <select name='type' id='type' value={type} 
                    className='form-control' onChange={handleChange} >
                        {types}
                    </select>
                </div>
                {/*end select type*/}
                {/*select brand*/}
                <div className='form-group' >
                    <label htmlFor='brand' >computer brand</label>
                    <select name='brand' id='brand' value={brand} 
                    className='form-control' onChange={handleChange} >
                        {brands}
                    </select>
                </div>
                {/*end select brand*/}
                {/*computer price*/}
                <div className='form-group' >
                    <label htmlFor='price' >
                        computer price ${[price]}
                    </label>
                    <input type='range' name='price' min={minPrice} 
                    max={maxPrice} id='price' value={price} onChange={handleChange} className='form-control' />
                </div>
                {/*end computer price*/}
            </form>
        </section>
    )
}
