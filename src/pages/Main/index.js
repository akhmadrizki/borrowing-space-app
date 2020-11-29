import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import ActionButton from './ActionButton';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { colors } from '../../utils';
import { kelas } from '../../assets';

const Tab = createMaterialBottomTabNavigator();

const Test = ({navigation}) => {
    const handleGoTo = screen => {
        navigation.navigate(screen);
    }
    return (
        <ScrollView showsHorizontalScrollIndicator={false}>
            <View style={styles.content}>
                <Text style={{color: '#fff', textAlign: 'center', fontSize: 18, maxWidth: 250 }}>Cari Dan Booking Ruangan Yang Ingin Anda Pinjam</Text>
            </View>
            {/* <View style={styles.wrapper}>
                <Text style={{color: colors.dark, fontSize: 14}}>List Ruangan</Text>
                <View style={{ marginTop: 12, backgroundColor: '#fff', borderRadius: 8 }}>
                    <Image source={kelas} style={styles.illustration} />
                    <Text style={{ flexDirection: 'row' }}>Text</Text>
                </View>
            </View> */}

            <View style={styles.cardsWrapper}>
                <Text style={{color: '#333'}}>List Ruangan</Text>
                <View style={styles.card}>
                    <View style={styles.cardImgWrapper}>
                        <Image source={kelas} resizeMode="cover" style={styles.cardImg} />
                    </View>
                    <View style={styles.cardInfo}>
                        <Text style={styles.cardTitle}>Ruang 3A</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
    
}

function Main() {
  return (
    <Tab.Navigator>

      <Tab.Screen name="Home" component={Test}
      options={{
        tabBarLabel: 'Beranda',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
      }}/>

      <Tab.Screen name="Settings" component={Test} />

    </Tab.Navigator>
  );
}

const styles = {
    cardsWrapper: {
        marginTop: 20,
        width: '90%',
        alignSelf: 'center',
      },
      card: {
        height: 100,
        marginVertical: 10,
        flexDirection: 'row',
        shadowColor: '#999',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
      },
      cardImgWrapper: {
        flex: 1,
      },
      cardImg: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        borderRadius: 8,
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0,
      },
      cardInfo: {
        flex: 2,
        padding: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        borderLeftWidth: 0,
        borderBottomRightRadius: 8,
        borderTopRightRadius: 8,
        backgroundColor: '#fff',
      },
      cardTitle: {
        fontWeight: 'bold',
      },
      cardDetails: {
        fontSize: 12,
        color: '#444',
      },


    content: {
        backgroundColor: colors.default,
        paddingVertical: 60,
        height: 200,
        justifyContent: 'center', alignItems: 'center'
    },
    wrapper: {
        backgroundColor: '#f1f1f1',
        height: '100%',
        padding: 23
    },
    illustration: {
        width: 115, 
        height: 115,
        borderRadius: 8,
        flexDirection: 'row'
    }
}

export default Main;