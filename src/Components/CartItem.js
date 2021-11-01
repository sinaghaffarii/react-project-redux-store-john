import React from 'react';
import {FaRegTrashAlt} from 'react-icons/fa'
import {IoIosArrowDropdownCircle, IoIosArrowDropupCircle} from "react-icons/io";

// --------- REDUX

import {connect} from "react-redux";
import {removeItem, increaseItem, decreaseItem, toggleAmount} from "../actions";

const CartItem = ({title, img, price, amount, remove, increase, decrease, toggle}) => {


  return (
    <div className="cart-item">
      <div className="product-img-container">
        <img className="product-img" src={img} alt={title}/>
      </div>
      <div className="cart-detail">
        <h4>{title}</h4>
        <p>{price} تومان</p>
        <button onClick={() => remove()} className="trash-btn"><FaRegTrashAlt/></button>
      </div>
      <div className="amount-buttons">
        {/*<button onClick={() => increase()}><IoIosArrowDropupCircle/></button>*/}
        {/* ----- OR --------*/}
        <button onClick={() => toggle('inc')}><IoIosArrowDropupCircle/></button>
        <p>{amount}</p>
        {/*<button onClick={() => decrease()}><IoIosArrowDropdownCircle/></button>*/}
        {/*   ------- OR ----- */}
        <button onClick={() => {
          if (amount === 1) {
            return remove()
          } else {
            return toggle('dec')
          }
        }}><IoIosArrowDropdownCircle/></button>

      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const {id} = ownProps;
  return {
    remove: () => dispatch(removeItem(id)),
    increase: () => dispatch(increaseItem(id)),
    decrease: () => dispatch(decreaseItem(id)),
    toggle: (toggle) => dispatch(toggleAmount(id, toggle))
  }
}

export default connect(null, mapDispatchToProps)(CartItem);