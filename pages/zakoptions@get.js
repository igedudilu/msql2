module.exports = ['/zakoptions', async function(pool, { query }) {
	const [zakaz] = await pool.query('SELECT * FROM zakaz'); 
	let zakazOptions;
			for (let i = 0; i < zakaz.length; i++) {
				const name=zakaz[i].name;
				zakazOptions += name;
				//zakazOptions += \`\<option value=\"\${name}">\${name}<option>\`;
			}
			const z=zakazOptions;
	

	
	return res => res.json(z);
}]; 