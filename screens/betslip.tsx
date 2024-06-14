import { View, Text, SafeAreaView, StyleSheet, FlatList, TextInput, TouchableHighlight } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../redux/hook';
import { Betslip, RootStackParamList } from '../models/models';
import Match from '../components/partials/betslip/match';
import { clearBetslip, clearJackpotSlip, deleteBetslip, deleteJackpotSlip, updateOdds } from '../redux/feeds/game.slice';
import { Colors, height, width } from '../constants/colors';
import { TouchableWithoutFeedback } from 'react-native';
import Separator from '../components/partials/separator';
import { globalStyle } from '../assets/style/global.style';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList, 'BetslipView', 'MyStack'>;

const BetslipView = ({ navigation } : Props) => {

    const betslip = useAppSelector( (state) => state.games.betslip) as Betslip[];
    const jackpot = useAppSelector( (state) => state.games.jackpot) as Betslip[];
    const type = useAppSelector( (state) => state.games.type) as string;
    const dispatch = useAppDispatch();
    const odds: number = useAppSelector(state => state.games.odds);
    const [amount,setAmount] = useState('100');
    
    const possibleWin = (amount: number): number => {
        return Math.ceil( odds * amount);
    }
    
    const casino = () => {
        navigation.navigate('Casino');
    }

    const jackpot_ = () => {
        navigation.navigate('Jackpot');
    }

    const whichType = () => {
        if(type === 'Jackpot') {
            return jackpot.length > 0 ? `(${jackpot.length})` : '';
        } else {
            return betslip.length > 0 ? `(${betslip.length})` : ''; //clearJackpotSlip
        }
    }    

    useEffect(() => {
        dispatch( updateOdds() );
    }, [betslip]);

    return (
        <SafeAreaView style={ globalStyle.container }>

            <View style={ styles.header }>

                <Text style={ styles.betslipHeader}>Betslip { whichType() }</Text>

                { betslip.length > 0  && type === 'Pre-Match' && <TouchableWithoutFeedback onPress={ () => dispatch( clearBetslip())}>
                    <Text style={[ globalStyle.text ]}>Clear</Text>
                </TouchableWithoutFeedback> }

                { jackpot.length > 0  && type === 'Jackpot' && <TouchableWithoutFeedback onPress={ () => dispatch( clearJackpotSlip())}>
                    <Text style={[ globalStyle.text,{ fontWeight: '600'} ]}>Clear</Text>
                </TouchableWithoutFeedback> }

            </View>

            <Separator />

            {/* Prematch Betslip */}
            {
                betslip.length > 0 && type === 'Pre-Match' && <View style={{ maxHeight: height* 0.6,overflow: 'scroll',backgroundColor:Colors.backgroundColorOp,paddingVertical:8 }}><FlatList
                    data={ betslip }
                    renderItem={ ({item}) => (<Match key={ item.oddId} match={item} deleteBetslip={ () => dispatch(deleteBetslip(item.id)) }/>)}
                    keyExtractor={ item => item.oddId }
                /></View>
            }

            {/* Jackpot Betslip */}
            {
                jackpot.length > 0 && type === 'Jackpot' && <View style={{ maxHeight: height* 0.65,overflow: 'scroll',backgroundColor:Colors.backgroundColorOp }}><FlatList
                    data={ jackpot }
                    renderItem={ ({item}) => (<Match key={ item.oddId} match={item} deleteBetslip={ () => dispatch( deleteJackpotSlip(item.id) ) }/>)}
                    keyExtractor={ item => item.oddId }
                /></View>
            }
            

            {/* Empty Prematch Betslip */}
            {
                betslip.length === 0 && type === 'Pre-Match' && <View style={ styles.noBetslip }>
                    <Text style={[ globalStyle.text ]}>You have not selected any bet</Text>
                    <Text style={[ globalStyle.text ]}>Make your first pick to start playing.</Text>
                </View>
            }

            {/* Empty Jackpot Betslip */}
            {
                jackpot.length === 0 && type === 'Jackpot' && <View style={ styles.noBetslip }>
                    <Text style={[ globalStyle.text ]}>You have not selected any jackpot bet</Text>
                    <Text style={[ globalStyle.text ]}>Make your first pick to start playing.</Text>
                </View>
            }

            {
                betslip.length > 0 && type === 'Pre-Match' && <View style={ styles.oddsInfo }>
                    <View style={ styles.oddsText }>
                        <Text style={[ globalStyle.text,{ fontWeight: '600'} ]}>Total Odds</Text>
                        <Text style={[ globalStyle.text,{ fontWeight: '600'} ]}>{ odds.toFixed(2) }</Text>
                    </View>
                    <View style={ styles.oddsText }>
                        <Text style={[ globalStyle.text,{ fontWeight: '600'} ]}>Possible Win</Text>
                        <Text style={[ globalStyle.text,{ fontWeight: '600'} ]}>Ksh. { possibleWin(parseInt(amount)).toLocaleString() }</Text>
                    </View>
                
                    <TextInput
                        style={styles.input}
                        onChangeText={ setAmount }
                        value={ amount}
                    />
                    
                    <View style={ styles.oddsText_ }>
                        <TouchableHighlight style={ styles.login }>
                            <Text style={[ globalStyle.text, styles.fw, { color:Colors.backgroundColor } ]}>Login</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={ styles.share }>
                            <Text style={[ globalStyle.text, styles.fw,{ color: '#fff' } ]}>Share</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            }

            {
                jackpot.length > 0 && type === 'Jackpot' && <View style={ styles.oddsInfo }>

                    <TextInput
                        style={styles.input}
                        onChangeText={ setAmount }
                        value={ amount}
                    />
                    
                    <View style={ styles.oddsText_ }>
                        <TouchableHighlight style={ styles.login }>
                            <Text style={[ globalStyle.text, styles.fw, { color:Colors.backgroundColor } ]}>Login</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={ styles.share }>
                            <Text style={[ globalStyle.text, styles.fw,{ color: '#fff' } ]}>Share</Text>
                        </TouchableHighlight>
                    </View>
                    
                </View>
            }

        </SafeAreaView>
    )
}

export default BetslipView;

const styles = StyleSheet.create({
    container: { 
        flex:1, 
        backgroundColor: Colors.backgroundColor 
    },
    header: { 
        paddingHorizontal: 8, 
        paddingTop:12,
        paddingBottom:5,
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        marginBottom:5
    },
    betslipHeader: { 
        fontSize: 13, 
        fontWeight: "600",
        color:'white'
    },
    noBetslip: {
        marginTop:5,
        paddingVertical:50,
        backgroundColor: Colors.backgroundColorOp,
        borderRadius:5,
        marginHorizontal:8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    oddsInfo: {
        paddingHorizontal: 8,
        paddingVertical: 8,
        position: 'absolute',
        right: 0,
        left: 0,
        bottom: 80,
        backgroundColor: Colors.backgroundColor
    },
    oddsText: {
        paddingVertical: 4,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    oddsText_: {
        paddingVertical: 4,
        gap:10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    input: {
        height: 35,
        // margin: 12,
        borderWidth: 1,
        borderColor: Colors.darkBorder,
        paddingHorizontal: 6,
        paddingVertical: 8,
        borderRadius: 5,
        color: Colors.lightBlue,
        width: '100%',
        marginLeft:0,
        backgroundColor: Colors.backgroundColorOp
    },
    login: {
        width: (width - 26) / 2,
        backgroundColor: Colors.color,
        paddingVertical: 9,
        textAlign: 'center',
        borderRadius: 5
    },
    share: {
        width: (width - 26) / 2,
        borderColor: Colors.darkBorder,
        backgroundColor: Colors.backgroundColorOp,
        borderWidth: 1,
        paddingVertical: 9,
        textAlign: 'center',
        borderRadius: 5
    },
    fw: {
        textAlign: 'center',
        fontWeight:'600'
    }
    
})