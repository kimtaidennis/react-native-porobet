import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BetslipView, Casino, Home, Jackpot, MyBets, Profile } from '../screens'; 
import { Colors } from '../constants/colors';
import {Feather} from '@expo/vector-icons';
import { Betslip, RootStackParamList } from '../models/models';
import { useAppSelector } from '../redux/hook';
import { View,Text, StyleSheet } from 'react-native';
import { globalStyle } from '../assets/style/global.style';

const BottomNav = () => {

    const betslip: Betslip[] = useAppSelector(state => state.games.betslip);
    const jackpot: Betslip[] = useAppSelector(state => state.games.jackpot);
    const type: string = useAppSelector(state => state.games.type);

    const Tab = createBottomTabNavigator<RootStackParamList>();
    return (
        <>
            <Tab.Navigator screenOptions={{
                tabBarShowLabel: true,
                tabBarHideOnKeyboard: true,
                headerShown: false,
                tabBarStyle: {
                    position: 'absolute',
                    right: 0,
                    left: 0,
                    bottom: 0,
                    elevation: 0,
                    height: 54,
                    justifyContent: 'center',
                    backgroundColor: Colors.backgroundColor,
                    paddingBottom:5
                },
                tabBarLabelStyle: {
                    color: '#fff'
                },
                tabBarActiveTintColor: Colors.color
            }}>
                <Tab.Screen name="Home" component={ Home } options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ focused }) => {
                        return <Feather name='home' color={ focused ? Colors.color : 'white'} size={14} />
                    }
                }} />
                <Tab.Screen name="Jackpot" component={ Jackpot } options={{
                    tabBarLabel: 'Jackpot',
                    tabBarIcon: ({ focused }) => {
                        return <Feather name='layers' color={ focused ? Colors.color : 'white'} size={14} />
                    }
                }} />
                <Tab.Screen name="BetslipView" component={ BetslipView } options={{
                   tabBarShowLabel: false,
                    tabBarIcon: ({ focused }) => {
                        return <View style={ styles.container }><Text style={[globalStyle.text, { color: Colors.backgroundColor}]}>{ type === 'Jackpot' ? jackpot.length : betslip.length }</Text></View>
                    }
                }} />
                <Tab.Screen name="Casino" component={ Casino } options={{
                    tabBarLabel: 'Casino',
                    tabBarIcon: ({ focused }) => {
                        return <Feather name='list' color={ focused ? Colors.color : 'white'} size={14} />
                    }
                }} />
                <Tab.Screen name="Profile" component={ Profile } options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ focused }) => {
                        return <Feather name='user' color={ focused ? Colors.color : 'white'} size={14} />
                    }
                }} />
            </Tab.Navigator>
        </>
    )
}

export default BottomNav;

const styles = StyleSheet.create({
    container: {
        width:26,
        height:26,
        borderRadius: 50,
        backgroundColor: Colors.color,
        justifyContent: 'center',
        alignItems: 'center',
        
    }
})