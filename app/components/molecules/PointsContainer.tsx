import { useEffect, useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'
import { selectPoints } from '../../redux/selectors'
import { useCommaSeparated } from '../../core/customHooks'

export default function PointsContainer() {
    const [Points, setPoints] = useState(0)
    let userPoints = useSelector(selectPoints)

    useEffect(() => {
        setPoints(userPoints)
    }, [userPoints])

    return (
        <View style={styles.viewContainer}>
            <Text style={styles.pointsLabel}>Tus puntos</Text>
            <View style={styles.pointCard}>
                <View style={styles.pointsContainer}>
                    <View>
                        <Text style={styles.monthLabel}>
                            Diciembre
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.pointsCounter}>
                            {useCommaSeparated(Points.toString())} Pts
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    viewContainer: {
        alignItems: "flex-start",
        width: '100%',
        height: '30%',
        justifyContent: 'flex-start',
        overflow: 'scroll',
        paddingTop: 20,
    },
    pointsContainer: {
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 8,
        marginTop: 20,
        backgroundColor: '#334FFA',
        borderRadius: 20,
        width: 286,
        height: 143
    },
    pointsLabel: {
        color: '#9B9898',
        fontFamily: 'Avenir',
        fontWeight: '800',
        fontSize: 21,
        fontStyle: 'normal'
    },
    monthLabel: {
        paddingTop: 15,
        paddingLeft: 19,
        color: '#fff',
        fontFamily: 'Avenir',
        fontWeight: '800',
        fontSize: 21,
        fontStyle: 'normal'
    },
    pointsCounter: {
        paddingTop: 20,
        textAlign: 'center',
        fontFamily: 'Avenir',
        fontStyle: 'normal',
        fontWeight: '800',
        fontSize: 32,
        lineHeight: 44,
        color: '#FFFFFF',
    },
    pointCard:
    {
        flex: 1,
        alignItems: "center",
        width: '100%',
        justifyContent: 'flex-start',
        overflow: 'scroll',
    }
})