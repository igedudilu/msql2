
module.exports = ['/add-allproducts', async function(pool, { params, body }) {
	const {name, type, volume, cncrt, a1_6, a1_8,a1_10,a1_12,a1_14,a1_16,a1_18,a1_20,a1_22,a1_25,a1_28,a3_6,a3_8,a3_10,a3_12,a3_14,a3_16,a3_18,a3_20,a3_22,a3_25,a3_28,a3_32,vr_3,vr_5,corner,tube_57,simp_zaklad,k7,comp_zaklad, preparations,arm_dif,phorm_dif
} = body;
	//const reinforcement=Number(a1_6)+Number(a1_8)+Number(a3_8)+Number(a3_12);
	
	const reinforcement= Number(a1_6)+Number( a1_8)+Number(a1_10)+Number(a1_12)+Number(a1_14)+Number(a1_16)+Number(a1_18)+Number(a1_20)+Number(a1_22)+Number(a1_25)+Number(a1_28)+
	Number(a3_6)+Number(a3_8)+Number(a3_10)+Number(a3_12)+Number(a3_14)+Number(a3_16)+Number(a3_18)+Number(a3_20)+Number(a3_22)+Number(a3_25)+Number(a3_28)+
	Number(a3_32)+Number(vr_3)+Number(vr_5)+Number(corner)+Number(tube_57)+Number(simp_zaklad)+Number(k7)+Number(comp_zaklad);
	
	
	const { priceCalc } = require('../PriceCalc');

	const price=await priceCalc(pool, volume, volume, cncrt, a1_6, a1_8,a1_10,a1_12,a1_14,a1_16,a1_18,a1_20,a1_22,a1_25,a1_28,a3_6,a3_8,a3_10,a3_12,a3_14,a3_16,a3_18,a3_20,a3_22,a3_25,a3_28,a3_32,vr_3,vr_5,corner,tube_57,simp_zaklad,k7,comp_zaklad, preparations,arm_dif,phorm_dif
);
	
	await pool.query('INSERT INTO allproducts SET ?',{
		name, type, volume, cncrt, a1_6, a1_8,a1_10,a1_12,a1_14,a1_16,a1_18,a1_20,a1_22,a1_25,a1_28,a3_6,a3_8,a3_10,a3_12,a3_14,a3_16,a3_18,a3_20,a3_22,a3_25,a3_28,a3_32,vr_3,vr_5,corner,tube_57,simp_zaklad,k7,comp_zaklad, preparations,arm_dif,phorm_dif, price, reinforcement,

	});	


return res=>res.redirect(`/AllProducts`);
}];