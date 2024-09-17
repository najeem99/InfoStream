import axios from "axios";
import { useContext, useEffect } from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { UserDataContext } from "../context/UserDataContext";
import { User } from "../types/user";

function Home(props) {
    const { updateUsersData } = useContext(UserDataContext);

    const getUsers = useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(({ data }: { data: User[] }) => {
                updateUsersData(data);
            })
            .catch((err) => {
                console.error(err)
            })


    }, [])
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => { props.navigation.push('Album') }} >
                <Text style={styles.buttonText}>Go to Album screen</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => { props.navigation.push('Posts') }} >
                <Text style={styles.buttonText}>Go to Posts screen</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: "row",
        padding: 10,
        alignItems: 'center'
    },
    button: {
        width: '50%',
        maxHeight: 50,
        flex: 1,
        minHeight: 50,
        backgroundColor: 'green',
        margin: 10,
        justifyContent: 'center',
        borderRadius: 20
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    }
});

export default Home;