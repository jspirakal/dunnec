import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Tile, List, ListItem, Button } from 'react-native-elements';
import { me } from '../config/data';

class Me extends Component {
    handleSettingsPress = () => {
        this.props.navigation.navigate('Settings');
    };

    render() {
        console.log(this.props)
        return (
            <ScrollView>
                <Tile
                    // Commmented the image src out because its expecting an image when pushed to this screen 
                    //  but nothing is passed. Only uncomment if you are sure of passing data here to this screen
                    // imageSrc={{ uri: this.props.picture.large}}
                    featured
                    title={`${this.props.name.first.toUpperCase()} ${this.props.name.last.toUpperCase()}`}
                    caption={this.props.email}
                />

                <Button
                    title="Settings"
                    buttonStyle={{ marginTop: 20 }}
                    onPress={this.handleSettingsPress}
                />

                <List>
                    <ListItem
                        title="Email"
                        rightTitle={this.props.email}
                        hideChevron
                    />
                    <ListItem
                        title="Phone"
                        rightTitle={this.props.phone}
                        hideChevron
                    />
                </List>

                <List>
                    <ListItem
                        title="Username"
                        rightTitle={this.props.login.username}
                        hideChevron
                    />
                </List>

                <List>
                    <ListItem
                        title="Birthday"
                        rightTitle={this.props.dob}
                        hideChevron
                    />
                    <ListItem
                        title="City"
                        rightTitle={this.props.location.city}
                        hideChevron
                    />
                </List>
            </ScrollView>
        );
    }
}

Me.defaultProps = { ...me };

export default Me;