import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { AuthContextProvider } from "./context/authContext.jsx";
import DataProvider from './context/DataProvider.jsx'
import { ProjectProvider } from './context/ProjectContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>

  <BrowserRouter>
    <AuthContextProvider>
      <DataProvider>
         <ProjectProvider>
          <App />
         </ProjectProvider>
      </DataProvider>

    </AuthContextProvider>
  </BrowserRouter>
  // </React.StrictMode>

)
