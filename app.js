const express = require('express');
const app = express();
const PORT = 3400;

app.set('port', (PORT || 3400));

app.use(express.static(__dirname + '/public'));

app.post('/delivery', (req, res) => {
	
	let t = req.query.t;
	let error = req.query.error;
	let pac = req.query.pac;
	
	t = t || 0;
	!!pac ? parseInt(pac) : 10
	
	let data = {
		"delivery_methods": [
		  {
			"id": "10",
			"eta_days": 5,
			"name": "PAC",
			"amount": pac
		  },
		  {
			"id": "10",
			"eta_days": 2,
			"name": "Sedex",
			"amount": 25
		  }
		]
	};
	
	if(error){
		data = {
			"errors": [
			  {
				"key": "Chave",
				"message": "Mensagem de erro"
			  }
			]
		};
	}

	setTimeout(() => {
		res.json(data);
	}, t);
	
	//res.json(data);
});

app.get('/', (req, res) => {
	res.json({
		ok: true
	});
});

app.listen(app.get('port'), function () {
  console.log('Example app listening on port '+ app.get('port') +'!');
});
