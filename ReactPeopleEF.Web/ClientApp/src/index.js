import React from 'react';
import { render } from 'react-dom';
import PeoplePage from './PeoplePage';
import { BrowserRouter, Route, Link, withRouter } from 'react-router-dom';
import RedirectDemo from './RedirectDemo';
import ParameterDemo from './ParameterDemo';

class WrappInRed extends React.Component {
    render() {
        return (
            <div style={{ backgroundColor: 'red' }}>
                {this.props.children}
            </div>
        )
    }
}

class HomePage extends React.Component {
    render() {
        return (
            <WrappInRed>
                <div className="container">
                    <h1>Home Page</h1>
                    <Link to='/people'>Go to People!</Link>
                </div>
            </WrappInRed>
        )
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/people' component={PeoplePage} />
                <Route path='/redirect' component={RedirectDemo} />
                <Route exact path='/parameterdemo/:id/:foo?' component={ParameterDemo} />
            </div>
        );
    }
}


render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, document.getElementById('root'));