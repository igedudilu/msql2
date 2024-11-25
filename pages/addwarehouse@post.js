module.exports = ['/add-warehouse', async function(pool, { body }) {
    const { name } = body;
    await pool.query('INSERT INTO warehouses SET ?', {
        name,
    });
    const [[{ 'MAX(id)': warehouseId }]] = await pool.query('SELECT MAX(id) FROM warehouses');

    await pool.query('INSERT INTO materials SET warehouse_id = ?', [warehouseId]);
    return res => res.redirect(`/`);
}];