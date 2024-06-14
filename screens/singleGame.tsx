import { useEffect } from "react";
import { Betslip, Icons, Match, RootStackParamList } from "../models/models";
import { addBestlip, addBetslipType, getSingleMatch, setupGames } from "../redux/feeds/game.slice";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { View, Text, SafeAreaView, Dimensions, TouchableWithoutFeedback, ScrollView } from "react-native";
import { StyleSheet } from "react-native";
import { MaterialCommunityIcons, FontAwesome, } from '@expo/vector-icons';
import { globalStyle } from "../assets/style/global.style";
import moment from 'moment';
import { Colors, width } from "../constants/colors";
import Separator from "../components/partials/separator";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<RootStackParamList, 'SingleGame', 'MyStack'>;


export default function SingleGame({ route, navigation }: Props) {

    const id: number = route.params.gameId;
    const dispatch = useAppDispatch();
    

    useEffect( () => {
        dispatch( getSingleMatch( id ) );
        dispatch( addBetslipType('Pre-Match'));
    }, [id,dispatch])


    const betslip = useAppSelector( (state) => state.games.betslip) as Betslip[];
    const match = useAppSelector( (state) => state.games.singleMatch) as Match;

    const icons: Icons[] = [
		{ id: 10, name: 'sports-soccer' },
		{ id: 4, name: 'sports-basketball' },
		{ id: 17, name: 'sports-football' },
		{ id: 2, name: 'sports-soccer' },
		{ id: 6, name: 'sports-cricket' },
		{ id: 8, name: 'sports' },
		{ id: 15, name: 'sports-hockey' },
		{ id: 17, name: 'sports-rugby' },
		{ id: 22, name: 'sports-golf' },
		{ id: 24, name: 'sports-tennis' },
		{ id: 73743, name: 'sports-rugby' },
		{ id: 73744, name: 'sports-rugby' },
		{ id: 91189, name: 'sports-volleyball' },
		{ id: 99614, name: 'sports-handball' },
		{ id: 269467, name: 'sports-tennis' },
		{ id: 491393, name: 'sports' },
	]

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
            type:'pre-match'
        }
        dispatch( addBestlip(obj) );
    }

    return (
        <SafeAreaView style={ styles.container }>

            <View style={ styles.heading }>
                <TouchableWithoutFeedback onPress={ ()=>navigation.goBack() }>
                    <View style={ styles.back }>
                        <FontAwesome name={ 'arrow-circle-o-left' } size={15} color="#fff" />
                        <Text style={[ globalStyle.text, styles.back ]}>Back</Text>
                    </View>
                </TouchableWithoutFeedback>
                <View>
                    <Text style={[ globalStyle.text, ]}>{ match.country } • { match.tournamanent}</Text>
                </View>
            </View>
            <Separator />
            

            <View style={ styles.heading }>
                <View style={ styles.team }>
                    <MaterialCommunityIcons name={ 'shield-star-outline' } size={15} color="#fff" />
                    <Text style={[ globalStyle.text, { marginTop: 4} ]} numberOfLines={1}>{ match.home }</Text>
                </View>
                <Text style={[ globalStyle.date, { flex:1 } ]}>{ moment(match.scheduled).format('hh:mm • DD/MM') }</Text>
                <View style={ styles.team }>
                    <MaterialCommunityIcons name={ 'shield-star-outline' } size={15} color="#fff" />
                    <Text style={[ globalStyle.text, { marginTop: 4} ]} numberOfLines={1}>{ match.away }</Text>
                </View>
            </View>
            <Separator />

            <ScrollView>
                {
                    match.markets !== undefined && match.markets.map( el => {
                        return <View style={ styles.marketContainer } key={el.id}>
                        <View style={[ globalStyle.sportHeader, { paddingHorizontal: 8, paddingVertical: 10, gap: 5} ]}>
                            <MaterialCommunityIcons name={ 'shield-star' } size={15} color="#fff" />
                            <Text style={ globalStyle.text }>{ el.name }</Text>
                        </View>
                        <View style={ styles.odds }>
                        {
                            el.odds && el.odds.map( ele => {
                                return <TouchableWithoutFeedback key={ele.id} onPress={ () => addMatch(match,el.name,ele.name,ele.odds,ele.id.toString())} >
                                <View style={[ styles.market, betslip.findIndex(g => g.oddId === ele!.id.toString()) > -1 ? styles.selected : styles.normal ]}>
                                    <Text numberOfLines={1} style={[ globalStyle.text,{ flex:1 },{ color: betslip.findIndex(g => g.oddId === ele!.id.toString()) > -1 ? Colors.backgroundColor : '#fff' } ]}>{ ele.name }</Text>
                                    <Text style={[ globalStyle.text,{ color: betslip.findIndex(g => g.oddId === ele!.id.toString()) > -1 ? Colors.backgroundColor : '#fff' } ]}>{ ele.odds.toFixed(2) }</Text>
                                </View>
                            </TouchableWithoutFeedback>
                            })
                        }
                        </View>
                        <Separator />
                    </View>
                    })
                } 
            </ScrollView>

        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container:{
        backgroundColor: Colors.backgroundColor,
    },
    heading: {
        paddingVertical: 15,
        paddingHorizontal: 8,
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'nowrap'
    },
    back: {
        fontWeight: 'bold',
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 5
    },
    marketContainer: {
        marginBottom: 3
    },
    market: {
        backgroundColor: Colors.backgroundColorOp,
        borderColor: Colors.darkBorder,
        borderWidth:1,
        borderRadius:5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 5,
        paddingVertical: 8,
        gap:4,
        marginBottom: 2,
        width: (width - 21) / 2,
        
    },
    normal: {
        backgroundColor: Colors.backgroundColorOp,
        borderColor: Colors.darkBorder,
    },
    selected: {
        backgroundColor: Colors.color,
        borderColor: Colors.color,
    },
    odds: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 5,
        paddingHorizontal: 8,
        paddingVertical: 10
    },
    team: {
        flex:2,
        alignItems: 'center'
    }
})