/**
 * Nome do arquivo: ordens.js
 * Data de criação:24/06/2024
 * Autor: mateus micael p.rabelo
 * Matrícula: 01609372
 *
 * Descrição:
 * Este arquivo é responsável pelo CRUD da collection ordens de serviço
 * fazendo a manipulação dos dados conformme o tipo de requisição realizada.
 *
 * Este script é parte o curso de ADS.
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
