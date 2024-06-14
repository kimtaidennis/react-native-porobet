import { StyleSheet, Text, View } from 'react-native';
import { Sport } from '../../../models/models';
import { globalStyle } from '../../../assets/style/global.style';
import Separator from '../separator';

type Props = { sport: Sport }


export default function Market({ sport } : Props) {
    return (
        <>
            <View style={[ globalStyle.sportHeader,{ marginBottom: 3,paddingVertical:2 } ]}>
                <View style={[ globalStyle.sportHeaderView,{ justifyContent:'center' }]}>
                    <Text style={ globalStyle.text }>{ sport.name }</Text>
                </View>
                <View style={ globalStyle.sportHeaderView }>
                    {
                        sport.markets.map( (el) => {
                            return el.mobile && <View key={el.key}>
                                    <Text style={[ globalStyle.date, globalStyle.sportHeaderMarket]} >{ el.name }</Text>
                                    <View style={ globalStyle.sportHeader }>
                                        {
                                            el.selections.map( (ell) => <Text key={ell.id} style={[ globalStyle.date,globalStyle.sportHeaderMarketType ]} >{ ell.name }</Text> )
                                        }
                                    </View>
                                </View>
                        }
                            
                        )
                    }
                </View>
            </View>
            <Separator />    
        </>
    )
}
