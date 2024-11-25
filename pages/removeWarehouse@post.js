module.exports = ['/warehouse/:warehouse_id/remove', async function(pool, { params, body }) {
	const { warehouse_id } = params;
	
	try {	
		await pool.query('DELETE FROM warehouses WHERE id = ?', warehouse_id);
		
		return res => res.redirect(`/`);
	} catch(err) {
		return res => res.redirect(`/warehouse/${warehouse_id}?error=Невозможно удалить пользователя!`);
	}
}];