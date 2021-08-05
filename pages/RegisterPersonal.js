import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Button, Platform}from "react-native";
import NavItem from "../components/NavItem";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { TextInput } from "react-native-paper";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Checkbox } from "react-native-paper";
import Screen from "../components/Screen";
export default function RegisterPersonal() {
  const [profileFor, setProfileFor] = useState("");
  const [name, setName] = useState("");
  const [checkedMale, setCheckedMale] = useState(false);
  const [checkedFemale, setCheckedFemale] = useState(false);
  const [birthday, setBirthday] = useState(new Date(1598051730000));
  const [birthPlace, setBirthPlace] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [currentLocation, setCurrentLocation] = useState("");
  const [village, setVillage] = useState("");
  const [district, setDistrict] = useState("");
  const [taluka, setTaluka] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [complection, setComplection] = useState("");
  const [education, setEducation] = useState("");
  const [occupation, setOccupation] = useState("");
  const [expectations, setExpectations] = useState("");
//date time picker



const onChange = (event, selectedDate) => {
  const currentDate = selectedDate || date;
  setBirthday(currentDate);
};


const showDatepicker = () => {
  showMode('date');
};

const showTimepicker = () => {
  showMode('time');
};

  return (
    <Screen>
    <View style={styles.container}>
      
     <NavItem title="Register Personal" />
      <ScrollView style={styles.inputArea}>
      <Picker
          // style={styles.pickerStyle}
          selectedValue={profileFor}
          onValueChange={(itemValue, itemIndex) => setProfileFor(itemValue)}>
          <Picker.Item label="Daughter" value="Daughter" />
          <Picker.Item label="Son" value="Son" />
        </Picker>
        <TextInput
          label="Name"
          style={styles.inputStyle}
          onChangeText={(text) => setName(text)}
          value={name}
        />
        <View style={styles.checkboxes}>
          <Checkbox
            status={checkedMale ? "checked" : "unchecked"}
            color="#8D2828"
            onPress={() => {
              setCheckedFemale(false);
              setCheckedMale(true);
            }}
          />
          <Text>Male</Text>
          <Checkbox
            status={checkedFemale ? "checked" : "unchecked"}
            color="#8D2828"
            onPress={() => {
              setCheckedFemale(true);
              setCheckedMale(false);
            }}
          />
          <Text>Female</Text>
        </View>
        <DateTimePicker
        style={styles.inputDate}
          testID="dateTimePicker"
          value={birthday}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
        <TextInput
          label="Birth Place"
          style={styles.inputStyle}
          onChangeText={(text) => setBirthPlace(text)}
          value={birthPlace}
        />
        <Picker
          // style={styles.pickerStyle}
          selectedValue={bloodGroup}
          onValueChange={(itemValue, itemIndex) => setBloodGroup(itemValue)}
        >
          <Picker.Item label="A+" value="A+" />
          <Picker.Item label="A-" value="A-" />
          <Picker.Item label="AB+" value="AB+" />
          <Picker.Item label="AB-" value="AB-" />
          <Picker.Item label="B+" value="B+" />
          <Picker.Item label="B-" value="B-" />
          <Picker.Item label="0+" value="0+" />
          <Picker.Item label="0-" value="0-" />
        </Picker>
        <TextInput
          label=" Number"
          style={styles.inputStyle}
          onChangeText={(text) => setMobileNumber(text)}
          value={mobileNumber}
        />
        <TextInput
          label="Email"
          style={styles.inputStyle}
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <TextInput
          label="Password"
          style={styles.inputStyle}
          onBlur={(text) => setPassword(text)}
          value={password}
        />
        <Picker
          // style={styles.pickerStyle}
          selectedValue={maritalStatus}
          onValueChange={(itemValue, itemIndex) => setMaritalStatus(itemValue)}
        >
          <Picker.Item label="Never Married" value="Never Married" />
          <Picker.Item label="divorce" value="Divorce" />
        </Picker>
        <TextInput
          label="Current Location"
          style={styles.inputStyle}
          onChangeText={(text) => setCurrentLocation(text)}
          value={currentLocation}
        />
        <TextInput
          label="Village"
          style={styles.inputStyle}
          onChangeText={(text) => setVillage(text)}
          value={village}
        />
        <Picker
          // style={styles.pickerStyle}
          selectedValue={district}
          onValueChange={(itemValue, itemIndex) => setDistrict(itemValue)}
        >
          <Picker.Item label="Ahmedabad" value="Ahmedabad" />
        </Picker>
        <Picker
          // style={styles.pickerStyle}
          selectedValue={taluka}
          onValueChange={(itemValue, itemIndex) => setTaluka(itemValue)}
        >
          <Picker.Item label="Gandhinagar" value="Gandhinagar" />
        </Picker>
        <Picker
          // style={styles.pickerStyle}
          selectedValue={height}
          onValueChange={(itemValue, itemIndex) => setHeight(itemValue)}
        >
         <Picker.Item label="5'0''" value="5'0''" />
          <Picker.Item label="5'1''" value="5'1''" />
          <Picker.Item label="5'2''" value="5'2''" />
          <Picker.Item label="5'3''" value="5'3''" />
          <Picker.Item label="5'4''" value="5'4''" />
          <Picker.Item label="5'5''" value="5'5''" />
          <Picker.Item label="5'6''" value="5'6''" />
        </Picker>
        <TextInput
          label="Weight"
          style={styles.inputStyle}
          onChangeText={(text) => setWeight(text)}
          value={weight}
        />
        <TextInput
          label="Complection"
          style={styles.inputStyle}
          onChangeText={(text) => setComplection(text)}
          value={complection}
        />
        {/* <Picker
          style={styles.pickerStyle}
          selectedValue={education}
          onValueChange={(itemValue, itemIndex) => setEducation(itemValue)}
        >
          <Picker.Item label="B. Sc." value="bsc" />
          <Picker.Item label="M. Sc." value="msc" />
        </Picker>
        <Picker
          style={styles.pickerStyle}
          selectedValue={occupation}
          onValueChange={(itemValue, itemIndex) => setOccupation(itemValue)}
          style={styles.pickerStyle}
        >
          <Picker.Item label="Employee" value="Employee" />
        </Picker> */}
        <TextInput
          label="Expectations"
          style={styles.inputStyle}
          onChangeText={(text) => setExpectations(text)}
          value={expectations}
        />
        <View style={styles.submitView}>
          <TouchableOpacity style={styles.submitBtn}>
          <Text style={styles.submitBtnText}>Next</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.loginView}>
          <Text>Already member?</Text>
          <TouchableOpacity >
          <Text style={styles.loginText}>Login</Text>  
           </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 32,
    paddingLeft: 32,
  },
  inputArea: {
    paddingTop: 16,
  },
  inputStyle: {
    height: 32,
    width: "90%",
    marginBottom: 2,
    borderBottomColor: "black",
    backgroundColor: "transparent",
  },inputDate:{
    paddingLeft: 10,
    width: "90%",
    height: 32,

  },
  pickerStyle: {
    height: 40,
    borderColor: "transparent",
    borderBottomColor: "black",
    borderBottomWidth: StyleSheet.hairlineWidth,
    width: "90%",
    backgroundColor: "transparent",
    marginBottom: 5,
  },
  submitView: {
    display: "flex",
    justifyContent: "center",
  },
  checkboxes: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  submitBtn: {
    height: 40,
    width: 120,
   paddingTop: 8,
    borderRadius: 4,
    alignSelf: "center",
    backgroundColor: "#8D2828",
  },submitBtnText:{
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  loginView: {
    paddingTop: 16,
    paddingBottom: 16,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  loginText: {
    color: "#8D2828",
  },
});
