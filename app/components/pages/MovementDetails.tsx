import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { useEffect, useState } from 'react';
import { Movement } from '../../core/types/Movement.type';
import { useCommaSeparated, useCommonDate } from '../../core/customHooks';
import Title from '../atoms/Title';

export default function MovementDetails({ route, navigation }: any) {
    const [Movement, setMovement] = useState<Movement>({
        id: "0",
        createdAt: new Date().toString(),
        product: "",
        points: 0,
        image: "",
        is_redemption: false
    })

    useEffect(() => {
        setMovement(route.params);
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Title text={Movement.product} weight='800' size={24} height={24} />
            </View>
            <View style={
                styles.imageContainer
            }>
                <Image source={{ uri: '../../../assets/Placeholder_view_vector 2.png' }} style={{
                    width: 353,
                    height: 350,
                    borderRadius: 10
                }}></Image>
            </View>
            <View style={styles.infoContainer} >
                <View style={{ paddingTop: 32 }}>
                    <Title text={'Detalles del producto:'} weight='800' size={14} height={19} color='#9B9898' />
                </View>
                <View style={{ paddingTop: 19 }}>
                    <Title text={`Comprado el ${useCommonDate(Movement.createdAt)}`} weight='800' size={16} height={22} />
                </View>
                <View style={{ paddingTop: 20 }}>
                    <Title text={'Con esta compra acumulaste:'} weight='800' size={14} height={19} color='#9B9898' />
                </View>
                <View style={{ paddingTop: 32 }}>
                    <Title text={`${useCommaSeparated(Movement.points.toString())} puntos`} weight='800' size={24} height={33} />
                </View>
            </View>
            <View style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'center',
                paddingTop: '1%'
            }}>
                <TouchableOpacity style={styles.acceptButton}>
                    <Title text='Aceptar' color='#fff' weight='800' />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        alignItems: "flex-start",
        justifyContent: 'flex-start',
        overflow: 'scroll',
    },
    acceptButton: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 10,
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    headerContainer: {
        backgroundColor: '#CFD6FF',
        paddingTop: 110,
        width: '100%',
        paddingLeft: 20,
        paddingBottom: 24,
    },
    headerTitle: {
        fontFamily: 'Avenir',
        fontWeight: "800",
        fontSize: 24,
    },
    imageContainer: {
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        paddingTop: 19,
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 8,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center'
    },
    infoContainer: {
        paddingLeft: 20,
    }
});