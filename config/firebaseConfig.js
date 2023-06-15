
let admin = require("firebase-admin");
let auth = require("firebase-admin/auth");

let serviceAccount = require("../chat2dapp-firebase-adminsdk-2li9g-5339ded353.json");

const app = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://chat2dapp-default-rtdb.firebaseio.com"
  });

// Initialize Firebase Authentication and get a reference to the service
const authapp = auth.getAuth(app);
const db = admin.firestore(app);

module.exports = {
    authapp,
    db,
    app,
    auth
}