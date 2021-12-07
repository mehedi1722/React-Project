import React, { Component } from 'react';
import Header from '../Components/Header/Header';
import Body from '../Components/Body/Body';
import Footer from '../Components/Footer/Footer';

export default class Maincomponent extends Component {
    render() {
        return (
            <div>
                <Header />
                <Body />
                <Footer />
            </div>
        )
    }
}
