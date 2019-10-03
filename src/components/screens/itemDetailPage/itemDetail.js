import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getItemDetailData } from '../../../actions/ItemDetailAction';
import { addCartItem } from '../../../actions/CartAction';
import Chip from '@material-ui/core/Chip';
import Header from '../../common/header';
import FormControl from '../../screens/landingPage/FormControl';

function ItemDetail(props) {
  const [isCartItem, setCartItem] = useState(false);
  const [clickBack, setClickBack] = useState(false);

  useEffect(() => {
    props.getItemDetailData();
  }, []);
  console.log(props);

  const onPressAddItemCart = item => {
    const newItem = { ...item, quantity: 1 };
    props.addCartItem(newItem);
    setCartItem(true);
  };

  if (isCartItem) {
    return <Redirect to="/cart" />;
  }

  const handleClickBack = () => {
    setClickBack(true);
  };

  if (clickBack === true) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <Header />
      <FormControl />
      <div>
        <div>
          <h3 style={styles.itemHeading} onClick={() => handleClickBack()}>
            {' '}
            &larr; Starter
          </h3>
        </div>
        <div style={styles.Container}>
          {!props.isStarterLoading &&
            props.starterData.map(item => (
              <div style={styles.cardLayout}>
                <div style={styles.cardItem}>
                  <div>
                    <img
                      src={item.image}
                      height={100}
                      width={100}
                      style={styles.itemImage}
                    />
                  </div>
                  <div style={styles.itemData}>
                    <div style={styles.itemName}>
                      <img
                        src="https://img.icons8.com/color/48/000000/non-vegetarian-food-symbol.png"
                        height={15}
                      ></img>
                      <b>{item.name}</b>
                    </div>
                    <div style={styles.itemCheck}>
                      <img
                        src="https://img.icons8.com/flat_round/50/000000/star--v3.png"
                        height={15}
                      ></img>
                      <div style={styles.itemStarRating}>
                        {item.start_rating}
                      </div>
                      <div style={styles.itemRating}>{item.rating} Ratings</div>
                    </div>
                    <Chip variant="outlined" size="small" label={item.tag} />
                    <div style={styles.itemAmount}>
                      <b>&#8377;{item.amount}</b>
                      <button
                        onClick={() => onPressAddItemCart(item)}
                        style={styles.cartButton}
                      >
                        + Add
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
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
  itemImage: {
    borderRadius: 5,
    float: 'left',
    position: 'relative'
  },
  itemData: {
    paddingLeft: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  itemName: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  itemCheck: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  itemStarRating: { fontSize: 14, paddingLeft: 5, color: 'grey' },
  itemRating: {
    fontSize: 12,
    paddingLeft: 5,
    color: 'grey',
    backgroundColor: 'white'
  },
  itemAmount: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 14
  },
  cartButton: {
    borderColor: 'light-grey',
    color: '#007bff',
    backgroundColor: 'white',
    borderRadius: 5,
    position: 'absolute',
    right: 5,
    fontSize: 14
  },
  itemHeading: { padding: 8 }
};

function mapStateToProps({ itemDetail, cart }) {
  const { starterData, isStarterLoading } = itemDetail;
  return {
    starterData,
    isStarterLoading
  };
}

export default connect(
  mapStateToProps,
  { getItemDetailData, addCartItem }
)(ItemDetail);
