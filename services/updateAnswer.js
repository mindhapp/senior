import { doc, updateDoc, collection, getFirestore, setDoc } from 'firebase/firestore'

import { createFirebaseInstance } from './createFirebaseInstance'

export const updateAnswer = async (feature, userId, value) => {
  const targetDocument = doc(collection(getFirestore(createFirebaseInstance()), feature), userId)

  try {
    await updateDoc(targetDocument, value)
  } catch (e) {
    if (e.code === 'not-found') {
      await setDoc(targetDocument, value)
    } else {
      throw e
    }
  }
}
