import { View, Text, SafeAreaView, Image, StyleSheet, TouchableHighlight, ScrollView } from 'react-native';
import React, { useEffect } from 'react';
import { Colors, width } from '../constants/colors';
import { globalStyle } from '../assets/style/global.style';
import Separator from '../components/partials/separator';
import Market from '../components/partials/feeds/market';
import { getJackpot } from '../services/api';
import { addBetslipType, autoSelectJackpot, setupJackpotGames } from '../redux/feeds/game.slice';
import { Betslip, Match, Sport } from '../models/models';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import Main from '../components/partials/jackpot/main';
import { useIsFocused } from '@react-navigation/native';
import Sidebar from '../components/sidebar';

const Jackpot = () => {

    const feeds = useAppSelector( (state) => state.games.jackpotMatches) as Match[];
    const sportsMarkets = useAppSelector( (state) => state.games.markets) as Sport[];
    const dispatch = useAppDispatch();
    const sport = sportsMarkets.find( el => el.id === 10 ) as Sport;
    const isFocused = useIsFocused();

    if(isFocused) {
        dispatch( addBetslipType('Jackpot'));
    }

    

    const addMatch = (match:Match, market:string, selected: string, odd: number, oddId: string) => {
        let obj: Betslip = {
            id: match.id,
            home: match.home,
            away: match.away,
            market: market,
            selected: selected,
            odd: odd,
            oddId: oddId,
            schedule: match.scheduled,
            type: 'jackpot'
        } 
        dispatch( autoSelectJackpot(obj) );
    }

    const autoSelect = () => {
        feeds.forEach( (el) => {

            let ind = Math.floor(Math.random() * 3) + 1;
            const market = el.markets.find( el => el.marketId === '2');
            
            if( market ) {
                market.odds.forEach( arg => {
                    if( arg.outcomeId === ind ) {
                        addMatch( el,market.name,arg.name,arg.odds,arg.id.toString() );
                    }
                });
            }
        });
    }

    useEffect( () =>  {
        getJackpot().then( res => { 
            dispatch( setupJackpotGames(res));
        }).catch( err => console.log('Error--',err) );
    }, []);

    
    return (
        <SafeAreaView style={ globalStyle.container }>
            
            {/* ---Carousel--- */}
            <Image source={ require('../assets/images/image3.png') } style= {{ width: width, maxHeight: 70 }} resizeMode="cover"/>

            <ScrollView>
                <View style={{ marginBottom: 50 }}>
                    {/* ---Auto Select--- */}
                    <View style={{ paddingVertical:8, marginHorizontal:8,marginBottom:4 }}>
                        <TouchableHighlight style={ styles.login } onPress={ ()=> autoSelect() }>
                            <Text style={[ globalStyle.text, { textAlign:'center', color: Colors.backgroundColor } ]}>Auto Select</Text>
                        </TouchableHighlight>
                    </View>
                    <Separator />

                    {/* ---Markets--- */}
                    {  typeof sport === 'object' &&  <Market sport={ sport }/> }

                    {/* ---Matches--- */}
                    { feeds.length > 0 && typeof sport === 'object' && feeds.map( x => <Main key={ x.id.toString() }  match={x} />) }
                </View>

            </ScrollView>

        </SafeAreaView>
        
    )
}

export default Jackpot;

const styles = StyleSheet.create({
    container: { 
        flex:1, 
        backgroundColor: Colors.backgroundColor,
    },
    login: {
        width: (width - 16),
        backgroundColor: Colors.color,
        paddingVertical: 9,
        textAlign: 'center',
        borderRadius: 5
    },
});