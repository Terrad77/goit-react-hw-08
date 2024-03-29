import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; // для зв'язку store з React компонентами App
import App from './components/App/App';
import { store } from './redux/store'; // { persistor, store } передамо в пропс для підключення Redux store до App
import { BrowserRouter } from 'react-router-dom';
// Імпорт стилів нормалізації
import 'modern-normalize';
import './index.css';
//імпорт шрифтів для  Material UI
//npm install @fontsource/roboto
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
