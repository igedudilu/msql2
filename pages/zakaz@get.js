module.exports = ['/zakaz/:zakaz_id', async function(pool, { params, query }) {
	const { zakaz_id } = params;
	const [[zakaz]] = await pool.query('SELECT * FROM zakaz WHERE id = ?', zakaz_id);
	
	return `
		<h1>Редактирование заказа ${zakaz.name}  </h1>
		${query.error ? `<div class="error">${query.error}</div>` : ''}
		<form method="post" action="/zakaz/${zakaz_id}">
			<input type="text" name="name" placeholder="Название склада" value="${zakaz.name}" required maxlength="100"/>
				<td><input type="text" name="inf" value="${zakaz.inf}" maxlength="100"/></td>		
				<td><input type="text" name="start" value="${zakaz.start.toLocaleString('ru', {day: '2-digit', month: '2-digit', year: 'numeric'}).replace(',', '.')}"/></td>
				<td><input type="text" name="end" value="${zakaz.end.toLocaleString('ru', {day: '2-digit', month: '2-digit', year: 'numeric'}).replace(',', '.')}"/></td>
				<td><input type="text" name="discount" value="${zakaz.discount}" min="0" max="100" step="any"/></td>			
			<button type="submit">Сохранить</button>
		</form>
		<form method="post" action="/zakaz/${zakaz_id}/remove"><input type="submit" value="Удалить"/>
	`;
}];

//поставить get
//<h1>Редактирование склада ${zakaz.name} <form method="post" action="/warehouse/${warehouse_id}/remove"><input type="submit" value="Удалить"/></form></h1>