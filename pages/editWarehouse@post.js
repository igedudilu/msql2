module.exports = ['/warehouse/:warehouse_id', async function(pool, { params, body }) {
	const { warehouse_id } = params;
	const { name } = body;
	
	await pool.query('UPDATE warehouses SET ? WHERE id = ?', [{
		name,
	}, warehouse_id]);
	
	return res => res.redirect(`/warehouse-products/${warehouse_id}`);
}];