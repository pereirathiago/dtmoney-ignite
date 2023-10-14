import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { createServer } from 'miragejs';

createServer({
  routes() {
    this.namespace = 'api'

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Desenvolvimento de website',
          amount: 'R$12.000',
          type: 'deposit',
          category: 'Desenvolvimento',
          date: '14/10/2023',
        },
        {
          id: 2,
          title: 'Alugel',
          amount: '- R$1.100',
          type: 'withdraw',
          category: 'Casa',
          date: '13/10/2023',
        },
      ]
    })
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
