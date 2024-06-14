import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { Betslip, Match } from "../../../models/models";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import { addBestlip } from "../../../redux/feeds/game.slice";
import { globalStyle } from "../../../assets/style/global.style";
import { Colors } from "../../../constants/colors";
import moment from 'moment';
import Separator from "../separator";

type Props = { match: Match }

export default function Main({ match}: Props) {  

    const betslip = useAppSelector( (state) => state.games.jackpot) as Betslip[];
    const dispatch = useAppDispatch();   

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
        dispatch( addBestlip(obj) );
    }

    const filterMatch = () => {
        return match.markets.find( el => el.marketId === '2') || null
    }

    return (
        <>
            <View style={[ { marginBottom:8 }]}>

                <View style={[ globalStyle.sportHeader,styles.info ]}>
                    <Text style={ globalStyle.date }>{ moment(match.scheduled).format('hh:mm • DD/MM') }</Text>
                </View>

                <View style={ globalStyle.sportHeader }>
                    
                    <View style={[ globalStyle.sportHeaderView, globalStyle.sportHeaderViewName ]}>
                        <Text style={[ globalStyle.text, { marginBottom:2 } ]}>{ match.home }</Text>
                        <Text style={ globalStyle.text }>{ match.away }</Text>
                    </View>

                    <View style={[ globalStyle.sportHeaderView, styles.oddsHeader ]}>
                        {
                            filterMatch()!.odds.map( elem =>  {
                                return  <TouchableWithoutFeedback key={ elem.id.toString() } onPress={ () => addMatch(match,filterMatch()!.name,elem.name,elem.odds,elem.id.toString()) }>
                                    <View  style={[ globalStyle.sportHeaderMarketOdd, betslip.findIndex(g => g.oddId === elem.id.toString()) > -1 ? styles.selected : styles.normal ]}>
                                        <Text   style={[ styles.oddText,{ color: betslip.findIndex(g => g.oddId === elem.id.toString()) > -1 ? Colors.backgroundColor : '#fff' } ]}>{ elem.odds.toFixed(2) }</Text>
                                    </View>
                                </TouchableWithoutFeedback>
                            })
                        }
                    </View>

                </View>

            </View>
            <Separator />
        </>
    )
}

const styles = StyleSheet.create ({
    oddsHeader: {
        flexDirection: 'row',
        gap:5,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    oddText: {
        textAlign: 'center', 
        fontSize: Colors.smallText,
    },
    normal: {
        backgroundColor: Colors.backgroundColorOp,
        borderColor: Colors.darkBorder,
    },
    selected: {
        backgroundColor: Colors.color,
        borderColor: Colors.color,
    },
    moreMarket: {
        color: Colors.color,
        fontSize: Colors.verySmallText,
        fontWeight: '500'
    },
    info:  { paddingHorizontal: 7, justifyContent: 'space-between', marginBottom: 4 }
})