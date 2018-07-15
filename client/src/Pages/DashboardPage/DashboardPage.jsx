import React from 'react'
import { MainTitle } from './../../Components'


class DashboardPage extends React.Component
{
    constructor()
    {
        super()
        this.state = {
            login: true
        }
    }

    render()
    {
        return (
            <div>
                <MainTitle>Dashboard Page</MainTitle>
            </div>
        )
    }
}

export default DashboardPage
