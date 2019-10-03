import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Chip from '@material-ui/core/Chip';
import { addCartItem, removeCartItem } from '../../../actions/CartAction';

function CartItem(props) {
  const [clicked, setClicked] = useState(false);
  const onClickAdd = () => {
    const newItem = { ...props.cartItem, quantity: ++props.cartItem.quantity };
    props.addCartItem(newItem);
  };

  const onClickRemove = () => {
    const newItem = { ...props.cartItem, quantity: --props.cartItem.quantity };
    props.removeCartItem(newItem);
  };

  if (props.cartItem && props.cartItem.quantity === 0) {
    return <div> No Item In Cart</div>;
  }

  const handleClick = () => {
    setClicked(true);
  };

  if (clicked === true) {
    return <Redirect to="/itemdetail" />;
  }

  return (
    <div>
      {!props.cartItem && (
        <div style={{ textAlign: 'center' }}>
          {' '}
          <h2>No Item In Cart</h2>
        </div>
      )}
      {props.cartItem && (
        <div>
          <h3 style={{ padding: 5 }}>
            <span style={{ fontsize: '300px' }} onClick={e => handleClick(e)}>
              &#10005;
            </span>
          </h3>
          <h3 style={styles.cartTitle}>Add to My Plate</h3>
          <div style={styles.cardLayout}>
            <div style={styles.cardItem}>
              <div>
                <img
                  src={props.cartItem.image}
                  height={100}
                  width={100}
                  style={styles.cartItemImage}
                />
              </div>
              <div style={styles.cartItemDetail}>
                <div style={styles.cartItemCheck}>
                  <img
                    src="https://img.icons8.com/color/48/000000/non-vegetarian-food-symbol.png"
                    height={15}
                  ></img>
                  <b>{props.cartItem.name}</b>
                </div>
                <div style={styles.cartStarRating}>
                  <img
                    src="https://img.icons8.com/flat_round/50/000000/star--v3.png"
                    height={15}
                  ></img>
                  <div style={styles.cartStarRatingText}>
                    {props.cartItem.start_rating}
                  </div>
                  <div style={styles.cartItemRating}>
                    {props.cartItem.rating} Ratings
                  </div>
                </div>
                <Chip
                  variant="outlined"
                  size="small"
                  label={props.cartItem.tag}
                />
                <div style={styles.cartItemAmount}>
                  <b>&#8377;{props.cartItem.amount}</b>
                  <div style={styles.cartItemButton}>
                    <div onClick={onClickRemove} style={styles.cartItemMinus}>
                      -
                    </div>
                    <div style={{ padding: 10 }}>{props.cartItem.quantity}</div>
                    <div onClick={onClickAdd} style={styles.cartItemPlus}>
                      +
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={styles.cartItemDesBox}>
            <div style={styles.cartItemDescription}>
              <p>
                Perfect happiness would be knowing that all my family and
                friends were happy and safe. Then I'd go to a tropical island
                with my husband where it was gorgeous and fun all day long and
                interesting and fun all evening. Good food and dancing would be
                nice, too, and weekly visits from those safe and happy family
                and friends. Plus world peace
              </p>
            </div>
          </div>
          <div>
            <h5 style={styles.formTitle}>
              <b>Note to Chef</b>
            </h5>
            <div>
              <textarea rows="4" cols="42" style={styles.textField}>
                Enter text here...
              </textarea>
            </div>
            <div>
              <span style={styles.addToCartButton}>
                <text>Add to My Plate</text>
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    alignItems: 'center',
    display: 'flex',
    textAlign: 'center',
    flexWrap: 'wrap'
  },
  cardLayout: {
    borderRadius: '6px',
    display: 'flex',
    zIndex: 5,
    padding: 8,
    backgroundColor: 'white'
  },
  cardItem: {
    flexDirection: 'row',
    display: 'flex',
    boxSizing: 'inherit'
  },
  cartItemImage: {
    borderRadius: 5,
    float: 'left',
    position: 'relative'
  },
  cartItemDetail: {
    paddingLeft: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cartItemCheck: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  cartStarRating: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  cartStarRatingText: { fontSize: 14, paddingLeft: 5, color: 'grey' },
  cartItemRating: {
    fontSize: 12,
    paddingLeft: 5,
    color: 'grey',
    backgroundColor: 'white'
  },
  cartItemAmount: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 14
  },
  cartItemButton: {
    position: 'absolute',
    right: 5,
    display: 'flex',
    flexDirection: 'row'
  },
  cartItemMinus: {
    border: '0px solid ',
    padding: 8,
    backgroundColor: 'white',
    borderRadius: 5,
    borderColor: 'grey',
    borderWidth: 0.5,
    color: '#007bff',
    fontSize: 16
  },
  cartItemPlus: {
    border: '1px solid',
    padding: 8,
    backgroundColor: 'white',
    borderRadius: 5,
    borderColor: 'grey',
    borderWidth: 0.5,
    color: '#007bff',
    fontSize: 16
  },
  cartTitle: { padding: 5 },
  cartItemDescription: {
    fontSize: 14,
    alignItems: 'center',
    margin: 10,
    paddingTop: 10,
    paddingBottom: 8
  },
  cartItemDesBox: {
    backgroundColor: 'yellow'
  },
  addToCartButton: {
    backgroundColor: 'blue',
    margin: 5,
    justifyContent: 'center',
    display: 'flex',
    borderRadius: 10,
    height: 40,
    color: 'white',
    alignItems: 'center'
  },
  textField: { margin: 5, borderColor: 'black' },
  formTitle: {
    padding: 5
  }
};

function mapStateToProps({ cart }) {
  const { cartItem } = cart;
  return {
    cartItem
  };
}

export default connect(
  mapStateToProps,
  { addCartItem, removeCartItem }
)(CartItem);
