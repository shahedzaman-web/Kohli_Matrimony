import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import NavItem from "../components/NavItem";
import { Avatar } from "react-native-paper";
import BottonMenu from "../components/BottomMenu";
import { Picker } from "@react-native-picker/picker";
import { TextInput } from "react-native-paper";
import { useState } from "react";
import Screen from "../components/Screen";

export default function SearchByPreferences() {
  const [maritalStatus, setMaritalStatus] = useState("");
  const [currentLocation, setCurrentLocation] = useState("");
  const [village, setVillage] = useState("");
  const [district, setDistrict] = useState("");
  const [taluka, setTaluka] = useState("");
  const [education, setEducation] = useState("");
  const [occupation, setOccupation] = useState("");
  const [expectations, setExpectations] = useState("");
  return (
    <Screen>
    <View style={styles.container}>
      <View style={styles.topView}>
        <NavItem title="Search By Preferences" />
        <View style={styles.inputArea}>
          <Picker
            style={styles.pickerStyle}
            selectedValue={maritalStatus}
            onValueChange={(itemValue, itemIndex) =>
              setMaritalStatus(itemValue)
            }
          >
            <Picker.Item label="Never Married" value="NeverMarried" />
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
            style={styles.pickerStyle}
            selectedValue={district}
            onValueChange={(itemValue, itemIndex) =>
                setDistrict(itemValue)
            }
          >
            <Picker.Item label="Never Married" value="NeverMarried" />
          </Picker>
          <Picker
            style={styles.pickerStyle}
            selectedValue={taluka}
            onValueChange={(itemValue, itemIndex) =>
                setTaluka(itemValue)
            }
          >
            <Picker.Item label="Never Married" value="NeverMarried" />
          </Picker>
          <Picker
            style={styles.pickerStyle}
            selectedValue={education}
            onValueChange={(itemValue, itemIndex) =>
                setEducation(itemValue)
            }
          >
            <Picker.Item label="Never Married" value="NeverMarried" />
          </Picker>
          <Picker
            style={styles.pickerStyle}
            selectedValue={occupation}
            onValueChange={(itemValue, itemIndex) =>
                setOccupation(itemValue)
            }
          >
            <Picker.Item label="Never Married" value="NeverMarried" />
          </Picker>
          <TextInput
            label="Current Location"
            style={styles.inputStyle}
            onChangeText={(text) => setExpectations(text)}
            value={expectations}
          />
           <View style={styles.submitView}>
          <TouchableOpacity mode="contained" style={styles.submitBtn}>
           <Text>
           Submit
             </Text>  
          </TouchableOpacity>
        </View>
        </View>
      </View>
      <View style={styles.bottomMenu}>
        <BottonMenu />
      </View>
    </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    paddingTop: 32,
  },
  topView: {
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
  bottomMenu: {
    height: 50,
    backgroundColor: "#8D2828",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
