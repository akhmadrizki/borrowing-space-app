import React, { useState } from 'react';
import fireconf from '../../firebaseConf';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { Button, Input } from '../../components';
import { logoPage } from '../../assets';
import ActionButton from './ActionButton';

const Register = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleGoTo = screen => {
        navigation.navigate(screen);
    }

    const onBottomPress = () => {
        fireconf.auth().createUserWithEmailAndPassword(email, password)
        .then(() => navigation.navigate('Main'))
        // console.log(email, password)
    }

    // state = {
    //     email: '',
    //     password: '',
    //     error: 'Login gagal'
    // }
    return (
        <View style={styles.wrapper.pages}>
            <Button type="icon" name="back" onPress={() => navigation.goBack()} />
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Image source={logoPage} style={styles.illustration} />
            </View>
            <Text style={styles.text.desc}>Silahkan Buat Account Anda</Text>
            
            <View style={styles.space(25)} />
            <Input
                secureTextEntry={false}
                placeholder="Email"
                value={email}
                onChangeText={email => setEmail(email)}
            />
            <View style={styles.space(18)} />
            <Input
                secureTextEntry={true}
                placeholder="Password"
                value={password}
                onChangeText={password => setPassword(password)}
            />
            <View style={styles.space(18)} />
            {/* <TouchableOpacity>
                <Text style={styles.errorText}>{ this.state.error }</Text>
            </TouchableOpacity> */}

            <ActionButton title="Daftar" onPress={onBottomPress} />
        </View>
    )
}

const styles = {
    wrapper: {
        pages: { 
            padding: 20, 
            backgroundColor: '#fff', 
            flex: 1 
        }
    },
    illustration: { 
        width: 106, 
        height: 115,
        marginTop: 28,
    },
    text: {
        desc: { 
            fontSize: 18, 
            fontWeight: 'bold', 
            color: '#777', 
            marginTop: 53, 
            maxWidth: 250 
        }
    },
    errorText: {
        textAlign: 'center',
        fontSize: 15,
        color: 'red'
    },
    space: value => {
        return {
            height: value
        }
    }
}

export default Register;