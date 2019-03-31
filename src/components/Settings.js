import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import firebase from 'firebase';
class Settings extends Component {
    render() {
        return (
            <ScrollView>
                <List>
                    <ListItem
                        title="Notifications"
                    />
                    <ListItem
                        title="Profile"
                    />
                    <ListItem
                        title="Password"
                    />
                </List>
                <List>
                    <ListItem
                        title="Sign Out"
                        onPress= {()=> { firebase.auth().signOut().then(function() {
                        // Sign-out successful.
                        }, function(error) {
                        alert(error.mesage)
                        }) }}
                        rightIcon={{ name: 'cancel' }}
                    />
                </List>
            </ScrollView>
        );
    }
}

export default Settings;