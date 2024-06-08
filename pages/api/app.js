/**
 * Nome do arquivo: exemplo.js
 * Data de criação: 24/04/2024
 * Autor: mateus micael peixoto
 * Matrícula: 01609372
 *
 * Descrição:
 * Este código inicializa o Firebase em um aplicativo React 
 * usando useEffect. Ele verifica se o Firebase já foi inicializado
 *  e, se não, o faz com a configuração fornecida. O componente MyApp 
 * retorna o Component com as props pageProps e é exportado como o componente
 *  padrão do módulo.
 *
 * Este script é parte o curso de ADS.
 */

import { useEffect } from "react";
import firebase from "firebase/app";
import "firebase/firestore"; 

import firebaseConfig from "../config/firebaseconfig"; 


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

function MyApp({ Component, pageProps }) {
  
  useEffect(() => {
    
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
