module.exports = ['/remove-product/:product_id', async function(pool, { params }) {

const {product_id} = params;
const [[product]] = await pool.query('SELECT * FROM products WHERE id = ? ',product_id);

await pool.query('DELETE FROM products WHERE id = ?',product_id);

const [[sum]] = await pool.query('SELECT SUM(number) as sum FROM products WHERE warehouse_id = ?', product.warehouse_id);
const total_products_number = sum.sum || 0;

return res=>res.redirect(`/warehouse-products/${product.warehouse_id}`); 
}];