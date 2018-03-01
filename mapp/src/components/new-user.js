'use strict';

import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Actions } from "react-native-router-flux";

export default class NewUser extends Component {
    render() {
        return (
            <View>
                <Text>New user screen</Text>
                <Button title="Go back" onPress={Actions.pop}>Back</Button>
            </View>
        );
    }
}