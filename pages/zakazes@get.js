module.exports = ['/zakaz', async function(pool, req) {
    const [zakazi] = await pool.query('SELECT * FROM zakaz');
    const currScrollPos = req.query.scrollPos || 0; // Получаем значение позиции прокрутки из GET параметров
    let result = `<h1>Список заказов</h1>
         <hr/>
         <div class="div2">
           <table>
             <tr>
 <th>Название</th>
  <th>Информация</th>
 <th>Цена</th>
<th>Дата начала</th>
 <th>Дата конца</th>
<th>Скидка</th>
<th>Действия</th>
             </tr>`;
    for(let i = 0; i < zakazi.length; i++) {
        const zakaz = zakazi[i];
        result +=`
          <tr>
<td><a href="/edit-zakaz/${zakaz.id}">${zakaz.name}</a></td>
<td>${zakaz.inf}</td>
<td>${zakaz.price.toFixed(2)}</td>
<td>${zakaz.start.toLocaleString('ru', {day: '2-digit', month: '2-digit', year: 'numeric'}).replace(',', '.')}</td>
<td>${zakaz.end.toLocaleString('ru', {day: '2-digit', month: '2-digit', year: 'numeric'}).replace(',', '.')}</td>
 <td>${zakaz.discount}<a>%</a></td>
<td><a href="/zakaz/${zakaz.id}">Редактировать</a></td>
          </tr>`;
    }
    result += `
        
       <hr/>
       <form method="post" action="/add-zakaz">
<td><input type="text" name="name" required maxlength="10"></td>
 <td><input type="text" name="inf" maxlength="100"/></td>
<td></td>
 <td><input type="text" name="start"/></td>
<td><input type="text" name="end"/></td>
 <td><input type="number" name="discount" min="0" max="100" step="any"/></td>
<td><button type="submit">Добавить</button></td>
       </form>
	    </table>
       </div>
       <script>
document.addEventListener('DOMContentLoaded', () => { // Ожидаем загрузки всех DOM элементов
 window.scrollTo(0, ${currScrollPos}); // Устанавливаем прокрутку
          });
       </script>`; // Устанавливаем значение прокрутки после отображения HTML кода
    return result;
  }];