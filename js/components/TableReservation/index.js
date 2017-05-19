import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Text, Image, View, Dimensions, TouchableOpacity, ScrollView, InteractionManager, Linking } from 'react-native';
import styles from './styles';
import { Spinner } from "../Common/";
import { fetchListOfTableReservation } from '../../actions/table-reservation';
import Icon from "react-native-vector-icons/MaterialIcons";

class TableReservation extends Component {
  static navigationOptions = {
    title: 'CityOra Table Reservation',
  };

  // constructor(props){
  //   super(props);
  // }

  componentWillMount(){
     InteractionManager.runAfterInteractions(() => {
       this.props.fetchListOfTableReservation();
     });
  }

  handleClick(url){
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      }
    });
  };

  renderLIst(){
    const { isLoading , restaurants } = this.props;
    if (isLoading || restaurants === undefined) {
      return <Spinner />
    }
    return restaurants.map((item,index)=>
      <View key={index} style={styles.restroCards}>
        <Text style={{textAlign: 'justify'}}>
          <Text style={styles.restroName}>{item.rest_name}, </Text>
          <Text style={styles.restroLocation}>{item.location}</Text>
        </Text>
      </View>
    );
  }
  render() {
     return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollbar}>
          <Image
              style={styles.offerImage}
              resizeMode={'cover'}
              source={require('../../assets/table.jpg')}
              >
          </Image>
          <TouchableOpacity
            style={styles.callUsBtn}
            onPress={()=>this.handleClick('tel:9127018661')}
          >
              <Icon style={styles.callusIcon} name="call" size={24} /><Text style={styles.callusText}>  CALL US</Text>
          </TouchableOpacity>
          <View style={styles.listOfrestroView}>
            <Text style={styles.listHeading}>Currently, we offer table reservations at</Text>
              { this.renderLIst() }
          </View>
        </ScrollView>
      </View>
    );
  }


} //class TableOrdering ends

const mapStateToProps = (state) => {
  const { isFetching, restaurants } = state.tableReservation;
  return {
    isFetching,
    restaurants
  }
};

function mapDispatchToProps (dispatch) {
  return {
    fetchListOfTableReservation:()=>dispatch(fetchListOfTableReservation()),
  }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(TableReservation);
