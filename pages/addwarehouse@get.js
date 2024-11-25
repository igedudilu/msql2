module.exports = ['/add-warehouse', async function(pool, { query, body }) {
	const [warehouses] = await pool.query('SELECT * FROM warehouses');
	
	return `
		<h1>Добавление склада</h1>
		<form method="post" action="/add-warehouse">
			<input type="text" placeholder="Название склада" minLength="2" required maxlength="100" name="name"/>
			<input type="submit" value="Добавить"/>
		</form>
	`;
}];