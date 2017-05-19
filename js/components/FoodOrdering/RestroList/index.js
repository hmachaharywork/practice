import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Text, Image, View, TouchableOpacity, ScrollView, InteractionManager } from 'react-native';
import { sortDistance } from '../../utility/sort';
import styles from './styles';

var moment = require('moment');

class BestInTownHome extends Component {

  render() {
    const restroData = this.props.restroData;
    return(
      <View style={styles.container}>
        {
          this.renderList(restroData)
        }

      </View>
    );
  }

  //
  // Got to restro Home
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
  // Render the list of restaurants
  //
  renderList(restroList){
    if (restroList.isInit || restroList.isFetching) {
      return(
        <Spinner size="large" />
      );
    }else if (restroList.bestRestro === undefined || restroList.bestRestro.length === 0) {
        return <ScrollView style={styles.listviewContainer} />;
    }
    return (
     <ScrollView style={styles.listviewContainer}>

        {
          restroList.bestRestro.sort(sortDistance).map((item, index)=>{
            let http = item.avatar.split(":");
            const imgUrl = http.map((item,index)=>{
              if (item == 'http' && index === 0) {
                return 'https:'
              }else if (item == 'https' && index === 0) {
                return 'https:'
              }
              return item
            })
            const url = imgUrl[0].concat(imgUrl[1]);
            const distance = Math.round(item.distance * 100) / 100;
            const openTime = moment(item.open.date);
            const closeTime = moment(item.close.date);
            var currentTime = moment();
            let status = moment(currentTime).isBetween(openTime,closeTime)? '':'CLOSED';
            if (item.is_closed) {
              status = 'CLOSED'
            }
            return (
              <TouchableOpacity
                key={index}
                style={styles.resultObjectView}
                onPress={()=>this.gotoRestroHome(item.id,item.menu,url,status)}
              >
                <Image
                  source={{uri: `${url}`}}
                  style={styles.left}
                 />

                <View style={styles.right}>
                      <View style={styles.rightTop}>
                          <View><Text style={styles.restroName}>{item.name}</Text></View>
                          <View style={styles.divider}></View>
                          <View style = {{flex: 1, flexDirection: 'row', justifyContent:'space-between', alignItems:'flex-end'}}>
                            <Text style={[styles.restroDistance, {fontStyle :'italic'}]}>{distance} kms away</Text>
                            <Text style= {{textAlign: 'right', color:'red', fontSize: 12}}>{status}</Text>
                          </View>
                      </View>
                </View>

              </TouchableOpacity>
            )
          })
        }

    </ScrollView>
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


module.exports = connect(mapStateToProps, mapDispatchToProps)(BestInTownHome);
