import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  },
  stars: {
    position: 'absolute',
    height: 180,
    flex: 1,
    resizeMode: 'cover'
  },
  logo: {
    position: 'absolute',
    height: 60,
    width: 60
  },
  city: {
    height: 60,
    width: 350,
    position: 'absolute',
    zIndex: 2,
    bottom: 0,
  },
  divider:{
    // flex:0.1,
    alignSelf: 'center',
    width:240,
    height: 1,
    backgroundColor: 'silver',
    marginTop: 40,
  },
  contactUs:{
    flex:0.18,
  },
  contactUsBlock:{
    padding:10,
    alignItems:"center",
  },
  contactUsNumbers:{
    flexDirection: "row",
    margin:5,
  },
  numberdivider:{
    marginLeft:10,
    marginRight:10,
    width:1,
    height:20,
    backgroundColor:"silver",
  },
  bottombar:{
    flex:0.13,
    alignItems: 'center',
    flexDirection: 'column',
  },
  cityoralogo:{
    margin:5,
    justifyContent: 'flex-end',
    backgroundColor:"#000",
    alignItems: 'center'
  },
  poweredBy:{
    justifyContent: 'center',
    alignItems: 'center',
   // marginBottom: 20
  },
  logoText:{
    fontSize:12,
    color: '#757575',
    //fontFamily: 'Roboto-Light',
    textAlign: 'center',
   // paddingBottom: 20
     marginBottom:18
  },
});
