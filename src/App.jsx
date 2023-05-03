import React, { useRef } from 'react'
import IndianMap from './components/IndianMap'
import './App.css'
import DownloadImageBtn from './components/DownloadImageBtn';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Map from './Pages/Map';
import NotFound from './Pages/NotFound';
import HowtoUse from './Pages/HowtoUse';

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/'>
                    <Route index element={<Map />} />
                    <Route path='map' element={<Map />} />
                    <Route path='howtouse' element={<HowtoUse />} />
                    <Route path='*' element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App