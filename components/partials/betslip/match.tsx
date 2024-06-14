import React from 'react'
import { StyleSheet, View, Text } from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { Colors } from '../../../constants/colors';
import Separator from '../separator';
import { Betslip } from '../../../models/models';
import moment from 'moment';
import { globalStyle } from '../../../assets/style/global.style';
import { TouchableWithoutFeedback } from 'react-native';

type Props = { match: Betslip; deleteBetslip: any };

const Match = ({ match,deleteBetslip }: Props ) => {
    return (
        <>
        <View style={ styles.container }>

            <View style={ styles.header}>
                <Text style={[ globalStyle.text ]}>{ match.home } vs { match.away }</Text>
                <TouchableWithoutFeedback onPress={ () =>  deleteBetslip(match.id)}>
                    <Ionicons name='close-circle' size={14} color={ Colors.color}/>
                </TouchableWithoutFeedback>
            </View>

            { match.type === 'pre-match' && <Text style={[ globalStyle.text, { paddingVertical: 3 } ]}>{`${match.market} • ${match.selected}`}</Text> }
        
            { match.type === 'jackpot' && <Text style={[ globalStyle.text,{ paddingVertical: 3 } ]}>Pick • {` ${match.selected}`}</Text> }

            { 
                match.type === 'pre-match' && <View style={ styles.header}>
                    <Text style={[ globalStyle.text ]}>Starts { moment(match.schedule).format('hh:mm • DD/MM') }</Text>
                    <Text style={[ globalStyle.text ]}>{ match.odd.toFixed(2) }</Text>
                </View>
            }
        </View>
        <Separator />
        </>
    )
}

export default Match;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 8,
        paddingVertical:4,
        marginBottom:3
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    market: {
        flexDirection: 'row',
        // paddingVertical: 2
    }
})