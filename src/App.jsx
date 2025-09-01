import { Suspense } from "react"
import Catagory from "./components/Category"
import HomePage from "./components/HomePage"
import ShowCategoryFood from "./components/ShowCategoryFood"

function App() {


  return (
    <>
    <Suspense fallback={<h1>Loading....</h1>}>
      <HomePage></HomePage>
    </Suspense>
    {/* <HomePage></HomePage> */}
    </>
  )
}

export default App

//categories : https://www.themealdb.com/api/json/v1/1/categories.php

//1 : https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef