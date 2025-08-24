const admin = require("firebase-admin");

admin.initializeApp({
  credential: admin.credential.cert(require("../serviceAccountKey.json")),
});

const uid = "user uid"; //replace with user uid

admin.auth().setCustomUserClaims(uid, { isAdmin: true })
  .then(() => {
    console.log(`✅ isAdmin claim set for UID: ${uid}`);
    process.exit(0);
  })
  .catch((error) => {
    console.error("❌ Failed to set custom claim:", error);
    process.exit(1);
  });
  