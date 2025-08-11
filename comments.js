// Servidor web básico usando Express
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Ruta de ejemplo
app.get('/', (req, res) => {
	res.send('Servidor web activo');
});

// Iniciar el servidor
app.listen(PORT, () => {
	console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
