-- select products.id as productID, orders.id as ordersID, productsordered.id as orderedID, brand, price, category, description, size, first_name, last_name, username, email, admin, fulfilled, quantity, paid, total from productsordered
select * from productsOrdered
join orders on productsordered.order_id = orders.id
join products on productsordered.product_id = products.id
join users on productsordered.user_id = users.id
where users.id = $1;