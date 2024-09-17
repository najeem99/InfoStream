import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { View, Text, Button, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import { UserDataContext } from "../context/UserDataContext";
import { Post } from "../types/post";


function Posts({navigation}) {
    const [posts, setPosts] = useState<Post[]>([])
    const  { getUserName}  = useContext(UserDataContext);

    const a = useEffect(() => {
        //api call
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(({data}:{data:Post[]}) => {
                setPosts(data)
            })
            .catch((err) => {
                console.error(err)
            })

    }, [])
    return (
        <View>

            <FlatList data={posts}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.push("Comments",item) }>
                    <View style={styles.container}>
                        <Text style={styles.titleStyle} >{item.title}</Text>
                        <Text style={styles.contentStyle} >{item.body}</Text>
                        <Text style={styles.userStyle} >By {getUserName(item.userId)}</Text>
                    </View>
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
    contentStyle: {
        color: '#795757',
        fontSize: 18,
        fontWeight: 'bold'
    },
    userStyle: {
        width: '100%',
        textAlign: 'right',
        color: '#3B3030',
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default Posts;