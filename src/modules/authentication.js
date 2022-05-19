import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  connectAuthEmulator,
  AuthErrorCodes,
} from "firebase/auth";
import { startOnline } from "..";
import { clearMainContent } from "./clearContent";
import {
  retrieveStorageFirebase,
  retrieveStorageCategoriesFirebase,
} from "./firestore";
import { clearTasks } from "./tasks";

const firebaseAuthentication = () => {
  const txtEmail = document.querySelector("#txtEmail");
  const txtPassword = document.querySelector("#txtPassword");
  const btnLogin = document.querySelector("#btnLogin");
  const btnSignup = document.querySelector("#btnSignup");
  const btnLogout = document.querySelector("#btnLogout");
  const lblAuthState = document.querySelector("#lblAuthState");
  const divLoginError = document.querySelector("#divLoginError");
  const lblLoginErrorMessage = document.querySelector("#lblLoginErrorMessage");
  const loginModal = document.querySelector(".login-modal-overlay");

  const firebaseConfig = {
    apiKey: "AIzaSyAl8gtz0i_XnGFuN5GSi4PC3gG8mrm1O1Q",
    authDomain: "js-todo-23ba4.firebaseapp.com",
    projectId: "js-todo-23ba4",
    storageBucket: "js-todo-23ba4.appspot.com",
    messagingSenderId: "836500768142",
    appId: "1:836500768142:web:22e2ba5b6092fd3a7bd0df",
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  /*   connectAuthEmulator(auth, "http://localhost:9099"); */

  const showLoginError = (error) => {
    divLoginError.style.display = "block";
    if (error.code === AuthErrorCodes.INVALID_PASSWORD) {
      lblLoginErrorMessage.innerHTML = `Wrong password. Try again.`;
    } else {
      lblLoginErrorMessage.innerHTML = `Error: ${error.message}`;
    }
  };

  const showLoginState = (user) => {
    lblAuthState.innerHTML = `Logged in as:<br>
     ${user.email} `;
  };

  const hideLoginError = () => {
    divLoginError.style.display = "none";
    lblLoginErrorMessage.innerHTML = "";
  };

  const showLoginForm = () => {
    loginModal.classList.remove("hidden");
  };

  const loginEmailPassword = async () => {
    const loginEmail = txtEmail.value;
    const loginPassword = txtPassword.value;

    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
    } catch (error) {
      console.log(error);
      showLoginError(error);
    }
  };
  btnLogin.addEventListener("click", loginEmailPassword);

  const createAccount = async () => {
    const loginEmail = txtEmail.value;
    const loginPassword = txtPassword.value;

    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
    } catch (error) {
      console.log(error);
      showLoginError(error);
    }
  };

  btnSignup.addEventListener("click", createAccount);

  const monitorAuthState = async () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        startOnline();
        showLoginState(user);
        loginModal.classList.add("hidden");
        hideLoginError();
        retrieveStorageFirebase();
        retrieveStorageCategoriesFirebase();
      } else {
        showLoginForm();

        lblAuthState.innerHTML = "Not signed in";
      }
    });
  };

  const logout = async () => {
    await signOut(auth);
  };

  btnLogout.addEventListener("click", () => {
    logout();
    clearTasks();
    clearMainContent();
  });

  monitorAuthState();
};

export default firebaseAuthentication;
