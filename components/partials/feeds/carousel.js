import { View, StyleSheet } from 'react-native';
import { SliderBox } from "react-native-image-slider-box";
import React from 'react'

const Carousel = () => {
    const slides = [
        require('../../../assets/images/image1.png'),
        require('../../../assets/images/image2.png'),
        require('../../../assets/images/image3.png')
    ]
    return (
        <View style={ styles.container }>
            <SliderBox
                images={ slides}
                autoplay
                ImageComponentStyle={ styles.img }
                ci
            >

            </SliderBox>
        </View>
    )
}

export default Carousel;

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center'
    },
    img: {
        width: '100%'
    }
})