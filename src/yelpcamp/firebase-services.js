import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getDatabase } from 'firebase/database'

const firebaseConfig = {

    apiKey: "AIzaSyC5yMnOFWO1ggHEqSslyMONMP1E11PtGKI",
  
    authDomain: "yelpcamp-e28d6.firebaseapp.com",
  
    projectId: "yelpcamp-e28d6",
  
    storageBucket: "yelpcamp-e28d6.appspot.com",
  
    messagingSenderId: "1020913390238",

    databaseURL: "https://yelpcamp-e28d6-default-rtdb.firebaseio.com/",
  
    appId: "1:1020913390238:web:c7e6adcb579c251b6c618f"
  
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getDatabase(app)

export { app, auth, db }