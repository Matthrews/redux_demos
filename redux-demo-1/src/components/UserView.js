import React, { useContext } from 'react';
import context from '../context';

const UserView = () => {
    const { state, setState } = useContext(context)
    console.log('UserView', state);

    const onChange = (event) => {
        state.user.name = event.target.value;
        setState({ ...state })
    }
    return (
        <context.Consumer>
            {(value) => {
                return <input value={value.state.user.name} onChange={onChange} />
            }}
        </context.Consumer>
    )
}


export default UserView
