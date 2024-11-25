module.exports = ['/AllProducts/:product_id/remove', async function(pool, { params }) {

const {product_id} = params;
const [[product]] = await pool.query('SELECT * FROM allproducts WHERE id = ? ',product_id);

await pool.query('DELETE FROM allproducts WHERE id = ?',product_id);

return res=>res.redirect(`/AllProducts`); 
}];