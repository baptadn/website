import firebaseApp from 'firebase/app'
import firebaseDatabase from 'firebase/database'

var config = {
  apiKey: 'AIzaSyDMfi07QtAjf5NrPRqW5MHSxsAYG7Gnxjg',
  authDomain: 'website-64c6d.firebaseapp.com',
  databaseURL: 'https://website-64c6d.firebaseio.com',
}

const firebaseInstance = firebaseApp.initializeApp(config);
export default firebaseInstance
