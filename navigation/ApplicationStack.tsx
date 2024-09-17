import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home';
import Posts from '../screens/Posts';
import Album from '../screens/Album';
import Gallery from '../screens/Gallery';
import Comments from '../screens/Comments';

const Stack = createStackNavigator()
function ApplicationStack(props) {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" >

                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{ headerShown: false }}
                ></Stack.Screen>

                <Stack.Screen
                    name="Album"
                    component={Album}
                ></Stack.Screen>


                <Stack.Screen
                    name="Posts"
                    component={Posts}
                ></Stack.Screen>

                <Stack.Screen
                    name="Gallery"
                    component={Gallery}
                ></Stack.Screen>

                <Stack.Screen
                    name="Comments"
                    component={Comments}
                ></Stack.Screen>

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default ApplicationStack;