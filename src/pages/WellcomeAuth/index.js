import React from 'react';
import { Image, Text, View } from 'react-native';
import { wellcomeAuth } from '../../assets';
import { colors } from '../../utils';
import ActionButton from './ActionButton';

const WellcomeAuth = () => {
    return (
        <View style={styles.wrapper.page}>
            <Image source={wellcomeAuth} style={styles.wrapper.illustration} />
            <Text style={styles.text.wellcome}>Selamat Datang di Get-Food</Text>
            <ActionButton desc="Silahkan Masuk Jika Anda Sudah Memiliki Account" title="Masuk" />
            <ActionButton desc='Atau Silahkan Daftar Jika Anda Belum Memiliki Account' title="Daftar" />
        </View>
    )
}

const styles = {
    wrapper: {
        page: { 
            alignItems: 'center', 
            justifyContent: 'center', 
            flex: 1, 
            backgroundColor: '#fff' 
        },
        illustration: { 
            width: 219, 
            height: 117,
            marginBottom: 10 
        }
    },
    text: {
        wellcome: { 
            fontSize: 18, 
            fontWeight: 'bold', 
            color: colors.default, 
            marginBottom: 76 
        }
    }
}

export default WellcomeAuth;