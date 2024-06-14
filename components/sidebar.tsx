import { View, Text, TouchableOpacity, StyleSheet, StatusBar, FlatList } from 'react-native';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import { Icons, Menu } from '../models/models';
import { useEffect, useState } from 'react';
import { getMenu, getSport } from '../services/api';
import { addMenu, setupGames, updateSportId } from '../redux/feeds/game.slice';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Colors } from '../constants/colors';


type ItemProps = {
	item: Menu;
	onPress: () => void;
	backgroundColor: string;
	textColor: string;
};


const Item = ({item, onPress, backgroundColor, textColor }: ItemProps) => {
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

	return <TouchableOpacity onPress={ onPress } style={[ styles.item, { backgroundColor } ]}>
		<View style={ styles.touch }>
			<Icon size={ 14} name={ icons.find( el => el.id == item.id) ? icons.find( el => el.id == item.id)!.name : 'sports' } color={ textColor }/>
			<Text style={[ styles.title, { color: textColor } ]}>{ item.name }</Text>
		</View>
	</TouchableOpacity>

};

const Sidebar = () => {

	const [selectedId, setSelectedId] = useState<number>();
	const menu = useAppSelector( (state) => state.games.menu) as Menu[];
    const id = useAppSelector( (state) => state.games.sportId) as Number;
    const dispatch = useAppDispatch();

	const selectSport = async (id:number) => {
		setSelectedId(id);
		dispatch( updateSportId(id) );
		await getSport(id).then( res => dispatch( setupGames(res))).catch( err => console.log('Error--',err) );
	}
	

	const renderItem = ({item}: {item: Menu}) => { 
		const backgroundColor = Colors.backgroundColor;
    	const color = item.id === selectedId ? Colors.color : 'white';

		return (
			<Item
			  item={item}
			  onPress={() => selectSport(item.id)}
			  backgroundColor={ backgroundColor }
			  textColor={ color }
			/>
		);
	}

	useEffect(() => {
        getMenu().then( res => dispatch( addMenu(res)) );    
    }, [dispatch])
    
    return (
        <View>
            <FlatList 
				horizontal
				data={ menu }
				renderItem={ renderItem }
				keyExtractor={ item => item.id.toString() }
				extraData={ selectedId }
			>
				
			</FlatList>
        </View>
    )
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: StatusBar.currentHeight || 0,
		alignItems: 'center'
	},
	item: {
		paddingVertical:8,
		marginVertical: 3,
		marginHorizontal: 4,
	},
	title: {
	  	fontSize: 11,
		paddingTop: 5,
	},
	touch: {
		alignItems: 'center'
	}
});

export default Sidebar