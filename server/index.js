const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const massive = require('massive');
const axios = require('axios')
cors = require('cors')
// const ctrl = require('./config.js')
const shop_ctr = require('./controllers/shop_controllers.js')
require('dotenv').config();

const stripe = require('stripe')(process.env.PRIVATE_KEY)


const { SERVER_PORT, REACT_APP_DOMAIN, REACT_APP_CLIENT_ID, CLIENT_SECRET, SESSION_SECRET, CONNECTION_STRING } = process.env


const app = express();
app.use(express.static(`${__dirname}/../build`));
const path = require('path');

massive(process.env.CONNECTION_STRING).then(db => app.set('db', db));
app.use(bodyParser.json());



app.use(
  session({
    secret: SESSION_SECRET,
    resave: true,
    saveUninitialized: false
  })
)

app.use(cors())


//AUTH ZERO
app.get('/auth/callback', async (req, res) => {
  console.log('styialkdj')
  let payload = {
    client_id: REACT_APP_CLIENT_ID,
    client_secret: CLIENT_SECRET,
    code: req.query.code,
    grant_type: 'authorization_code',
    redirect_uri: `${process.env.PROTOCOL}://${req.headers.host}/auth/callback`
  }
  //use the code from auth0 to get a token
  let responseWithToken = await axios.post(`https://${REACT_APP_DOMAIN}/oauth/token`, payload)
  //use the access token to get user info for whoever just logged in
  console.log(responseWithToken.data.access_token)
  let responseWithUserData = await axios.get(`https://${REACT_APP_DOMAIN}/userinfo?access_token=${responseWithToken.data.access_token}`)
  req.session.user = responseWithUserData.data
  console.log(responseWithUserData.data)
  //db calls
  // put user data on req.session object
  const db = req.app.get('db')
  let { sub, email, given_name, family_name, nickname } = responseWithUserData.data
  let foundUser = await db.find_user([sub])
  if (foundUser[0]) {
    // put on session
    req.session.user = foundUser[0];
    res.redirect('/#/home')
  } else {
    //create user
    let createdUser = await db.create_user([given_name, family_name, nickname, email, sub])
    //put on session
    req.session.user = createdUser[0]
    res.redirect('/#/home')
  }
  // This next block of code will be for fetching the facebook, instagram and twitter shiz when the time comes
  app.get('/api/user-data', (req, res) => {
    if (req.session.user) {
      res.status(200).send(req.session.user)
    } else {
      res.status(401).send('Nice try broooo')
    }
  })
})



//Endpoints
app.post('/api/shop/addOrder', shop_ctr.add_order);
app.post('/api/shop/addProduct', shop_ctr.add_product);
// app.post('/api/shop/addUser', auth_ctr.addUser);
app.post('/api/shop/addProductsOrdered', shop_ctr.add_productsOrdered);
app.get('/api/items', shop_ctr.getItems);
app.get('/api/shop/getProductsOrdered/:user_id', shop_ctr.get_productsOrdered);
app.put('/api/orders/update/:order_id', shop_ctr.update_order);
app.delete('/api/orders/delete/:order_id', shop_ctr.delete_order);


// app.post('/api/users', auth_ctr.createUser)
app.post('/api/payment', function (req, res, next) {
  //convert amount to pennies
  const amountArray = req.body.amount.toString().split('');
  const pennies = [];
  for (var i = 0; i < amountArray.length; i++) {
    if (amountArray[i] === ".") {
      if (typeof amountArray[i + 1] === "string") {
        pennies.push(amountArray[i + 1]);
      } else {
        pennies.push("0");
      }
      if (typeof amountArray[i + 2] === "string") {
        pennies.push(amountArray[i + 2]);
      } else {
        pennies.push("0");
      }
      break;
    } else {
      pennies.push(amountArray[i])
    }
  }
  const convertedAmt = parseInt(pennies.join(''));

  const charge = stripe.charges.create({
    amount: convertedAmt, // amount in cents, again
    currency: 'usd',
    source: req.body.token.id,
    description: 'Test charge from react app'
  }, function (err, charge) {
    if (err) { return res.sendStatus(500) }
    else {
      return res.sendStatus(200)
    }
  });
});



app.get('/auth/logout', (req, res) => {
  req.session.destroy()
  res.send()
})


// app.get('*', (req, res) => { res.sendFile(path.join(__dirname, '../build/index.html')) });

app.listen(SERVER_PORT, () => {
  console.log(`Listening on port ${SERVER_PORT}`)
})
