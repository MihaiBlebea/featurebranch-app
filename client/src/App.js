import React from 'react';
import { connect } from 'react-redux'
import * as actions from './store/actions'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import { NavigationMain, Footer } from './Components'
import {
    HomePage,
    BlogPage,
    CategoryPage,
    PostPage,
    AboutPage,
    ContactPage,
    RegisterPage,
    LoginPage,
    DashboardPage,
    ProfilePage,
    NewCategoryPage,
    NewPostPage,
    ManageCategoriesPage,
    ManagePostsPage,
    ManageImagesPage,
    ManageCommentsPage } from './Pages'

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
                <Route path="/admin/category" component={ NewCategoryPage } />
                <Route path="/admin/categories" component={ ManageCategoriesPage } />
                <Route path="/admin/posts" component={ ManagePostsPage } />
                <Route path="/admin/post" component={ NewPostPage } />
                <Route path="/admin/images" component={ ManageImagesPage } />
                <Route path="/admin/comments" component={ ManageCommentsPage } />
                <Route path="/admin/preview/:post" component={ PostPage } />

                <Redirect to='/admin/dashboard' />
            </Switch>
        )
    }

    publicRoutes()
    {
        return (
            <Switch>
                <Route exact path="/" component={ HomePage } />
                <Route exact path="/blog" component={ BlogPage } />
                <Route exact path="/blog/:category" component={ CategoryPage } />
                <Route path="/blog/:category/:post" component={ PostPage } />
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

                    <div className="min-h-screen flex flex-col">
                        <div className="flex-grow">
                            { this.isAuth() ? this.privateRoutes() : this.publicRoutes() }
                        </div>
                    </div>

                    <Footer />
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
