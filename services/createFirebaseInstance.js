import { initializeApp, getApp, getApps } from 'firebase/app'
import { AppCheck, initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check'

export const createFirebaseInstance = () => {
  if (!getApps().length) {
    const app = initializeApp({
      apiKey: "AIzaSyCD4y-ufBj_-Jj5__BhjXf6xl2FmTpz2oQ",
      authDomain: "turningintohappiness.firebaseapp.com",
      databaseURL: "https://turningintohappiness-default-rtdb.firebaseio.com",
      projectId: "turningintohappiness",
      storageBucket: "turningintohappiness.appspot.com",
      messagingSenderId: "279896458292",
      appId: "1:279896458292:web:45a7a7833939d2ac8cb661",
      measurementId: "G-L7YV2X2YLT"
    })

    return app
  } else {
    return getApp()
  }
}
