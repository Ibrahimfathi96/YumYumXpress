import React, { useRef, useState } from "react";
import { View, ScrollView, Text, TextInput } from "react-native";
import styles from "./SignUpScreen.Styles";
import Header from "../../../components/Header";
import { Colors, Parameters, title } from "../../../global/styles";
import { Formik } from "formik";
import { Icon, Button } from "react-native-elements";
import * as Animatable from "react-native-animatable";

const initialValues = {
  email: "",
  password: "",
  phoneNumber: "",
  firstName: "",
  lastName: "",
  userName: "",
};

export default function SignUpScreen({ navigation }) {
  const [focusedemail, setFocusedEmail] = useState(false);
  const [focusedPassword, setFocusedPassword] = useState(false);
  const [bluredPassword, setBluredPassword] = useState(false);

  const emailRef = useRef(1);
  const passwordRef = useRef(2);
  return (
    <View style={styles.container}>
      <Header
        title="Create Account"
        iconName="arrow-left"
        navigation={navigation}
      />
      <ScrollView keyboardShouldPersistTaps="always">
        <View style={styles.textContainer}>
          <Text style={title}>
            Join YumYumXpress &{"\n"}GET YOUR FAVORITE FOOD
          </Text>
          <Text style={styles.title2}>just the way that you want</Text>
        </View>

        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            signUp(values);
          }}
        >
          {(props) => (
            <View style={styles.formContainer}>
              <View style={styles.textInputView}>
                <TextInput
                  placeholder="Phone Number"
                  style={styles.textInput}
                  keyboardType="number-pad"
                  autoFocus={true}
                  onChangeText={props.handleChange("phoneNumber")}
                  value={props.values.phoneNumber}
                />
              </View>

              <View style={styles.textInputView}>
                <TextInput
                  placeholder="First Name"
                  style={styles.textInput}
                  onChangeText={props.handleChange("firstName")}
                  value={props.values.firstName}
                />
              </View>

              <View style={styles.textInputView}>
                <TextInput
                  placeholder="Last Name"
                  style={styles.textInput}
                  onChangeText={props.handleChange("lastName")}
                  value={props.values.lastName}
                />
              </View>

              <View style={styles.textInputView}>
                <Animatable.View
                  animation={focusedemail ? "fadeInRight" : "fadeInRight"}
                  duration={400}
                  useNativeDriver={true}
                >
                  <Icon
                    name="email"
                    type="material"
                    iconStyle={{ color: Colors.grey2 }}
                  />
                </Animatable.View>
                <TextInput
                  style={styles.textInput}
                  placeholder="Email Address"
                  ref={emailRef}
                  onFocus={() => {
                    setFocusedEmail(false);
                  }}
                  onBlur={() => {
                    setFocusedEmail(true);
                  }}
                  onChangeText={props.handleChange("email")}
                  value={props.values.email}
                  keyboardType="email-address"
                />
              </View>

              <View style={styles.textInputView}>
                <Animatable.View
                  animation={focusedPassword ? "fadeInLeft" : "fadeInRight"}
                  duration={400}
                  useNativeDriver={true}
                >
                  <Icon
                    name="lock"
                    type="material"
                    iconStyle={{ color: Colors.grey2 }}
                  />
                </Animatable.View>

                <TextInput
                  placeholder="Password"
                  ref={passwordRef}
                  secureTextEntry
                  style={styles.textInput}
                  onFocus={() => {
                    setFocusedPassword(false);
                  }}
                  onBlur={() => {
                    setBluredPassword(true);
                  }}
                  onChangeText={props.handleChange("password")}
                  value={props.values.password}
                  keyboardType="visible-password"
                />

                <Animatable.View
                  animation={bluredPassword ? "fadeInRight" : "fadeInLeft"}
                  duration={400}
                  useNativeDriver={true}
                  style={{ alignItems: "flex-end", flex: 1 }}
                >
                  <Icon
                    name="visibility-off"
                    type="material"
                    iconStyle={{ color: Colors.grey2 }}
                  />
                </Animatable.View>
              </View>

              <View style={styles.termsAndConditionView}>
                <Text style={styles.termsAndConditionText}>
                  By Creating or logging to this account, you are{"\n"}agreeing
                  with our{" "}
                  <Text style={styles.termsAndConditionText2}>
                    Terms & Conditions
                  </Text>{" "}
                  and{"\n"}
                  <Text style={styles.termsAndConditionText3}>
                    PRIVACY STATEMENT
                  </Text>
                  .
                </Text>
              </View>

              <View style={{ marginVertical: 10 }}>
                <Button
                  onPress={props.handleSubmit}
                  title="SIGN UP"
                  buttonStyle={Parameters.styledButton}
                  titleStyle={Parameters.buttonTitle}
                />
              </View>
            </View>
          )}
        </Formik>
        <View>
          <Text style={styles.haveAccountText}>
            Already Have an Account? Sign In.
          </Text>
        </View>

        <View style={styles.buttonView}>
          <Button
            onPress={() => {
              navigation.navigate("SignInScreen");
            }}
            title="Sign In"
            buttonStyle={styles.signInButton}
            titleStyle={styles.signInButtonTitle}
          />
        </View>
      </ScrollView>
    </View>
  );
}
