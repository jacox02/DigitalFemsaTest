import { View, StyleSheet, Text, Image, Button } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useCommaSeparated, useCommonDate } from '../../core/customHooks';
import { BaseMovementProps } from '../../core/types/BaseMovementProps.type';

export default function BaseMovement({ movement }: BaseMovementProps) {
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
                <View style={styles.pointsContiner}>
                    <Text style={{ ...styles.movementPoints, color: movement.is_redemption ? '#FF0000' : '#00B833' }}>
                        {movement.is_redemption==true ? '-' : '+'}
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
    }, pointsContiner: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }
})