import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Modal,
  TextInput,
  FlatList,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import React, { useState, useRef } from "react";
import * as Animatable from "react-native-animatable";
import { filter } from "lodash";
import { Colors } from "../global/styles";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { filterData } from "../global/data";

export default function SearchComponent() {
  const [data, setData] = useState([...filterData]);
  const [modalVisible, setModalVisible] = useState(false);
  const [textInputFocused, setTextInputFocused] = useState(true);
  const textInput = useRef(0);
  const navigation = useNavigation();

  const contains = ({ name }, query) => {
    if (name.toLowerCase().includes(query.toLowerCase())) {
      return true;
    }
    return false;
  };

  const handleSearch = (text) => {
    const searchData = filter(filterData, (userSearch) => {
      return contains(userSearch, text);
    });

    setData([...searchData]);
  };

  return (
    <View style={{ alignItems: "center", marginBottom: 10 }}>
      <TouchableWithoutFeedback
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <View style={styles.searchArea}>
          <Icon
            name="search"
            type="material"
            style={styles.icon}
            iconStyle={{ marginLeft: 6 }}
            size={32}
          />
          <Text style={{ fontSize: 16, fontWeight: "500" }}>
            What are you looking for ?
          </Text>
        </View>
      </TouchableWithoutFeedback>

      <Modal animationType="fade" transparent={false} visible={modalVisible}>
        <View style={styles.modalView}>
          <View style={styles.view1}>
            <View style={styles.textInput}>
              <Animatable.View
                animation={textInputFocused ? "fadeInRight" : "fadeInLeft"}
                duration={400}
              >
                <Icon
                  name={textInputFocused ? "arrow-back" : "search"}
                  onPress={() => {
                    if (textInputFocused) {
                      setModalVisible(false);
                      setTextInputFocused(true);
                    }
                  }}
                  style={styles.icon}
                  type="material"
                  iconStyle={{ marginRight: 6 }}
                />
              </Animatable.View>
              <TextInput
                style={{ width: "90%" }}
                placeholder=""
                autoFocus={false}
                ref={textInput}
                onFocus={() => {
                  setTextInputFocused(true);
                }}
                onBlur={() => {
                  setTextInputFocused(false);
                }}
                onChangeText={handleSearch}
              />
              <Animatable.View
                animation={textInputFocused ? "fadeInLeft" : ""}
                duration={400}
              >
                <Icon
                  name={textInputFocused ? "cancel" : null}
                  onPress={() => {
                    textInput.current.clear();
                    handleSearch();
                  }}
                  style={{ marginRight: -10 }}
                  type="material"
                  iconStyle={{ color: Colors.grey3 }}
                />
              </Animatable.View>
            </View>
          </View>
          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  Keyboard.dismiss;
                  navigation.navigate("SearchResultScreen", {
                    item: item.name,
                  });
                  setModalVisible(false);
                  setTextInputFocused(true);
                }}
              >
                <View style={styles.view2}>
                  <Text style={{ color: Colors.grey2, fontSize: 16 }}>
                    {item.name}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text1: {
    color: Colors.grey3,
    fontSize: 16,
  },
  // searchView: {
  //   alignItems: "center",
  //   marginTop: 10,
  // },
  modalView: {
    flex: 1,
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 12,
    marginHorizontal: 0,
    height: 50,
    borderColor: "#86939e",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignContent: "center",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
    // marginLeft: 10,
  },
  searchArea: {
    width: "94%",
    height: 50,
    backgroundColor: Colors.grey5,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.grey4,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  icon: {
    fontSize: 24,
    padding: 6,
    color: Colors.grey2,
  },
  view1: {
    height: 70,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  view2: {
    flexDirection: "row",
    padding: 16,
    alignItems: "center",
  },
});
