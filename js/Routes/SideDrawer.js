import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import { DrawerItems } from 'react-navigation';
import styles from './styles';

export default class SideDrawer extends Component {

  handleClick = (url) => {
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        //console.log('Don\'t know how to open URI: ' + url);
      }
    });
  };

  render() {
    return (
      <View style={{borderWidth:0, flex:1 }}>
        <View style={{height: 180, alignItems:'center', justifyContent: 'center' }}>
          <Image source={require('../assets/header-bg.jpg')} style={styles.backgroundImage} />
          <Image source={require('../assets/stars.png')} style={styles.stars} />
          <Image source={require('../assets/logo-white-mob.png')} style={styles.logo} />
          <Image source={require('../assets/cityscape.png')} style={styles.city} />
        </View>
        <View style={{paddingTop: 10}}>
          <DrawerItems {...this.props} />
        </View>

        <View style={styles.divider} />
        <View style={styles.contactUs}>
          <View style={styles.contactUsBlock}>
            <Text style={styles.contactUsHeader}>Contact us</Text>
            <View style={styles.contactUsNumbers}>
              <TouchableOpacity
                onPress={()=>this.handleClick('tel:9127018661')}
              >
                  <Text>9127018661</Text>
              </TouchableOpacity>
              <View style={styles.numberdivider}/>
              <TouchableOpacity
                onPress={()=>this.handleClick('tel:9127018662')}
              >
                  <Text>9127018662</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={()=>this.handleClick('mailto:contact@cityora.com')}
            >
              <Text >contact@cityora.com</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.bottombar}>
          <View style={[styles.cityoralogo,{width:35, height: 35, borderRadius:18}]}>
            <Image
              style={{width:35, height: 35}}
              source={require('../assets/cityora-app-logo.jpg')}
              />
          </View>
          <View style={styles.poweredBy}>
            <Text style={styles.logoText}>Cityora &#xA9; 2016</Text>
          </View>
        </View>
      </View>
    )
  }
}
