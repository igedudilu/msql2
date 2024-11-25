module.exports = ['/AllProducts/:product_id', async function(pool, { params, query }) {
	const { product_id } = params;
	const [[product]] = await pool.query('SELECT * FROM allproducts WHERE id = ?', product_id);
	
	let result = `<h1>Редактирование изделия</h1>
		<hr/>`;
		
			
			result+=`			
<div class="div2"><table>
  <tr>
    <th>Название</th>
    <th>Тип</th>
    <th>Объем</th>
    <th>Марка бетона</th>
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
	
	
	
	
	
	
	
	result+= `
		
		
		<form method="post" action="/AllProducts/${product_id}">
		    <td><input type="text" name="name" placeholder="Название" value="${product.name}" required maxlength="10"/></td>
			<td><input type="text" name="type" placeholder="Тип изделия" value="${product.type || ''}" maxlength="10"/></td>
			<td><input type="number" name="volume" placeholder="Объем" value="${product.volume || ''}" required min="0.0001" max="100" step="any"/></td>
			<td><input type="text" name="cncrt" placeholder="Марка бетона" value="${product.cncrt || ''}" required pattern="(b7,5|b15|b20|b22,5|b25|b27,5|b30|b35|b40)" title="ВВедите одно из значений: b7,5, b15, b20, b22,5, b25, b27,5, b30, b35, b40"/></td>
			<td><input type="number" name="a1_6" placeholder="a1_6" value="${product.a1_6 || ''}" min="0" max="10000" step="any"/></td>
			<td><input type="number" name="a1_8" placeholder="a1_8" value="${product.a1_8 || ''}" min="0" max="10000" step="any"/></td>
			<td><input type="number" name="a1_10" placeholder="a1_10" value="${product.a1_10 || ''}" min="0" max="10000" step="any" /> </td>
			<td><input type="number" name="a1_12" placeholder="a1_12" value="${product.a1_12 || ''}" min="0" max="10000" step="any" /> </td>
			<td><input type="number" name="a1_14" placeholder="a1_14" value="${product.a1_14 || ''}" min="0" max="10000" step="any" /> </td>
			<td><input type="number" name="a1_16" placeholder="a1_16" value="${product.a1_16 || ''}" min="0" max="10000" step="any" /> </td>
			<td><input type="number" name="a1_18" placeholder="a1_18" value="${product.a1_18 || ''}" min="0" max="10000" step="any" /> </td>
			<td><input type="number" name="a1_20" placeholder="a1_20" value="${product.a1_20 || ''}" min="0" max="10000" step="any" /> </td>
			<td><input type="number" name="a1_22" placeholder="a1_22" value="${product.a1_22 || ''}" min="0" max="10000" step="any" /> </td>
			<td><input type="number" name="a1_25" placeholder="a1_25" value="${product.a1_25 || ''}" min="0" max="10000" step="any" /> </td>
			<td><input type="number" name="a1_28" placeholder="a1_28" value="${product.a1_28 || ''}" min="0" max="10000" step="any" /> </td>
			<td><input type="number" name="a3_6" placeholder="a3_6" value="${product.a3_6 || ''}" min="0" max="10000" step="any" /> </td>
			<td><input type="number" name="a3_8" placeholder="a3_8" value="${product.a3_8 || ''}" min="0" max="10000" step="any" /> </td>
			<td><input type="number" name="a3_10" placeholder="a3_10" value="${product.a3_10 || ''}" min="0" max="10000" step="any" /> </td>
			<td><input type="number" name="a3_12" placeholder="a3_12" value="${product.a3_12 || ''}" min="0" max="10000" step="any" /> </td>
			<td><input type="number" name="a3_14" placeholder="a3_14" value="${product.a3_14 || ''}" min="0" max="10000" step="any" /> </td>
			<td><input type="number" name="a3_16" placeholder="a3_16" value="${product.a3_16 || ''}" min="0" max="10000" step="any" /> </td>
			<td><input type="number" name="a3_18" placeholder="a3_18" value="${product.a3_18 || ''}" min="0" max="10000" step="any" /> </td>
			<td><input type="number" name="a3_20" placeholder="a3_20" value="${product.a3_20 || ''}" min="0" max="10000" step="any" /> </td>
			<td><input type="number" name="a3_22" placeholder="a3_22" value="${product.a3_22 || ''}" min="0" max="10000" step="any" /> </td>
			<td><input type="number" name="a3_25" placeholder="a3_25" value="${product.a3_25 || ''}" min="0" max="10000" step="any" /> </td>
			<td><input type="number" name="a3_28" placeholder="a3_28" value="${product.a3_28 || ''}" min="0" max="10000" step="any" /> </td>
			<td><input type="number" name="a3_32" placeholder="a3_32" value="${product.a3_32 || ''}" min="0" max="10000" step="any" /> </td>
			<td><input type="number" name="vr_3" placeholder="vr_3" value="${product.vr_3 || ''}" min="0" max="10000" step="any" /></td>
			<td><input type="number" name="vr_5" placeholder="vr_5" value="${product.vr_5 || ''}" min="0" max="10000" step="any" /></td>
			<td><input type="number" name="corner" placeholder="corner" value="${product.corner || ''}" min="0" max="10000" step="any" /> </td>
			<td><input type="number" name="tube_57" placeholder="tube_57" value="${product.tube_57 || ''}" min="0" max="10000" step="any" /> </td>
			<td><input type="number" name="simp_zaklad" placeholder="simp_zaklad" value="${product.simp_zaklad || ''}" min="0" max="10000" step="any" /> </td>
			<td><input type="number" name="k7" placeholder="k7" value="${product.k7 || ''}" min="0" max="10000" step="any" /> </td>
			<td><input type="number" name="comp_zaklad" placeholder="comp_zaklad" value="${product.comp_zaklad || ''}" min="0" max="10000" step="any" /></td>
			<td><input type="number" name="preparations" min="300" max="10000" step="any" value="${product.preparations || ''}" /></td>
			<td><input type="number" name="arm_dif" min="1" max="20" step="any" value="${product.arm_dif || ''}"/></td>
			<td><input type="number" name="phorm_dif" min="3000" max="20000" step="any" value="${product.phorm_dif || ''}"/></td>


			<td><button type="submit">Сохранить</button>
		</form></table></div>
		<p><form method="post" action="/AllProducts/${product_id}/remove"><input type="submit" value="Удалить"/></form></p></td>
	`;
	return result;
}];