import React from 'react' //importação de react
import ReactDOM from 'react-dom/client' //importação de ReactDom v.Client  
import App from './App.tsx' //importação pagina app.tsx

ReactDOM.createRoot(document.getElementById('root')!).render(  //Criação de root em pasta document usando variável getElementById 
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
