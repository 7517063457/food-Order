import HeaderCartButton from './HeaderCartButton';
import classes from '../Layout/Header.module.css';
import React,{Fragment} from 'react';
import MealsImage from '../../assets/meals.jpg';


const Header =props => {

    

    return(
        <Fragment>
            <header className={classes.header}>
            <h1>Meals On wheels</h1>
            <HeaderCartButton onClick={props.onShowCart}/>
            </header>
            <div className={classes['main-image']}>
            <img src= {MealsImage} 
            alt ='A Table Full Of Delicious food!' />
            </div>
        </Fragment>
    )
};

export default Header;