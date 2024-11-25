module.exports = ['/material/:warehouse_id', async function(pool, { params, body }) {
	const { warehouse_id } = params;
	let { a1_6start, a1_8start,a1_10start,a1_12start,a1_14start,a1_16start,a1_18start,a1_20start,a1_22start,a1_25start,a1_28start,a3_6start,a3_8start,a3_10start,a3_12start,a3_14start,a3_16start,a3_18start,a3_20start,a3_22start,a3_25start,a3_28start,a3_32start,vr_3start,vr_5start,cornerstart,tube_57start,simp_zakladstart,k7start,comp_zakladstart} = body;

	const [[material]] = await pool.query('SELECT * FROM materials WHERE warehouse_id = ?', warehouse_id);
	
	const { updateMaterials } = require('../materials');
	
	console.log('a =', material.k7start);
	console.log('b start=', material.comp_zakladstart);
	a1_6start=material.a1_6start+Number(a1_6start);
	a1_8start=material.a1_8start+Number(a1_8start);
	a1_10start=material.a1_10start+Number(a1_10start);
	a1_12start=material.a1_12start+Number(a1_12start);
	a1_14start=material.a1_14start+Number(a1_14start);
	a1_16start=material.a1_16start+Number(a1_16start);
	a1_18start=material.a1_18start+Number(a1_18start);
	a1_20start=material.a1_20start+Number(a1_20start);
	a1_22start=material.a1_22start+Number(a1_22start);
	a1_25start=material.a1_25start+Number(a1_25start);
	a1_28start=material.a1_28start+Number(a1_28start);
	a3_6start=material.a3_6start+Number(a3_6start);
	a3_8start=material.a3_8start+Number(a3_8start);
	a3_10start=material.a3_10start+Number(a3_10start);
	a3_12start=material.a3_12start+Number(a3_12start);
	a3_14start=material.a3_14start+Number(a3_14start);
	a3_16start=material.a3_16start+Number(a3_16start);
	a3_18start=material.a3_18start+Number(a3_18start);
	a3_20start=material.a3_20start+Number(a3_20start);
	a3_22start=material.a3_22start+Number(a3_22start);
	a3_25start=material.a3_25start+Number(a3_25start);
	a3_28start=material.a3_28start+Number(a3_28start);
	a3_32start=material.a3_32start+Number(a3_32start);
	vr_3start=material.vr_3start+Number(vr_3start);
	vr_5start=material.vr_5start+Number(vr_5start);
	cornerstart=material.cornerstart+Number(cornerstart);
	tube_57start=material.tube_57start+Number(tube_57start);
	simp_zakladstart=material.simp_zakladstart+Number(simp_zakladstart);
	k7start=material.k7start+Number(k7start);
	comp_zakladstart=material.comp_zakladstart+Number(comp_zakladstart);
	console.log('a =', material.k7start);
	console.log('b start=', material.comp_zakladstart);


	await pool.query('UPDATE materials SET ? WHERE warehouse_id = ?', [{ a1_6start, a1_8start,a1_10start,a1_12start,a1_14start,a1_16start,a1_18start,a1_20start,a1_22start,a1_25start,a1_28start,a3_6start,a3_8start,a3_10start,a3_12start,a3_14start,
		a3_16start,a3_18start,a3_20start,a3_22start,a3_25start, a3_28start, a3_32start, vr_3start, vr_5start, cornerstart, tube_57start, simp_zakladstart, k7start, comp_zakladstart,

	}, warehouse_id]);
	
	await updateMaterials(pool, warehouse_id);

	return res => res.redirect(`/warehouse-products/${warehouse_id}`);
}];