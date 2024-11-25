module.exports = ['/product/:product_id', async function(pool, { params, body }) {
	const { product_id } = params;
	let { number} = body;
		const { updateMaterials } = require('../materials');
	

	
	const [[product]] = await pool.query('SELECT * FROM products WHERE id = ?', product_id);
	
	await pool.query('UPDATE products SET ? WHERE id = ?', [{
		number,
	}, product_id]);
	await updateMaterials(pool, product.warehouse_id);
	return res => res.redirect(`/warehouse-products/${product.warehouse_id}`);
}];