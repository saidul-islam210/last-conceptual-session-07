import React, { useEffect, useState} from 'react';
// const [food,setFood] = useState()

const ShowCategoryFood = ({selectedCategory}) => {
    const [foods,setFoods] = useState(null)
    console.log(selectedCategory);
    // console.log(setFoods);
   
    useEffect (() => {
        fetch(`
            https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`)
        .then(res=>res.json())
        .then(data=>setFoods(data.meals))
    },[selectedCategory])
    // console.log(foods);
    return (
        <div style={{display: "grid", gridTemplateColumns:"repeat(3,1fr)"}}>
            {
                foods?.map(food => <div key={foods.idMeal}>
                    <img style={{width:"250px",height:"250px"}} src={food.strMealThumb} alt="" />
                    <p>{food.strMeal}</p>
                </div>)
            }
        </div>
    );
};

export default ShowCategoryFood;

/** */

// import React, { useEffect, useState} from 'react';

// const ShowCategoryFood = ({selectedCategory}) => {
//     const [foods,setFoods] = useState([])

//     useEffect (() => {
//         if(selectedCategory){   // category select না করলে API call করবে না
//             fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`)
//             .then(res=>res.json())
//             .then(data=>setFoods(data.meals))
//         }
//     },[selectedCategory])
    
//     return (
//         <div>
//             {
//                 foods && foods.map(food => (
//                     <div key={food.idMeal}>
//                         <img src={food.strMealThumb} alt={food.strMeal} />
//                         <p>{food.strMeal}</p>
//                     </div>
//                 ))
//             }
//         </div>
//     );
// };

// export default ShowCategoryFood;
