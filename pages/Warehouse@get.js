module.exports = ['/warehouse/:warehouse_id', async function(pool, { params, query }) {
	const { warehouse_id } = params;
	const [[warehouse]] = await pool.query('SELECT * FROM warehouses WHERE id = ?', warehouse_id);
	
	return `
		<h1>Редактирование склада ${warehouse.name} <form method="post" action="/warehouse/${warehouse_id}/remove"><input type="submit" value="Удалить"/></form></h1>
		${query.error ? `<div class="error">${query.error}</div>` : ''}
		<form method="post" action="/warehouse/${warehouse_id}">
			<input type="text" name="name" placeholder="Название склада" value="${warehouse.name}" required maxlength="100"/>
			<button type="submit">Сохранить</button>
		</form>
		
	`;
}];