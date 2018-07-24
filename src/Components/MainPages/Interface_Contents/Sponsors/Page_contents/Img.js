import React, { Component } from 'react';
import {
    StyleSheet, Image, View, Alert, TouchableOpacity, Linking
} from 'react-native';
export default class Img extends React.Component {

    constructor(props) {
        super(props);
    }
    PressedButton = () => {
        Linking.openURL(this.props.url)
    }
    render() {
        return (
            <View style={this.props.viewStyle}>
                <TouchableOpacity onPress={this.PressedButton} >
                    <Image style={Styles.imagestyle} source={this.props.supporter} />
                </TouchableOpacity>
            </View>

        );
    }
}
const Styles = StyleSheet.create({
    container: {
    },
    imagestyle: {
        height: '100%',
        width: '100%',
        //borderWidth: 8,
        resizeMode: 'contain',
        //borderColor: 'lightgrey'
    }
});