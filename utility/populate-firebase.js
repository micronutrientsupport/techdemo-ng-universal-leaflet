const admin = require('../node_modules/firebase-admin');
const serviceAccount = require("./service-key-demo.json");

const data = require("./demo-data.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://maps-ng-test.firebaseio.com/" // REPLACE WITH YOUR DATABASE URL
});

const db = admin.firestore();
var batch = db.batch();
data.forEach((post, i) => {
  var sfRef = db.collection('posts').doc();
  batch.set(sfRef, post);
})

batch.commit().then(function (val) {
  console.log('Batch posted: ', val);
});
