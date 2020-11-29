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
            <View style={styles.wrapper}>
                <Text style={{color: colors.dark, fontSize: 14}}>List Ruangan</Text>
                <View style={{ marginTop: 12, backgroundColor: '#fff', borderRadius: 8 }}>
                    <Image source={kelas} style={styles.illustration} />
                </View>
                <View style={{ marginTop: 12, backgroundColor: '#fff', borderRadius: 8 }}>
                    <Image source={kelas} style={styles.illustration} />
                </View>
                <View style={{ marginTop: 12, backgroundColor: '#fff', borderRadius: 8 }}>
                    <Image source={kelas} style={styles.illustration} />
                </View>
                <View style={{ marginTop: 12, backgroundColor: '#fff', borderRadius: 8 }}>
                    <Image source={kelas} style={styles.illustration} />
                </View>
                <View style={{ marginTop: 12, backgroundColor: '#fff', borderRadius: 8 }}>
                    <Image source={kelas} style={styles.illustration} />
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
        tabBarLabel: 'Updates',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="car-off" color={color} size={26} />
        ),
      }}/>

      <Tab.Screen name="Settings" component={Test} />

    </Tab.Navigator>
  );
}

const styles = {
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
        borderRadius: 8
    }
}

export default Main;