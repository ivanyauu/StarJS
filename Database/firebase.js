// Import the functions you need from the SDKs you need
const ENV = require('react-native-dotenv');

// Firebase configuration
const firebaseConfig = {
  apiKey: ENV.KEY,
  authDomain: ENV.DOMAIN,
  projectId: ENV.ID,
  storageBucket: ENV.BUCKET,
  messagingSenderId: ENV.MSI,
  appId: ENV.APP_ID,
  measurementId: ENV.MEASUREMENT_ID
};

export { firebaseConfig };
