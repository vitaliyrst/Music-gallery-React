import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCFxb9zeRJGC4EGILxbbI6K88Yc0RAGy6E",
    authDomain: "music-gallery-dd2c2.firebaseapp.com",
    projectId: "music-gallery-dd2c2",
    storageBucket: "music-gallery-dd2c2.appspot.com",
    messagingSenderId: "858508612167",
    appId: "1:858508612167:web:a68868958216fe070cd762",
    measurementId: "G-0MJT10237Q"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export const authenticateAnonymously = () => {
    return firebase.auth().signInAnonymously();
};

export const createGroceryList = (userName, userId) => {
    return db.collection('groceryLists')
        .add({
            created: firebase.firestore.FieldValue.serverTimestamp(),
            createdBy: userId,
            users: [{
                userId: userId,
                name: userName
            }]
        });
};

export const getGroupsList = async () => {
    const response = db.collection('groups');
    const data = await response.get();
    data.docs.forEach(item => {
        console.log(item.data())
    })


};

export const getGroceryListItems = groceryListId => {
    return db.collection('groceryLists')
        .doc(groceryListId)
        .collection('items')
        .get();
}

export const streamGroceryListItems = (groceryListId, observer) => {
    return db.collection('groceryLists')
        .doc(groceryListId)
        .collection('items')
        .orderBy('created')
        .onSnapshot(observer);
};

export const addUserToGroceryList = (userName, groceryListId, userId) => {
    return db.collection('groceryLists')
        .doc(groceryListId)
        .update({
            users: firebase.firestore.FieldValue.arrayUnion({
                userId: userId,
                name: userName
            })
        });
};

export const addGroceryListItem = (item, groceryListId, userId) => {
    return getGroceryListItems(groceryListId)
        .then(querySnapshot => querySnapshot.docs)
        .then(groceryListItems => groceryListItems.find(groceryListItem => groceryListItem.data().name.toLowerCase() === item.toLowerCase()))
        .then(matchingItem => {
            if (!matchingItem) {
                return db.collection('groceryLists')
                    .doc(groceryListId)
                    .collection('items')
                    .add({
                        name: item,
                        created: firebase.firestore.FieldValue.serverTimestamp(),
                        createdBy: userId
                    });
            }
            throw new Error('duplicate-item-error');
        });
};