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
    ProfilePage,
    CreateCategoryPage,
    CreatePostPage,
    AdminPostsPage,
    AdminImagesPage } from './Pages'

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
        return (
            <Switch>
                <Route path="/admin/dashboard" component={ DashboardPage } />
                <Route path="/admin/profile" component={ ProfilePage } />
                <Route path="/admin/category" component={ CreateCategoryPage } />
                <Route path="/admin/posts" component={ AdminPostsPage } />
                <Route path="/admin/post" component={ CreatePostPage } />
                <Route path="/admin/images" component={ AdminImagesPage } />

                <Redirect to='/admin/dashboard' />
            </Switch>
        )
    }

    publicRoutes()
    {
        return (
            <Switch>
                <Route exact path="/" component={ HomePage } />
                <Route path="/blog" component={ BlogPage } />
                <Route path="/about" component={ AboutPage } />
                <Route path="/contact" component={ ContactPage } />
                <Route path="/register" component={ RegisterPage } />
                <Route path="/login" component={ LoginPage } />

                <Redirect to='/' />
            </Switch>
        )
    }

    render()
    {
        return (
            <Router>
                <div>
                    <NavigationMain />

                    <DefaultContainer>
                        { this.isAuth() ? this.privateRoutes() : this.publicRoutes() }
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
