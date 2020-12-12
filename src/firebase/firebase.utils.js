import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyDP9RKv8vezc4-Fd1GQzb98Sg0m1lVfEMM",
	authDomain: "react-ecommerce-db-f45cb.firebaseapp.com",
	projectId: "react-ecommerce-db-f45cb",
	storageBucket: "react-ecommerce-db-f45cb.appspot.com",
	messagingSenderId: "392117695939",
	appId: "1:392117695939:web:a8fa9a97eaca0c31c23976",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapshot = await userRef.get();
	if (!snapshot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (e) {
			console.error("error creating user", e.message);
		}
	}

	return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
