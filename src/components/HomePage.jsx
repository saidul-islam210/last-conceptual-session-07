
import React, { Suspense, useState, lazy } from 'react';
import "./homePage.css"

// Lazy load
const Category = lazy(() => import('./Category'));
const ShowCategoryFood = lazy(() => import('./ShowCategoryFood'));

const HomePage = () => {
     const [selectedCategory,setSelectedCategory] = useState('')
     
    return (
        <div>
            <nav className='homePage'>
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Blog</a>
            </nav>

            <Suspense fallback={<h1>Loading Categories....</h1>}>
                <Category setSelectedCategory={setSelectedCategory}></Category>
            </Suspense>

            <Suspense fallback={<h1>Loading Foods....</h1>}>
                <ShowCategoryFood selectedCategory={selectedCategory}></ShowCategoryFood>
            </Suspense>
        </div>
    );
};

export default HomePage;
