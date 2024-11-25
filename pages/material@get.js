module.exports = ['/material/:warehouse_id', async function(pool, { params, query }) {
	const { warehouse_id } = params;
	
	const [[warehouse]] = await pool.query('SELECT * FROM warehouses WHERE id = ?', warehouse_id);
	let result = `<h1>Добавление материалов на склад ${warehouse.name}</h1>`;
	
	result+=`			
<div class="div2"><table>
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
    <th>Действия</th>	
  </tr>`;
  
  result+= `
		
		
		<form method="post" action="/material/${warehouse_id}">
		   	<td><input type="number" name="a1_6start" placeholder="a1_6" min="0" max="10000" step="any"/></td>
			<td><input type="number" name="a1_8start" placeholder="a1_8"  min="0" max="10000" step="any"/></td>
			<td><input type="number" name="a1_10start" placeholder="a1_10"  min="0" max="10000" step="any" /> </td>
			<td><input type="number" name="a1_12start" placeholder="a1_12"  min="0" max="10000" step="any" /> </td>
			<td><input type="number" name="a1_14start" placeholder="a1_14"  min="0" max="10000" step="any" /> </td>
			<td><input type="number" name="a1_16start" placeholder="a1_16"  min="0" max="10000" step="any" /> </td>
			<td><input type="number" name="a1_18start" placeholder="a1_18" min="0" max="10000" step="any" /> </td>
			<td><input type="number" name="a1_20start" placeholder="a1_20"  min="0" max="10000" step="any" /> </td>
			<td><input type="number" name="a1_22start" placeholder="a1_22"  min="0" max="10000" step="any" /> </td>
			<td><input type="number" name="a1_25start" placeholder="a1_25"  min="0" max="10000" step="any" /> </td>
			<td><input type="number" name="a1_28start" placeholder="a1_28"  min="0" max="10000" step="any" /> </td>
			<td><input type="number" name="a3_6start" placeholder="a3_6" min="0" max="10000" step="any" /> </td>
			<td><input type="number" name="a3_8start" placeholder="a3_8"  min="0" max="10000" step="any" /> </td>
			<td><input type="number" name="a3_10start" placeholder="a3_10" min="0" max="10000" step="any" /> </td>
			<td><input type="number" name="a3_12start" placeholder="a3_12" min="0" max="10000" step="any" /> </td>
			<td><input type="number" name="a3_14start" placeholder="a3_14"  min="0" max="10000" step="any" /> </td>
			<td><input type="number" name="a3_16start" placeholder="a3_16" min="0" max="10000" step="any" /> </td>
			<td><input type="number" name="a3_18start" placeholder="a3_18" min="0" max="10000" step="any" /> </td>
			<td><input type="number" name="a3_20start" placeholder="a3_20" min="0" max="10000" step="any" /> </td>
			<td><input type="number" name="a3_22start" placeholder="a3_22" min="0" max="10000" step="any" /> </td>
			<td><input type="number" name="a3_25start" placeholder="a3_25" min="0" max="10000" step="any" /> </td>
			<td><input type="number" name="a3_28start" placeholder="a3_28" min="0" max="10000" step="any" /> </td>
			<td><input type="number" name="a3_32start" placeholder="a3_32"  min="0" max="10000" step="any" /> </td>
			<td><input type="number" name="vr_3start" placeholder="vr_3"  min="0" max="10000" step="any" /></td>
			<td><input type="number" name="vr_5start" placeholder="vr_5" min="0" max="10000" step="any" /></td>
			<td><input type="number" name="cornerstart" placeholder="corner"  min="0" max="10000" step="any" /> </td>
			<td><input type="number" name="tube_57start" placeholder="tube_57"  min="0" max="10000" step="any" /> </td>
			<td><input type="number" name="simp_zakladstart" placeholder="simp_zaklad" min="0" max="10000" step="any" /> </td>
			<td><input type="number" name="k7start" placeholder="k7"  min="0" max="10000" step="any" /> </td>
			<td><input type="number" name="comp_zakladstart" placeholder="comp_zaklad"  min="0" max="10000" step="any" /></td>

			<td><button type="submit">Сохранить</button>
		</form></td></table></div>
	`;
	return result;
}];