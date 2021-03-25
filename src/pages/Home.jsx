import React from 'react'
import Products from '../components/Products'
import Cart from '../components/Cart'

class Home extends React.Component {
  render() {
    return(
      <div>
      <Products />
      <Cart />
      </div>
    )
  }
}

export default Home