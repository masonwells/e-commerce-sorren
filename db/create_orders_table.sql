CREATE TABLE orders (
    id serial primary key,
    fulfilled boolean , 
    total integer, 
    paid boolean
)