// import React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { useState } from "react"
import App from "./App"
import Bookmark from "./components/bookmark"

import React from 'react'

const Landingpage = () => {
  const [bookmark, setBookmark]=useState([])
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App bookmark={bookmark} setBookmark={setBookmark} />}></Route>
                <Route path='/bookmark' element={<Bookmark bookmark={bookmark} setBookmark={setBookmark}/>}></Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default Landingpage