'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { List, ListItem } from "react-native-elements";

import { Actions } from "react-native-router-flux";
import Spinner from 'react-native-loading-spinner-overlay';
import Toast from 'react-native-root-toast';

import { getUsers } from "./../actions";

class Home extends Component {
    componentWillMount() {
        this.props.getUsers();
    }

    _keyExtractor = (item, index) => item.email;

    render() {
        if (this.props.users.isFetching) {
            return (
                <View>
                    <Spinner
                        visible={this.props.users.isFetching}
                        textContent={"Loading..."}
                        textStyle={{ color: '#253145' }}
                        animation="fade"
                    />
                </View>
            )
        }

        if (this.props.users.hasError) {
            return (
                <View>
                    <Text>{this.props.users.errorMessage}</Text>
                </View>
            );
        }

        console.log(this.props.users.data);
        return (
            <FlatList 
                data={this.props.users.data} 
                style={{ padding: 0, margin: 0, backgroundColor: '#fff' }}
                keyExtractor={this._keyExtractor}
                renderItem={({ item }) => (
                    <ListItem style={{ padding: 0, margin: 0 }}
                        title={`${item.first_name} ${item.last_name}`}
                        subtitle={item.email} />
                )}>
            </FlatList>
        );
    }
}

const mapStateToProps = state => {
    return {
        users: state.users
    }
}

const mapDispatchToProps = {
    getUsers
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);