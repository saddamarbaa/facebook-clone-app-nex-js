/** @format */

import firebase from "firebase";

const firebaseConfig = {
	// apiKey: process.env.API_KEY,

	// authDomain: process.env.AUTH_DOMAIN,

	// projectId: process.env.PROJECT_ID,

	// storageBucket: process.env.STORAGE_BUCKET,

	// messagingSenderId: process.env.MESSAGING_SENDER_ID,

	// appId: process.env.APP_ID,

	apiKey: "AIzaSyDpeFudyoxaXwA2Z18VvIrxXb6D7FBSbMs",

  authDomain: "chart-dashboard-team-task1.firebaseapp.com",

  projectId: "chart-dashboard-team-task1",

  storageBucket: "chart-dashboard-team-task1.appspot.com",

  messagingSenderId: "246768945817",

  appId: "1:246768945817:web:3a87895d9d0bd59e520608"

};

const firebaseApp = !firebase.apps.length
	? firebase.initializeApp(firebaseConfig)
	: firebase.app();

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;
