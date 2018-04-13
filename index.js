'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    AppRegistry
} from 'react-native';

import Route from './app/Route';
//import Page from './app/components/MainPage/MainPage';

export default class YourHour extends Component {
    render() {
        return (
            <Route/>
        );
    }
}

AppRegistry.registerComponent('YourHour', () => YourHour);
module.exports = YourHour;
