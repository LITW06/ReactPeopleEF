import React from 'react';

import { withRouter } from 'react-router-dom';

class FancyButton extends React.Component {
    onClick = () => {
        this.props.history.push('/people');
    }
    render() {
        return (
            <button className="btn btn-primary btn-block" onClick={this.onClick}>Click Me</button>
        )
    }
}

export default withRouter(FancyButton);