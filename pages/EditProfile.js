import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import NavItem from "../components/NavItem";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { TextInput } from "react-native-paper";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Checkbox } from "react-native-paper";
export default function EditProfile() {
  const [address, setAddress] = useState("");
  const [personality, setPersonality] = useState("");
  const [city, setCity] = useState("");
  const [relationBetween, setRelationBetween] = useState("");
  const [name, setName] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [birthday, setBirthday] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [study, setStudy] = useState("");
  const [skinColor, setSkinColor] = useState("");
  const [jobStatus, setJobStatus] = useState("");
  const [checkedMale, setCheckedMale] = useState(false);
  const [checkedFemale, setCheckedFemale] = useState(false);
  const [state, setState] = useState("");
  const [steetName, setSteetName] = useState("");
  return (
    <View style={styles.container}>
      <NavItem title="Edit Profile" />
      <View style={styles.inputArea}>
        <Picker
          style={styles.pickerStyle}
          selectedValue={relationBetween}
          onValueChange={(itemValue, itemIndex) =>
            setRelationBetween(itemValue)
          }
        >
          <Picker.Item label="Daughter" value="Daughter" />
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
        <TextInput
          label="Address"
          style={styles.inputStyle}
          onChangeText={(text) => setAddress(text)}
          value={address}
        />

        <Picker
          style={styles.pickerStyle}
          selectedValue={bloodGroup}
          onValueChange={(itemValue, itemIndex) => setBloodGroup(itemValue)}
        >
          <Picker.Item label="A+" value="A+" />
        </Picker>
        <Picker
          style={styles.pickerStyle}
          selectedValue={address}
          onValueChange={(itemValue, itemIndex) => setAddress(itemValue)}
        >
          <Picker.Item label="Never Married" value="Never Married" />
        </Picker>
        <TextInput
          label="City"
          style={styles.inputStyle}
          onChangeText={(text) => setCity(text)}
          value={city}
        />

        <Picker
          style={styles.pickerStyle}
          selectedValue={state}
          onValueChange={(itemValue, itemIndex) => setState(itemValue)}
        >
          <Picker.Item label="Ahmedabad" value="Ahmedabad" />
        </Picker>
        <Picker
          style={styles.pickerStyle}
          selectedValue={steetName}
          onValueChange={(itemValue, itemIndex) => setSteetName(itemValue)}
        >
          <Picker.Item label="Gandhinagar" value="Gandhinagar" />
        </Picker>
        <Picker
          style={styles.pickerStyle}
          selectedValue={height}
          onValueChange={(itemValue, itemIndex) => setHeight(itemValue)}
        >
          <Picker.Item label="5'3''" value="5'3''" />
        </Picker>
        <TextInput
          label="Weight"
          style={styles.inputStyle}
          onChangeText={(text) => setWeight(text)}
          value={weight}
        />
        <TextInput
          label="Skin Color}"
          style={styles.inputStyle}
          onChangeText={(text) => setSkinColor(text)}
          value={skinColor}
        />
        <Picker
          style={styles.pickerStyle}
          selectedValue={study}
          onValueChange={(itemValue, itemIndex) => setStudy(itemValue)}
        >
          <Picker.Item label="B. Sc" value="bsc" />
        </Picker>
        <Picker 
          style={styles.pickerStyle}
          selectedValue={jobStatus}
          onValueChange={(itemValue, itemIndex) => setJobStatus(itemValue)}
        style={styles.pickerStyle}>
          <Picker.Item label="Employee" value="Employee" />
        </Picker>
        <TextInput
          label="Personality"
          style={styles.inputStyle}
          onChangeText={(text) => setPersonality(text)}
          value={personality}
        />
        <View style={styles.submitView}>
          <TouchableOpacity style={styles.submitBtn}>Submit</TouchableOpacity>
        </View>
      </View>
    </View>
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
    width: 80,
    textAlign: "center",
    color: "white",
    fontSize: 16,
    borderRadius: 2,
    alignSelf: "center",
    backgroundColor: "#8D2828",
  },
});
