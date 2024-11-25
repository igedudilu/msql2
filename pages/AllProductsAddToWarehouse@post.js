
module.exports = ['/add-product-warehouse/:product_id', async function(pool, { params, body }) {
	
	const { number,allproduct_id, selectedzk: zakaz_name} = body;
	const [[zakaz]] = await pool.query('SELECT * FROM zakaz WHERE name = ?',zakaz_name);
	const warehouse_id = 39;
	const zakaz_id = zakaz.id;
	await pool.query('INSERT INTO products SET ?',{
		warehouse_id,
		allproduct_id,
		zakaz_id,
		number,	
	});	

	return res=>res.redirect(`/AllProducts`);
}];