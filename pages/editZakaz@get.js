module.exports = ['/edit-zakaz/:zakaz_id', async function(pool, { params }) {
    const { zakaz_id } = params;
    const [productsr] = await pool.query('SELECT * FROM products WHERE zakaz_id= ? AND readiness=1', zakaz_id);
	const [productsnr] = await pool.query('SELECT * FROM products WHERE zakaz_id= ? AND readiness=0', zakaz_id);	
    const [allproducts] = await pool.query('SELECT * FROM allproducts');    
    const[[zakaz]]= await pool.query('SELECT * FROM zakaz WHERE id= ?', zakaz_id);
	const [warehouse] = await pool.query('SELECT * FROM warehouses'); 
	

   // const [materials] = await pool.query('SELECT * FROM materials WHERE warehouse_id= ?', warehouse_id); 
   
	
	let result = `<h1>Готовые изделия заказа ${zakaz.name}</h1>
		<hr/>`;
	result += '<div class="div2"><table>';	
	result += '<tr><th>Название</th><th>Тип</th><th>Кол-во</th><th>Цена за шт</th><th>Цена за все</th><th>действия</th></tr>';
    for(let i = 0; i < productsr.length; i++) {
        const product = allproducts.filter(p => p.id === productsr[i].allproduct_id)[0];
        result += `
		
		<tr><td>${product.name}</td><td>${product.type}</td>
		<td>${productsr[i].number || '0'}</td>
		<td>${product.price}</td> 
		<td>${(product.price*productsr[i].number).toFixed(2)}</td>
		<td><a href='/zproduct/${productsr[i].id}'>Редактировать</a>
		<form method="post" action="/product-ready-zakaz/${productsr[i].id}">
		<button type="submit">Списано</button></form>
		</td></tr>`;
    }	
    result += '</table>';
	
	//вывод изедлий в производстве 
	
	result += `<h1>Изделия в процессе изготовления</h1>
			<hr/>`;
		result += '<table>';	
		result += '<tr><th>Название</th><th>Тип</th><th>Кол-во</th><th>Цена за шт</th><th>Цена за все</th><th>действия</th></tr>';
		for(let i = 0; i < productsnr.length; i++) {
			const product = allproducts.filter(p => p.id === productsnr[i].allproduct_id)[0];
			result += `
			
			<tr><td>${product.name}</td><td>${product.type}</td>
			<td>${productsnr[i].number || '0'}</td>
			<td>${product.price}</td>
			<td>${(product.price*productsnr[i].number).toFixed(2)}</td>
			<td><a href='/zproduct/${productsnr[i].id}'>Редактировать</a>
			<form method="post" action="/product-ready-zakaz/${productsnr[i].id}">
			<button type="submit">Изготовлено</button></form>
			</td></tr>`;
		}	
		result += '</table>';
	
	
	
	let productOptions = '';
	for (let i = 0; i < allproducts.length; i++) {
	  productOptions += `<option value="${allproducts[i].name}">${allproducts[i].name}</option>`;
	}
	let warehouseOptions = '';
	for (let i = 0; i < warehouse.length; i++) {
	  warehouseOptions += `<option value="${warehouse[i].name}">${warehouse[i].name}</option>`;
	}
	result += `
	  <hr/>
	  <form method="post" action="/add-product-zakaz/${zakaz_id}">
		<input type="text" list="allproducts" name="selectedprod" placeholder="Название">
		<datalist id="allproducts">
		  ${productOptions}
		</datalist>
		<input type="text" name="number" placeholder="кол-во"/>
		
		<button type="submit">Добавить</button>
	  </form>
	  </table>
	  </div>
	`;
	
	//вывод списаных изедлий 
	const [productssp] = await pool.query('SELECT * FROM products WHERE zakaz_id= ? AND readiness=2', zakaz_id);
	result += `<h1>Списанные изделия</h1>
			<hr/>`;
		result += '<div class="div2"><table>';	
		result += '<tr><th>Название</th><th>Тип</th><th>Кол-во</th><th>Цена за шт</th><th>Цена за все</th><th>действия</th></tr>';
		for(let i = 0; i < productssp.length; i++) {
			const product = allproducts.filter(p => p.id === productssp[i].allproduct_id)[0];
			result += `
			
			<tr><td>${product.name}</td><td>${product.type}</td>
			<td>${productssp[i].number || '0'}</td>
			<td>${(productssp[i].price)}</td>
			<td>${(productssp[i].price*productssp[i].number).toFixed(2)}</td>
			<td><a href='/product/${productssp[i].id}'>Редактировать</a>
			<form method="post" action="/product-ready-zakaz/${productssp[i].id}">
			<button type="submit">Вернуть в изделия в процессе</button></form>
			</td></tr>
			
			`;
		}	

	return result;
}];