import React, { Fragment } from 'react';

import './Layout.scss';

import Navigation from './../components/common/nav/nav';
import Footer from './../components/common/footer/footer';

const Layout = () => {

    return (
        <Fragment>
            <Navigation />

            <div className="content">

            </div>

            <Footer />
        </Fragment>
    )
}

export default Layout;