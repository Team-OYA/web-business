import firebase from 'firebase/app'
import 'firebase/messaging'
import NotificationApi from "./api/Common/notificationApi";

/**
 * @since 2024.03.08
 * @author 이상민
 */
const firebaseConfig = {
    apiKey: `${process.env.REACT_APP_API_KEY}`,
    authDomain: `${process.env.REACT_APP_AUTH_DOMAIN}`,
    projectId: `${process.env.REACT_APP_PROJECT_ID}`,
    storageBucket: `${process.env.REACT_APP_STORAGE_BUCKET}`,
    messagingSenderId: `${process.env.REACT_APP_MESSAGING_SENDER_ID}`,
    appId: `${process.env.REACT_APP_APP_ID}`,
    measurementId: `${process.env.REACT_APP_MEASUREMENT_ID}`
};

firebase.initializeApp(firebaseConfig)
const messaging = firebase.messaging()

function requestPermission() {
    console.log('Requesting permission...');

    void Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
            console.log('Notification permission granted.');
            console.log(`${process.env.REACT_APP_VAPID_KEY}`);
            messaging.getToken({vapidKey: `${process.env.REACT_APP_VAPID_KEY}`})
                .then(async (currentToken) => {
                    if (currentToken) {
                        console.log('currenToken : ' + currentToken);
                        try {
                            const currentPagePath = window.location.pathname;
                            let response;
                            if (currentPagePath.startsWith('/admin/')) {
                                response = await NotificationApi.saveAdminNotification(currentToken);
                            } else {
                                response = await NotificationApi.saveNotification(currentToken);
                            }
                            try {
                                console.log("FCM 토큰 보내기 성공!", response);
                            } catch (error) {
                                console.log("FCM 토큰 보내기 실패!", error);
                                // 여기서 추가적인 에러 처리 또는 다른 작업을 수행할 수 있습니다.
                            }
                        } catch (error) {
                            console.error("token 저장 실패", error);
                        }

                    } else {
                        console.log('Can not get token');
                    }
                });

        }else{
            console.log('Do not have permission.');
        }
    });
}

requestPermission();

messaging.onMessage((payload) => {
    console.log(payload.notification.title);
    console.log(payload.notification.body);
});

messaging.onMessage((payload) => {
    console.log(payload.notification.title);
    console.log(payload.notification.body);
});

export default firebase;
