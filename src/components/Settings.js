import React, { Component } from 'react';
import { ScrollView, AsyncStorage } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import firebase from 'firebase';
import { StackActions, NavigationActions } from 'react-navigation';
import {  LoginManager , LoginButton} from 'react-native-fbsdk';

const resetToLogin = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: 'Login' })],
});


class Settings extends Component {

    constructor(props){
        super(props);
        this.state={
            user:null
        }
    }

    componentWillMount(){
        AsyncStorage.getItem('fb-user').then( u => {
            if(u){
                this.setState({user:u});
            } else{
                this.setState({user:null});
            }
        })
    }

    renderLogoutButton(){
        let u =  AsyncStorage.getItem('fb-user');
            if(u){
                return (
                    <LoginButton
                        onLogoutFinished = {() => {
                        AsyncStorage.removeItem('fb-user');
                        this.props.navigation.dispatch(resetToLogin)
                        }}
                    />
                )
            } else{
                return (
                <ListItem
                    title="Sign Out"
                    onPress= {()=> { 
                        LoginManager.logOut()
                        firebase.auth().signOut().then( ()=> {
                            this.props.navigation.dispatch(resetToLogin)
                            AsyncStorage.removeItem('fb-user');
                        }, function(error) {
            
                            alert(error.mesage)
                        }) 
                    }}
                    rightIcon={{ name: 'cancel' }}
                />
                )

            }
    }

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
                {
                    this.state.user != null ? 
                    (
                    <LoginButton
                        onLogoutFinished = {() => {
                        AsyncStorage.removeItem('fb-user');
                        this.props.navigation.dispatch(resetToLogin)
                        }}
                    />
                ) : (
                <ListItem
                    title="Sign Out"
                    onPress= {()=> { 
                        LoginManager.logOut()
                        firebase.auth().signOut().then( ()=> {
                            this.props.navigation.dispatch(resetToLogin)
                            AsyncStorage.removeItem('fb-user');
                        }, function(error) {
            
                            alert(error.mesage)
                        }) 
                    }}
                    rightIcon={{ name: 'cancel' }}
                />
                )
                }
                </List>
            </ScrollView>
        );
    }
}

export default Settings;