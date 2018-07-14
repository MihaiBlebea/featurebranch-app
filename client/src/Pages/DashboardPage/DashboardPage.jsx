import React from 'react'

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
                <h3>Dashboard Page</h3>
            </div>
        )
    }
}

export default DashboardPage
