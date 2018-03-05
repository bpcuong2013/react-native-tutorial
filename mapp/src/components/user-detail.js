'use strict';

import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Actions } from "react-native-router-flux";

export default class UserDetail extends Component {
    render() {
        console.log(this.props);
        return (
            <View>
                <Text>ID: {this.props.user.uuid}</Text>
                <Text>Email: {this.props.user.email}</Text>
                <Text>First name: {this.props.user.first_name}</Text>
                <Text>Last name: {this.props.user.last_name}</Text>
                <Text>Bio: </Text>
                <Text>{this.props.user.bio}</Text>
                <Button title="Go back" onPress={Actions.pop}>Back</Button>
            </View>
        );
    }
}