import React, { Component } from 'react';
import { Text, Image, View, Dimensions, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import styles from '../HomePage/styles';


class BestInTown extends Component {

  static navigationOptions = {
    title: 'Best In Town'
  };

  constructor(props){
    super(props);
  }

  render() {
    const bestintown = this.props.data;
    if (bestintown.isFetching ) {
      return null;
    }
    else if (!bestintown.isFetching && bestintown.bestintownArray.length === 0) {
      return null;
    }
    return(
      <View>
        <View style={styles.cardsHeader}>
          <Text style={styles.cardsHeaderText}>BEST IN TOWN</Text>
        </View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.bestinTownSection}>
            {
              this.renderList(bestintown.bestintownArray)
            }
        </ScrollView>
      </View>
    );
  }

  //
  // Render best in town restro
  //
  renderList(array){
    return array.map((item, index)=>{
      const title = item.title.split(' ');
      return(
        <TouchableOpacity
          key={index}
          onPress={()=>this.props.gotoBestInTownHome(item.id, item.title)}
        >
          <Image
            style={styles.cards2}
            source={{uri: `${item.avatar}`}}
            >
            <View style={[styles.cards2, {backgroundColor:'rgba(0,0,0,0.5)'}]}>
              <Text style={[styles.headerDishes,styles.italicText]}>{title[0]}</Text>
              <Text style={[styles.headerDishes,styles.italicText]}>{title[1]}</Text>
            </View>
          </Image>
        </TouchableOpacity>
      );
    })
  }
}


export default BestInTown;
