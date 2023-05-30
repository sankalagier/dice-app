import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import GameScreen from "../screens/GameScreen";
import { Foundation as FoundationIcons } from 'react-native-vector-icons';

const Tab = createBottomTabNavigator();

const NavigationTabs = () => {
    
    return (
        <Tab.Navigator backBehavior="order">
            <Tab.Screen 
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    tabBarLabel: "Accueil",
                    tabBarActiveTintColor: "#985965",
                    tabBarInactiveTintColor: "#888",
                    tabBarIcon: ({color, size}) => (
                        <FoundationIcons name="home" color={color} size={size}/>
                    ),
                    title: "Accueil",
                }}
            />
            <Tab.Screen 
                name="GameScreen"
                component={GameScreen}
                options={{
                    tabBarLabel: "Jouer",
                    tabBarActiveTintColor: "#985965",
                    tabBarInactiveTintColor: "#888",
                    tabBarIcon: ({color, size}) => (
                        <FoundationIcons name="die-six" color={color} size={size}/>
                    ),
                    title: "Lancer mes dés",
                }}
            />
        </Tab.Navigator>
    )
}


export default NavigationTabs;