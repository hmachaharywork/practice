import { StyleSheet, Platform, Dimensions } from 'react-native';

const extraTopMargin = Platform.OS === "ios" ? 20 : 0;
const { width, height } = Dimensions.get("window");
module.exports = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  topbar:{
    flex:0.1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
  },
  mainBlock:{
    flex:0.9,
    padding:10,
    backgroundColor: 'transparent',
    flexDirection:'column',
  },
  //
  // Style for Guest(not logged in)
  //
  profile:{
    flex:1,
    alignItems:'center',
  },
  topGuest:{
    // padding:10,
    paddingTop:height/6,
    alignItems:'center',
  },
  guestPic:{
    width:80,
    height:80,
    borderRadius:40,
    backgroundColor:'#757575',
    borderColor:'rgba(0,0,0,0.2)',
    borderWidth:1,
  },
  guestOopsText:{
    paddingTop:25,
    color: '#7f8c8d',
    fontSize:22,
    //fontFamily: "Roboto-LightItalic",

  },
  middleGuest:{
    marginTop:25,
  },
  guestAdviceText:{
    fontSize:14,
    color: '#7f8c8d',
    //fontFamily: "Roboto-Light"
  },
  bottomGuest:{
    flexDirection:'row',
    paddingTop:25,
    justifyContent:'space-between'
  },
 guestButton:{
    width:130,
    height:45,
   // backgroundColor:'#fff',
    alignSelf:'center',
    justifyContent: 'center',
  },
  userPicStyle:{
    width: 80,
    height: 80,
    // borderRadius: 40,
  },
  guestButtonText:{
    textAlign:'center',
    padding:10,
    fontSize:18,
    //fontFamily: "Roboto-Light"
  },
  guestButtonSeperator:{
    height:50,
    width:2,
    margin:10,
    backgroundColor: '#7f8c8d',

  },
  //
  // Style for Host(logged in)
  //
  profileView:{
    // backgroundColor:"#fff",
  },
  topHost:{
    // flexDirection:'row',
    padding:20,
    paddingTop:10,
    justifyContent: "center",
    alignItems: "center",
  },
  userPhone:{
    paddingTop: 10,
    fontSize:16,
    color:'silver',
    //fontFamily: 'Helvetica',
    // alignSelf:'center',
  },
  divider:{
    alignSelf: 'center',
    width:width - 60,
    height: 1,
    backgroundColor: 'rgba(0,120,60,0.3)',
  },
  bottomHost:{
    padding:25,
  },
  profileControlsTab:{
    flexDirection:'row',
    justifyContent: "space-between"
  },
  squareTabs:{
    width:40,
    height:40,
    backgroundColor:'silver',
    borderColor:'rgba(0,0,0,0.2)',
    borderWidth:1,
  },
  profileControlsText:{
    alignSelf:'center',
    // justifyContent: 'flex-end',
    color:"silver",
    fontSize:18,
    // paddingLeft:25,
  },
  profileControlsTabDivider:{
    alignSelf:'flex-start',
    margin:15,
    marginLeft:0,
    width:width-140,
    height: 1,
    backgroundColor: 'rgba(0,120,60,0.3)',
  },
  //
  // Styles for login view
  //
  phoneCountryCode:{
    // textAlign:'center',
     color: '#7f8c8d',
    // paddingRight:5,
    fontSize:18,
    // paddingTop:0,
  },
  phoneInput:{
    width:width-120,
  },
  submitBtn: {
    marginTop:30,
    width:120,
    backgroundColor:'#757575',
    alignItems:'center',
    justifyContent: 'center',
  },
  submitBtnText:{
    padding:5,
    color:'#fff',
    fontSize:16,
  },
  suggestText: {
    color: '#7f8c8d',
    alignSelf: 'center',
  },
  errorText: {
    color:'#e74c3c',
    fontSize:14,
  },
  forgotPassword: {
    marginTop:25,
    fontStyle: 'italic',
    fontSize:16,
    color: "#7f8c8d",
    //fontFamily : 'Roboto-LightItalic'
  },
  textInput: {
    height: 48,
    width: width * 0.75,
    margin: 8,
    borderRadius:5,
    backgroundColor: '#fff',
    color:'#757575',
    fontSize: 18,
    paddingLeft: 19,
    //fontFamily : 'Roboto-Light'
  },
  savedaddress:{
    marginTop:15,
    backgroundColor: "#fff",
    padding:10,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  leftSavedAddress:{
    flex:0.7,
  },
  addressHeader:{
    // marginLeft:10,
    fontSize:16,
    color:'#7f8c8d',
    //fontFamily: 'Roboto-Regular',
  },
  addressBody:{
    marginTop:10,
    // marginLeft:10,
  },
  addressText:{
    color:'#7f8c8d',
  },
  editAddressButton:{
    paddingTop:1,
    alignSelf: "flex-start",
    alignItems: "center"
  },
  editAddressButtonText:{
    color: "#7f8c8d"
  },
  updateProfileDetailsButton:{
    alignSelf:'center',
    justifyContent: 'center',
    alignItems: "center",
    margin:10,
  },
  signOutBlock:{
    alignSelf:"center",
    marginBottom: 30,
    borderColor: '#e74c3c',
    borderWidth: 1,
    backgroundColor: "#fff",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10
  },
  signOutText:{
    color:"#e74c3c",
    fontWeight: "bold",
    fontSize: 15,
    //fontFamily: "Helvetica"
  },
  userPicView:{
    flexDirection:"row",
    // alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor:'orange'
  },
  textInputTextStyle:{
    color:"#000",
    marginLeft:10
  }
});
