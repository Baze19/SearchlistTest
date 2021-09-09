import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Image from '../component/Image/Image'


const app = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/" exact component={Image} />

                </Switch>
            </div>
        </Router>

    )
}

export default app
