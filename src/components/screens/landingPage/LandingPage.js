import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CropIcon from '@material-ui/icons/Crop';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { getHomePageData } from '../../../actions/LandingAction';
import Header from '../../common/header';
import FormControl from './FormControl';
import './LandingPage.css';
import SearchBar from '../../common/searchbar/SearchBar';

const useStyles = makeStyles({
  root: {
    width: '100%',
    backgroundColor: 'lightGray',
    display: 'flex',
    position: 'absolute',
    bottom: 0
  }
});

function LandingPage(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    props.getHomePageData();
  }, []);

  const handleItemDetail = e => {
    setClicked(true);
  };

  if (clicked) {
    return <Redirect to="/itemdetail" />;
  }
  console.log(props.data, 'Landing Page');

  return (
    <div>
      {value === 0 && (
        <div>
          <Header />
          <div style={{ flexDirection: 'row', display: 'flex' }}>
            <div>
              <FormControl />
            </div>
            <SearchBar />
          </div>
          <div>
            <div style={{ flex: 1, padding: 2 }}>
              <div style={{ float: 'left', padding: 5 }}>
                <h5>
                  <b>TODAYS SPECIAL</b>
                </h5>
              </div>
              <div style={{ float: 'right' }}>
                <h6 style={styles.textSeeAll}>See all</h6>
              </div>
            </div>
            <div className="carasoul_Conatiner">
              <div className="carasoul_Conatiner_main">
                <div style={styles.carasoulConatinerItem}>
                  {!props.isLoading &&
                    props.data[0].today_special.map((item, id) => {
                      return (
                        <div style={styles.itemsContainer}>
                          <img
                            src={item.image}
                            alt=""
                            key={id}
                            width="70"
                            height="70"
                            style={styles.itemImg}
                          />
                          <div style={styles.textContainer}>
                            <p style={styles.textItem}>{item.name}</p>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
            <div>
              <div>
                <h5 style={{ padding: 8 }}>
                  <b>COURSES</b>
                </h5>
              </div>
              <div className={'Second_Container'}>
                {!props.isLoading &&
                  props.data[1].courses.map(item => {
                    return (
                      <div
                        className="card_Container"
                        onClick={e => handleItemDetail(e)}
                      >
                        <div style={styles.cardItem}>
                          <div className="col-s-7">
                            <img
                              src={item.image}
                              width="40"
                              height="40"
                              style={{
                                borderRadius: 5,
                                float: 'left',
                                boxShadow: '0.5px 0.5px'
                              }}
                            />
                          </div>
                          <div style={{ paddingLeft: 5 }}>{item.name}</div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      )}
      {value === 1 && <div> Sceen2 </div>}
      {value === 2 && <div> Sceen3 </div>}
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction icon={<FiberManualRecordIcon />} />
        <BottomNavigationAction icon={<RestoreIcon />} />
        <BottomNavigationAction icon={<CropIcon />} />
        <BottomNavigationAction icon={<ArrowBackIcon />} />
      </BottomNavigation>
    </div>
  );
}

const styles = {
  carasoulConatinerItem: {
    position: 'relative',
    width: '100%',
    display: 'flex',
    boxSizing: 'inherit',
    flex: 1,
    flexDirection: 'row',
    overflow: 'auto',
    scrollBar: 'hidden',
    overflow: 'auto'
  },
  itemsContainer: {
    padding: 10
  },
  textContainer: {
    flex: 1,
    textAlign: 'center'
  },
  textItem: {
    fontSize: 14,
    textAlign: 'center'
  },
  textSeeAll: {
    color: '#007bff',
    textAlign: 'center'
  },
  itemImg: { borderRadius: '50%' },
  cardItem: {
    flexDirection: 'row',
    display: 'flex',
    boxSizing: 'inherit'
  }
};

function mapStateToProps({ landing }) {
  const { data, isLoading } = landing;
  return {
    data,
    isLoading
  };
}

export default connect(
  mapStateToProps,
  { getHomePageData }
)(LandingPage);
