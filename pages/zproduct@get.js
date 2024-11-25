module.exports = ['/zproduct/:product_id', async function(pool, { params, query }) {
	const {product_id} = params;
	const [[product]] = await pool.query('SELECT * FROM products WHERE id = ?', product_id);
	const [[zakaz]] = await pool.query('SELECT * FROM zakaz WHERE id = ?', product.zakaz_id);
	
	return `
		<h1>Редактирование изделия в заказе ${zakaz.name} </h1>
		<p><form method="post" action="/product/${product_id}/remove"><input type="submit" value="Удалить"/></form></p>
		<form method="post" action="/zproduct/${product_id}">
			<input type="text" name="number" placeholder="Кол-во" value="${product.number}"/>
			<button type="submit">Сохранить</button>
		</form>
		
	`;
}];