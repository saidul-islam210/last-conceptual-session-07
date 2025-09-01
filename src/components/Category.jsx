import React, { useEffect, useState } from 'react';
// import CategoriBtn from './CategoriBtn';
import './categoryBtn.css'

const Category = ({setSelectedCategory}) => {
    const [category,setCategory] = useState([])

    // console.log(category);
    
    useEffect (()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(res =>res.json())
        .then(data=>setCategory(data.categories))
        // console.log(Category);
    },[])
    return (
        <div className='categoryContainer'>
            {
                category.map(cat=><button onClick={()=>setSelectedCategory(cat.strCategory)} className='categoryBtn' key={cat.idCategory}>{cat.strCategory}</button>)
            }
        </div>
    );
};

export default Category;