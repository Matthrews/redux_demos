import React from 'react';
import UserView from '../components/UserView';

import context from '../context'

const Child1 = () => {
    return <context.Consumer>
        {(value) => {
            console.log(value);
            return <div style={{ border: '1px solid red' }}>{JSON.stringify(value, null, 2)}</div>
        }}
    </context.Consumer>

}


export default Child1