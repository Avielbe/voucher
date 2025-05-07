// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyD-DO0wTbGDSgLQqlxch_H8G_EeWqswaMQ",
    authDomain: "voucher-99b54.firebaseapp.com",
    projectId: "voucher-99b54",
    storageBucket: "voucher-99b54.firebasestorage.app",
    messagingSenderId: "731502133315",
    appId: "1:731502133315:web:f245a7254e1d6f619b54f6",
    measurementId: "G-57ZL0K4S70"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { analytics };
