import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { View, ScrollView, StyleSheet } from 'react-native';

const HeaderComponent = () => (
    <Appbar.Header>
       <Appbar.Content style={styles.container} />
    </Appbar.Header>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});



export default HeaderComponent;