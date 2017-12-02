import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';


const burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />
      }); // returns array arrays for each ingredient where innerArray.length=ingredient qty
    })
    .reduce((arr, el) => {        // flattens the above array into an array with each element being an ingredient
      return arr.concat(el);
    }, []);

    if (transformedIngredients.length === 0) {
      transformedIngredients = <p>Please start adding ingredients!</p>
    };

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
