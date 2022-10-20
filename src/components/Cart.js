import React from 'react';
import CartItem from './CartItem';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';

const Cart = ({cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart}) => {
    // const handleEmptyCart = () => {
    //     onEmptyCart();
    //   }
    
    //   const renderEmptyMessage = () => {
    //     if (cart.total_unique_items > 0) {
    //         return;
    //     }
    //       else {
    //         return (
    //             <p className="cart__none">
    //               You have no items in your shopping cart, start adding some!
    //             </p>
    //           );
    //       }
    //     };

    //     const renderItems = () => (
    //         cart.line_items.map((lineItem) => (
    //           <CartItem
    //             item={lineItem}
    //             key={lineItem.id}
    //             className="cart__inner"
    //           />
    //         ))
    //       );

    //       const renderTotal = () => (
    //         <div className="cart__total">
    //           <p className="cart__total-title">Subtotal:</p>
    //           <p className="cart__total-price">{cart.subtotal.formatted_with_symbol}</p>
    //         </div>
    //       );

    const isEmpty = cart.line_items.length === 0;

    const emptyCart = () => (
      <Typography component={Link} to='/' variant = 'subtitle'>You have no items in your shopping cart, start adding some</Typography>
    );

    const filledCart = () => (
      <>
        <Grid container spacing = {3}>
          { cart.line_items.map((item) => (
            <Grid item xs={12} sm={4} key={item.id}>
              <CartItem item={item} onUpdateCartQty = {handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart}/>
              {/* {item.name} */}
            </Grid>
          ))}
        </Grid>
        <div>
          <Typography variant = 'h4'> Subtotal:{cart.subtotal.formatted_with_symbol} </Typography>
          <div>
            <Button variant='contained' size='large' type='button' color='secondary' onClick={handleEmptyCart}>Empty cart</Button>
            <Button variant='contained' size='large' type='button' color='primary'>Checkout</Button>
          </div>
        </div>
      </>
    );


  return (
          <Container sx={{my:'4rem'}}>
            <Typography variant = 'h5'>Your Shopping Cart</Typography>
            {isEmpty ? emptyCart() : filledCart() }
          </Container>
    //    <div className="cart">
    //         <h4 className="cart__heading">Your Shopping Cart</h4>
    //         { renderEmptyMessage() }
    //         { renderItems() }
    //         { renderTotal() }
    //         <div className="cart__footer">
    //             <button className="cart__btn-empty">Empty cart</button>
    //             <button className="cart__btn-checkout">Checkout</button> 
    //         </div>
    // </div>
  )
}

Cart.propTypes = {
    cart: PropTypes.object,
    onEmptyCart: () => {},
};

export default Cart