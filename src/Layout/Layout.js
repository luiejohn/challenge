import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import './Layout.scss';

import Navigation from './../components/common/nav/nav';
import Footer from './../components/common/footer/footer';
import Home from './../Pages/Home/Home';

const Layout = () => {

    return (
        <Fragment>
            <Navigation />

            <div className="content">
                <Switch>
                    <Route exact path="/" component={Home}/> 
                </Switch>
            </div>
            <Footer />
        </Fragment>
    )
}

export default Layout;