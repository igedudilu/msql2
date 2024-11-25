module.exports = ['/product/:product_id', async function(pool, { params, query }) {
	const { product_id } = params;
	const [[product]] = await pool.query('SELECT * FROM products WHERE id = ?', product_id);
	const [[warehouse]] = await pool.query('SELECT * FROM warehouses WHERE id = ?', product.warehouse_id);
	
	return `
		<h1>Редактирование изделия на складе ${warehouse.name} </h1>
		<p><form method="post" action="/product/${product_id}/remove"><input type="submit" value="Удалить"/></form></p>
		<form method="post" action="/product/${product_id}">
			<input type="number" name="number" placeholder="Кол-во" value="${product.number}" required min="1" max="1000"/>
			<button type="submit">Сохранить</button>
		</form>
		
	`;
}];