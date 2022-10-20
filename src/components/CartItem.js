import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions'

const CartItem = ({item, onUpdateCartQty, onRemoveFromCart}) => {
  return (
        <Card>
          <CardMedia component="img" image={item.image.url} alt={item.name}/>
          <CardContent>
            <Typography variant='h4'>{item.name}</Typography>
            <Typography variant='h4'>{item.line_total.formatted_with_symbol}</Typography>
          </CardContent>
          <CardActions>
            <div>
              <Button
              onClick={() => onUpdateCartQty(item.id, item.quantity + 1)}
              >
                +
              </Button>
              <Typography>{item.quantity}</Typography>
              <Button
              onClick={() => onUpdateCartQty(item.id, item.quantity - 1)}
              >
                -
              </Button>
            </div>
            <Button variant='contained' type='button' size='large' onClick={() => onRemoveFromCart(item.id)}>
              Remove
            </Button>
          </CardActions>
        </Card>
    // <div className="cart-item">
    //   <img className="cart-item__image" src={item.image.url} alt={item.name} />
    //   <div className="cart-item__details">
    //     <h4 className="cart-item__details-name">{item.name}</h4>
    //     <div className="cart-item__details-qty">
    //       <p>{item.quantity}</p>
    //     </div>
    //     <div className="cart-item__details-price">{item.line_total.formatted_with_symbol}</div>
    //   </div>
    //   <button
    //     type="button"
    //     className="cart-item__remove"
    //   >
    //     Remove
    //   </button>
    // </div>
  );
};

CartItem.propTypes = {
    item: PropTypes.object,
};

export default CartItem;