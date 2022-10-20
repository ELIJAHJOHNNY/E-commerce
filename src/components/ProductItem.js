import React from "react";
import { stripHtml } from 'string-strip-html';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions'

const ProductItem = ({ product, onAddToCart }) => {
    const handleAddToCart = () => {
        onAddToCart(product.id, 1);
      }

  const { result } = stripHtml(product.description);

  return (
      <Card>
        <CardMedia component="img" image={product.image?.url} title={product.name}/>
        <CardContent>
          <div>
            <Typography variant='h5' gutterBottom>
              {product.name}
            </Typography>
            <Typography variant='h5' gutterBottom>
              {product.price.formatted_with_symbol}
            </Typography>
          </div>
          <Typography variant='body2' color='textSecondary'>{result}</Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton arial-label='Add to cart' onClick = {() => onAddToCart(product.id, 1)}>
            <AddShoppingCartIcon />
          </IconButton>
        </CardActions>
      </Card>
    // <div className="product__card">
    //   <img className="product__image" src={product.image?.url} alt={product.name} />
    //   <div className="product__info">
    //     <h4 className="product__name">{product.name}</h4>
    //     <p className="product__description">
    //       {/* product description stripped of html tags */}
    //       {result}
    //       {/* {product.description} */}
    //     </p>
    //     <div className="product__details">
    //       <p className="product__price">
    //         {product.price.formatted_with_symbol}
    //       </p>
    //       <Button 
    //       variant="contained" onClick={handleAddToCart}
    //       color="secondary"
    //       startIcon={<AddShoppingCartIcon />}>
    //       Add to cart</Button>
    //     </div>
    //   </div>
    // </div> 
  );
};

ProductItem.propTypes = {
  product: PropTypes.object,
};

export default ProductItem;