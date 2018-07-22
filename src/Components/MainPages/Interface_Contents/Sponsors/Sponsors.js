import React, { Component } from 'react';
import {
    StyleSheet, ScrollView, Text, Image
} from 'react-native';
import TitleBar from './Page_contents/TitleBar.js';
import Img from './Page_contents/Img.js';
import { View } from 'native-base';

export default class Sponsors extends Component {
    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>

                <TitleBar category='Organizers' />
                <Img viewStyle={styles.oneImg} url={'https://upe.cs.fiu.edu/'} supporter={{ uri: 'data:image/png;base64,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' }} />
                <TitleBar category='Cohost' />
                <Img viewStyle={styles.oneImg} url={'https://spotify.com'} supporter={{ uri: 'http://www.stickpng.com/assets/images/59b5bb466dbe923c39853e00.png' }} />
                <TitleBar category='Sponsors' />

                <View style={styles.Twoimg}>
                    <Img viewStyle={styles.oneImg} supporter={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjb6dyPyEEjOUK2zIm_OZ2RKkHi5owfvWZX9MpYweocvfTdwfFXQ' }} />
                    <Img viewStyle={styles.oneImg} supporter={{ uri: 'data:image/png;base64,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' }} />
                </View>
                <View style={styles.Twoimg}>
                    <Img viewStyle={styles.oneImg} supporter={{ uri: 'http://media.corporate-ir.net/media_files/IROL/17/176060/img/logos/amazon_logo_RGB.jpg' }} />
                    <Img viewStyle={styles.oneImg} supporter={{ uri: 'data:image/png;base64,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' }} />
                </View>
                <View style={styles.threeimg}>
                    <Img viewStyle={styles.oneImg} supporter={require('./Page_contents/assets/SpotifyTeal.png')} />
                    <Img viewStyle={styles.oneImg} supporter={require('./Page_contents/assets/SpotifyTeal.png')} />
                    <Img viewStyle={styles.oneImg} supporter={require('./Page_contents/assets/SpotifyTeal.png')} />
                </View>
                <View style={styles.threeimg}>
                    <Img viewStyle={styles.oneImg} supporter={require('./Page_contents/assets/SpotifyTeal.png')} />
                    <Img viewStyle={styles.oneImg} supporter={require('./Page_contents/assets/SpotifyTeal.png')} />
                    <Img viewStyle={styles.oneImg} supporter={require('./Page_contents/assets/SpotifyTeal.png')} />
                </View><View style={styles.threeimg}>
                    <Img viewStyle={styles.oneImg} supporter={require('./Page_contents/assets/SpotifyTeal.png')} />
                    <Img viewStyle={styles.oneImg} supporter={require('./Page_contents/assets/SpotifyTeal.png')} />
                    <Img viewStyle={styles.oneImg} supporter={require('./Page_contents/assets/SpotifyTeal.png')} />
                </View><View style={styles.threeimg}>
                    <Img viewStyle={styles.oneImg} supporter={require('./Page_contents/assets/SpotifyTeal.png')} />
                    <Img viewStyle={styles.oneImg} supporter={require('./Page_contents/assets/SpotifyTeal.png')} />
                    <Img viewStyle={styles.oneImg} supporter={require('./Page_contents/assets/SpotifyTeal.png')} />
                </View>

                <TitleBar category='Partners' />
                <View style={styles.fourimg}>
                    <Img viewStyle={styles.oneImg} supporter={require('./Page_contents/assets/SpotifyTeal.png')} />
                    <Img viewStyle={styles.oneImg} supporter={require('./Page_contents/assets/SpotifyTeal.png')} />
                    <Img viewStyle={styles.oneImg} supporter={require('./Page_contents/assets/SpotifyTeal.png')} />
                    <Img viewStyle={styles.oneImg} supporter={require('./Page_contents/assets/SpotifyTeal.png')} />
                    <Img viewStyle={styles.oneImg} supporter={require('./Page_contents/assets/SpotifyTeal.png')} />
                    <Img viewStyle={styles.oneImg} supporter={require('./Page_contents/assets/SpotifyTeal.png')} />
                    <Img viewStyle={styles.oneImg} supporter={require('./Page_contents/assets/SpotifyTeal.png')} />
                    <Img viewStyle={styles.oneImg} supporter={require('./Page_contents/assets/SpotifyTeal.png')} />
                    <Img viewStyle={styles.oneImg} supporter={require('./Page_contents/assets/SpotifyTeal.png')} />
                    <Img viewStyle={styles.oneImg} supporter={require('./Page_contents/assets/SpotifyTeal.png')} />
                    <Img viewStyle={styles.oneImg} supporter={require('./Page_contents/assets/SpotifyTeal.png')} />
                    <Img viewStyle={styles.oneImg} supporter={require('./Page_contents/assets/SpotifyTeal.png')} />
                    <Img viewStyle={styles.oneImg} supporter={require('./Page_contents/assets/SpotifyTeal.png')} />
                    <Img viewStyle={styles.oneImg} supporter={require('./Page_contents/assets/SpotifyTeal.png')} />
                    <Img viewStyle={styles.oneImg} supporter={require('./Page_contents/assets/SpotifyTeal.png')} />
                    <Img viewStyle={styles.oneImg} supporter={require('./Page_contents/assets/SpotifyTeal.png')} />
                    <Img viewStyle={styles.oneImg} supporter={require('./Page_contents/assets/SpotifyTeal.png')} />
                    <Img viewStyle={styles.oneImg} supporter={require('./Page_contents/assets/SpotifyTeal.png')} />
                </View>


            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
       paddingLeft:10,paddingRight:10


    },
    oneImg: {
        height: 120,
        width: '100%',
        padding: 10,
    },
    Twoimg: {
        flexDirection: 'row',
        width: '50%'
    },
    threeimg: {
        flexDirection: 'row',
        width: '33.3%'
    },
    fourimg: {
        flexDirection: 'row',
        width: '25%',

    }
});
