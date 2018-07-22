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
    NoMatch,
    ProfilePage,
    CreateCategoryPage} from './Pages'

class App extends React.Component
{
    componentDidMount()
    {
        this.props.onAuthCheckState()
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
                <Switch>
                    <Route path="/dashboard" component={ DashboardPage } />
                    <Route path="/profile" component={ ProfilePage } />
                    <Route path="/category" component={ CreateCategoryPage } />
                </Switch>
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
        onAuthCheckState: ()=> dispatch(actions.authCheckState())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
