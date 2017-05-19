import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Text, Image, View, TouchableOpacity, ScrollView, InteractionManager } from 'react-native';
import RestroList from '../RestroListView/index';
import { requestBestInTownList, clearBestInTown } from '../../../actions/bestintown';

class bestInTown extends Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
    const bestId = this.props.navigation.state.params.bestId;
    console.log("Component did mount ", bestId);
    InteractionManager.runAfterInteractions(() => {
      this.props.requestBestInTownList(bestId);
    });
  }

  componentWillUnmount(){
    this.props.clearBestInTown();
  }

  render() {
    const bestintown = this.props.bestintown;
    // const bestId = this.props.navigation.state;
    // console.log("render function" , bestId);
    //console.log(bestintown);
    return(
      <RestroList restroData={bestintown} />
    );
  }
}

function mapStateToProps (state) {
  return {
    bestintown:state.bestintown,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    requestBestInTownList:(id)=>dispatch(requestBestInTownList(id)),
    clearBestInTown:()=>dispatch(clearBestInTown()),
  }
}


module.exports = connect(mapStateToProps, mapDispatchToProps)(bestInTown);
