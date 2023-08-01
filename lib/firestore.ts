import { initializeApp } from 'firebase/app'
import {
  getFirestore,
  doc,
  setDoc,
  deleteDoc,
  updateDoc
} from 'firebase/firestore'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { getEnvVar } from './getEnvVar'

const firebaseConfig = {
  apiKey: 'AIzaSyB3x4jBRaQ7JwZ1AIrb6ydih7GfjJWKG7E',
  authDomain: 'vincode-4c6c9.firebaseapp.com',
  projectId: 'vincode-4c6c9',
  storageBucket: 'vincode-4c6c9.appspot.com',
  messagingSenderId: '232708747254',
  appId: '1:232708747254:web:97a3f52607d8e57b6e61d7'
}

initializeApp(firebaseConfig)
const auth = getAuth()
const db = getFirestore()

const signIn = async () => {
  await signInWithEmailAndPassword(
    auth,
    getEnvVar('FIRESTORE_MAIL'),
    getEnvVar('FIRESTORE_PASSWORD')
  )
}

export const addDocument = async (
  id: string,
  mail: string,
  vincode: string,
  tries: number = 3
) => {
  try {
    await signIn()
    await setDoc(doc(db, 'user-info', id), {
      mail,
      vincode,
      mailSent: false
    })
  } catch {
    if (tries > 0) {
      return addDocument(id, mail, vincode, tries - 1)
    } else {
      throw new Error()
    }
  }
}

export const getDocumentById = async (id: string, tries: number = 3) => {
  try {
    await signIn()
    const ref = doc(db, 'user-info', id)
    return ref
  } catch {
    if (tries > 0) {
      return getDocumentById(id, tries - 1)
    } else {
      throw new Error()
    }
  }
}

export const deleteDocumentById = async (id: string, tries: number = 3) => {
  try {
    await signIn()
    const ref = doc(db, 'user-info', id)
    await deleteDoc(ref)
  } catch {
    if (tries > 0) {
      return deleteDocumentById(id, tries - 1)
    } else {
      throw new Error()
    }
  }
}

export const updateSentMail = async (id: string, tries: number = 3) => {
  try {
    await signIn()
    const ref = doc(db, 'user-info', id)
    await updateDoc(ref, {
      mailSent: true
    })
  } catch {
    if (tries > 0) {
      return updateSentMail(id, tries - 1)
    } else {
      throw new Error()
    }
  }
}
