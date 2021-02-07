import React from 'react';
import Header from './components/header/index';
import styles from './app.module.css';
import Aside from './components/aside/index';
import Main from './components/main/index';
import Footer from './components/footer/index';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.container}>
        <Aside />
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;
