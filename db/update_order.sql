UPDATE productsOrdered
   SET notes=$1
 WHERE order_id=$2;