import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import CompteScreen from '../Screens/CompteScreen';
import HomeScreen from '../Screens/HomeScreen';
import StatScreen from '../Screens/StatScreen';
import StackNavigator from './StackNavigator';

const HomeRoute = () => <StackNavigator  />;

const CompteRoute = () => <CompteScreen />;

const StatistiqueRoute = () => <StatScreen />;

const MyComponent = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'home', title: 'Accueil', icon: 'home' },
        { key: 'compte', title: 'Compte', icon: 'bank' },
        { key: 'statistique', title: 'Statistique', icon: 'chart-line' },
    ]);

    const renderScene = BottomNavigation.SceneMap({
        home: HomeRoute,
        compte: CompteRoute,
        statistique: StatistiqueRoute,
    });

    return (
        <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
        />
    );
};

export default MyComponent;