import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout.tsx'
import Main from './pages/main/Main.tsx'
import History from './pages/history/History.tsx'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Layout/>}>
            <Route path={'/main'} element={<Main/>}/>
            <Route path={'/history'} element={<History/>}/>
          </Route>
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
