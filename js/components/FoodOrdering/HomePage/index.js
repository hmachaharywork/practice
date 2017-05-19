import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Text, Image, View, TouchableOpacity, ScrollView, InteractionManager } from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";
//import { openDrawer } from '../../actions/sidebar';
//import { ShoppingCart } from "../../Common/";
import { fetchCuisines, fetchRestaurant, fetchBestInTown, fectchBanners } from '../../../actions/homepage';
import Search from '../Search/index';
import BestInTown from '../BestInTown/index';
import Cuisines from '../Cuisines/index';
import NewAndHot from '../NewAndHot/index';
import Banner from '../Banner/index';
import styles from './styles';

class Home extends Component {
  static navigationOptions = {
    title: 'Food Ordering'
  }

  constructor(props){
    super(props);
    this.state = {
      text: '',
      location: '',
      showSearch: false,
      number:0
    }
  }

  componentDidMount(){
    this.setState({
      number: this.props.cartSize
    })
   InteractionManager.runAfterInteractions(() => {
      this.props.fectchBanners();
      this.props.fetchBestInTown();
      this.props.fetchRestaurant();
      this.props.fetchCuisines();
    });
  }

  componentWillReceiveProps(props){
    if (props.cartSize > 0 ) {
      this.setState({
        number: props.cartSize
      })
    }
    else if (props.cartSize === 0) {
      this.setState({
        number:0
      })
    }
    if (props.location) {
      const locationText = props.location.name.split(',')
      const locationConcatText = locationText[0]+','+locationText[1];
      if (locationConcatText.length < 26) {
        this.setState({
          location:locationConcatText  ,
        })
      }else {
        this.setState({
          location:locationConcatText.slice(0, 25)+' ...' ,
        })
      }
    }
  }

  gotoBestInTownHome(id, title){
    this.props.navigation.navigate('BestInTown', {
      bestId:id,
      title:title
    })
  }
  //
  // Goto Select location
  //
  // gotoSelectLocation(){
  //   this.props.navigator.push({id:'select-location'})
  // }
  //
  // Go to menu list
  //
  gotoRestroHome(id,menu,img,status){
    this.props.navigator.push({
      id:'restro-home',
      restroId:id,
      menuId:menu,
      img:img,
      status:status,
    })
  }

  //
  // Go to list of cuines
  //
  gotoCuisineHome(id,cuisine){
    this.props.navigator.push({
      id:'cuisine-home',
      cuisineId:id,
      cuisine:cuisine
    })
  }

  //
  // Go to Cart
  //
  gotoCartHome(cuisine){
    this.props.navigator.push({
      id:'cart',
    })
  }

  //
  // Go to Cart
  //
  gotoRestroList(){
    this.props.navigator.push({
      id:'restro-list',
    })
  }

  // renderCart(){
  //   return(
  //     <ShoppingCart
  //     onCartClick={()=>this.gotoCartHome()}
  //     tab={this.props.tab}
  //     numberOfItemsInCart={this.state.number}/>);
  // }

  renderMainSection(){
    if (this.state.showSearch) {
      return <Search navigator={this.props.navigator}/>
    }
    return(
      <View>
        { this.renderSwiper() }
        <BestInTown
          gotoBestInTownHome={(id, title)=>this.gotoBestInTownHome(id, title)}
          data={this.props.bestintown}
          />
        <View style={styles.cardsHeader}>
          <Text style={styles.cardsHeaderText}>NEW & HOT</Text>
        </View>
        <NewAndHot
          restaurant={this.props.restaurant}
          gotoRestroList={()=>this.gotoRestroList()}
          gotoRestroHome={(id,menu,img,status)=>this.gotoRestroHome(id,menu,img,status)}
          />
        <View style={styles.cardsHeader}>
          <Text style={styles.cardsHeaderText}>CATEGORIES</Text>
        </View>
        <Cuisines
          cuisine={this.props.cuisine}
          gotoCuisineHome={(menu,cuisineName)=>this.gotoCuisineHome(menu, cuisineName)}
          />
      </View>
    );
  }

  renderSwiper(){
    const dotStyle = <View style={styles.dotStyle} />
    const dotActiveStyle = <View style={styles.dotActiveStyle} />
    return(
      <Banner
        data={this.props.banners}
        dotStyle={dotStyle}
        dotActiveStyle={dotActiveStyle}
      />
    );
  }

  render() {
    // const {state} = this.props.navigation;
    return(
      <View style={styles.container}>
        {/* <View style={styles.topbar}>
          {
            this.renderTopbarIcon()
          }
          <TouchableOpacity
            onPress={()=>this.gotoSelectLocation()}
            style={[styles.midTopbar]}>
            <Text
              numberOfLines={1}
              ellipsizeMode={"tail"}
              style={[styles.locationText]}>
              {this.state.location}
            </Text>
            <Icon style={styles.chevronIcon} name="keyboard-arrow-down" />
          </TouchableOpacity>
          <View style={[styles.rightTopbar]}>
            <View style={{marginRight:0,  flex:1}}>
                { this.renderCart() }
            </View>
          </View>
        </View>*/}
        <ScrollView style={styles.scrollbar}>
          {
            !this.state.showSearch
            &&
            <TouchableOpacity
              style={styles.searchBox}
              onPress={()=>this.setState({showSearch:true})}
              >
                <Text style={styles.searchBoxText}>Search cuisines, restaurants</Text>
            </TouchableOpacity>
          }
          {
            this.renderMainSection()
          }
        </ScrollView>
      </View>
    );
  }
}

function mapStateToProps (state) {
  return {
    banners: state.banners,
    bestintown: state.homepage.bestintown,
    restaurant: state.homepage.restaurant,
    cuisine: state.homepage.cuisine,
    location: state.location.activeLocation,
    cartSize:state.cart.size,
    cart:state.cart,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    //openDrawer:()=>dispatch(openDrawer()),
    fetchCuisines:()=>dispatch(fetchCuisines()),
    fetchRestaurant:()=>dispatch(fetchRestaurant()),
    fetchBestInTown:()=>dispatch(fetchBestInTown()),
    fectchBanners:()=>dispatch(fectchBanners()),
  }
}


module.exports = connect(mapStateToProps, mapDispatchToProps)(Home);
