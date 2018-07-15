import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { DefaultContainer } from './Layouts'
import { MainNavigation, PrivateRoute } from './Components'
import { HomePage,
         BlogPage,
         AboutPage,
         ContactPage,
         RegisterPage,
         LoginPage,
         DashboardPage } from './Pages'

class App extends React.Component {

    constructor()
    {
        super()
        this.state = {
            auth: {
                state: true,
                token: null
            }
        }
    }

    render() {
        return (
            <Router>
                <div>
                    <MainNavigation />

                    <DefaultContainer>
                        <Route exact path="/" component={ HomePage } />
                        <Route path="/blog" component={ BlogPage } />
                        <Route path="/about" component={ AboutPage } />
                        <Route path="/contact" component={ ContactPage } />
                        <Route path="/register" component={ RegisterPage } />
                        <Route path="/login" component={ LoginPage } />
                        <PrivateRoute path="/dashboard" component={ DashboardPage } />
                    </DefaultContainer>
                </div>
            </Router>
        )
    }
}

export default App;
