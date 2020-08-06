import React, {useState} from 'react';
import {
  ImageBackground,
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
  Platform,
  KeyboardAvoidingView,
  TouchableHighlight,
} from 'react-native';
import auth from '@react-native-firebase/auth';
function index({navigation}) {
    return (
     <View>Test</View>
    );
  }
 

const imagev = {
  uri:
    'https://res.cloudinary.com/dos13qenv/image/upload/v1594787147/Livery/fondoRegistro_dlezqq.png',
};

const image = {
  uri:
    'https://res.cloudinary.com/dos13qenv/image/upload/v1594787147/Livery/fondoRegistro_dlezqq.png',
};

const styles = StyleSheet.create({
  head: {
    justifyContent: 'flex-start',
  },
  body: {
    flex: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  top: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 65,
  },

  title: {
    marginBottom: 10,
  },
  textTitle: {
    fontFamily: 'MONTSERRAT-LIGHT',
    color: '#606060',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  form: {
    width: 300,
    justifyContent: 'center',
  },
  foot: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },

  text: {
    color: '#606060',
    fontFamily: 'MONTSERRAT-EXTRALIGHT',
  },
  tel: {
    marginBottom: 100,
    flexDirection: 'row',
  },
  label: {
    fontWeight: 'bold',
    marginRight: 10,
  },
  input: {
    margin: 0,
    fontFamily: 'MONTSERRAT-EXTRALIGHT',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
    justifyContent: 'center',
    alignContent: 'center',
  },

  icon: {
    color: '#50b9e6',
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },

  next: {
    textAlign: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    width: 300,
    height: 50,
    backgroundColor: '#f0f0f0',
    marginBottom: 30,
    elevation: 5,
  },
  textButton: {
    color: '#606060',
    fontFamily: 'MONTSERRAT-EXTRALIGHT',
  },

  headv: {
    justifyContent: 'flex-start',
  },
  fixToTextv: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title3v: {
    color: 'red',
  },
  input2v: {
    borderWidth: 1,
    borderColor: '#4d4d4d',
    borderRadius: 10,
    padding: 8,
    margin: 2,
    width: 40,
    height: 40,
    textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    fontSize: 20,
  },
  bodyv: {
    flex: 1,
    fontFamily: 'MONTSERRAT-LIGHT',
    alignContent: 'center',
    justifyContent: 'center',
  },
  textoBoton2v: {
    color: 'black',
    fontFamily: 'MONTSERRAT-LIGHT',
  },

  bgv: {
    height: 60,
    width: 200,
    backgroundColor: '#FFFFFF',
    borderWidth: 0,
    borderRadius: 10,
    justifyContent: 'center',
    marginTop: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 10,

    elevation: 15,
    fontFamily: 'MONTSERRAT-LIGHT',
  },
  botonv: {
    height: 60,
    width: 200,
    marginTop: 30,
    marginBottom: 20,
    backgroundColor: '#50b9e6',
    borderWidth: 0,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 10,
    marginBottom: 30,
    elevation: 10,
  },
  textoBotonv: {
    color: 'white',
    fontFamily: 'MONTSERRAT-LIGHT',
    fontSize: 25,
  },

  bodyv: {
    flex: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title2v: {
    fontSize: 40,
    alignContent: 'center',
    justifyContent: 'center',
    marginBottom: 0,
    fontFamily: 'MONTSERRAT-MEDIUMITALIC',
    color: '#4d4d4d',
  },
  topv: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 65,
  },

  titlev: {
    marginTop: 20,
    marginBottom: 20,
    fontSize: 25,
  },
  textTitlev: {
    fontFamily: 'MONTSERRAT-LIGHT',
    color: '#606060',
  },
  contentv: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  formv: {
    width: 300,
    justifyContent: 'center',
  },
  footv: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },

  textv: {
    color: '#606060',
    fontFamily: 'MONTSERRAT-EXTRALIGHT',
  },
  telv: {
    marginBottom: 130,
    flexDirection: 'row',
  },
  labelv: {
    fontWeight: 'bold',
    marginRight: 10,
  },
  inputv: {
    margin: 0,
    fontFamily: 'MONTSERRAT-EXTRALIGHT',
  },
  containerv: {
    flex: 1,
    flexDirection: 'column',
  },
  imagev: {
    flex: 1,
    resizeMode: 'cover',
  },

  iconv: {
    color: '#50b9e6',
  },
  btnv: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },

  nextv: {
    textAlign: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    width: 300,
    height: 50,
    backgroundColor: '#f0f0f0',
    marginBottom: 10,
  },
  textButtonv: {
    color: '#606060',
    fontFamily: 'MONTSERRAT-EXTRALIGHT',
  },
});

export default index;
