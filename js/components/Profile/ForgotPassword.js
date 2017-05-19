import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Text, View, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import { MKTextField } from "react-native-material-kit";
import { resetPassword } from '../../actions/login';
import { Spinner } from "../Common/";
import styles from './styles';

const { width } = Dimensions.get("window");
class EditDetails extends Component {
  constructor(props){
    super(props);
    this.state={
      showSpinner:false,
      error:false,
      errorMessage:"",
      disableBtn:false,
    }
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.resetPasswordObj.trying) {
      this.setState({
        showSpinner:true
      })
    }
    else if (nextProps.resetPasswordObj.error) {
      this.setState({
        showSpinner:false,
        error:true,
        disableBtn:false,
        errorMessage:"OTP is not valid",
      })
    }
  }
  submitOtp(){
    if (this.state.otp === "" || this.state.otp === undefined) {
      this.setState({ error: true, errorMessage: "OTP cannot be blank" });
      return ;
    }else if (this.state.password1 !== this.state.password2) {
      this.setState({ error: true, errorMessage: "Entered password doesn't match" });
      return ;
    }
    this.setState({
      disableBtn:true
    })
    this.props.resetPassword(this.state.otp, this.state.password1)
  }
  render() {
    return (
      <View style={[styles.mainBlock,{alignItems: 'center', alignSelf: 'center'}]}>
        <View style={{height:30}}>
          {
            this.state.error
            &&
            <Text style={[{color:"red", marginTop:15}]}>{this.state.errorMessage}</Text>
          }
        </View>
        <MKTextField
          style={{ height: 48, width: width * 0.75, margin: 8, paddingLeft:5 }}
          textInputStyle={styles.textInputTextStyle}
          tintColor={"rgba(0,120,60,0.5)"}
          placeholderTextColor ={"grey"}
          placeholder="Enter OTP"
          keyboardType={"number-pad"}
          value={this.state.otp}
          onChangeText={(otp) => this.setState({otp:otp, error:false})}
          onFocus={()=>this.setState({otp:''})}
        />
        <MKTextField
          style={{ height: 48, width: width * 0.75, margin: 8, paddingLeft:5 }}
          textInputStyle={styles.textInputTextStyle}
          tintColor={"rgba(0,120,60,0.5)"}
          placeholderTextColor ={"grey"}
          placeholder="Enter password"
          secureTextEntry={true}
          value={this.state.password1}
          onChangeText={(pass) => this.setState({password1:pass, error:false})}
          onFocus={()=>this.setState({password1:''})}
        />
        <MKTextField
          style={{ height: 48, width: width * 0.75, margin: 8, paddingLeft:5 }}
          textInputStyle={styles.textInputTextStyle}
          tintColor={"rgba(0,120,60,0.5)"}
          placeholderTextColor ={"grey"}
          placeholder="Confirm password"
          secureTextEntry={true}
          value={this.state.password2}
          onChangeText={(pass) => this.setState({password2:pass, error:false})}
          onFocus={()=>this.setState({password2:''})}
        />
        <TouchableOpacity
          onPress={()=>this.submitOtp()}
          disabled={this.state.disableBtn}
          style={[styles.guestButton,{marginTop:25}]}
          >
          {
            this.state.showSpinner
            &&
            <Spinner style={[styles.guestButtonText]} size={"small"}/>
          }
          {
            !this.state.showSpinner
            &&
            <Text style={[styles.guestButtonText,{color: 'rgba(0,120,60,0.5)'}]}>SUBMIT</Text>
          }
        </TouchableOpacity>
      </View>
    );
  }
}

function mapStateToProps (state) {
  return {
    resetPasswordObj: state.login.resetPassword
  }
}

function mapDispatchToProps (dispatch) {
  return {
    resetPassword:(otp,password)=>dispatch(resetPassword(otp,password)),
  }
}


module.exports = connect(mapStateToProps, mapDispatchToProps)(EditDetails);
