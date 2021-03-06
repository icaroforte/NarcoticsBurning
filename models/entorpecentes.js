//criando o schema para o mongodb

const mongoose = require('mongoose');

const entorpecenteSchema = mongoose.Schema({
	userName:{
		type: String,
		require: true
	},
	procedimento:{
		type: String,
	},
	n_proced:{
		type: String,
	},
	data_entrada:{
		type: String,
	},
	investigado:{
		type: String,
	},
	substancia:{
		type: String,
	},
	quant:{
		type: Number,
	},
	und:{
		type: String,
	},
	laudo:{
		type: String,
	},
	vara:{
		type: String,
	},
	n_processo:{
		type: String,
	},
	lacre:{
		type: String,
	},
	data_autorizacao:{
		type: String,
	},
	caixa:{
		type: String,
	},
	oficio:{
		type: String,
	},
	delegacia:{
		type: String,
	}
});

const entorpecente = module.exports = mongoose.model('entorpecente', entorpecenteSchema);
