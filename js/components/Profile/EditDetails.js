import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Text, View, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import EmailValidator from "../../utility/validate_email";
import { MKButton, MKTextField } from "react-native-material-kit";
import { updateUserDetails } from '../../actions/user';
import { Spinner } from "../Common/";
import styles from './styles';

const { width } = Dimensions.get("window");
class EditDetails extends Component {
  constructor(props){
    super(props);
    this.state={
      editableUserDetails:false,
      showUpdateButton: false,
      username:"",
      email: ""
    }
  }

  componentWillMount(){
    this.setState({
      username:this.props.username,
      email: this.props.email
    })
  }

  //
  // Deals in state changes relating to the component
  //
  componentWillReceiveProps(nextProps){
    const userUpdateObj = nextProps.userUpdateObj;
    if (userUpdateObj.userDetailsUpdating) {
      this.setState({
        showSpinner:true
      })
    }else if (userUpdateObj.userDetailsUpdated) {
      this.setState({
        showSpinner:false,
        editableUserDetails:false,
        showUpdateButton:false,
      })
    }else if (userUpdateObj.userDetailsUpdateerror) {
      this.setState({
        showSpinner:false,
        editableUserDetails:true,
        showUpdateButton:true,
        error:true,
        errorMessage: "User details update failed"
      })
    }
  }
  //
  // Enables ediatablity
  //
  editUserDetails(){
    this.setState({
      editableUserDetails:true,
      showUpdateButton:true,
    })
  }
  cancelUpdate(){
    this.setState({
      username:this.props.username,
      email: this.props.email,
      showSpinner:false,
      error: false,
      editableUserDetails:false,
      showUpdateButton:false,
    })
  }
  updateUserDetails(){
      const validate = EmailValidator.validate(this.state.email);
      if(this.state.username === ""){
        this.setState({ error: true, errorMessage: "Username cannot be blank" });
        return;
      }else if (validate.error) {
        this.setState({ error: validate.error, errorMessage: validate.errorMessage });
        return ;
      }
      this.props.updateUserDetails(this.state.username, this.state.email);
  }

  renderButtonIcon(){
    if (this.state.showSpinner) {
      return <Spinner size="small"/>
    }
    return <Icon name="check" style={{fontSize:22, color:"rgba(0,120,60,0.5)"}}/>
  }
  render() {
    return (
      <View
        >
        <View style={styles.profileControlsTab}>
          <Text style={styles.profileControlsText}>INFO</Text>
          {
            !this.state.editableUserDetails
            &&
            <TouchableOpacity
                style={{alignSelf:"center"}}
                onPress={()=>this.editUserDetails()}
                >
              <Icon name="edit" style={{fontSize:22, color:"grey", alignSelf:"flex-end"}}/>
            </TouchableOpacity>
          }
        </View>
        <View style={{height:10}}>
          {
            this.state.error
            &&
            <Text style={[{color:"red"}]}>{this.state.errorMessage}</Text>
          }
        </View>

        <MKTextField
          style={{ height: 30, width: width*0.81, margin: 0,marginBottom:5, paddingLeft:8 }}
          textInputStyle={[styles.textInputTextStyle,{marginLeft:0}]}
          tintColor={this.state.editableUserDetails?"rgba(0,120,60,0.5)":"transparent"}
          placeholderTextColor ={"grey"}
          editable={this.state.editableUserDetails}
          autoFocus={this.state.showUpdateButton}
          value={this.state.username}
          onChangeText={(text)=>this.setState({username:text})}
        />
        <MKTextField
          style={{ height: 30, width: width*0.81, margin: 0, paddingLeft:8 }}
          textInputStyle={[styles.textInputTextStyle,{marginLeft:0}]}
          tintColor={this.state.editableUserDetails?"rgba(0,120,60,0.5)":"transparent"}
          editable={this.state.editableUserDetails}
          autoCapitalize={"none"}
          value={this.state.email}
          onChangeText={(text)=>this.setState({email:text})}
        />
        {
          this.state.showUpdateButton
          &&
          <View style={{flexDirection:"row", alignSelf: "flex-end"}}>
            <TouchableOpacity
              onPress={()=>this.cancelUpdate()}
              style={[styles.updateProfileDetailsButton]}
              >
              <Icon name="times" style={{fontSize:22, color:"grey"}}/>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={()=>this.updateUserDetails()}
              style={[styles.updateProfileDetailsButton]}
              >
              {this.renderButtonIcon()}
            </TouchableOpacity>
          </View>
         }
      </View>
    );
  }
}

function mapStateToProps (state) {
  return {
    userUpdateObj: state.user.userUpdateObj,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    updateUserDetails:(username,email)=>dispatch(updateUserDetails(username,email)),
  }
}


module.exports = connect(mapStateToProps, mapDispatchToProps)(EditDetails);
