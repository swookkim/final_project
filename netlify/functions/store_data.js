
// allows us to use firebase
let firebase = require(`./firebase`)

// /.netlify/functions/create_comment?postId=xxxxxxxxx&userName=Brian&body=Tacos!
exports.handler = async function(event) {

  let userName = event.queryStringParameters.useryName

  // establish a connection to firebase in memory
  let db = firebase.firestore()

  // create a new post, wait for it to return
  await db.collection('items').add({
    userName: 'userName',
    kimchiPremium: 'kimchiPremium',
    created: firebase.firestore.FieldValue.serverTimestamp()
  })

  return {
    statusCode: 200
  }
}

