import { defineStore } from 'pinia';
import { auth, db } from "@/firebase/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import {useI18n} from "vue-i18n";


export const useAuthStore = defineStore({
    id: "Auth",
    state: () => ({
        currentUser: null,
        isAdmin: false,
        isLoggedIn: false,
        authEmail: '',
        authPassword: '',
        errorMessage: '',
        adminList: [
            { email: 'admin@kinocms.com', password: 'password' }
        ],
        t: useI18n().t
    }),
    actions: {
        async register() {
            this.errorMessage = '';
            createUserWithEmailAndPassword(auth, this.authEmail, this.authPassword)
                .then(async (data) => {
                    this.currentUser = data.user;
                    const userData = {
                        email: this.currentUser.email,
                        password: this.authPassword,
                        registrationDate: this.currentUser.metadata.creationTime,
                        username: '',
                        fullName: '',
                        phone: '',
                        creditCard: '',
                        birthday: '',
                        city: '',
                        address: '',
                        gender: '',
                        language: ''
                    }
                    await setDoc(doc(db, "users", 'user-' + Date.now()), userData);
                })
                .catch((error) => {
                    // console.log(error);
                    switch (error.code) {
                        case "auth/invalid-email":
                            this.errorMessage = this.t('errors.invalidEmail');
                            break;
                        case "auth/email-already-in-use":
                            this.errorMessage = this.t('errors.inUse');
                            break;
                        case "auth/weak-password":
                            this.errorMessage = this.t('errors.weakPassword');
                            break;
                        default:
                            this.errorMessage = this.t('errors.signupDefault');
                            break;
                    }
                });
        },
        async login() {
            this.errorMessage = '';
            signInWithEmailAndPassword(auth, this.authEmail, this.authPassword)
                .then((data) => {
                    this.currentUser = data.user;
                    this.adminList.forEach((admin) => {
                        if (admin.email === this.currentUser.email) {
                            this.isAdmin = true;
                        }
                    });
                })
                .catch((error) => {
                // console.log('Login error: ', error.code);
                switch (error.code) {
                    case "auth/invalid-email":
                        this.errorMessage = this.t('errors.invalidEmail');
                        break;
                    case "auth/user-not-found":
                        this.errorMessage = this.t('errors.notFound');
                        break;
                    case "auth/wrong-password":
                        this.errorMessage = this.t('errors.invalidPassword');
                        break;
                    default:
                        this.errorMessage = this.t('errors.loginDefault');
                        break;
                }
            });
        },
        async checkAuthStatus() {
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    this.currentUser = user;
                    this.isLoggedIn = true;
                    localStorage.setItem('currentUser', JSON.stringify(user))
                    this.adminList.forEach((admin) => {
                        if (admin.email === user.email) {
                            this.isAdmin = true;
                        }
                    });
                }
                else {
                    localStorage.setItem('currentUser', null)
                    this.isLoggedIn = false;
                    this.isAdmin = false;
                }
                localStorage.setItem('isAdmin', JSON.stringify(this.isAdmin));
            })
        },
        async logout() {
            signOut(auth);
            this.currentUser = null;
            this.authEmail = '';
            this.authPassword = '';
        }
    }
})