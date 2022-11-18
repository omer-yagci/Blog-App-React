import firebase from "./firebase";
import {
  getDatabase,
  ref,
  push,
  set,
  // onValue,
  // remove,
  // update,
} from "firebase/database";

// Bilgi Ekleme

export const AddUser = (values) => {
  const db = getDatabase(firebase);
  const userRef = ref(db, "users/");
  const newUserRef = push(userRef);
  set(newUserRef, {
    title: values.title,
    image: values.image,
    content: values.content,
  });
};
