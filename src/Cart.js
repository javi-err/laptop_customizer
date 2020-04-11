import React from 'react'
import Summary from './Summary'
import Total from './Total'

function Cart(props) {
  return (
    <div>
    <section className="main__summary">
    <h2>Your cart</h2>
    <Summary 
    selected={props.selected}
    USCurrencyFormat={props.USCurrencyFormat}
    
    />
    <div className="summary__total">
      <div className="summary__total__label">Total</div>
      <Total 
      selected = {props.selected}
      />
      
    </div>
  </section>
  </div>
  )
}

export default Cart
