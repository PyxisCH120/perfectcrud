
/**

Nome do arquivo: exemplo.js
Data de criação: 24/06/2024
Autor: mateus micael peixoto
Matrícula: 01609372
Descrição:
Este código é um exemplo de configuração de inicialização do 
Firebase em um aplicativo React. Ele utiliza o hook useEffect
 para garantir que o Firebase seja inicializado apenas uma vez
  durante o ciclo de vida do aplicativo. A função MyApp é o componente
   principal do aplicativo, onde o Firebase é inicializado e passado
    como propriedade para outros componentes. A configuração do Firebase é 
    importada de um arquivo externo.

Este script é parte o curso de ADS.
*/

import { useEffect } from "react";
import firebase from "firebase/app";
import "firebase/firestore";

// import firebaseConfig from "../config/firebaseconfig";
import firebaseConfig from "../../config/firebaseconfig";

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
