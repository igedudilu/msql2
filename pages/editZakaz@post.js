module.exports = ['/zakaz/:zakaz_id', async function(pool, { params, body }) {
	const { zakaz_id } = params;
  const { name, inf, start, end, discount } = body;
  let start_date,end_date;
  let today = new Date().toLocaleDateString();
  

  // Преобразуем даты из формата `DD.MM.YYYY` в объекты типа Date
  if (start== null || start ==0 ) {
  start_date = today.split('.').reverse().join('-');
 } 
  else {start_date = new Date(start.split('.').reverse().join('-')); }
  
if (end==null || end==0 ) {end_date = today.split('.').reverse().join('-');} 
else  {
end_date = new Date(end.split('.').reverse().join('-')); }
  
	await pool.query('UPDATE zakaz SET ? WHERE id = ?', [{
		name,
		inf,
		start: start_date, // передаем дату в формате Date
		end: end_date, // передаем дату в формате Date
		discount,
	}, zakaz_id]);
	
	return res => res.redirect(`/zakaz`);
}];