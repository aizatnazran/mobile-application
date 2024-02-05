//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { color, fontsize } from '../constant';

// create a component
const GetStarted = ({navigation}) => {
    return (
        <View style={styles.container}>
            {/* <View style = {{
                marginTop: 20,
            }}>
                <Text style = {{fontSize: fontsize.small}}>This is small ({fontsize.small})</Text>
                <Text style = {{fontSize: fontsize.medium}}>This is medium ({fontsize.medium})</Text>
                <Text style = {{fontSize: fontsize.large}}>This is large ({fontsize.large})</Text>
                <Text style = {{fontSize: fontsize.xlarge}}>This is xlarge ({fontsize.xlarge})</Text>
            </View> */}
            <TouchableOpacity
            onPress={() => navigation.navigate('Dashboard')}
            style = {{
                backgroundColor: color.primary,
                padding: 20,
                borderRadius: 10,
            }}>
                <Text
                style = {{
                    color: color.white,
                    fontWeight: 'bold',
                    fontSize: 20,
                }}>Go To Dashboard</Text>
            </TouchableOpacity>

            <TouchableOpacity
            onPress={() => navigation.navigate('Transaction')}
            style = {{
                backgroundColor: color.secondary,
                padding: 20,
                borderRadius: 10,
                marginTop: 20,
            }}>
                <Text
                style = {{
                    color: color.white,
                    fontWeight: 'bold',
                    fontSize: 20,
                }}>Go To Transaction</Text>
            </TouchableOpacity>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.white,
    },
});

//make this component available to the app
export default GetStarted;
