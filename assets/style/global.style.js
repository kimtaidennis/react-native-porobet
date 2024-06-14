import { StyleSheet,StatusBar } from "react-native";
import { Colors } from "../../constants/colors";


export const globalStyle = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        backgroundColor: Colors.backgroundColor
    },
    bg: {
        backgroundColor: Colors.backgroundColor,
    },
    text: {
        color: '#fff',
        fontSize: Colors.smallText,
        fontFamily: "medium"
    },
    date: {
        fontSize: Colors.verySmallText,
        color: Colors.lightBlue
    },
    // ---------Market Header-------
    sportHeader: {
        flexDirection: 'row',
        alignContent: 'center',
    },
    sportHeaderView: {
        flex:1,
        paddingHorizontal: 8,
    },
    sportHeaderViewName: {
        justifyContent: 'flex-start'
    },
    sportHeaderMarket: {
        paddingVertical: 4,
        textAlign: 'center',
    },
    sportHeaderMarketType: {
        paddingVertical: 3,
        textAlign: 'center',
        flex: 1,
    },
    sportHeaderMarketOdd: {
        borderWidth: 1,
        borderRadius: 5,
        fontSize: Colors.smallText,
        paddingVertical: 9,
        flex:1,
        justifyContent: 'center',
    },
    separator: {
        marginBottom:5,
        marginHorizontal:8,
        height: 1, 
        borderWidth: 1, 
        borderColor: Colors.darkBorder, 
        borderStyle: 'dashed'
    },

})