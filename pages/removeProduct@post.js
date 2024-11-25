module.exports = ['/product/:product_id/remove', async function(pool, { params }) {
	
//const { allprice } = require('../allprice');
const {product_id} = params;
const [[product]] = await pool.query('SELECT * FROM products WHERE id = ? ',product_id);
const { updateMaterials } = require('../materials');

await pool.query('DELETE FROM products WHERE id = ?',product_id);

//await allprice(pool, product.zakaz_id);
//Вычисляем общую сумму товаров в складе
const [[sum]] = await pool.query('SELECT SUM(number) as sum FROM products WHERE warehouse_id = ?', product.warehouse_id);
const total_products_number = sum.sum || 0;

//Обновляем значение nofpr в таблице warehouses

await pool.query('UPDATE warehouses SET nofpr = ? WHERE id = ?', [total_products_number, product.warehouse_id]);
await updateMaterials(pool, product.warehouse_id);

return res=>res.redirect(`/warehouse-products/${product.warehouse_id}`); 
}];