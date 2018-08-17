module.exports = {

  getItems: (req, res) => {
    const db = req.app.get("db")
    // console.log(db)
    db.get_items().then(response => res.status(200).send(response))
  },
  get_productsOrdered: (req, res) => {
    const db = req.app.get("db")
    db.joinAll([req.params.user_id]).then(response => res.status(200).send(response))
  },
  add_order: (req, res, next) => {
    const { fulfilled, total, paid } = req.body;
    const db = req
      .app
      .get("db")
    db
      .add_order([fulfilled, total, paid])
      .then(response => res.status(200).send(response))
  },
  add_product: (req, res, next) => {
    const { name, category, brand, price, description, size, img_url } = req.body;
    const db = req
      .app
      .get("db")
    db
      .add_product([name, category, brand, price, description, size, img_url])
      .then(response => res.status(200).send(response))
  },
  add_productsOrdered: (req, res, next) => {
    console.log('body', req.body)
    const { user_id, cart } = req.body;
    console.log(user_id, cart)
    const total = cart.reduce((a, b) => {
      return a + b.price;
    }, 0);
    const db = req
      .app
      .get("db");
    db.add_order([false, total, false]).then(response => {
      const orderId = response[0].id;
      for (var i = 0; i < cart.length; i++) {
        return db.add_productsOrdered([user_id, cart[i].id, orderId, 1]).then(response => res.status(200).send(response))
      }
    }).then(response => { console.log('add_order response', response) })
  },
  add_user: (req, res, next) => {
    const { first_name, last_name, username, email, admin } = req.body;
    const db = req
      .app
      .get("db")
    db
      .add_user([first_name, last_name, username, email, admin])
      .then(response => res.status(200).send(response))
  }
}