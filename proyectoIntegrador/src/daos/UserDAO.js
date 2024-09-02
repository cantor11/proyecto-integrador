import {
  collection,
  doc,
  getDocs,
  deleteDoc,
  updateDoc,
  query,
  where,
  addDoc,
} from "firebase/firestore";
import { db } from "../../firebase.config.js";
  
class UserDAO {
  constructor() {
    this.collectionRef = collection(db, "users");
  }

  async getUserById(email) {
    const q = query(this.collectionRef, where('email', '==', email))
    return await getDocs(q)
      .then((userDoc) => {
        if (!userDoc.empty) {
          return { success: true };
        } else {
          return { success: false };
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }

  async createUser(userData) {
    await addDoc(this.collectionRef, userData)
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  }

  async updateUser(id, userData) {
    const userRef = doc(this.collectionRef, id);
    await updateDoc(userRef, userData)
      .then(console.log("Document successfully updated!"))
      .catch((error) => {
        console.error("Error updating document: ", error);
      });
  }

  async deleteUser(id) {
    await deleteDoc(doc(this.collectionRef, id))
      .then(console.log("Document successfully deleted!"))
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  }
}

export default new UserDAO();