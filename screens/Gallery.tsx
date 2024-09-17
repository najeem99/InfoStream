import axios from "axios";
import { useEffect, useState } from "react";
import { FlatList, View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import ImageViewer from "../components/ImageViewer";
import { Photo } from "../types/photo";

function Gallery({ route }) {
    const [images, setImages] = useState<Photo[]>([])
    const [modalVisible, setModalVisible] = useState(false)
    const [modalData, setModalData] = useState({})
    const a = useEffect(() => {

        console.log(route.params);
        axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${route.params.id}`)
            .then(({data}:{data:Photo[]}) => {
                console.log(data[0])
                setImages(data)
            })
            .catch((err) => {
                console.error(err)
            })


    }, [route.params])

    const handleImageclick = (item:Photo) => {
        setModalData(item);
        setModalVisible(true)
    }
    const closeModal = () => {
        setModalVisible(false)
    }
    return (
        <View>
            <Text>this is Album screen</Text>
            <FlatList data={images}
                numColumns={4}
                renderItem={({ item, index }) => (
                    <TouchableOpacity
                        onPress={() => handleImageclick(item)}
                    >
                        <Image
                            style={styles.tinyLogo}
                            source={{
                                uri: item.thumbnailUrl,
                            }}
                        />
                    </TouchableOpacity>


                )}
            />
            <ImageViewer visible={modalVisible} data={modalData} onClose={closeModal}></ImageViewer>
        </View>
    );
}
const styles = StyleSheet.create({
    flatList: {
        alignItems: 'center'
    },
    tinyLogo: {
        width: 100,
        height: 100,
        margin: 2
    },

});



export default Gallery;