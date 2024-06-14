import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { Betslip, Market, Match, MatchMarket } from "../../../models/models";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import { addBestlip } from "../../../redux/feeds/game.slice";
import { globalStyle } from "../../../assets/style/global.style";
import { Colors } from "../../../constants/colors";
import moment from 'moment';
import Separator from "../separator";
import { useNavigation } from '@react-navigation/native';
import { TouchableHighlight } from "react-native";

type Props = { match: Match, markets: Market[], onPress: ()=> void }

export default function Main({ match, markets, onPress }: Props) {  

    const betslip = useAppSelector( (state) => state.games.betslip) as Betslip[];
    const dispatch = useAppDispatch();
    const navigation = useNavigation();

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
            type: 'pre-match'
        }
        dispatch( addBestlip(obj) );
    }

    const filterMatch = (arr: MatchMarket,id: number) => {
        return arr.odds!.find( el => el.outcomeId === parseInt(id.toString()));
    }

    return (
        <>
            <View style={[ { marginBottom:8 }]}>

                <View style={[ globalStyle.sportHeader,styles.info ]}>
                    <Text style={ globalStyle.date }>{ moment(match.scheduled).format('hh:mm • DD/MM') }</Text>
                    <TouchableHighlight onPress={ ()=> onPress() }>
                        <Text style={ styles.moreMarket }>+{ match.marketCount } markets</Text>
                    </TouchableHighlight>
                </View>

                <View style={ globalStyle.sportHeader }>
                    <TouchableWithoutFeedback onPress={ ()=> onPress() }>
                        <View style={[ globalStyle.sportHeaderView, globalStyle.sportHeaderViewName ]}>
                            <Text style={[ globalStyle.text, { marginBottom:2 } ]}>{ match.home }</Text>
                            <Text style={ globalStyle.text }>{ match.away }</Text>
                        </View>
                    </TouchableWithoutFeedback>

                    <View style={[ globalStyle.sportHeaderView, styles.oddsHeader ]}>
                        {
                            markets!.map( el =>  {
                                const arr = match.markets.find( x => x.marketId === el.id.toString() && el.handicap === x.handicap) as MatchMarket;
                                if(arr) {
                                    return el.mobile && el.selections.map( (elem : any) => {
                                        if( filterMatch(arr,elem.id) !== null ) {
                                        const ab = filterMatch(arr,elem.id);
                                            return  <TouchableWithoutFeedback key={ elem.id.toString() } onPress={ () => addMatch(match,el.name,ab!.name,ab!.odds,ab!.id.toString()) }>
                                                    <View  style={[ globalStyle.sportHeaderMarketOdd, betslip.findIndex(g => g.oddId === ab!.id.toString()) > -1 ? styles.selected : styles.normal ]}>
                                                        <Text   style={[ styles.oddText,{ color: betslip.findIndex(g => g.oddId === ab!.id.toString()) > -1 ? Colors.backgroundColor : '#fff' } ]}>{ ab!.odds.toFixed(2) }</Text>
                                                    </View>
                                                </TouchableWithoutFeedback>
                                        } else {
                                            return  <Text key={elem.id.toString()}  style={[ globalStyle.text, globalStyle.sportHeaderMarketOdd ]}><i className="icofont-lock"></i></Text>;
                                        }
                                    });
                                }
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
        fontWeight: '500'
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