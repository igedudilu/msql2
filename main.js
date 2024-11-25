const express = require('express'),
mysql2 = require('mysql2/promise'),
bodyParser= require('body-parser'),
fs = require('fs'),
nodePath= require('path');
const pool = mysql2.createPool({
	host: 'localhost',
	user: 'root',
	database: 'storage2',
	password: '',
});
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.get('/styles.css', (req, res) => {
	res.sendFile(__dirname + '/styles.css');
});
const nav = ({ path }) => `<ul>
	<li>${path == '/' ? '<span>Склад</span>' : '<a href="/">Склад</a>'}</li>
	
	<li>${path == '/AllProducts' ? '<span>Все изделия</span>' : '<a href="/AllProducts">Все изделия</a>'}</li>
	<li>${path == '/zakaz' ? '<span>Заказы</span>' : '<a href="/zakaz">Заказы</a>'}</li>
</ul>`;

 function loadPages(pages) {
 	pages.forEach(it => {
 		const [_, method] = nodePath.parse(it).name.split('@');
 		const [path, action] = require('./pages/' + it);
 		app[method](path, async (req, res) => {
 			const result = await action(pool, req);
 			if (typeof result == 'function') {
 				result(res);
 			} else {
				res.send('<!DOCTYPE html><html><head><link rel="stylesheet" href="/styles.css"/></head><body><nav>' + nav(req) + '</nav><main>' + result + '</main></body></html>');

 			}
 		});
 	});
 }
 const listOfPages = fs.readdirSync('./pages');
 loadPages(listOfPages);
app.listen(3000, function() {
	console.log('server started at', this.address().port);
});