import axios from "axios";
import { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { AlbumInterface } from "../types/album";

function Album({ navigation }) {
    const [album, setAlbum] = useState<AlbumInterface[]>([])

    const a = useEffect(() => {

        axios.get('https://jsonplaceholder.typicode.com/albums')
            .then(({ data }: { data: AlbumInterface[] }) => {
                // console.log(response.data[0].userId)
                setAlbum(data)
            })
            .catch((err) => {
                console.error(err)
            })

    }, [])

    return (
        <View>
            <Text>this is Album screen</Text>
            <FlatList data={album}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => navigation.push("Gallery", item)}
                        style={styles.container}>
                        <Text style={styles.titleStyle} >{item.title}</Text>
                    </TouchableOpacity>


                )}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        borderColor: '#795757',
        padding: 10,
        borderWidth: 1,
        marginBottom: 5,
        marginHorizontal: 5,
        backgroundColor: '#FFF0D1',
        borderRadius: 10
    },
    titleStyle: {
        color: '#3B3030',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,

    },
});

export default Album;