import { ScrollView, View, Text, TouchableOpacity,StyleSheet, TouchableWithoutFeedback } from "react-native";
import { Menu, Flags, Country } from "../../../models/models";
import { useAppSelector } from "../../../redux/hook";
import { useState, type PropsWithChildren } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { globalStyle } from "../../../assets/style/global.style";

type AccordionItemPros = PropsWithChildren<{
  title: string;
  count: number;
}>;

function AccordionItem({ children, title, count }: AccordionItemPros): JSX.Element {
    const [ expanded, setExpanded ] = useState(false);
    const flags = useAppSelector( (state) => state.games.flags) as Flags;

    function toggleItem() {
        setExpanded(!expanded);
    }

    const body = <View style={styles.accordBody}>{ children }</View>;

    return (
        <View style={styles.accordContainer}>
            <TouchableOpacity style={styles.accordHeader} onPress={ toggleItem }>
                <Text style={styles.accordTitle}>
                 { title } ({ count })
                </Text>
                <Icon name={ expanded ? 'minus' : 'plus' }
                    size={10} color="#fff" />
            </TouchableOpacity>
            { expanded && body }
        </View>
    );
}

export default function Countries() {
    
    const sportId = useAppSelector( (state) => state.games.sportId);
    const all = useAppSelector( (state) => state.games.menu) as Menu[];
   

    const menu = all.find( x => x.id === sportId) as Menu;
    const countries: Country[] = [...menu.country].sort(function(a, b) {
        if(a.name.toLowerCase() < b.name.toLowerCase()) return -1;
        if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;
        return 0;
    });

    return (
        <View>
            <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.container}>
                {
                    countries.map( el => <AccordionItem title={ el.name } count={ el.leagues.length } key={el.id}>
                        {
                            el.leagues.map( ell => <TouchableWithoutFeedback key={ell.id}>
                                <View style={ styles.league }>
                                    <Icon name="long-arrow-right" size={10} color="#fff"></Icon> 
                                    <Text style={[ globalStyle.text, { marginLeft: 5,fontSize:12 } ]}> { ell.name }</Text>
                                </View>
                            </TouchableWithoutFeedback>)
                        }
                </AccordionItem>  )
                }
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    accordContainer: {
        paddingBottom: 4
    },
    accordHeader: {
        paddingHorizontal: 8,
        paddingVertical:7,
        color: '#eee',
        flex: 1,
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    league: {
        flex: 1,
        flexDirection: 'row',
        paddingVertical: 4,
        alignItems:'center'
    },
    accordTitle: {
        fontSize: 13,
        color: 'white',
        fontFamily: "medium"
    },
    accordBody: {
        paddingHorizontal: 8,
        // backgroundColor: 'coral'
    },
    textSmall: {
        fontSize: 16
    },
    seperator: {
        height: 12
    }
  });
