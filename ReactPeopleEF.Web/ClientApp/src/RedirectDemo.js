import React, { Component } from 'react'
import FancyButton from './FancyButton';

export default class RedirectDemo extends Component {

    onButtonClick = () => {
        this.props.history.push('/people');
    }

    render() {
        return (
            <div>
                <h1>Click the button below to be redirected!</h1>
                <FancyButton />
            </div>
        )
    }
}
