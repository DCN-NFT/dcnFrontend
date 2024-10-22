import React from 'react';
import { View, StyleSheet } from 'react-native';
import QRCode from 'react-qr-code';

const QRCodeComponent = ({ value }) => {
    return (
        <View style={styles.container}>
            <QRCode value={value} size={200} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default QRCodeComponent;
