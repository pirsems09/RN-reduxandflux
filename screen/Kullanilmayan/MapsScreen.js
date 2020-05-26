import React, { Component } from 'react';
import { Text, View, StatusBar, TextInput } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import styles from './../../src/util/index.style';
import { ENTRIES1, ENTRIES2 } from '../../src/util/entries';
import { sliderWidth, itemWidth } from '../../src/util/SliderEntry.style';
import SliderEntry from '../../src/util/SliderEntry';
import Carousel from 'react-native-snap-carousel';

export default class App extends Component {

    state = {
        markers: [],
        detail: '',
        title: '',
        description: ''
    }


    onPressHandler(e) {
        const coordinates = e.nativeEvent.coordinate;
        const { markers, title, description } = this.state;

        markers.push({
            id: markers.length,
            coordinates,
            title: title,
            description: description
        })

        this.setState({
            detail: JSON.stringify(coordinates),
            markers
        });
    }

    _renderItem ({item, index}) {
        return <SliderEntry data={item} even={(index + 1) % 2 === 0} />;
    }

    _renderLightItem ({item, index}) {
        return <SliderEntry data={item} even={false} />;
    }

    //Ok
    layoutExample (number, title, type) {
        const isTinder = type === 'tinder';
        return (
            <View style={styles.exampleContainer}>
                <Carousel
                    data={isTinder ? ENTRIES2 : ENTRIES1}
                    renderItem={isTinder ? this._renderLightItem : this._renderItem}
                    sliderWidth={sliderWidth}
                    itemWidth={itemWidth}
                    containerCustomStyle={styles.slider}
                    contentContainerCustomStyle={styles.sliderContentContainer}
                    layout={type}
                    loop={true}
                />
            </View>
        );
    }
    render() {
        const { markers } = this.state;
        const example3 = this.layoutExample(3, '"Stack of cards" layout | Loop', 'stack');

        return (

            <View style={styles.container}>
                <StatusBar hidden={true} />
                <MapView
                    //provider={PROVIDER_GOOGLE}
                    onPress={this.onPressHandler.bind(this)}
                    style={styles.map}
                    initialRegion={{
                        latitude: 41.0082,
                        longitude: 28.9784,
                        latitudeDelta: 0.1,
                        longitudeDelta: 0.1
                    }}>
                    {markers.map(marker => {
                        return (
                            <Marker
                                key={marker.id}
                                coordinate={marker.coordinates}
                                title={marker.title}
                                description={marker.description}
                            />
                        )
                    })}
                </MapView>

                <View style={styles.detailWrapper}>

                    {example3}

                </View>

            </View>
        );
    }
}