import React, { useState, useEffect } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { db } from "@/services/firebase";
import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';

export default function Home() {
  const [items, setItems] = useState([]);
  const [nome, setNome] = useState("");
  const [age, setAge] = useState("");
  const [fone, setFone] = useState("");
  const [email, setEmail] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const querySnapshot = await getDocs(collection(db, "items"));
    const itemsList = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
    setItems(itemsList);
  };

  const addItem = async (e) => {
    e.preventDefault();
    if (nome && age && fone && email) {
      const newItem = { name: nome, age: age, phone: fone, email: email };
      const docRef = await addDoc(collection(db, "items"), newItem);
      setItems([...items, { ...newItem, id: docRef.id }]);
      setNome('');
      setAge('');
      setFone('');
      setEmail('');
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  };

  const deleteItem = async (id) => {
    await deleteDoc(doc(db, "items", id));
    setItems(items.filter(item => item.id !== id));
  };

  const editItem = (index) => {
    const item = items[index];
    setNome(item.name);
    setAge(item.age);
    setFone(item.phone);
    setEmail(item.email);
    deleteItem(item.id);
  };

  const visualizarDetalhes = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>CRUD Interface</title>
        <meta name="description" content="CRUD Interface with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Tabela CRUD Suprema</h1>
        <form onSubmit={addItem}>
          <input
            type="text"
            name="name"
            placeholder="Nome"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
            className={styles.input}
            required
          />
          <input
            type="number"
            name="age"
            placeholder="Idade"
            value={age}
            onChange={(event) => setAge(event.target.value)}
            className={styles.input}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Número de Telefone"
            value={fone}
            onChange={(event) => setFone(event.target.value)}
            className={styles.input}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className={styles.input}
            required
          />
          <button type="submit" className={styles.button}>Salvar</button>
        </form>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.th}>Nome</th>
              <th className={styles.th}>Idade</th>
              <th className={styles.th}>Número de Telefone</th>
              <th className={styles.th}>E-mail</th>
              <th className={styles.th}>Ações</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={item.id}>
                <td className={styles.td}>{item.name}</td>
                <td className={styles.td}>{item.age}</td>
                <td className={styles.td}>{item.phone}</td>
                <td className={styles.td}>{item.email}</td>
                <td className={styles.td}>
                  <button className={`${styles.button} ${styles.edit}`} onClick={() => editItem(index)}>Editar</button>
                  <button className={`${styles.button} ${styles.delete}`} onClick={() => deleteItem(item.id)}>Excluir</button>
                  <button className={`${styles.button} ${styles.view}`} onClick={() => visualizarDetalhes(item)}>Visualizar Detalhes</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
      {selectedItem && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <span className={styles.close} onClick={closeModal}>&times;</span>
            <h2>Detalhes da Ordem de Serviço</h2>
            <p><strong>Nome:</strong> {selectedItem.name}</p>
            <p><strong>Idade:</strong> {selectedItem.age}</p>
            <p><strong>Número de Telefone:</strong> {selectedItem.phone}</p>
            <p><strong>E-mail:</strong> {selectedItem.email}</p>
            {/* Adicione mais informações da ordem de serviço aqui, como status, custo final, etc. */}
          </div>
        </div>
      )}
    </div>
  );
}
