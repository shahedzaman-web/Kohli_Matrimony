import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import NavItem from "../components/NavItem";
import { Picker } from "@react-native-picker/picker";
import { TextInput } from "react-native-paper";

export default function EditPreference() {
  const [address, setAddress] = useState("");
  const [personality, setPersonality] = useState("");
  const [city, setCity] = useState("");
  const [marriedStatus, setMarriedStatus] = useState("");
  const[selectCity, setSelectCity] = useState("");
  const[area, setArea] = useState("");
  const[study, setStudy] = useState("");
  const[jobStatus, setJobStatus] = useState("");
  console.log(address, personality, city, marriedStatus);
  return (
    <View style={styles.container}>
      <NavItem title="Edit Preferences" />
      <View style={styles.inputArea}>
        <Picker
          style={styles.pickerStyle}
          selectedValue={marriedStatus}
          onValueChange={(itemValue, itemIndex) => setMarriedStatus(itemValue)}
        >
          <Picker.Item label="Never Married" value="NeverMarried" />
          <Picker.Item label="Never Mdarried" value="NeverMadrried" />
        </Picker>

        <TextInput
          label="Address"
          style={styles.inputStyle}
          onChangeText={(text) => setAddress(text)}
          value={address}
        />
        <TextInput
          label="Personality"
          style={styles.inputStyle}
          onChangeText={(text) => setCity(text)}
          value={city}
        />
        <Picker style={styles.pickerStyle}
         selectedValue={selectCity}
         onValueChange={(itemValue, itemIndex) => setSelectCity(itemValue)}>
          <Picker.Item label="Gandhinagar" value="Gandhinagar" />
        </Picker>
        <Picker style={styles.pickerStyle}
         selectedValue={area}
         onValueChange={(itemValue, itemIndex) => setArea(itemValue)}>
          <Picker.Item label="Dehgam" value="Dehgam" />
        </Picker>

        <Picker style={styles.pickerStyle}
         selectedValue={study}
         onValueChange={(itemValue, itemIndex) => setStudy(itemValue)}>
          <Picker.Item label="B. Com" value="bcom" />
        </Picker>
        <Picker style={styles.pickerStyle}
         selectedValue={jobStatus}
         onValueChange={(itemValue, itemIndex) => setJobStatus(itemValue)}>
          <Picker.Item label="Manager" value="Manager" />
        </Picker>

        <TextInput
          label="City"
          style={styles.inputStyle}
          onChangeText={(text) => setPersonality(text)}
          value={personality}
        />
        <View style={styles.submitView}>
          <TouchableOpacity mode="contained" style={styles.submitBtn}>
            Submit
          </TouchableOpacity>
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
    paddingTop: 20,
  },
  inputStyle: {
    height: 40,
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
    alignItems: "center",
    marginTop: 10,
  },
  submitBtn: {
    height: 30,
    width: 120,
    textAlign: "center",
    alignItems: "center",
    color: "white",
    borderRadius: 2,
    backgroundColor: "#8D2828",
  },
});
