import { View, Text, SafeAreaView, StyleSheet, TextInput, FlatList, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Colors, height, width } from '../constants/colors';
import Separator from '../components/partials/separator';
import { globalStyle } from '../assets/style/global.style';

const Casino = () => {

    const casinoGames = [
        {
            image: 'https://rahisibetsu-dk2.pragmaticplay.net/game_pic/rec/325/vs10egrich.png?secureLogin=rhsbts_rahisibet&hash=bf55710e3bc11b8b48f00b63dc9c279b',
            name: 'Queen of Gods',
        },
        {
            image: 'https://rahisibetsu-dk2.pragmaticplay.net/game_pic/rec/325/vs20amuleteg.png?secureLogin=rhsbts_rahisibet&hash=bf55710e3bc11b8b48f00b63dc9c279b',
            name: 'Fortune of Gaza',
        },
        {
            image: 'https://rahisibetsu-dk2.pragmaticplay.net/game_pic/rec/325/vswayszombcarn.png?secureLogin=rhsbts_rahisibet&hash=bf55710e3bc11b8b48f00b63dc9c279b',
            name: 'Zombie Carnival',
        },
        {
            image: 'https://rahisibetsu-dk2.pragmaticplay.net/game_pic/rec/325/vs20cleocatra.png?secureLogin=rhsbts_rahisibet&hash=bf55710e3bc11b8b48f00b63dc9c279b',
            name: 'Cleo Catra',
        },
        {
            image: 'https://rahisibetsu-dk2.pragmaticplay.net/game_pic/rec/325/vs20gobnudge.png?secureLogin=rhsbts_rahisibet&hash=bf55710e3bc11b8b48f00b63dc9c279b',
            name: 'Goblin Heist Powernudge',
        },
        {
            image: 'https://rahisibetsu-dk2.pragmaticplay.net/game_pic/rec/325/vs20drtgold.png?secureLogin=rhsbts_rahisibet&hash=bf55710e3bc11b8b48f00b63dc9c279b',
            name: 'Drill That Gold',
        },
        {
            image: 'https://rahisibetsu-dk2.pragmaticplay.net/game_pic/rec/325/vswayslions.png?secureLogin=rhsbts_rahisibet&hash=bf55710e3bc11b8b48f00b63dc9c279b',
            name: '5 Lions Megaways',
        },
        {
            image: 'https://rahisibetsu-dk2.pragmaticplay.net/game_pic/rec/325/vswaysbbb.png?secureLogin=rhsbts_rahisibet&hash=bf55710e3bc11b8b48f00b63dc9c279b',
            name: 'Big Bass Bonanza Megaways',
        },
        {
          image: 'https://rahisibetsu-dk2.pragmaticplay.net/game_pic/rec/325/vswaysbufking.png?secureLogin=rhsbts_rahisibet&hash=bf55710e3bc11b8b48f00b63dc9c279b',
          name: 'Buffalo King Megaways',
        },
        {
            image: 'https://rahisibetsu-dk2.pragmaticplay.net/game_pic/rec/325/vswaysxjuicy.png?secureLogin=rhsbts_rahisibet&hash=bf55710e3bc11b8b48f00b63dc9c279b',
            name:  'Extra Juicy Megaways',
        }
    ];
    const [data,setData] = useState(casinoGames);

    const search = (name: string) => {
        let arr;
        if(name !== '') {
            var regexLiteral = new RegExp(`${name}`,'i');
            arr =  data.filter( el => regexLiteral.test(el.name) )
        } else {
            arr = casinoGames;
        }
        setData(arr);
        return arr;
    }

    return (
        <SafeAreaView style={ globalStyle.container }>
            {/* ---Carousel--- */}
            <Image source={ require('../assets/images/image2.png') } style= {{ width: width, maxHeight: 70 }} resizeMode="cover"/>

            <View style={{ paddingHorizontal: 8}}>
                <TextInput
                    style={styles.input}
                    onChangeText={ (text: string) => search(text) }
                    placeholder='Search...'
                    placeholderTextColor={ Colors.lightBlue }
                />
            </View>
            <Separator />
            <ScrollView>
                <View style={ styles.mainBox }>
                        {
                            [...Array(data.length)].map((x, i) => {
                                return <View style={ styles.box } key={`fr${i}`}>
                                    <Image  source={{ uri: data[i].image.toString() }} style={styles.image}/>
                                    <Text style={[ globalStyle.text,{ paddingVertical:6 }]}>{ data[i].name }</Text>
                                </View>
                            })
                        }
                        {
                            [...Array(data.length)].map((x, i) => {
                                return <View style={ styles.box } key={`sr${i}`}>
                                    <Image  source={{ uri: data[i].image.toString() }} style={styles.image}/>
                                    <Text style={[ globalStyle.text,{ paddingVertical:6 }]}>{ data[i].name }</Text>
                                </View>
                            })
                        }
                </View>
            </ScrollView>
            
        </SafeAreaView>
    )
}

export default Casino;

const styles = StyleSheet.create({
    container: { 
        flex:1, 
        backgroundColor: Colors.backgroundColor,
    },
    input: {
        height: 35,
        margin: 12,
        borderWidth: 1,
        borderColor: Colors.darkBorder,
        paddingHorizontal:4,
        paddingVertical:8,
        borderRadius:5,
        color: Colors.lightBlue,
        width: '100%',
        marginLeft:0,
        backgroundColor: Colors.backgroundColorOp
    },
    image: {
        height: height * 0.14,
        borderRadius:5,
        resizeMode: 'cover'
    },
    mainBox: {
        paddingHorizontal: 8,
        flexDirection:'row',
        flexWrap:'wrap',
        gap: 8,
        marginBottom: 50
    },
    box: {
        width: (width -24) /2,
    }
})