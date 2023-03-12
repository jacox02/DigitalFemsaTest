import { View, StyleSheet, Text, Image, Button } from 'react-native'
import { Movement } from '../../core/types/Movement.type'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useCommaSeparated, useCommonDate } from '../../core/customHooks';
type Props = {
    movement: Movement
}
export default function BaseMovement({ movement }: Props) {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: movement.image }} style={styles.image}></Image>
            </View>
            <View style={styles.generalInfoContainer}>
                <View style={styles.infoContainer}>
                    <Text style={styles.productName}>{movement.product}</Text>
                    <Text>{useCommonDate(movement.createdAt)}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ ...styles.movementPoints, color: movement.is_redemption ? '#FF0000' : '#00B833' }}>
                        {movement.is_redemption ? '-' : '+'}
                    </Text>
                    <Text style={styles.movementPoints}>{useCommaSeparated(movement.points.toString())}</Text>
                    <Ionicons size={18} name='chevron-forward-outline'></Ionicons>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'flex-start',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    infoContainer: {
        flex: 1,
        flexDirection: 'column',
        paddingLeft: 11,
        maxWidth: '70%'
    },
    generalInfoContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    productName: {
        fontWeight: "800",
        fontSize: 18,
        fontStyle: 'normal',
        fontFamily: 'Avenir'
    },
    imageContainer: {
        backgroundColor: '#D0D0D0',
        borderRadius: 10,
        width: 55,
        height: 55,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
    },
    movementPoints: {
        fontFamily: 'Avenir',
        fontStyle: 'normal',
        fontWeight: '800',
        fontSize: 16,
        lineHeight: 22,
    },
})