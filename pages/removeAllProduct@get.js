module.exports = ['/remove-allproduct/:product_id', async function(pool, { params }) {

const {product_id} = params;
const [[product]] = await pool.query('SELECT * FROM allproducts WHERE id = ? ',product_id);

await pool.query('DELETE FROM products WHERE id = ?',product_id);

return res=>res.redirect(`/AllProducts`); 
}];