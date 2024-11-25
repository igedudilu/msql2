module.exports = ['/', async function(pool, { query, body }) {
 	    const warehouse_id = 39;
    const [productsr] = await pool.query('SELECT * FROM products WHERE warehouse_id= ? AND readiness=1', warehouse_id);   
    const [allproducts] = await pool.query('SELECT * FROM allproducts');    
    const[[warehouse]]= await pool.query('SELECT * FROM warehouses WHERE id= ?', warehouse_id);
    const [materials] = await pool.query('SELECT * FROM materials WHERE warehouse_id= ?', warehouse_id); 
	let result = `<h1>${warehouse.name} имеющиеся изделия</h1>
		<hr/>`;
		
	//вывод готовых изделий	
	result += `<h1>Готовые изделия изделия</h1>
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
		<td><a href='/product/${productsr[i].id}'>Редактировать</a>
		<form method="post" action="/product-ready/${productsr[i].id}">
		<button type="submit">Списано</button></form>
		</td></tr>`;
    }	
    result += '</table></div>';


	//вывод изедлий в производстве 
	const [productsnr] = await pool.query('SELECT * FROM products WHERE warehouse_id= ? AND readiness=0', warehouse_id);
	result += `<h1>Изделия в процессе изготовления</h1>
			<hr/>`;
		result += '<div class="div2"><table>';	
		result += '<tr><th>Название</th><th>Тип</th><th>Кол-во</th><th>Цена за шт</th><th>Цена за все</th><th>действия</th></tr>';
		for(let i = 0; i < productsnr.length; i++) {
			const product = allproducts.filter(p => p.id === productsnr[i].allproduct_id)[0];
			result += `
			
			<tr><td>${product.name}</td><td>${product.type}</td>
			<td>${productsnr[i].number || '0'}</td>
			<td>${product.price}</td>
			<td>${(product.price*productsnr[i].number).toFixed(2)}</td>
			<td><a href='/product/${productsnr[i].id}'>Редактировать</a>
			<form method="post" action="/product-ready/${productsnr[i].id}">
			<button type="submit">Изготовлено</button></form>
			</td></tr>
			
			`;
		}	
		result += '</table></div>';



	let productOptions = '';
	for (let i = 0; i < allproducts.length; i++) {
	  productOptions += `<option value="${allproducts[i].name}">${allproducts[i].name}</option>`;
	}
	result += `
	  <hr/>
	  <form method="post" action="/add-product/${warehouse_id}">
		<input type="text" list="allproducts"  name="selectedprod" placeholder="Название" required>
		<datalist id="allproducts">
		  ${productOptions}
		</datalist>
		<input type="number" name="number" required min="1" max="100" placeholder="Кол-во"/>
		<button type="submit">Добавить</button>
	  </form>
	`;

	
	
	
	
    result +=	`
				<hr/>
			<h1>Материалы на складе</h1>
			<hr/>
			<a href='/material/${warehouse_id}'>Добавить материалы на склад</a>
			<hr/>			
			<div class="div3">
			<table>
			  <tr>
				<th>a1_6</th>
				<th>a1_8</th>
				<th>a1_10</th>
				<th>a1_12</th>
				<th>a1_14</th>
				<th>a1_16</th>
				<th>a1_18</th>
				<th>a1_20</th>
				<th>a1_22</th>
				<th>a1_25</th>
				<th>a1_28</th>    
			  </tr>
			  ${materials.map(material => `
				<tr>

			  <td>${material.a1_6}</td>
				<td>${material.a1_8}</td>
				<td>${material.a1_10}</td>
				<td>${material.a1_12}</td>
				<td>${material.a1_14}</td>
				<td>${material.a1_16}</td>
				<td>${material.a1_18}</td>
				<td>${material.a1_20}</td>
				<td>${material.a1_22}</td>
				<td>${material.a1_25}</td>
				<td>${material.a1_28}</td>
				
				
				</tr>`
			  ).join('')}
					</table></div> 
					
					`;
	result +=	`
						
			<hr/>		
			<div class="div3">
			<table>
			  <tr>				
				
				<th>a3_6</th>
				<th>a3_8</th>
				<th>a3_10</th>
				<th>a3_12</th>
				<th>a3_14</th>
				<th>a3_16</th>
				<th>a3_18</th>
				<th>a3_20</th>
				<th>a3_22</th>
				<th>a3_25</th>
				<th>a3_28</th>
				<th>a3_32</th>
	    
			  </tr>
			  ${materials.map(material => `
				<tr>
				<td>${material.a3_6}</td>
				<td>${material.a3_8}</td>
				<td>${material.a3_10}</td>
				<td>${material.a3_12}</td>
				<td>${material.a3_14}</td>
				<td>${material.a3_16}</td>
				<td>${material.a3_18}</td>
				<td>${material.a3_20}</td>
				<td>${material.a3_22}</td>
				<td>${material.a3_25}</td>
				<td>${material.a3_28}</td>
				<td>${material.a3_32}</td>
					
				</tr>`
			  ).join('')}
					</table></div> 
					
					`;
					
		result +=	`
							
					
			<div class="div3">
			<table>
			  <tr>				
				
	    
			  </tr>
			  ${materials.map(material => `
				<tr>

			  
				
				</tr>`
			  ).join('')}
					</table></div> 
					
					`;
				result +=	`
				<hr/>			
					
			<div class="div3">
			<table>
			  <tr>				
				
	
				<th>ВР 3</th>
				<th>Вр 5</th>
				<th>Уголок</th>
				<th>Труба 57</th>
				<th>Простое закладное</th>
				<th>К 7</th>
				<th>сложное закладное</th>
	    
			  </tr>
			  ${materials.map(material => `
				<tr>

			  
				<td>${material.vr_3}</td>
				 <td>${material.vr_5}</td>
				<td>${material.corner}</td>
				<td>${material.tube_57}</td>
				<td>${material.simp_zaklad}</td>
				<td>${material.k7}</td>
				<td>${material.comp_zaklad}</td>  
				
				</tr>`
			  ).join('')}
					</table></div> 
					
					`;
				
	return result;
}];
