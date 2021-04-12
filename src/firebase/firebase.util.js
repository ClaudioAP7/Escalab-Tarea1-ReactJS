import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyAWSrJ_fHstLbdpH7TvcgJ1CdFlr85wwtA",
    authDomain: "car-rent-33525.firebaseapp.com",
    projectId: "car-rent-33525",
    storageBucket: "car-rent-33525.appspot.com",
    messagingSenderId: "541499811802",
    appId: "1:541499811802:web:2c3e4ba54b1ccbc2a282e3"
};
// Initialize Firebase
firebase.initializeApp(config);

export const saveMessageToContact = async (userData) => {
    if(!userData) return;

    const userRef = firestore.doc(`users/${userData.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const { name, email, message } = userData;
        const createdAt = new Date();
        try{
           await userRef.set({
               name,
               email,
               message,
               createdAt
           }); 
        }catch (error) {
            console.log('error save message', error.message);
        }
    }
    return userRef;
};

export const firestore = firebase.firestore();

/* export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle =  () => auth.signInWithPopup(provider); */

export default firebase;