//  IMPORTACOES
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

//  TELA 1 : HOME
function HomeUI() {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Text>Essa será a tela principal da aplicação</Text>
    </View>
  );
}

//  TELA 2 : PERFIL
function PerfilUI() {
  return (
    <View style={styles.container}>
      <Text>Perfil</Text>
    </View>
  );
}

//  TELA 3 : NOTIFICACOES
function NotificacoesUI() {
  return (
    <View style={styles.container}>
      <Text>Notificações</Text>
    </View>
  );
}

//  TELA 4 : CONFIGURACOES
function ConfiguracoesUI() {
  return (
    <View style={styles.container}>
      <Text>Configurações</Text>
    </View>
  );
}

//  TELA 5 : LOGAR
function LogarUI() {
  return (
    <View style={styles.container}>
      <Text>Tela de login</Text>
    </View>
  );
}

//  TELA 7 : SAIR
function SairUI() {
  return (
    <View style={styles.container}>
      <Text>Deseja realmente sair?</Text>
    </View>
  );
}



const Drawer = createDrawerNavigator();


{/* MENU LATERAL */}
export default function Menu(){
  return(
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="App"
        drawerStyle={{
          backgroundColor: "#261329", //  COR DO FUNDO MENU LATERAL
          paddingVertical: 20         //  PADDING DE CIMA PRA BAIXO
        }}

        drawerContentOptions={{
          activeBackgroundColor: "#f5d393", //  COR ITEM SELECIONADO (ATIVO)
          inactiveTintColor: "#f39772"      //  ??
        }}>

        {/* ITEM 1 - Home */}
        <Drawer.Screen 
            name="App"      // NOME DA TELA
            component={HomeUI} // QUAL TELA IRÁ REDIRECIONAR 
            options={
              {
                drawerLabel: (({focused}) => <Text style={{color: focused ? '#00ff99' : '#fc0fc0' }}>Home</Text>),
                // 00ff99 É a cor quando está ativo, fc0fc0 é quando não está ativo
                drawerIcon: (({focused}) => <Icon color={focused ? '#313131' : '#fff' } name="home" />)
              }
            } 
        />

        {/* ITEM 2 - Perfil */}
        <Drawer.Screen 
          name="MeuApp" 
          component={PerfilUI} 
          options={
            {
              drawerLabel: (({focused}) => <Text style={{color: focused ? '#313131' : '#fff' }}>Perfil</Text>),
              drawerIcon: (({focused}) => <Icon color={focused ? '#313131' : '#fff' } name="face" />)
            }
          }
          />

          {/* ITEM 3 - Notificações */}
        <Drawer.Screen 
          name="MeuApp2" 
          component={NotificacoesUI} 
          options={
            {
              drawerLabel: (({focused}) => <Text style={{color: focused ? '#313131' : '#fff' }}>Notificações</Text>),
              drawerIcon: (({focused}) => <Icon color={focused ? '#313131' : '#fff' } name="chat" />)
            }
          }
          />

        {/* ITEM 4 - Configurações */}
        <Drawer.Screen 
          name="MeuApp3" 
          component={ConfiguracoesUI} 
          options={
            {
              drawerLabel: (({focused}) => <Text style={{color: focused ? '#313131' : '#fff' }}>Configurações</Text>),
              drawerIcon: (({focused}) => <Icon color={focused ? '#313131' : '#fff' } name="settings" />)
            }
          }
          />

          {/* ITEM 5 - Logar */}
        <Drawer.Screen 
          name="MeuApp4" 
          component={LogarUI} 
          options={
            {
              drawerLabel: (({focused}) => <Text style={{color: focused ? '#313131' : '#fff' }}>Logar</Text>),
              drawerIcon: (({focused}) => <Icon color={focused ? '#313131' : '#fff' } name="login" />)
            }
          }
          />

          {/* ITEM 6 - Sair */}
        <Drawer.Screen 
          name="MeuApp5" 
          component={SairUI} 
          options={
            {
              drawerLabel: (({focused}) => <Text style={{color: focused ? '#313131' : '#fff' }}>Sair</Text>),
              drawerIcon: (({focused}) => <Icon color={focused ? '#313131' : '#fff' } name="logout" />)
            }
          }
          />
          

      </Drawer.Navigator>
    </NavigationContainer>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eb6765',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#313131',
  },
});
