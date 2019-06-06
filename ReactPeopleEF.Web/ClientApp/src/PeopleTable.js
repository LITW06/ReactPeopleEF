import React, { Component } from 'react';
import PersonRow from './PersonRow';

export default class PeopleTable extends Component {
    render() {
        const buttonStyle = {
            margin: 5
        }
        return (
            <table className="table table-hover table-striped table-bordered">
                <thead>
                    <tr>
                        <th style={{width:'25%'}}>
                            <button onClick={this.props.onDeleteClicked} style={buttonStyle} className="btn btn-danger">Delete</button>
                            <button onClick={this.props.onCheckAllClicked} style={buttonStyle} className="btn btn-warning">Check All</button>
                            <button onClick={this.props.onClearAllClicked} style={buttonStyle} className="btn btn-success">Clear All</button>
                        </th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.people.map(person => <PersonRow onDeleteCheckChanged={this.props.onDeleteCheckChanged} 
                        person={person} key={person.id} />)}
                </tbody>
            </table>
        )
    }
}
