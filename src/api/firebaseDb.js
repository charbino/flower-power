import firebase from 'firebase/app'
import 'firebase/firestore'

// Get a Firestore instance
export const firebaseDb = firebase
    .initializeApp({ projectId: 'flower-power-88c08' })
    .firestore()

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { Timestamp, GeoPoint } = firebase.firestore
export { Timestamp, GeoPoint }

export const flowersCollection = firebaseDb.collection('flowers')
