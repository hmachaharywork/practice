import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Text, Image, View, Dimensions, TouchableOpacity, ScrollView, TextInput, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { setActiveTab, fetchNotifications, deleteNotifications } from '../../actions';
import { Spinner } from '../Common/';
import styles from './styles';



class Notification extends Component {
  static navigationOptions = {
    title: 'Notifications'
  }

  constructor(props){
    super(props)
  }

  componentDidMount() {

     this.props.fetchNotifications();
  }

  render(){
    const { isLoading, status, notificationsList,user } = this.props;

    return(
      <View style={styles.container}>
          {this.renderNotifications(user,notificationsList, isLoading, status)}
      </View>
    );
  }



  displayNotifTypeIcon(notification_type) {
    if(notification_type == "orders") {
      return <Image  style={{height: 40, width: 40}} source={require('../../assets/food-notif.png')} />
    }
    if(notification_type == "ecommerceOrders") {
      return <Image style={{height: 40, width: 40}} source={require('../../assets/shop-notif.png')} />
    }
  }

  /**
  *** Render Notifications ****
  **/

  renderNotifications(user,notifications, isLoading, status){
    if (user=== undefined || user===null) {
      return (
        <View style={{flex: 1, alignItems:'center', justifyContent:'space-around'}}>
          <View style={styles.profile}>
            <View style={[styles.topGuest, {paddingTop:100}]}>
              <Image
                style={{width:200, height: 200}}
                source={require('../../assets/not-logged-in.png')}
                />
              <Text style={styles.guestOopsText}>Oops! You are not logged in</Text>
            </View>
            <View style={styles.middleGuest}>
              <Text style={styles.guestAdviceText}>YOU MUST LOG IN TO VIEW YOUR NOTIFICATIONS</Text>
            </View>
          </View>
        </View>
      );
    }

    if(isLoading) {
     return (<Spinner size="large" />);
    }

    if(status==0) {
      return (
        <View style={{flex: 1, alignItems:'center', justifyContent:'center'}}>
          <Image
            style={{width:140, height: 180}}
            source={require('../../assets/notification-bell.png')}
            />
          <Text style={styles.notificationsOOpsText}>NO NOTIFICATIONS</Text>
        </View>
      );
    }

    return(
      <ScrollView style={styles.mainBlock}>
      {
        notifications.map((item,index)=>{
        return(
          <View key={index}
            style={styles.notifications}>
            <View style={styles.leftNoti}>
              <View style={styles.pic}>
              { this.displayNotifTypeIcon(item.data.notification_type) }
              </View>
            </View>
            <View style={styles.rightNoti}>
              <View style={styles.rightNotiTop}>
                <View style={styles.notiTopLeft}>
                  <Text style={styles.orderStatus}>{item.notification.body}!</Text>

                </View>
                <TouchableOpacity onPress={() => this.props.deleteNotifications(item.id)}
                  style={styles.notiTopRight}
                >
                  <Icon name="close" style={styles.closeIcon}/>
                </TouchableOpacity>
              </View>

            </View>
          </View>
        )
        })
    }
     </ScrollView>
  );
  }
}

function mapStateToProps (state) {
  return {
    user:state.user.user,
    isLoading: state.notifications.isLoading,
    status: state.notifications.dataObj.status,
    notificationsList: state.notifications.dataObj.notificationsList
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchNotifications: () => dispatch(fetchNotifications()),
    deleteNotifications: (id) => dispatch(deleteNotifications(id))
  }
}


module.exports = connect(mapStateToProps, mapDispatchToProps)(Notification);
