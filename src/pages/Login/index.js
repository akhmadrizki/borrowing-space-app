import React, {useState} from 'react';
import fireconf from '../../firebaseConf';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { Button, Input } from '../../components';
import { logoPage } from '../../assets';
import ActionButton from './ActionButton';
import { colors } from '../../utils';

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleGoTo = screen => {
        navigation.navigate(screen);
    }
    // const state = {
    //     email: '',
    //     password: '',
    //     error: 'Login gagal',
    //     loading: false
    // }
    const onBottomPress = () => {
        fireconf.auth().signInWithEmailAndPassword(email, password)
        .then(onLogginSuccess)
        // console.log(email, password)
    }
    const onLogginSuccess = () => {
        // setState({
        //     error: '',
        //     loading:false
        // })
        navigation.navigate('Main')
    }
    return (
        <View style={styles.wrapper.pages}>
            <Button type="icon" name="back" onPress={() => navigation.goBack()} />
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Image source={logoPage} style={styles.illustration} />
            </View>
            <Text style={styles.text.desc}>Masuk ke Account Anda</Text>
            
            <View style={styles.space(25)} />
            <Input secureTextEntry={false} placeholder="Email" value={email} onChangeText={v => setEmail(v)} />
            <View style={styles.space(18)} />
            <Input secureTextEntry={true} placeholder="Password" value={password} onChangeText={v => setPassword(v)} />
            <View style={styles.space(18)} />

            <ActionButton title="Masuk" onPress={onBottomPress} />
            <TouchableOpacity>
                {/* <Text style={styles.errorText}>{ error }</Text> */}
            </TouchableOpacity>
            <Text style={styles.text.announce}>Belum punya account?</Text>

            <Button type="textRegis" name="regis" onPress={() => handleGoTo('Register')} />
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
        },
        announce: {
            fontSize: 14,
            color: colors.dark,
            textAlign: 'center'
        }
    },
    errorText: {
        textAlign: 'center',
        fontSize: 15,
        color: 'red'
    },
    space: value => {
        return {
            height: value //untuk mengatur padding dalam form secara dinamis
        }
    }
}

export default Login;