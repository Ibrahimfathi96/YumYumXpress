import React, { useState, useRef } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Button, Icon, SocialIcon } from "react-native-elements";
import { Colors, Parameters, title } from "../../../global/styles";
import * as Animatable from "react-native-animatable";
import { Formik } from "formik";
import Header from "../../../components/Header";
import styles from "./SignIn.Styles";
import { auth, database } from "../../../../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function SignInScreen({ navigation }) {
  const [focusedTextInput1, setFocusedTextInput1] = useState(false);
  const [focusedTextInput2, setFocusedTextInput2] = useState(false);

  const textInputRef1 = useRef(1);
  const textInputRef2 = useRef(2);

  async function signIn(data) {
    const { password, email } = data;
    await signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log("Login success");
        navigation.navigate("AppDrawer");
      })
      .catch((err) => Alert.alert("Login error", err.message));
  }

  return (
    <View style={styles.container}>
      <Header title="Sign In" iconName="arrow-left" navigation={navigation} />
      <View style={{ marginLeft: 20, margin: 30 }}>
        <Text style={title}>Welcome Back</Text>
        <Text style={title}>To YumYumXpress Community</Text>
      </View>
      <View style={{ alignItems: "center", marginTop: 10 }}>
        <Text style={styles.text1}>Please Enter Your E-mail and Password</Text>
        <Text style={styles.text1}>register with your account</Text>
      </View>

      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          signIn(values);
        }}
      >
        {(props) => (
          <View>
            <View style={{ marginTop: 20 }}>
              <View style={styles.textInput1}>
                <Animatable.View
                  animation={focusedTextInput1 ? "" : "fadeInRight"}
                  duration={100}
                  useNativeDriver={true}
                >
                  <Icon
                    name="email"
                    type="material"
                    iconStyle={{ color: Colors.grey2 }}
                  />
                </Animatable.View>
                <TextInput
                  style={{ width: "90%", fontSize: 16, fontWeight: "500" }}
                  placeholder="enter your email"
                  ref={textInputRef1}
                  onFocus={() => {
                    setFocusedTextInput1(false);
                  }}
                  onBlur={() => {
                    setFocusedTextInput1(true);
                  }}
                  onChangeText={props.handleChange("email")}
                  value={props.values.email}
                  keyboardType="email-address"
                />
              </View>

              <View style={styles.textInput1}>
                <Animatable.View
                  animation={focusedTextInput2 ? "" : "fadeInRight"}
                  duration={100}
                  useNativeDriver={true}
                >
                  <Icon
                    name="lock"
                    type="material"
                    iconStyle={{ color: Colors.grey2 }}
                  />
                </Animatable.View>
                <TextInput
                  placeholder="enter your password"
                  ref={textInputRef2}
                  secureTextEntry
                  style={{ width: "80%", fontSize: 16, fontWeight: "500" }}
                  onFocus={() => {
                    setFocusedTextInput2(false);
                  }}
                  onBlur={() => {
                    setFocusedTextInput2(true);
                  }}
                  onChangeText={props.handleChange("password")}
                  value={props.values.password}
                  keyboardType="visible-password"
                />
                <Animatable.View
                  animation={focusedTextInput2 ? "" : "fadeInLeft"}
                  duration={100}
                  useNativeDriver={true}
                >
                  <Icon
                    name="visibility-off"
                    type="material"
                    iconStyle={{ color: Colors.grey2 }}
                  />
                </Animatable.View>
              </View>
            </View>

            <View style={{ marginHorizontal: 20, marginVertical: 10 }}>
              <Button
                onPress={props.handleSubmit}
                title="SIGN IN"
                buttonStyle={Parameters.styledButton}
                titleStyle={Parameters.buttonTitle}
              />
            </View>
          </View>
        )}
      </Formik>

      <TouchableOpacity onPress={() => {}}>
        <Text style={styles.text2}>Forgot Password?</Text>
      </TouchableOpacity>

      <View style={styles.ORLine}>
        <View style={styles.line} />
        <Text style={styles.ORText}>OR</Text>
        <View style={styles.line} />
      </View>

      <View style={{ marginHorizontal: 10 }}>
        <SocialIcon
          title="Sign In with Facebook"
          button
          type="facebook"
          style={styles.socialIcon}
          onPress={() => {}}
        />
      </View>

      <View style={{ marginHorizontal: 10 }}>
        <SocialIcon
          title="Sign In with Google"
          button
          type="google"
          style={styles.socialIcon}
          onPress={() => {}}
        />
      </View>

      <View>
        <Text style={styles.text3}>
          New on YumYumXpress Community? Join Us.
        </Text>
      </View>

      <View style={styles.buttonView}>
        <Button
          onPress={() => {
            navigation.navigate("SignUpScreen");
          }}
          title="Create Account"
          buttonStyle={styles.createButton}
          titleStyle={styles.createButtonTitle}
        />
      </View>
    </View>
  );
}
