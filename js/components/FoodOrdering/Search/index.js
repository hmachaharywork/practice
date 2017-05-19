import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Text, Image, View, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { Spinner } from "../../Common/";
import { searchApp } from '../../../actions/search';
import { sortDistance } from '../../../utility/sort';
import Icon from "react-native-vector-icons/MaterialIcons";
import styles from './styles';

var moment = require('moment');

class Search extends Component {
  constructor(props){
    super(props);
    this.state = {
      text:"",
      showSpinner: false,
      showResults: false,
      showNoResults: false
    }
  }

  gotoRestroHome(id,menu,img,status){
    this.props.navigator.push({
      id:'restro-home',
      restroId:id,
      menuId:menu,
      img:img,
      status: status,
    })
  }
  componentWillReceiveProps(nextProps){
    const searchObj = nextProps.search
    if (searchObj.requesting && !searchObj.isInit) {
      this.setState({
        showSpinner: true,
        showResults: false,
        showNoResults:false,
      })
    }else if (!searchObj.requesting && searchObj.results !== undefined) {
      this.setState({
        showSpinner: false,
        showResults: true,
        showNoResults:false,
      })
    }else if (!searchObj.requesting && searchObj.results === undefined) {
      this.setState({
        showResults: false,
        showSpinner: false,
        showNoResults: true
      })
    }
  }
  //
  // List of results
  //
  renderResults(data, index){
    const distance = Math.round(data.distance * 100) / 100;
    const openTime = moment(data.open.date);
    const closeTime = moment(data.close.date);
    var currentTime = moment();
    let status = moment(currentTime).isBetween(openTime,closeTime)? '':'CLOSED';
    if (data.is_closed) {
      status = 'CLOSED'
    }
    return(
      <TouchableOpacity
        key={index}
        style={styles.resultObjectView}
        onPress={()=>this.gotoRestroHome(data.id,data.menu, data.avatar, status)}
      >
        <Image
          source={{uri: data.avatar}}
          style={styles.left}
          />

        <View style={styles.right}>
            <View style={styles.rightTop}>
                <View><Text style={styles.restroName}>{data.name}</Text></View>
                <View style={styles.divider}></View>
                <View style = {{flex: 1, alignItems:'flex-end', flexDirection: 'row', justifyContent:'space-between'}}>
                  <Text style={[styles.restroDistance, {fontStyle:'italic'}]}>{distance} kms away</Text>
                  <Text style= {{textAlign: 'right', color:'red', fontSize:12}}>{status}</Text>
                </View>
            </View>
          </View>
      </TouchableOpacity>
    );
  }

  //
  // Search app
  //
  searchapp(queryText){
    this.setState({text:queryText})
    if (queryText === ""){
      this.setState({
        showInit: true
      })
      return ;
    }else if (queryText !== "") {
      this.setState({
        showInit: false
      })
      this.props.searchApp(queryText);
    }
  }

  //
  // Render main
  //
  renderMain(searchObject){
    if (this.state.showInit || this.props.search.isInit) {
      return null;
    }else if (this.state.showSpinner) {
      return (
        <View style={styles.centered2}>
          <Spinner style={[styles.centered ]} size={"large"}/>
        </View>
      );
    }
    else if (this.state.showResults) {
      return searchObject.sort(sortDistance).map((data, index)=>this.renderResults(data,index))
    }else if (this.state.showNoResults) {
      return (
        <View style={styles.centered}>
          <Image
            style={{width:200, height: 200}}
            // style={styles.userPicStyle}
            source={require('../../../assets/search-not-found.png')}
            />
          <Text style={styles.centeredText}>Oops! We didn't get a match to your taste</Text>
        </View>
      );
    }
  }
  render() {

    return (
      <View style={styles.container}>
        <View style={styles.searchBarAndFilterSection}>
          <TextInput
            style={styles.textInput}
            placeholder="Search cuisines, restaurants"
            placeholderTextColor ={"#757575"}
            value={this.state.text}
            onChangeText={(text) => this.searchapp(text)}
            underlineColorAndroid='rgba(0,0,0,0)'
            // onFocus={()=>this.setState({text:''})}
          />
          <TouchableOpacity
            style={styles.filterButton}
            >
            <Icon name={"search"} style={{fontSize:22, color:'#fff'}}/>
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.listviewContainer}>
        {
          this.renderMain(this.props.search.results)
        }
        </ScrollView>
      </View>
    );
  }
}

function mapStateToProps (state) {
  return {
    search: state.search,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    searchApp:(queryText)=>dispatch(searchApp(queryText)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
