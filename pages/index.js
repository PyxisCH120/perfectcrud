import React, { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({
    name: '',
    age: '',
    phone: '',
    email: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const addItem = () => {
    if (form.name && form.age && form.phone && form.email) {
      setItems([...items, form]);
      setForm({ name: '', age: '', phone: '', email: '' });
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  const deleteItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const editItem = (index) => {
    const item = items[index];
    setForm(item);
    deleteItem(index);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>CRUD Interface</title>
        <meta name="description" content="CRUD Interface with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>tabela crud suprema</h1>
        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            id="name"
            className={styles.input}
            placeholder="Nome"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            id="age"
            className={styles.input}
            placeholder="Idade"
            value={form.age}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            id="phone"
            className={styles.input}
            placeholder="Número de Telefone"
            value={form.phone}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            id="email"
            className={styles.input}
            placeholder="E-mail"
            value={form.email}
            onChange={handleChange}
            required
          />
          <button type="button" className={styles.button} onClick={addItem}>Adicionar</button>
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
              <tr key={index}>
                <td className={styles.td}>{item.name}</td>
                <td className={styles.td}>{item.age}</td>
                <td className={styles.td}>{item.phone}</td>
                <td className={styles.td}>{item.email}</td>
                <td className={styles.td}>
                  <button className={`${styles.button} ${styles.edit}`} onClick={() => editItem(index)}>Editar</button>
                  <button className={`${styles.button} ${styles.delete}`} onClick={() => deleteItem(index)}>Excluir</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}
