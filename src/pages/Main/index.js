import React, {useEffect, useState} from 'react';
import fireconf from '../../firebaseConf';
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { colors } from '../../utils';
import { aula, kelas, meeting, music, profile } from '../../assets';
import { Button } from '../../components';

const Tab = createMaterialBottomTabNavigator();

const Beranda = ({ navigation }) => {
    const [user, setUser] = useState('');
    
    useEffect(() => {
      const { currentUser } = fireconf.auth()
      setUser(currentUser)
    }, [])

    const handleGoTo = screen => {
        navigation.navigate(screen);
  }
  
  const onLogout = () => {
    fireconf.auth().signOut()
    navigation.navigate('WellcomeAuth')
  }
    return (
        <ScrollView showsHorizontalScrollIndicator={false}>
            <View style={styles.content}>
          <Text style={{ color: '#fff', textAlign: 'center', fontSize: 24, maxWidth: 250 }}>Selamat Datang { user.email }</Text>
              <TouchableOpacity onPress={onLogout}>
                <Text style={{ textAlign: 'center' }}>Logout</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.cardsWrapper}>
              <Text style={{color: '#333'}}>List Ruangan</Text>
              <View style={styles.card}>
                <View style={styles.cardImgWrapper}>
                    <Image source={kelas} resizeMode="cover" style={styles.cardImg} />
                </View>
                <View style={styles.cardInfo}>
                    <Text style={styles.cardTitle}>Ruang Kelas 3 A</Text>
                    <Button type="bookingbtn" name="booking" onPress={() => handleGoTo('Booking')} />
                </View>
              </View>
            </View>

            <View style={styles.cardsWrapper}>
              <View style={styles.card}>
                <View style={styles.cardImgWrapper}>
                    <Image source={aula} resizeMode="cover" style={styles.cardImg} />
                </View>
                <View style={styles.cardInfo}>
                    <Text style={styles.cardTitle}>Ruang Aula Lt 4</Text>
                    <Button type="bookingbtn" name="booking" onPress={() => handleGoTo('Booking')} />
                </View>
              </View>
            </View>

            <View style={styles.cardsWrapper}>
              <View style={styles.card}>
                <View style={styles.cardImgWrapper}>
                    <Image source={meeting} resizeMode="cover" style={styles.cardImg} />
                </View>
                <View style={styles.cardInfo}>
                    <Text style={styles.cardTitle}>Ruang Meeting</Text>
                    <Button type="bookingbtn" name="booking" onPress={() => handleGoTo('Booking')} />
                </View>
              </View>
            </View>

            <View style={styles.cardsWrapper}>
              <View style={styles.card}>
                <View style={styles.cardImgWrapper}>
                    <Image source={music} resizeMode="cover" style={styles.cardImg} />
                </View>
                <View style={styles.cardInfo}>
                    <Text style={styles.cardTitle}>Studio Music</Text>
                    <Button type="bookingbtn" name="booking" onPress={() => handleGoTo('Booking')} />
                </View>
              </View>
            </View>

        </ScrollView>
    )
}

const Profile = () => {
  return (
    <ScrollView>
        <View style={{backgroundColor: colors.default, borderBottomLeftRadius: 28, borderBottomRightRadius: 28, justifyContent: 'center', alignItems: 'center', padding: 40}}>
          <Image source={profile} style={{width: 200, height: 200, borderRadius: 100}} />
          <Text style={{fontSize: 28, fontWeight: 'bold', color: '#fff', marginTop: 18}}>Akhmad Rizki Prayoga</Text>
        </View>

        <View style={styles.cardsWrapper}>
          <View style={styles.card}>
            <View style={styles.cardImgWrapper}>
                <Image source={music} resizeMode="cover" style={styles.cardImg} />
            </View>
            <View style={styles.cardInfo}>
                <Text style={styles.cardTitle}>Ruang Kreatif</Text>
                <Text>di booking tgl 2 desember 2020</Text>
                <Button type="booked" name="booked" onPress={() => alert('Sudah di Booking pada tgl 2 desember 2020')} />
            </View>
          </View>
        </View>
    </ScrollView>
    
  )
}

function Main() {
  return (
    <Tab.Navigator>

      <Tab.Screen name="Home" component={Beranda}
      options={{
        tabBarLabel: 'Beranda',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
      }}/>

      <Tab.Screen name="Profile" component={Profile}
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account" color={color} size={26} />
        ),
      }}/>

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
      padding: 12,
      borderColor: '#ccc',
      borderWidth: 1,
      borderLeftWidth: 0,
      borderBottomRightRadius: 8,
      borderTopRightRadius: 8,
      backgroundColor: '#fff',
    },
    cardTitle: {
      fontWeight: 'bold',
      fontSize: 18,
      color: colors.dark
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