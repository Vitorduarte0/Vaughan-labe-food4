import React, { useState } from "react";
import { BASE_URL } from "../constants/url";
import useRequestData from "../hooks/useRequestData";
import GlobalStateContext from "./GlobalStateContext";


const GlobalState = (props) => {
    const [restaurants, setRestaurants, loading] = useRequestData([], `${BASE_URL}/restaurants`)
    const [cart, setCart] = useState([])
    const [cartRest, setCartRest] = useState([])

    const removeTheFood = (food) => {
        const filterFood = cart.filter((f)=> f.id !== food.id)
        setCart(filterFood)
    }
    const data = {
        cart,
        setCart,
        restaurants,
        loading,
        removeTheFood,
        cartRest,
        setCartRest,
        setRestaurants
    }
    
    return(
        <GlobalStateContext.Provider value={ data }>
        {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState;