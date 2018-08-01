import React, {Component} from 'react';
import axios from 'axios';

class User extends Component {

    constructor() {
        super();
        this.state = {
            user: {
                userId: '',
                firstName: '',
                lastName: '',
                age: '',
                dataOfBirth: '',
                gender: ''
            }
        };
        this.handleClick = this.handleClick.bind(this)
    }


    handleClick() {
        axios.get('http://localhost:8080/user/1')
            .then(response => this.setState({user: response.data}))
    }

    render() {
        return (
            <div className='button__container'>
                <button className='button' onClick={this.handleClick}>
                    Click Me
                </button>
                <div>
                    id: {this.state.user.userId}<br/>
                    fName: {this.state.user.firstName}<br/>
                    lName: {this.state.user.lastName}<br/>
                    age: {this.state.user.age}<br/>
                    date: {this.state.user.dataOfBirth}<br/>
                    gender: {this.state.user.gender}<br/>
                </div>
            </div>
        )
    }
}

export default User;