import { defineStore } from 'pinia';
import { collection, deleteDoc, doc, getDocs, setDoc } from "firebase/firestore";
import { db, secondaryApp } from "@/firebase/firebase";
import {getAuth, updatePassword, updateEmail, deleteUser, signInWithEmailAndPassword} from "firebase/auth";


export const useUsersStore = defineStore({
    id: "Users",
    state: () => ({
        loading: false,
        showModal: false,
        usersList: [],
        uploaded: false,
    }),
    actions: {
        async getUsers() {
            this.loading = true;
            this.usersList = [];
            const usersData = await getDocs(collection(db, 'users'));
            usersData.forEach((doc) => {
                this.usersList.push({
                    id: this.usersList.length,
                    name: doc.id,
                    email: doc.data().email,
                    password: doc.data().password,
                    username: doc.data().username,
                    registrationDate: doc.data().registrationDate,
                    fullName: doc.data().fullName,
                    phone: doc.data().phone,
                    creditCard: doc.data().creditCard,
                    birthday: doc.data().birthday,
                    city: doc.data().city,
                    address: doc.data().address,
                    gender: doc.data().gender,
                    language: doc.data().language,
                    emailChange: doc.data().email,
                    passwordChange: '',
                    passwordCheck: ''
                })
            });
            for (let i = 0; i < this.usersList.length; i++) {
                if (typeof this.usersList[i].birthday === 'object') {
                    this.usersList[i].birthday = new Date(this.usersList[i].birthday.seconds*1000);
                }
            }
            this.loading = false;
        },
        async deleteUser(id) {
            this.showModal = false;
            this.loading = true;
            const auth = getAuth(secondaryApp);
            signInWithEmailAndPassword(auth, this.usersList[id].email, this.usersList[id].password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    deleteUser(user).then(async () => {
                        await deleteDoc(doc(db, "users", this.usersList[id].name));
                        this.usersList.splice(id, 1);
                        for (let i = 0; i < this.usersList.length; i++) {
                            if (this.usersList[i].id !== i) {
                                this.usersList[i].id = i;
                            }
                        }
                    }).catch((e) => {
                        console.log(e);
                    });
                })
                .catch((error) => {
                    console.log(error);
                });
            this.loading = false;
        },
        async saveUser(id) {
            this.loading = true;
            this.uploaded = false;
            const auth = getAuth(secondaryApp);
            signInWithEmailAndPassword(auth, this.usersList[id].email, this.usersList[id].password)
                .then(async (userCredential) => {
                    const user = userCredential.user;
                    if (user.email !== this.usersList[id].emailChange) {
                        this.usersList[id].email = this.usersList[id].emailChange;
                        updateEmail(user, this.usersList[id].emailChange).catch((error) => {
                            console.log(error);
                        });
                    }
                    if (this.usersList[id].passwordChange !== '' && this.usersList[id].passwordChange === this.usersList[id].passwordCheck && this.usersList[id].password !== this.usersList[id].passwordChange) {
                        this.usersList[id].password = this.usersList[id].passwordChange;
                        updatePassword(user, this.usersList[id].password).catch((error) => {
                            console.log(error);
                        });
                    }
                    const userData = {
                        email: this.usersList[id].email,
                        password: this.usersList[id].password,
                        username: this.usersList[id].username,
                        registrationDate: this.usersList[id].registrationDate,
                        fullName: this.usersList[id].fullName,
                        phone: this.usersList[id].phone,
                        creditCard: this.usersList[id].creditCard,
                        birthday: this.usersList[id].birthday,
                        city: this.usersList[id].city,
                        address: this.usersList[id].address,
                        gender: this.usersList[id].gender,
                        language: this.usersList[id].language
                    }
                    await setDoc(doc(db, "users", this.usersList[id].name), userData).then(() => {
                        this.uploaded = true;
                    });
                }).catch((error) => {
                    console.log(error);
                });
            this.loading = false;
        }
    }
})