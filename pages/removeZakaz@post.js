module.exports = ['/zakaz/:zakaz_id/remove', async function(pool, { params, body }) {
	const { zakaz_id } = params;
	
	try {	
		await pool.query('DELETE FROM zakaz WHERE id = ?', zakaz_id);
		
		return res => res.redirect(`/zakaz`);
	} catch(err) {
		return res => res.redirect(`/zakaz/${zakaz_id}?error=Невозможно удалить!`);
	}
}];