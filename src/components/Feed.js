import React, { Component } from 'react';
import {Text, View, ScrollView} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { users } from '../config/data';

class Feed extends Component {
    // onLearnMore = (user) => {
    //     this.props.navigation.navigate('Details', { ...user });
    // };
    render() {
        console.log(users)
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center' }} >

            {/*  <ScrollView> */}
                 {/* Commented this put because there is no users object in your config file and this screen expectes
                    to receive a list of users in order to work well.  */}
                {/* <List>
                    {users.map((user) => (
                        <ListItem
                            key={user.login.username}
                            roundAvatar
                            avatar={{ uri: user.picture.thumbnail }}
                            title={`${user.name.first.toUpperCase()} ${user.name.last.toUpperCase()}`}
                            subtitle={user.email}
                            onPress={() => this.onLearnMore(user)}
                        />
                    ))}
                </List> */}
            {/* </ScrollView> */}
            <View><Text style={{fontSize:16, fontWeight:'bold'}} >It's feed Screen!</Text></View>
            </View>

        );
    }
}

export default Feed;