import axios from "axios";
import { useEffect, useState } from "react";
import { FlatList, View, StyleSheet, Text } from "react-native";
import { Comment } from "../types/comments";
function Comments({ route }) {
    const [comments, setComments] = useState<Comment[]>([])

    const a = useEffect(() => {

        console.log(route.params);
        axios.get(`https://jsonplaceholder.typicode.com/comments/?postId=${route.params.id}`)
            .then(({ data }: { data: Comment[] }) => {
                setComments(data)
            })
            .catch((err) => {
                console.error(err)
            })


    }, [route.params])
    return (
        <View style={{flex:1}}>
            <View style={styles.container}>
                <Text style={styles.titleStyle} >{route.params.title}</Text>
                <Text style={styles.contentStyle} >{route.params.body}</Text>
            </View>

            <FlatList data={comments}
                renderItem={({ item }) => (
                    <View style={styles.commentContainer}>
                        <Text style={styles.commenttitleStyle} >{item.name}</Text>
                        <Text style={styles.commentcontentStyle} >{item.body}</Text>
                        <Text style={styles.commentuserStyle} >- {item.name}</Text>
                    </View>


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
    commentContainer: {
        borderColor: '#E6D9A2',
        padding: 10,
        borderWidth: 1,
        marginBottom: 5,
        marginHorizontal: 5,
        backgroundColor: 'white',
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
    },
    commenttitleStyle: {
        color: '#624E88',
        fontSize: 16,
        marginBottom: 5,

    },
    commentcontentStyle: {
        color: '#8967B3',
        fontSize: 14,
        fontWeight: 'bold',
        fontStyle:'italic'
    },
    commentuserStyle: {
        width: '100%',
        textAlign: 'right',
        color: '#CB80AB',
        fontSize: 12,
        fontWeight: 'bold'
    }
});

export default Comments;