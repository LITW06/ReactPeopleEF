import React from 'react';

class ParameterDemo extends React.Component {
    render() {
        return (
            <div>
                <h1>This page will show some parameters</h1>
                <h2>Id: {this.props.match.params.id}</h2>
                <h2>Foo: {this.props.match.params.foo}</h2>
            </div>
        )
    }
}

export default ParameterDemo;