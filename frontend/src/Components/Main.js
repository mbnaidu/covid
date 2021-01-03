import React, { Component } from 'react'
import {Switch,Route} from 'react-router-dom'
import LoginPage from './LoginPage'
import SignUp from './SignUp'

export class Main extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={LoginPage}/>
                    <Route exact path='/register' component={SignUp}/>
                </Switch>
            </div>
        )
    }
}

export default Main
