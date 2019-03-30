import React from 'react';
import { createBottomTabNavigator, createSwitchNavigator, createStackNavigator,createAppContainer  } from 'react-navigation';
import { Icon } from 'react-native-elements';


import Feed from '../components/Feed';
import Settings from '../components/Settings';
import UserDetail from '../components/UserDetail';
import Me from '../components/Me'
import FirebaseLogin from "../../FirebaseLogin";
import Splash from '../screens/splash';





export const Tabs = createBottomTabNavigator({
    Feed: {
        screen: Feed,
        navigationOptions: {
            tabBarLabel: 'Feed',
            tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
        },
    },
    Me: {
        screen: Me,
        navigationOptions: {
            tabBarLabel: 'Me',
            tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
        },
    },
});

export const StackNavigator = createStackNavigator({
    Splash:{screen:Splash},
    Tabs: {screen : Tabs},
    Login:{screen:FirebaseLogin},
    Feed: {
        screen: Feed,
        navigationOptions: {
            title: 'Feed',
        },
    },
    Details: {
        screen: UserDetail,
        navigationOptions: ({ navigation }) => ({
            title: `${navigation.state.params.name.first.toUpperCase()} ${navigation.state.params.name.last.toUpperCase()}`,
        }),
    },
    Settings: {
        screen: Settings,
        navigationOptions: {
            title: 'Settings',
        },
    },
    
}, {
    mode: 'modal',
    headerMode: 'none',
});








// export const Root = createAppContainer(createStackNavigator({
//     Tabs: {
//         screen: Tabs,
//     },
//     Settings: {
//         screen: Settings,
//     },
// }, {
//     mode: 'modal',
//     headerMode: 'none',
// }));



export const AppContainer = createAppContainer(StackNavigator);

export default AppContainer;