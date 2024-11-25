
module.exports = ['/add-product-zakaz/:zakaz_id', async function(pool, { params, body }) {
	const { allprice } = require('../allprice');
	const {zakaz_id} = params;
	const {selectedprod: pname, number} = body;
	
	const  [[product]]  = await pool.query('SELECT * FROM allproducts WHERE name = ?',pname);
	const allproduct_id = product.id;
	
	
	
	
	await pool.query('INSERT INTO products SET ?',{
		
		allproduct_id,
		zakaz_id,
		number,	
	});	
	
	await allprice(pool, zakaz_id);

	return res=>res.redirect(`/edit-zakaz/${zakaz_id}`);
}];