
module.exports = ['/add-product/:warehouse_id', async function(pool, { params, body }) {
	const { updateMaterials } = require('../materials');
	const {warehouse_id} = params;
	const {selectedprod: pname, number} = body;
	
	const  [[product]]  = await pool.query('SELECT * FROM allproducts WHERE name = ?',pname);
	const allproduct_id = product.id;
	const price = product.price;
	
	await pool.query('INSERT INTO products SET ?',{
		warehouse_id,
		allproduct_id,
		number,	
		price,
	});	
	await updateMaterials(pool, warehouse_id);

	return res=>res.redirect(`/warehouse-products/${warehouse_id}`);
}];