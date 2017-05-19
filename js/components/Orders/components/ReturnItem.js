import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions, Picker } from 'react-native';
import { connect } from 'react-redux';
import Icon from "react-native-vector-icons/FontAwesome";

import { Card, CardSection, Spinner } from '../../Common';
import { returnItem } from '../../../actions';
import Header from '../../Header/';
import Toast, {DURATION} from '../../Toaster/';
import styles from '../styles';


class ReturnItem extends Component {
    state = {
      selectedReason: '0',
      selectedQuantity: this.props.itemToReturn.cartItem.qty
    }
    cancelReturn(navigator){
         navigator.pop()
    }

    submitReturn(navigator) {

        if(this.state.selectedReason === '0') {
          this.refs.toast.show('Please select the reason for returning',500);
          return ;
        }
        const {orderId, cartItem } = this.props.itemToReturn;
        const {id, subcategory_id, subcategory, qty, price} = cartItem ;

        var productId = id;
        var returnQuantity = this.state.selectedQuantity;
        var totalReturnPrice = price * returnQuantity;
        var returnReason = this.state.selectedReason;

        var itemReturnInfo = {productId, orderId, subcategory_id, subcategory, returnQuantity, totalReturnPrice, returnReason} ;
        this.props.returnItem(itemReturnInfo);
        this.refs.toast.show('Your Return is Initiated',500);
        navigator.pop();
    }
    changeQuantity(manipulateQty, maxQty){
        // quantity decrease should be limited to minimum value of 1, and increase to max value of maxQty
        var currentSelectedQty = this.state.selectedQuantity;
        if((manipulateQty === 'decreaseQty') && (currentSelectedQty > 1)) {
            currentSelectedQty--;
            this.setState({selectedQuantity: currentSelectedQty});
        }
        if((manipulateQty === 'increaseQty') && (currentSelectedQty < maxQty)) {
            currentSelectedQty++;
            this.setState({selectedQuantity: currentSelectedQty});
        }
    }

    render() {
         const {productId, orderId, cartItem} = this.props.itemToReturn;
         const {subcategory, subcategory_id, name, qty, price} = cartItem;
         //this.setState({selectedQuantity: qty});
        return(
            <View style={{flex: 1}}>
               <Header
                    onBack={()=>this.props.navigator.pop()}
                    style={styles.topbar}
                    title={"RETURN"}
                />
                <View style={styles.returnItemContainer}>
                    <View style={{marginBottom: 15}}><Text style={[styles.returnItemText, {color:'#000'}]}>{name.toUpperCase()}({subcategory})</Text></View>

                    <View style={{flexDirection:'row'}}>
                        <View style={{marginBottom: 5, justifyContent: 'center'}}><Text style={styles.returnItemText}>Quantity: </Text></View>
                        <View style={{flexDirection:'row', justifyContent: 'center'}}>
                                <TouchableOpacity
                                    style={styles.controlButtonStyle}
                                    onPress = {() => this.changeQuantity('decreaseQty',qty)}
                                >
                                    <Icon name="minus" style={styles.controllIcon}/>
                                </TouchableOpacity>
                                <View style={{justifyContent:'center'}}>
                                    <Text>{this.state.selectedQuantity}</Text>
                                </View>
                                <TouchableOpacity
                                    style={styles.controlButtonStyle}
                                    onPress = {() => this.changeQuantity('increaseQty',qty)}
                                >
                                    <Icon name="plus" style={styles.controllIcon}/>
                                </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{marginBottom: 5}}><Text style={styles.returnItemText}>Price: {price * this.state.selectedQuantity}</Text></View>


                    <Text style={[styles.returnItemText, {marginTop:15}]}>Reason*: </Text>
                    <Picker
                        selectedValue={this.state.selectedReason}
                        onValueChange={(reason) => this.setState({selectedReason: reason})}
                    >
                        <Picker.Item label="Please Select the reason" value="0" />
                        <Picker.Item label="SIZE/WEIGHT MISMATCH ON DELIVERY" value="SIZE/WEIGHT MISMATCH ON DELIVERY" />
                        <Picker.Item label="FAULTY PRODUCT" value="FAULTY PRODUCT" />
                        <Picker.Item label="EXPECTED SOMETHING ELSE" value="EXPECTED SOMETHING ELSE" />
                        <Picker.Item label="TAMPERED PACKAGE ON DELIVERY" value="TAMPERED PACKAGE ON DELIVERY" />
                    </Picker>


                    <View style={{flexDirection:'row', justifyContent: 'center', marginTop: 40}}>
                        <TouchableOpacity style={{ marginRight:10, backgroundColor:"rgba(0,120,60,0.5)"}}
                            onPress={() => this.submitReturn(this.props.navigator)}
                        >
                            <Text style={styles.returnOKButton}>SUBMIT</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ backgroundColor:"rgba(0,120,60,0.5)"}}
                            onPress={() => this.cancelReturn(this.props.navigator)}
                        >
                            <Text style={styles.returnCancelButton}>CANCEL</Text>
                        </TouchableOpacity>

                    </View>

                </View>

                <Toast
                    ref="toast"
                    position={'center'}
                />
            </View>
        );
    }
}



const mapStateToProps = (state) => {
  const {isLoading, favoriteAlteredResponseData } =  state.orders.favoriteAlteredResponseObj;
  const { favourite, status } = favoriteAlteredResponseData;
  return {
    pastOrderedObj:state.orders.pastOrderedObj,
    isLoading: isLoading,
    favourite: favourite,
    status: status
  }
};

function mapDispatchToProps (dispatch) {
  return {
    //toogleFavourite: (id, addtoFavourite) => dispatch(toogleFavourite(id, addtoFavourite))
    returnItem: (itemToReturn) => dispatch(returnItem(itemToReturn))
  }
}

export default connect(mapStateToProps, mapDispatchToProps )(ReturnItem);
//export default ReturnItem;
