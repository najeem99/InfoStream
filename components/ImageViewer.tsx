import { Button, Modal, View, StyleSheet, Text, Image, Dimensions, TouchableOpacity, } from "react-native";
import Svg, { Path } from "react-native-svg";


function ImageViewer({ visible, onClose, data }) {
    console.log(data)
    return (
        <Modal
            transparent={true}
            animationType="fade"
            visible={visible}
            onRequestClose={onClose}>
                
            <View style={styles.modalBackground}>
                <View style={styles.modalContainer}>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                            <Svg height="24" width="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <Path d="M18 6 L6 18 M6 6 L18 18" />
                            </Svg>
                        </TouchableOpacity>
                    </View>
                    <Image
                        style={styles.image}
                        source={{ uri: data.url }}
                    />

                </View>
            </View>
        </Modal>
    );
}
const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContainer: {
        width: "90%",
        maxWidth: 400,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
    },
    image: {
        width: screenWidth * 0.8,    // 80% of screen width
        height: undefined,         // This is necessary when using aspectRatio
        aspectRatio: 1,            // Adjusts based on the image's natural dimensions
    },
    buttonContainer: {
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    closeButton: {
        backgroundColor: 'rgba(0, 0, 0, 0.12)',
        padding: 10,
        marginBottom: 10,
        borderRadius: 100
    }
});

export default ImageViewer;