import firebase from "firebase/app";

/**
 * @since 2024.03.08
 * @author 이상민
 */

importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");

const firebaseConfig = {
    apiKey: "AIzaSyBVEo-5nnfPpRvDW69oS1DnCgSmtzzlj1g",
    projectId: "thepop-18582",
    messagingSenderId: "23824278236",
    appId: "1:23824278236:web:841437d42a805d7af50a19",
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

self.addEventListener("push", function (e) {
    if (!e.data.json()) return;

    const resultData = e.data.json().notification;
    const notificationTitle = resultData.title;

    const notificationOptions = {
        body: resultData.body,
    };

    console.log(resultData.title, {
        body: resultData.body,
    });

    e.waitUntil(self.registration.showNotification(notificationTitle, notificationOptions));
});
