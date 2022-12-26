import React from 'react'

const ButtomGroup = () => {
  return (
    <div style={{'display' : 'flex', 'flexDirection' : 'column'}}>
      <div>
        <a href='/'>CHECKOUT</a>
      </div>
      <div style={{'display' : 'flex', 'flexDirection' : 'column'}}>
        <button>CONTINÚA COMPRANDO</button>
        <a href='/'>VER CARRITO</a>
      </div>
    </div>
  )
}

export default ButtomGroup