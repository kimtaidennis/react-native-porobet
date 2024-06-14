import { useEffect, useState } from 'react';
import { StyleSheet,Image, Text, View, SafeAreaView, Dimensions, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import { Match, RootStackParamList, Sport } from '../models/models';
import { addBetslipType, addMenu, setupGames, updateSportId } from '../redux/feeds/game.slice';
import { getMenu, getSport } from '../services/api';
import Market from '../components/partials/feeds/market';
import { Colors } from '../constants/colors';
import Main from '../components/partials/feeds/main';
import { globalStyle } from '../assets/style/global.style';
import Countries from '../components/partials/feeds/countries';
import Carousel from '../components/partials/feeds/carousel';
import Separator from '../components/partials/separator';
import Sidebar from '../components/sidebar';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useIsFocused } from '@react-navigation/native';

type Props = NativeStackScreenProps<RootStackParamList, 'Home', 'MyStack'>;

export default function Home({ navigation }: Props) {

    const dispatch = useAppDispatch();
    const feeds = useAppSelector( (state) => state.games.matches) as Match[];
    const sportsMarkets = useAppSelector( (state) => state.games.markets) as Sport[];
    const sportId = useAppSelector( (state) => state.games.sportId);
    const [tab,setTab] = useState<string>('featured');
    const id = '10';

    const isFocused = useIsFocused();

    if(isFocused) {
        dispatch( addBetslipType('Pre-Match'));
    }
    
    const navigate = (id: number) => {
        navigation.navigate("SingleGame",{ gameId: id })
    }
    
    const sport = sportsMarkets.find( el => el.id === sportId) as Sport;
    const spid: number = id !== undefined ? parseInt(id) : 10;
    var deviceWidth = Dimensions.get("window").width;
    
    useEffect( () =>  {        
        setTab('featured');
        getMenu().then( res => dispatch(addMenu(res)));
        getSport(spid).then( res => { 
            dispatch( addBetslipType('Pre-Match'));
            dispatch( setupGames(res));
            dispatch( updateSportId(spid) );
        }).catch( err => console.log('Error--',err) );
      }, [spid,id]);
      
    return (
        <SafeAreaView style={ globalStyle.container}>
            <ScrollView>
                {/* ---Navbar--- */}
                <Sidebar />
                {/* ---Carousel--- */}
                <Image source={ require('../assets/images/image1.png') } style= {{ width: deviceWidth, maxHeight: 70 }} resizeMode="contain"/>
                
                {/* ---Quick links--- */}
                <View style={ styles.quickLinks }>
                    <TouchableWithoutFeedback onPress={ () => setTab('featured') }>
                        <Text style={[ globalStyle.text,  tab === 'featured' ?  styles.selected: globalStyle.text ]}>Featured</Text>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={ () => setTab('featured') }>
                        <Text style={[ globalStyle.text ]}>Today</Text>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={ () => setTab('featured') }>
                        <Text style={[ globalStyle.text ]}>Upcoming</Text>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={ () => setTab('country') }>
                        <Text style={[ globalStyle.text, tab === 'country' ?  styles.selected: globalStyle.text ]}>Countries</Text>
                    </TouchableWithoutFeedback>
                </View>
                <Separator />

                { tab !== 'country' &&
                    <>
                    {/* ---Markets--- */}
                    {  typeof sport === 'object' &&  <Market sport={ sport }/> }

                    { feeds.length > 0 && typeof sport === 'object' && feeds.map( x => <Main key={ x.id.toString() }  match={x} markets={ sport.markets } onPress={ ()=> navigate(x.id) }/> ) }
                    </>
                }

                { tab === 'country' && <Countries /> }

            </ScrollView>
        </SafeAreaView>
       
    )
}

const styles = StyleSheet.create({
    container: {
        padding:2
    },
    quickLinks: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        paddingHorizontal: 8,
        paddingVertical:15,
    },
    selected: {
        color: Colors.color
    }
})
