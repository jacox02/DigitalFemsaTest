import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { useEffect, useState } from 'react';
import { Movement } from '../../core/types/Movement.type';
import { useCommaSeparated, useCommonDate } from '../../core/customHooks';
import Title from '../atoms/Title';
import Button from '../atoms/Button';

export default function MovementDetails({ route, navigation }: any) {
    const [Movement, setMovement] = useState<Movement>({
        id: "0",
        createdAt: new Date().toString(),
        product: "",
        points: 0,
        image: "../../../assets/Placeholder.png",
        is_redemption: false
    })

    useEffect(() => {
        setMovement(route.params);
    }, [])

    return (
        <View style={styles.container}>
            <View testID='test-product-name-label' style={styles.headerContainer}>
                <Title text={Movement.product} weight='800' size={24} height={26} />
            </View>
            <View style={{
                paddingLeft: 20,
                paddingRight: 20,
            }}>
                <View style={
                    styles.imageContainer
                }>
                    <Image
                        testID='test-product-image'
                        source={{ uri: Movement.image }}
                        style={{
                            width: 353,
                            height: 350,
                            borderRadius: 10
                        }}></Image>
                </View>
                <View testID='test-product-date-label' style={{ paddingTop: 32 }}>
                    <Title text={'Detalles del producto:'} weight='800' size={14} height={19} color='#9B9898' />
                </View>
                <View testID='test-product-date-value' style={{ paddingTop: 19 }}>
                    <Title  text={`Comprado el ${useCommonDate(Movement.createdAt)}`} weight='800' size={16} height={22} />
                </View>
                <View testID='test-product-points-label' style={{ paddingTop: 20 }}>
                    <Title  text={'Con esta compra acumulaste:'} weight='800' size={14} height={19} color='#9B9898' />
                </View>
                <View testID='test-product-points-value' style={{ paddingTop: 32 }}>
                    <Title  text={`${useCommaSeparated(Movement.points.toString())} puntos`} weight='800' size={24} height={33} />
                </View>
                <View style={{
                    width: '100%',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    paddingTop: '1%',

                }}>
                    <Button title='Aceptar' onPress={() => { navigation.goBack() }} width='100%'></Button>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    overflow: "scroll",
  },
  acceptButton: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 10,
    width: "90%",
    flexDirection: "row",
    justifyContent: "center",
  },
  headerContainer: {
    backgroundColor: "#CFD6FF",
    paddingTop: 110,
    width: "100%",
    paddingLeft: 20,
    paddingBottom: 24,
  },
  headerTitle: {
    fontFamily: "OperatorMono",
    fontWeight: "800",
    fontSize: 24,
  },
  imageContainer: {
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    paddingTop: 19,
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 8,
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
  },
});