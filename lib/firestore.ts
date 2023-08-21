import { initializeApp } from 'firebase/app'
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  deleteDoc,
  updateDoc
} from 'firebase/firestore'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { getEnvVar } from './getEnvVar'

const firebaseConfig = {
  apiKey: "AIzaSyC0w1VKcui8zWCHWWm11cKNoo7KZc6inWk",
  authDomain: "autovin-8c1d3.firebaseapp.com",
  projectId: "autovin-8c1d3",
  storageBucket: "autovin-8c1d3.appspot.com",
  messagingSenderId: "192884571607",
  appId: "1:192884571607:web:84ea1089e90d10fe095f92"
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

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
  vendor: string,
  tries: number = 3
) => {
  try {
    await signIn()
    await setDoc(doc(db, 'user-info', id), {
      mail,
      vincode,
      vendor,
      mailSent: false
    })
  } catch {
    if (tries > 0) {
      return addDocument(id, mail, vincode, vendor, tries - 1)
    } else {
      throw new Error()
    }
  }
}

export const getDocumentById = async (id: string, tries: number = 3) => {
  try {
    await signIn()
    const ref = doc(db, 'user-info', id)
    const docSnap = await getDoc(ref)
    return docSnap.data()
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
