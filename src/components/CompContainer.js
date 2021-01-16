import React from 'react';
import CompFilter from './CompFilter';
import CompList from './CompList';
import {withComputerConsumer} from '../Context';
import Loading from './Loading';

function CompContainer({context}) {

    const {loading, sortedComputers, computers} = context;
    if(loading) {
        return <Loading />;
    }
    return(
        <>
            <CompFilter computers={computers} />
            <CompList computers={sortedComputers} />
        </>
    );
}

export default withComputerConsumer(CompContainer)
