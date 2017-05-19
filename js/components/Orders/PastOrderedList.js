import React, { Component } from 'react';
import { ScrollView, View, Text, InteractionManager, Image } from 'react-native';
import { connect } from 'react-redux';
import { Spinner } from '../Common'
import styles from './styles';
import PastOrderedItem from './components/PastOrderedItem';


class PastOrderedList extends Component {

  render() {
    const { isLoading } = this.props;
    if(isLoading) {
     return (<Spinner size="large" />);
    }
 		return (
      <ScrollView>
        {
          (this.props.pastOrderedList === undefined || this.props.pastOrderedList === null )
          &&
            <View style={[styles.topGuest, {justifyContent:"center"}]}>
              <Image
                style={{width:200, height: 200}}
                source={require('../../assets/no-orders.png')}
                />

                <Text style={[styles.guestAdviceText,{marginTop:10, fontSize:18}]}>NO PAST ORDERS</Text>
            </View>
        }
        {/* this.renderFoodPastOrderedItems() */}
        { /* this.renderEcommercePastOrderedItems()*/ }
      {
        this.renderPastOrderedItems()
      }
      </ScrollView>
 		);
 	}

  renderPastOrderedItems() {
    if (this.props.pastOrderedList === undefined || this.props.pastOrderedList === null ) {
      return ;
    }
    return this.props.pastOrderedList.map( (pastOrderedItem, index) =>
        <PastOrderedItem
          key={`${pastOrderedItem.id}${index}`}
          navigator={this.props.navigator}
          pastOrderedItem={pastOrderedItem}
          favourite = {pastOrderedItem.favourite}
          typeOfOrder={pastOrderedItem.type} />
    );
  }

  // renderFoodPastOrderedItems() {
  //   if (this.props.pastOrderedList === undefined || this.props.pastOrderedList === null ) {
  //     return ;
  //   }
  //   return this.props.pastOrderedList.foodDelivery.map( (pastOrderedItem, index) =>
  //       <PastOrderedItem
  //         key={pastOrderedItem.id}
  //         navigator={this.props.navigator}
  //         pastOrderedItem={pastOrderedItem}
  //         favourite = {pastOrderedItem.favourite}
  //         typeOfOrder="food" />
  //   );
  // }

  // renderEcommercePastOrderedItems() {
  //   if (this.props.pastOrderedList === undefined || this.props.pastOrderedList === null ) {
  //     return ;
  //   }
  //   return this.props.pastOrderedList.ecommerce.map( (pastOrderedItem, index) =>
  //       <PastOrderedItem
  //         key={`${pastOrderedItem.id}${index}`}
  //         navigator={this.props.navigator}
  //         pastOrderedItem={pastOrderedItem}
  //         favourite = {pastOrderedItem.favourite}
  //         typeOfOrder="ecommerce" />
  //   );
  // }

}

const mapStateToProps = (state) => {
  const {isLoading, pastOrderedData } =  state.orders.pastOrderedObj;

  return { isLoading,
           status: pastOrderedData.status,
           pastOrderedList: pastOrderedData.data,
           activeOrderTab: state.orders.activeOrderTab
  }
};

export default connect(mapStateToProps, null )(PastOrderedList);
