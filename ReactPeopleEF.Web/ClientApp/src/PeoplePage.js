import React from 'react';
import HeaderRow from './HeaderRow';
import { produce } from 'immer';
import axios from 'axios';
import PeopleTable from './PeopleTable';

class PeoplePage extends React.Component {
    state = {
        person: {
            firstName: '',
            lastName: '',
            age: '',
        },
        people: []
    }


    componentDidMount = () => {
        axios.get('/api/people/getall').then(({ data }) => {
            data.forEach(p => p.markedForDeletion = false);
            this.setState({ people: data });
        });
    }

    onInputChange = e => {
        const newState = produce(this.state, draftState => {
            const { person } = draftState;
            person[e.target.name] = e.target.value;
        });
        this.setState(newState);
    }

    onAddClick = () => {
        axios.post('/api/people/add', this.state.person).then(({ data }) => {
            const nextState = produce(this.state, draftState => {
                draftState.people.push(data);
                draftState.person = {
                    firstName: '',
                    lastName: '',
                    age: ''
                }
            });
            this.setState(nextState);
        })
    }

    onDeleteCheckChanged = person => {
        const nextState = produce(this.state, draftState => {
            const personThatChanged = draftState.people.find(p => p.id === person.id);
            personThatChanged.markedForDeletion = !personThatChanged.markedForDeletion;
        });

        this.setState(nextState);
    }

    onDeleteClicked = () => {
        axios.post('/api/people/delete',
            { personIds: this.state.people.filter(p => p.markedForDeletion).map(p => p.id) })
            .then(() => {
                axios.get('/api/people/getall').then(({ data }) => {
                    data.forEach(p => p.markedForDeletion = false);
                    this.setState({ people: data });
                });
            });
    }

    onCheckAllClicked = () => {
        const nextState = produce(this.state, draftState => {
            draftState.people.forEach(p => p.markedForDeletion = true);
        });
        this.setState(nextState);
    }

    onClearAllClicked = () => {
        const nextState = produce(this.state, draftState => {
            draftState.people.forEach(p => p.markedForDeletion = false);
        });
        this.setState(nextState);
    }

    render() {
        const { person, people } = this.state;
        return (
            <div className="container" style={{ marginTop: 40 }}>
                <HeaderRow person={person} onInputChange={this.onInputChange}
                    onAddClick={this.onAddClick} />
                <PeopleTable
                    onDeleteCheckChanged={this.onDeleteCheckChanged}
                    people={people}
                    onDeleteClicked={this.onDeleteClicked}
                    onCheckAllClicked={this.onCheckAllClicked}
                    onClearAllClicked={this.onClearAllClicked} />
            </div>
        )
    }

}

export default PeoplePage;
