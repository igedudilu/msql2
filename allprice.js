async function allprice(pool,zakaz_id) {
	console.log('id=  ',zakaz_id);

	const [products] =await pool.query('SELECT * FROM products WHERE zakaz_id = ?', zakaz_id);
	const [allproducts] = await pool.query('SELECT * FROM allproducts');
	let price=0;
	for(let i = 0; i < products.length; i++) {
        const product = allproducts.filter(p => p.id === products[i].allproduct_id)[0];
		price+=(Number(product.price)*Number(products[i].number));
	}
	

	await pool.query('UPDATE zakaz SET price=(?*(100-zakaz.discount)/100) WHERE id= ?', [price.toFixed(2), zakaz_id]);
}

module.exports = {allprice};