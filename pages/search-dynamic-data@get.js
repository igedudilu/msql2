module.exports = ['/search-dynamic-data', async function(pool, { query }) {
	const allproduct_query = query.allproduct_query || '';
	const [allproducts] = await pool.query(`SELECT * FROM allproducts WHERE (allproducts.name LIKE ?) OR (allproducts.type LIKE ?)
	`, ['%' + allproduct_query + '%', '%' + allproduct_query + '%']);
	
	return res => res.json(allproducts);
}]; 