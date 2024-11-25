module.exports = ['/search', async function(pool, { query }) {
	const allproduct_query = query.allproduct_query || '';
	const [allproducts] = await pool.query(`SELECT allproducts.name, allproducts.type FROM allproducts WHERE allproducts.name LIKE ?
	`, '%' + allproduct_query + '%');

	return `
		<h1>Поиск изделий</h1>
		<form method="get" action="/search">
			<input type="text" name="allproduct_query" placeholder="Поисковой запрос" value="${allproduct_query ? allproduct_query : ''}"/>
			<button type="submit">Применить</button>
		</form>
		Найдено: ${allproducts.length}
		<ul>
			${allproducts.map(allproduct => `<li>${allproduct.name} ${allproduct.type}</li>`).join('')}
		</ul>
	`;
}];