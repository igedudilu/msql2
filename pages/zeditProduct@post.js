module.exports = ['/zproduct/:product_id', async function(pool, { params, body }) {
	
	const { product_id } = params;
	let { number} = body;
		//const { updateMaterials } = require('../materials');
	

	
	const [[product]] = await pool.query('SELECT * FROM products WHERE id = ?', product_id);
	const [[zakaz]] = await pool.query('SELECT * FROM zakaz WHERE id = ?', product.zakaz_id);
	await pool.query('UPDATE products SET ? WHERE id = ?', [{
		number,
	}, product_id]);
	//await updateMaterials(pool, product.warehouse_id);
	return res => res.redirect(`/edit-zakaz/${zakaz.id}`);
}];