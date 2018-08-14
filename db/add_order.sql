insert into orders( fulfilled, total, paid)
values( $1, $2, $3 )
returning id;