import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layouts from './layout/Layouts';
import Dashboards from './components/dashboard/Dashboards';
import AllPage from './components/AllPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layouts />}>
          <Route index element={<Dashboards />} />
          <Route path='*' element={<AllPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;