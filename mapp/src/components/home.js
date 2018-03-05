'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Button, ListView } from 'react-native';
import { List, ListItem } from "react-native-elements";

import { Actions } from "react-native-router-flux";
import Spinner from 'react-native-loading-spinner-overlay';
import Toast from 'react-native-root-toast';

import { getUsers } from "./../actions";

class Home extends Component {
    componentWillMount() {
        this.props.getUsers();
    }

    ListViewItemSeparatorLine = () => {
        return (
            <View
                style={{
                    height: .5,
                    width: "100%",
                    backgroundColor: "#000",
                }}
            />
        );
    }

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

        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        return (
            <View style={styles.MainContainer}>
                <ListView
                    dataSource={this.props.users}
                    renderSeparator={this.ListViewItemSeparatorLine}
                    enableEmptySections={true}
                    renderRow={
                        (user) => <Text style={styles.rowViewContainer} onPress={() => this.goToUserDetail(user)}>{user.email}</Text>
                    } />
            </View>
        );
    }

    goToUserDetail(user) {
        Actions.user_detail({user: user});
    }
}

const ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2
});

const mapStateToProps = (state) => {
    return {
        users: ds.cloneWithRows(state.users.data)
    }
}

const mapDispatchToProps = {
    getUsers
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const styles = StyleSheet.create(
    {
        MainContainer:
            {
                justifyContent: 'center',
                flex: 1,
                margin: 10
            },

        TextStyle:
            {
                fontSize: 23,
                textAlign: 'center',
                color: '#000',
            },

        rowViewContainer:
            {

                fontSize: 18,
                paddingRight: 10,
                paddingTop: 10,
                paddingBottom: 10,

            }
    });