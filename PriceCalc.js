async function priceCalc(pool, volume, volume, cncrt, a1_6, a1_8,a1_10,a1_12,a1_14,a1_16,a1_18,a1_20,a1_22,a1_25,a1_28,a3_6,a3_8,a3_10,a3_12,a3_14,a3_16,a3_18,a3_20,a3_22,a3_25,a3_28,a3_32,vr_3,vr_5,corner,tube_57,simp_zaklad,k7,comp_zaklad, preparations, arm_dif, phorm_dif
) {
	/* const [[cementprop]] =await pool.query('SELECT cement FROM concrete WHERE class = ?',cncrt);
	const [[rubbleprop]] =await pool.query('SELECT rubble FROM concrete WHERE class = ?',cncrt);
	const [[pgsprop]] =await pool.query('SELECT pgs FROM concrete WHERE class = ?',cncrt);
	const [[waterprop]] =await pool.query('SELECT water FROM concrete WHERE class = ?',cncrt); */
	const [[proportions]] =await pool.query('SELECT * FROM concrete WHERE class = ?',cncrt);
	
	const [[cementprice]] =await pool.query('SELECT price FROM materialprice WHERE name = "cement"',);
	
	const [[rubbleprice]] =await pool.query('SELECT price FROM materialprice WHERE name = "rubble"');
	const [[pgsprice]] =await pool.query('SELECT price FROM materialprice WHERE name = "pgs"');
	const [[waterprice]] =await pool.query('SELECT price FROM materialprice WHERE name = "water"');
	
/* 	console.log('cement price = ', Number(volume)*(proportions.cement*cementprice.price)*1.02);
	console.log('rubble price = ', Number(volume)*(proportions.rubble*rubbleprice.price)*1.02);
	console.log('pgs price = ', Number(volume)*(proportions.pgs*pgsprice.price)*1.06); */
	
	
	//const beton= (cementprop.cement*cementprice.price+rubbleprop.rubble*rubbleprice.price+pgsprop.pgs*pgsprice.price+waterprop.water*waterprice.price)*1.02;
	const beton= Number(volume)*((proportions.cement*cementprice.price+proportions.rubble*rubbleprice.price)*1.02+proportions.water*waterprice.price/1000+proportions.pgs*pgsprice.price*1.06);
	
	const [[a1_6p]] = await pool.query('SELECT price FROM materialprice WHERE name = "a1_6"');
	const [[a1_8p]] = await pool.query('SELECT price FROM materialprice WHERE name = "a1_8"');
	const [[a1_10p]] = await pool.query('SELECT price FROM materialprice WHERE name = "a1_10"');
	const [[a1_12p]] = await pool.query('SELECT price FROM materialprice WHERE name = "a1_12"');
	const [[a1_14p]] = await pool.query('SELECT price FROM materialprice WHERE name = "a1_14"');
	const [[a1_16p]] = await pool.query('SELECT price FROM materialprice WHERE name = "a1_16"');
	const [[a1_18p]] = await pool.query('SELECT price FROM materialprice WHERE name = "a1_18"');
	const [[a1_20p]] = await pool.query('SELECT price FROM materialprice WHERE name = "a1_20"');
	const [[a1_22p]] = await pool.query('SELECT price FROM materialprice WHERE name = "a1_22"');
	const [[a1_25p]] = await pool.query('SELECT price FROM materialprice WHERE name = "a1_25"');
	const [[a1_28p]] = await pool.query('SELECT price FROM materialprice WHERE name = "a1_28"');
	const [[a3_6p]] = await pool.query('SELECT price FROM materialprice WHERE name = "a3_6"');
	const [[a3_8p]] = await pool.query('SELECT price FROM materialprice WHERE name = "a3_8"');
	const [[a3_10p]] = await pool.query('SELECT price FROM materialprice WHERE name = "a3_10"');
	const [[a3_12p]] = await pool.query('SELECT price FROM materialprice WHERE name = "a3_12"');
	const [[a3_14p]] = await pool.query('SELECT price FROM materialprice WHERE name = "a3_14"');
	const [[a3_16p]] = await pool.query('SELECT price FROM materialprice WHERE name = "a3_16"');
	const [[a3_18p]] = await pool.query('SELECT price FROM materialprice WHERE name = "a3_18"');
	const [[a3_20p]] = await pool.query('SELECT price FROM materialprice WHERE name = "a3_20"');
	const [[a3_22p]] = await pool.query('SELECT price FROM materialprice WHERE name = "a3_22"');
	const [[a3_25p]] = await pool.query('SELECT price FROM materialprice WHERE name = "a3_25"');
	const [[a3_28p]] = await pool.query('SELECT price FROM materialprice WHERE name = "a3_28"');
	const [[a3_32p]] = await pool.query('SELECT price FROM materialprice WHERE name = "a3_32"');
	const [[vr_3p]] = await pool.query('SELECT price FROM materialprice WHERE name = "vr_3"');
	const [[vr_5p]] = await pool.query('SELECT price FROM materialprice WHERE name = "vr_5"');
	const [[cornerp]] = await pool.query('SELECT price FROM materialprice WHERE name = "corner"');
	const [[tube_57p]] = await pool.query('SELECT price FROM materialprice WHERE name = "tube_57"');
	const [[simp_zakladp]] = await pool.query('SELECT price FROM materialprice WHERE name = "simp_zaklad"');
	const [[k7p]] = await pool.query('SELECT price FROM materialprice WHERE name = "k7"');
	const [[comp_zakladp]] = await pool.query('SELECT price FROM materialprice WHERE name = "comp_zaklad"');

	//console.log('beton price = ', beton);
	
	const matprice = (
  Number(a1_6) * a1_6p.price +
  Number(a1_8) * a1_8p.price +
  Number(a1_10) * a1_10p.price +
  Number(a1_12) * a1_12p.price +
  Number(a1_14) * a1_14p.price +
  Number(a1_16) * a1_16p.price +
  Number(a1_18) * a1_18p.price +
  Number(a1_20) * a1_20p.price +
  Number(a1_22) * a1_22p.price +
  Number(a1_25) * a1_25p.price +
  Number(a1_28) * a1_28p.price +
  Number(a3_6) * a3_6p.price +
  Number(a3_8) * a3_8p.price +
  Number(a3_10) * a3_10p.price +
  Number(a3_12) * a3_12p.price +
  Number(a3_14) * a3_14p.price +
  Number(a3_16) * a3_16p.price +
  Number(a3_18) * a3_18p.price +
  Number(a3_20) * a3_20p.price +
  Number(a3_22) * a3_22p.price +
  Number(a3_25) * a3_25p.price +
  Number(a3_28) * a3_28p.price +
  Number(a3_32) * a3_32p.price +
  Number(vr_3) * vr_3p.price +
  Number(vr_5) * vr_5p.price +
  Number(corner) * cornerp.price +
  Number(tube_57) * tube_57p.price +
  Number(simp_zaklad) * simp_zakladp.price +
  Number(k7) * k7p.price +
  Number(comp_zaklad) * comp_zakladp.price
) / 1000 * 1.02 + beton;
	
	
	console.log('podgotovka = ', Number(volume));
	console.log('arnatura = ', Number(arm_dif));
	console.log('formovochniy = ', Number(phorm_dif));
	const matpricends=matprice*1.2;//цена всех материалов с ндс
	console.log('NDS price = ', matpricends);
	const zparm=(Number(a1_6) +
  Number(a1_8)  +
  Number(a1_10)  +
  Number(a1_12)  +
  Number(a1_14)  +
  Number(a1_16)  +
  Number(a1_18)  +
  Number(a1_20) +
  Number(a1_22) +
  Number(a1_25)  +
  Number(a1_28)  +
  Number(a3_6)  +
  Number(a3_8)  +
  Number(a3_10)  +
  Number(a3_12) +
  Number(a3_14)  +
  Number(a3_16) +
  Number(a3_18) +
  Number(a3_20) +
  Number(a3_22)  +
  Number(a3_25) +
  Number(a3_28)  +
  Number(a3_32)  +
  Number(vr_3) +
  Number(vr_5) +
  Number(corner)  +
  Number(tube_57)  +
  Number(simp_zaklad)  +
  Number(k7)  +
  Number(comp_zaklad))*Number(arm_dif);//зарплата арматурного цеха
	const zpform=volume*Number(phorm_dif);//зарплата формовочного цеха
	const zpbsu=volume*250;//зп бсу
	const zpceh=zparm+zpform+zpbsu;//общ зп цехов
	const energ=volume*1484;//энергоносители
	const zpaup=volume*1000;//зп ауп
	const zatrat=matpricends+zpceh;//всего затраты с ндс
	const podgotovka=volume*Number(preparations);//затраты на подготовку
	const unsean =matpricends*0.06;//непредвиденные
	const selfcost=zatrat+podgotovka+energ+zpaup+unsean;//себестоимость
	const profitability=selfcost*0.15;//рентабельность
	const price=selfcost+profitability;
	
	
	//console.log('beton price = ', beton);
	return price.toFixed(2);
}

module.exports = {priceCalc};