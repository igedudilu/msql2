module.exports = ['/search-dynamic', async function(pool, { query }) {
	const allproduct_query = query.allproduct_query || '';
	const [allproducts] = await pool.query(`SELECT * FROM allproducts WHERE allproducts.name LIKE ?
	`, '%' + allproduct_query + '%');
	const [zakaz] = await pool.query('SELECT * FROM zakaz'); 
	 let zakazOptions=new Array();
	  for (let i = 0; i < zakaz.length; i++) {
	  zakazOptions[i] = zakaz[i].name;
	} 
	let zakazO = '';
	for (let i = 0; i < zakaz.length; i++) {
	  zakazO += `<option value="${zakaz[i].name}">${zakaz[i].name}</option>`;
	}
	
	let res = `
		<script type="text/javascript">
		async function getNewData(target) {
			const data = await fetch('/search-dynamic-data?allproduct_query=' + target.value);
			const allproducts = await data.json();
			
			
			
			
			zakaz=document.querySelector('.zakazOptions').innerHTML;
			const zakazOptions = zakaz.split(",");

			let alfa=3;

	
			let result=\`\<div class="div1">
\<table>
  \<tr>
    \<th>Название</th>
    \<th>Тип</th>
    \<th>Объем</th>
    \<th>Марка бетона</th>
	\<th>Арматура</th>
	\<th>Цена</th>
    \<th>a1_6</th>
	\<th>a1_8</th>
	\<th>a1_10</th>
	\<th>a1_12</th>
	\<th>a1_14</th>
	\<th>a1_16</th>
	\<th>a1_18</th>
	\<th>a1_20</th>
	\<th>a1_22</th>
	\<th>a1_25</th>
	\<th>a1_28</th>
	\<th>a3_6</th>
	\<th>a3_8</th>
	\<th>a3_10</th>
	\<th>a3_12</th>
	\<th>a3_14</th>
	\<th>a3_16</th>
	\<th>a3_18</th>
	\<th>a3_20</th>
	\<th>a3_22</th>
	\<th>a3_25</th>
	\<th>a3_28</th>
	\<th>a3_32</th>
	\<th>ВР 3</th>
	\<th>Вр 5</th>
	\<th>Уголок</th>
	\<th>Труба 57</th>
	\<th>Простое закладное</th>
	\<th>К 7</th>
	\<th>сложное закладное</th>    
	\<th>Подготовка</th>
	\<th>Арматурный цех</th>
	\<th>Формовочный цех</th>	
    \<th>Действия</th>
	
  </tr>\`;

	  for(let i = 0; i < allproducts.length; i++) {
        const product = allproducts[i];
		result +=\`
    \<tr>
      \<td>\${product.name}</td>
      \<td>\${product.type}</td>
      \<td>\${product.volume}</td>
      \<td>\${product.cncrt}</td>
	  \<td>\${product.reinforcement}</td>
	  \<td>\${product.price}</td>
      \<td>\${product.a1_6}</td>
		\<td>\${product.a1_8}</td>
		\<td>\${product.a1_10}</td>
		\<td>\${product.a1_12}</td>
		\<td>\${product.a1_14}</td>
		\<td>\${product.a1_16}</td>
		\<td>\${product.a1_18}</td>
		\<td>\${product.a1_20}</td>
		\<td>\${product.a1_22}</td>
		\<td>\${product.a1_25}</td>
		\<td>\${product.a1_28}</td>
        \<td>\${product.a3_6}</td>
		\<td>\${product.a3_8}</td>
		\<td>\${product.a3_10}</td>
		\<td>\${product.a3_12}</td>
		\<td>\${product.a3_14}</td>
		\<td>\${product.a3_16}</td>
		\<td>\${product.a3_18}</td>
		\<td>\${product.a3_20}</td>
		\<td>\${product.a3_22}</td>
		\<td>\${product.a3_25}</td>
		\<td>\${product.a3_28}</td>
		\<td>\${product.a3_32}</td>
		\<td>\${product.vr_3}</td>
		\<td>\${product.vr_5}</td>
		\<td>\${product.corner}</td>
		\<td>\${product.tube_57}</td>
		\<td>\${product.simp_zaklad}</td>
		\<td>\${product.k7}</td>
		\<td>\${product.comp_zaklad}</td>      
	  \<td>\${product.preparations}</td>
	  \<td>\${product.arm_dif}</td>
	  \<td>\${product.phorm_dif}</td>	  
      \<td>
	  
	  \<form method=\"post" action=\"/add-product-warehouse/\${product.id}">
	  		
		\<input type=\"number" placeholder=\"кол-во" name=\"number" required min=\"1" max=\"100"/>
		
		\<input type=\"hidden" name=\"allproduct_id" value=\"\${product.id}" />
		
		
			\<input type=\"text" list=\"zakazz" name=\"selectedzk" placeholder=\"Название заказа" required maxlength=\"100">
		\<datalist id=\"zakazz">\`;
		for (let j=0; j<zakazOptions.length; j++){result+=\`\<option value=\"\${zakazOptions[j]}"></option>\`;}
		
		   
		

      	 result +=\`</datalist>
	  \<button type=\"submit">Добавить</button></form>
	  \<a href=\"/AllProducts/\${product.id}">Редактировать</a></td>
	  
    </tr>\`;
    }			
	  result+=\`
  \<tr>
    \<td>\<form method="post" action="/add-allproducts">
	
      \<input type="text" name="name" required maxlength="10"/></td>
      \<td><input type="text" name="type" maxlength="10" /></td>
      \<td><input type="number" name="volume" required min="0.0001" max="100" step="any"/></td>
      \<td><input type="text" name="cncrt" required pattern="(b7,5|b15|b20|b22,5|b25|b27,5|b30|b35|b40)" title="ВВедите одно из значений: b7,5, b15, b20, b22,5, b25, b27,5, b30, b35, b40" /></td>
        \<td></td>
		\<td></td>
		\<td><input type="number" name="a1_6" min="0" max="10000" step="any"/></td>
		\<td><input type="number" name="a1_8" min="0" max="10000" step="any"/></td>
		\<td><input type="number" name="a1_10" min="0" max="10000" step="any"/></td>
		\<td><input type="number" name="a1_12" min="0" max="10000" step="any"/></td>
		\<td><input type="number" name="a1_14" min="0" max="10000" step="any"/></td>
		\<td><input type="number" name="a1_16" min="0" max="10000" step="any"/></td>
		\<td><input type="number" name="a1_18" min="0" max="10000" step="any"/></td>
		\<td><input type="number" name="a1_20" min="0" max="10000" step="any"/></td>
		\<td><input type="number" name="a1_22" min="0" max="10000" step="any"/></td>
		\<td><input type="number" name="a1_25" min="0" max="10000" step="any"/></td>
		\<td><input type="number" name="a1_28" min="0" max="10000" step="any"/></td>
		\<td><input type="number" name="a3_6" min="0" max="10000" step="any"/></td>
		\<td><input type="number" name="a3_8" min="0" max="10000" step="any"/></td>
		\<td><input type="number" name="a3_10" min="0" max="10000" step="any"/></td>
		\<td><input type="number" name="a3_12" min="0" max="10000" step="any"/></td>
		\<td><input type="number" name="a3_14" min="0" max="10000" step="any"/></td>
		\<td><input type="number" name="a3_16" min="0" max="10000" step="any"/></td>
		\<td><input type="number" name="a3_18" min="0" max="10000" step="any"/></td>
		\<td><input type="number" name="a3_20" min="0" max="10000" step="any"/></td>
		\<td><input type="number" name="a3_22" min="0" max="10000" step="any"/></td>
		\<td><input type="number" name="a3_25" min="0" max="10000" step="any"/></td>
		\<td><input type="number" name="a3_28" min="0" max="10000" step="any"/></td>
		\<td><input type="number" name="a3_32" min="0" max="10000" step="any"/></td>
		\<td><input type="number" name="vr_3" min="0" max="10000" step="any"/></td>
		\<td><input type="number" name="vr_5" min="0" max="10000" step="any"/></td>
		\<td><input type="number" name="corner" min="0" max="10000" step="any"/></td>
		\<td><input type="number" name="tube_57" min="0" max="10000" step="any"/></td>
		\<td><input type="number" name="simp_zaklad" min="0" max="10000" step="any"/></td>
		\<td><input type="number" name="k7" min="0" max="10000" step="any"/></td>
		\<td><input type="number" name="comp_zaklad" min="0" max="10000" step="any"/></td>      
	  \<td><input type="number" name="preparations" min="300" max="10000" step="any" /></td>
	  \<td><input type="number" name="arm_dif" min="1" max="20" step="any"/></td>
	  \<td><input type="number" name="phorm_dif" min="3000" max="20000" step="any"/></td>	  
      
	  \<td><button type="submit">Добавить</button></td>
	  
    </form>
  </tr>
</table>\`;
		
			
			
			
			document.querySelector('.div1').innerHTML =result ;
			document.querySelector('.count').innerHTML = allproducts.length;
		}
		</script>`;
		
		
		
		res+=`<h1>Поиск изделий</h1>
		<form method="get" action="/search">
			<input type="text" name="allproduct_query" oninput="javascript:getNewData(this)" placeholder="Поисковой запрос" value="${allproduct_query ? allproduct_query : ''}"/>
		 Найдено: <span class="count">${allproducts.length}</span></form>



			
<div class="div1">
<table>
  <tr>
    <th>Название</th>
    <th>Тип</th>
    <th>Объем</th>
    <th>Марка бетона</th>
	<th>Арматура</th>
	<th>Цена</th>
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
	<th>ВР 3</th>
	<th>Вр 5</th>
	<th>Уголок</th>
	<th>Труба 57</th>
	<th>Простое закладное</th>
	<th>К 7</th>
	<th>сложное закладное</th>    
	<th>Подготовка</th>
	<th>Арматурный цех</th>
	<th>Формовочный цех</th>	
    <th>Действия</th>
	
  </tr>`;
  for(let i = 0; i < allproducts.length; i++) {
        const product = allproducts[i];
		res +=`
    <tr>
      <td>${product.name}</td>
      <td>${product.type}</td>
      <td>${product.volume}</td>
      <td>${product.cncrt}</td>
	  <td>${product.reinforcement}</td>
	  <td>${product.price}</td>
      <td>${product.a1_6}</td>
		<td>${product.a1_8}</td>
		<td>${product.a1_10}</td>
		<td>${product.a1_12}</td>
		<td>${product.a1_14}</td>
		<td>${product.a1_16}</td>
		<td>${product.a1_18}</td>
		<td>${product.a1_20}</td>
		<td>${product.a1_22}</td>
		<td>${product.a1_25}</td>
		<td>${product.a1_28}</td>
        <td>${product.a3_6}</td>
		<td>${product.a3_8}</td>
		<td>${product.a3_10}</td>
		<td>${product.a3_12}</td>
		<td>${product.a3_14}</td>
		<td>${product.a3_16}</td>
		<td>${product.a3_18}</td>
		<td>${product.a3_20}</td>
		<td>${product.a3_22}</td>
		<td>${product.a3_25}</td>
		<td>${product.a3_28}</td>
		<td>${product.a3_32}</td>
		<td>${product.vr_3}</td>
		<td>${product.vr_5}</td>
		<td>${product.corner}</td>
		<td>${product.tube_57}</td>
		<td>${product.simp_zaklad}</td>
		<td>${product.k7}</td>
		<td>${product.comp_zaklad}</td>      
	  <td>${product.preparations}</td>
	  <td>${product.arm_dif}</td>
	  <td>${product.phorm_dif}</td>	  
      <td>
	  
	  <form method="post" action="/add-product-warehouse/${product.id}">
	  		
		<input type="number" placeholder="кол-во" name="number" required min="1" max="100"/>
		
		<input type="hidden" name="allproduct_id" value="${product.id}" />
		<input type="text" list="zakaz" name="selectedzk" placeholder="Название заказа" required maxlength="100">
		<datalist id="zakaz">
		  ${zakazO}
		</datalist>
      	  
	  <button type="submit">Добавить</button></form>
	  <a href="/AllProducts/${product.id}">Редактировать</a></td>
	  
    </tr>`;
    }	
		
		
		

  res+=`
  <tr>
    <td><form method="post" action="/add-allproducts">
	
      <input type="text" name="name" required maxlength="10"/></td>
      <td><input type="text" name="type" maxlength="10" /></td>
      <td><input type="number" name="volume" required min="0.0001" max="100" step="any"/></td>
      <td><input type="text" name="cncrt" required pattern="(b7,5|b15|b20|b22,5|b25|b27,5|b30|b35|b40)" title="ВВедите одно из значений: b7,5, b15, b20, b22,5, b25, b27,5, b30, b35, b40" /></td>
        <td></td>
		<td></td>
		<td><input type="number" name="a1_6" min="0" max="10000" step="any"/></td>
		<td><input type="number" name="a1_8" min="0" max="10000" step="any"/></td>
		<td><input type="number" name="a1_10" min="0" max="10000" step="any"/></td>
		<td><input type="number" name="a1_12" min="0" max="10000" step="any"/></td>
		<td><input type="number" name="a1_14" min="0" max="10000" step="any"/></td>
		<td><input type="number" name="a1_16" min="0" max="10000" step="any"/></td>
		<td><input type="number" name="a1_18" min="0" max="10000" step="any"/></td>
		<td><input type="number" name="a1_20" min="0" max="10000" step="any"/></td>
		<td><input type="number" name="a1_22" min="0" max="10000" step="any"/></td>
		<td><input type="number" name="a1_25" min="0" max="10000" step="any"/></td>
		<td><input type="number" name="a1_28" min="0" max="10000" step="any"/></td>
		<td><input type="number" name="a3_6" min="0" max="10000" step="any"/></td>
		<td><input type="number" name="a3_8" min="0" max="10000" step="any"/></td>
		<td><input type="number" name="a3_10" min="0" max="10000" step="any"/></td>
		<td><input type="number" name="a3_12" min="0" max="10000" step="any"/></td>
		<td><input type="number" name="a3_14" min="0" max="10000" step="any"/></td>
		<td><input type="number" name="a3_16" min="0" max="10000" step="any"/></td>
		<td><input type="number" name="a3_18" min="0" max="10000" step="any"/></td>
		<td><input type="number" name="a3_20" min="0" max="10000" step="any"/></td>
		<td><input type="number" name="a3_22" min="0" max="10000" step="any"/></td>
		<td><input type="number" name="a3_25" min="0" max="10000" step="any"/></td>
		<td><input type="number" name="a3_28" min="0" max="10000" step="any"/></td>
		<td><input type="number" name="a3_32" min="0" max="10000" step="any"/></td>
		<td><input type="number" name="vr_3" min="0" max="10000" step="any"/></td>
		<td><input type="number" name="vr_5" min="0" max="10000" step="any"/></td>
		<td><input type="number" name="corner" min="0" max="10000" step="any"/></td>
		<td><input type="number" name="tube_57" min="0" max="10000" step="any"/></td>
		<td><input type="number" name="simp_zaklad" min="0" max="10000" step="any"/></td>
		<td><input type="number" name="k7" min="0" max="10000" step="any"/></td>
		<td><input type="number" name="comp_zaklad" min="0" max="10000" step="any"/></td>      
	  <td><input type="number" name="preparations" min="300" max="10000" step="any" /></td>
	  <td><input type="number" name="arm_dif" min="1" max="20" step="any"/></td>
	  <td><input type="number" name="phorm_dif" min="3000" max="20000" step="any"/></td>	  
      
	  <td><button type="submit">Добавить</button></td>
	  
    </form>
  </tr>
</table>

</div>

		`;
		res+=`
		
		
		
		
		
      	  <span class="zakazOptions" style="display:none">${zakazOptions}</span>
	`;
	return res;
}];