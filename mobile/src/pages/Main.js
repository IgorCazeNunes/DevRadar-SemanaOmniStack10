import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, View, Text, TextInput, TouchableOpacity } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { requestPermissionsAsync, getCurrentPositionAsync} from 'expo-location';
import { MaterialIcons } from '@expo/vector-icons';

function Main({ navigation }) {
    const [currentRegion, setCurrentRegion] = useState(null);

    useEffect(() => {
        async function loadInitialPosition() {
            const { granted } = await requestPermissionsAsync();

            if (granted) {
                const { coords } = await getCurrentPositionAsync({
                    enableHighAccuracy: true,
                });

                const { latitude, longitude } = coords;

                setCurrentRegion({
                    latitude,
                    longitude,
                    latitudeDelta: 0.04,
                    longitudeDelta: 0.04,
                });
            }
        }

        loadInitialPosition();
    }, []);
    
    if(!currentRegion) {
        return null;
    }

    return (
        <>
            <MapView initialRegion={currentRegion} style={styles.map}> 
                <Marker coordinate={{ latitude: -9.391282, longitude: -40.4698979 }} >
                    <Image style={styles.avatar} source={{ uri: 'https://avatars0.githubusercontent.com/u/30866274?s=460&v=4https://avatars0.githubusercontent.com/u/30866274?s=460&v=4' }} />
                    
                    <Callout onPress={() => {
                        navigation.navigate('Profile', { github_username: 'IgorCazeNunes' })
                    }}>
                        <View style={styles.callout}>
                            <Text style={styles.devName}>Igor Cazé</Text>
                            <Text style={styles.devBio}>UAU</Text>
                            <Text style={styles.devTechs}>Spring, Spring.Boot, Angular 6</Text>
                        </View>
                    </Callout>
                </Marker>
            </MapView>

            <View style={styles.searchForm}>
                <TextInput 
                    style={styles.searchInput}
                    placeholder="Buscar devs por techs..."
                    placeholderTextColor="#999"
                    autoCapitalize="words"
                    autoCorrect={false}
                />

                <TouchableOpacity onPress={() => {}} style={styles.loadButton}>
                    <MaterialIcons name="my-location" size={20} color="#FFFFFF" />
                </TouchableOpacity>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    map: {
        flex: 1
    },

    avatar: {
        width: 46,
        height: 46,
        borderRadius: 4,
        borderWidth: 4,
        borderColor: '#FFFFFF',
    },

    callout: {
        width: 260,
        padding: 10,
    },

    devName: {
        fontWeight: 'bold',
        fontSize: 16,
    },

    devBio: {
        color: '#666666',
        marginTop: 5,
    },

    devTechs: {
        marginTop: 5,
    },

    searchForm: {
        position: 'absolute',
        top: 20,
        left: 20,
        right: 20,
        zIndex: 5,
        flexDirection: 'row',
    },
    
    searchInput: {
        flex: 1,
        height: 50,
        backgroundColor: '#FFFFFF',
        color: '#333333',
        borderRadius: 25,
        paddingHorizontal: 20,
        fontSize: 16,
        shadowColor: '#000000',
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 4,
            height: 4,
        },
        elevation: 2,
    },

    loadButton: {
        width: 50,
        height: 50,
        backgroundColor: '#8E4DFF',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15,
    },
})

export default Main;