import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ActionButton = ({ desc, title }) => {
    return (
        <View style={{ marginBottom: 43, maxWidth: 225 }}>
            <Text style={{ fontSize: 10, color: '#00B0FF', textAlign: 'center', paddingHorizontal: '15%', marginBottom: 6 }}>{ desc }</Text>
            <TouchableOpacity style={{ backgroundColor: '#00B0FF', borderRadius: 25, paddingVertical: 13 }} >
                <Text style={{ color: '#fff', fontSize: 12, fontWeight: 'bold', textTransform: 'uppercase', textAlign: 'center' }}>{ title }</Text>
            </TouchableOpacity>
        </View>
    )
}

const WellcomeAuth = () => {
    return (
        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1, backgroundColor: '#fff' }}>
            <View style={{ width: 219, height: 117, backgroundColor: '#00B0FF', marginBottom: 10 }} />
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#00B0FF', marginBottom: 76 }}>Selamat Datang di Get-Food</Text>
            <ActionButton desc="Silahkan Masuk Jika Anda Sudah Memiliki Account" title="Masuk" />
            <ActionButton desc='Atau Silahkan Daftar Jika Anda Belum Memiliki Account' title="Daftar" />
        </View>
    )
}

export default WellcomeAuth;