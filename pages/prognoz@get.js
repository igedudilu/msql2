module.exports = ['/prognoz', async function(pool, { params, query }) {

	let To,Ttr,Tpr,Tpod;
	let C=To+Ttr+Tpr+Tpod;
	C=2;
	let H,F=1000,D,q;
	let Cc=H*q/2;
	let Co=F*D/q;
	let EOQ=Math.sqrt((2*F*D)/H);
	let MU,MD=100;
	let RP=MU*MD;	
	let P,AD=14;
	let SS=RP-P*AD;
	let LU,LD=3;
	let MS=RP+EOQ-LU*LD;
	
	return `
	<h1> Затраты на поддержание запасов </h1> <body>
	
<input type="text" list="arm" id="selectedarm" placeholder="Название материала">
<datalist id="arm">
    <option value="a1_6">a1_6</option> 
	<option value="a1_8">a1_8</option> 
	<option value="a1_10">a1_10</option> 
	<option value="a1_12">a1_12</option> 
	<option value="a1_14">a1_14</option> 
	<option value="a1_16">a1_16</option> 
	<option value="a1_18">a1_18</option> 
	<option value="a1_20">a1_20</option> 
	<option value="a1_22">a1_22</option> 
	<option value="a1_25">a1_25</option> 
	<option value="a1_28">a1_28</option> 
	<option value="a3_6">a3_6</option> 
	<option value="a3_8">a3_8</option> 
	<option value="a3_10">a3_10</option> 
	<option value="a3_12">a3_12</option> 
	<option value="a3_14">a3_14</option> 
	<option value="a3_16">a3_16</option> 
	<option value="a3_18">a3_18</option> 
	<option value="a3_20">a3_20</option> 
	<option value="a3_22">a3_22</option> 
	<option value="a3_25">a3_25</option> 
	<option value="a3_28">a3_28</option> 
	<option value="a3_32">a3_32</option> 
	<option value="vr_3">vr_3</option> 
	<option value="vr_5">vr_5</option> 
	<option value="corner">corner</option> 
	<option value="tube_57">tube_57</option> 
	<option value="simp_zaklad">simp_zaklad</option> 
	<option value="k7">k7</option>
	<option value="comp_zaklad">comp_zaklad</option>
</datalist>
<p id="selectedarm-text">Выберите материал из списка</p>

<script>
    document.getElementById('selectedarm').addEventListener('change', function() {
        var selectedValue = this.value;
        var text = document.getElementById('selectedarm-text');
        switch(selectedValue) {
            case 'a1_6':
                text.innerHTML = '<p>- Страховой запас: 250 тонн</p><p>- Затраты по хранению: 75 000 рублей в месяц.</p><p>- Суммарные затраты по поддержанию запасов: 2465030 рублей</p><p>- Оптимальная партия заказа материалов: 163 тонны</p><p>- Уровень безопасности(ROP): 266 тонн</p>';
                break;
            case 'a1_8':
                text.innerHTML = 'Вы выбрали материал A1_8';
                break;
            case 'a1_10':
                text.innerHTML = 'Вы выбрали материал A1_10';
                break;
            // добавьте все необходимые вам опции
            default:
                text.innerHTML = 'Выберите материал из списка';
                break;
        }
    });
</script>

</body> 
		
	`;
}];












