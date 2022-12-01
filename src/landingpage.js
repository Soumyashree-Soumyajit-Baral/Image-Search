// import React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import App from "./App"
import Bookmark from "./components/bookmark"

import React from 'react'

const Landingpage = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App/>}></Route>
                <Route path='/bookmark' element={<Bookmark/>}></Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default Landingpage