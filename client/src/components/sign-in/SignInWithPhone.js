import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import firebase from "./Authentication";

const SignInWithPhone = () => {
  const [phone, setPhone] = useState();
  const [verificationCode, setVerificationCode] = useState();
  const [codeResult, setCodeResult] = useState();
  const [recaptchaVerifier, setRecaptchaVerifier] = useState();
  const history = useHistory();

  useEffect(() => {
    setRecaptchaVerifier(
      new firebase.auth.RecaptchaVerifier("recaptcha-container")
    );
  }, []);

  useEffect(() => {
    if (recaptchaVerifier) {
      recaptchaVerifier.render();
    }
  }, [recaptchaVerifier]);

  const UpdatePhoneNumber = (ev) => {
    setPhone(ev.target.value);
  };

  const UpdateVerificationCode = (ev) => {
    setVerificationCode(ev.target.value);
  };

  const phoneAuth = () => {
    const phoneNumber = `+${phone}`;
    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, recaptchaVerifier)
      .then(function (confirmationResult) {
        window.confirmationResult = confirmationResult;
        setCodeResult(confirmationResult);
        alert("Message sent");
      })
      .catch(function (error) {
        alert(error.message);
      });
  };

  const codeVerify = () => {
    const code = `${verificationCode}`;
    codeResult
      .confirm(code)
      .then(function (result) {
        history.push("./welcome");
        const user = result.user;
        console.log(user, "user");
      })
      .catch(function (error) {
        alert(error.message);
      });
  };

  return (
    <>
      <form>
        <div>
          <label htmlFor="number">My number is</label>
          <input
            type="text"
            id="number"
            placeholder="+1**********"
            onChange={UpdatePhoneNumber}
          />
          <div id="recaptcha-container"></div>
        </div>
        <p>
          When you tap "Continue", Adopet will send a text with verification
          code. Message and data rates may apply. The verified phone number can
          be used to log in. Learn what happens when your number changes.
        </p>
        <button type="button" onClick={() => phoneAuth()}>
          CONTINUE
        </button>
      </form>
      <h3>Enter verification code</h3>
      <form>
        <input
          type="text"
          id="verificationCode"
          onChange={UpdateVerificationCode}
        />
        <button type="button" onClick={() => codeVerify()}>
          Verify code
        </button>
      </form>
    </>
  );
};

export default SignInWithPhone;
