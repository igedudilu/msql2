
module.exports = ['/product-ready-zakaz/:product_id', async function(pool, { params, body }) {
	const { product_id } = params;
	
	
	const [[product]] = await pool.query('SELECT * FROM products WHERE id = ?', product_id);
	
	let readiness= (product.readiness)+1;
	if (readiness>2) readiness=0;
	await pool.query('UPDATE products SET ? WHERE id = ?', [{
		readiness,
	}, product_id]);
	
	return res => res.redirect(`/edit-zakaz/${product.zakaz_id}`);
}];