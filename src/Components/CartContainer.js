import React, {useEffect} from 'react'
import CartItem from './CartItem'

// --- Redux
import {connect} from "react-redux";
import {clearCart, getTotals} from "../actions";


const CartContainer = ({cart = [], total, clearCart, getTotals}) => {


  useEffect(() => {
    getTotals()
  }, [cart])

  if (cart.length === 0) {
    return (
      <section className="empty-cart">
        {/*  cart header */}
        <h2>سبد خرید</h2>
        <h4>هیچ محصولی در سبد خرید موجود نمی باشد</h4>
      </section>
    )
  }

  return (
    <section className="cart">
      {/* ---- Header ----- */}
      <header>
        <h3>سبد خرید</h3>
      </header>
      {/* ----- Cart Item ------ */}
      <div>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />
        })}
      </div>
      {/*  ----- Footer ----- */}
      <div className="line"></div>
      <footer>
        <div className="footer-total">
          <p>جمع کل</p>
          <p>{total} تومان</p>
        </div>
        <button className="btn-footer" onClick={() => clearCart()}>حذف همه</button>
      </footer>
    </section>
  )
}

const mapStateToProps = (store) => {
  // ONE ------------
  // return {
  //   cart: store.cart,
  //   total: store.total
  // }
  //   TWO ---------
  const {cart, total} = store
  return {cart, total}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    clearCart: () => dispatch(clearCart()),
    getTotals: () => dispatch(getTotals())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);