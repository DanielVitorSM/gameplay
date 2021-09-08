import React from 'react';
import { Text, View, Image, Alert, ActivityIndicator } from 'react-native';

import IllustrationImg from '../../assets/illustration.png';
import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import { ButtonIcon } from '../../components/ButtonIcon';
import { Background } from '../../components/Background';

import { useAuth } from '../../hooks/auth';

export function SignIn(){
    const { loading, signIn } = useAuth();

    async function handleSignIn(){
        try{
            await signIn();
        }catch(error: any){
            Alert.alert("Error", error);
        }
    };

    return(
        <Background>
            <View style={styles.container}>
                <Image 
                    source={IllustrationImg} 
                    style={styles.image}
                    resizeMode='stretch'
                />

                <View style={styles.content}>
                    <Text style={styles.title}>
                        Conecte-se {"\n"}
                        e organize suas {"\n"}
                        jogatinas
                    </Text>

                    <Text style={styles.subtitle}>
                        Crie grupos para jogar seus games {"\n"}
                        favoritos com seus amigos
                    </Text>

                    {
                        loading 
                        ? 
                        <ActivityIndicator color={theme.colors.primary} />
                        : 
                        <ButtonIcon 
                            onPress={handleSignIn} 
                            title="Entrar com Discord"
                        />
                    }
                </View>
            </View>
        </Background>
        
    )
}