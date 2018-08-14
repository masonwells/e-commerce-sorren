create table productsOrdered (
    id serial primary key,
    user_id integer references users(id),
    product_id integer references products(id), 
    order_id integer references orders(id),
    quantity integer
)