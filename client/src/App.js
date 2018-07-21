import React from 'react';
import { connect } from 'react-redux'
import * as actions from './store/actions'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import { DefaultContainer } from './Layouts'
import { NavigationMain } from './Components'
import {
    HomePage,
    BlogPage,
    AboutPage,
    ContactPage,
    RegisterPage,
    LoginPage,
    DashboardPage,
    NoMatch } from './Pages'

class App extends React.Component
{
    componentDidMount()
    {
        this.props.OnAuthCheckState()
    }

    isAuth()
    {
        return (this.props.token) ? true : false
    }

    privateRoutes()
    {
        if(this.isAuth())
        {
            return (
                <Route path="/dashboard" component={ DashboardPage } />
            )
        }
        return null
    }

    render()
    {
        return (
            <Router>
                <div>
                    <NavigationMain />

                    <DefaultContainer>
                        <Switch>
                            <Route exact path="/" component={ HomePage } />
                            <Route path="/blog" component={ BlogPage } />
                            <Route path="/about" component={ AboutPage } />
                            <Route path="/contact" component={ ContactPage } />
                            <Route path="/register" component={ RegisterPage } />
                            <Route path="/login" component={ LoginPage } />

                            { this.privateRoutes() }

                            <Redirect to='/' />
                        </Switch>
                    </DefaultContainer>

                </div>
            </Router>
        )
    }
}

const mapStateToProps = (state)=> {
    return {
        token: state.auth.token
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
        OnAuthCheckState: ()=> dispatch(actions.authCheckState())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
