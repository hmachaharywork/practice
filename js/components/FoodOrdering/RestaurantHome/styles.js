import { StyleSheet, Platform, Dimensions } from 'react-native';

const extraTopMargin = Platform.OS === "ios" ? 20 : 0;
const { width, height } = Dimensions.get("window");
module.exports = StyleSheet.create({
  container: {
    marginTop:extraTopMargin,
    flex: 0.9,
    backgroundColor:'#fff',
  },
  topbar:{
    flex:0.1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
  },
  mainBlock:{
    flex:0.9,
    // padding:10,
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  imageView:{

  },
  imageStyle:{
    width:width,
    height: 150
  },
  closedText:{
    color:"white",
    fontSize:14,
    fontWeight: '600',
    //fontFamily: "Roboto-Light"
  },
  menuTabBlocks:{
    padding:10,
    backgroundColor:'#fff'
  },
  tabButton:{
    padding:10,
    alignSelf:'center',
  },
  tabText:{
    color:'grey'
  },
  activeTabText:{
    color: '#00E676',
  },
  activeTabIndicator:{
    height:1,
    backgroundColor: '#00E676'
  },
  productView:{
    margin:5,
    padding:10,
    paddingLeft:5,
    marginBottom:5,
  },
  productTextStyle:{
    color:'#757575'
  },
  categoryView:{
    // margin:10,
    padding:10,
  },
  categoryHeader:{
    fontSize:18,
    paddingLeft:4,
    marginBottom:5,
    //fontFamily: "Roboto-Light"
  },
});
