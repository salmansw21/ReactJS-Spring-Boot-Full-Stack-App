import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' 
import App from './App'
import EmployeeTable from './components/EmployeeTable'
import Header from './components/Header'
import Footer from './components/Footer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
   <Header />
            <main>
                <EmployeeTable />
            </main>
  <Footer />
  </StrictMode>
)
