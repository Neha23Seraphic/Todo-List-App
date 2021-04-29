import React from 'react';
import {StyleSheet, Text, View } from 'react-native';

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>ToDo List</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        height: 60,
        backgroundColor: 'gold',
        justifyContent: 'center', 
    },
    title: {
        textAlign: 'center',
        color: 'white',
        fontSize: 30,
        fontWeight: '700',
        letterSpacing: 1,
    } 
});
