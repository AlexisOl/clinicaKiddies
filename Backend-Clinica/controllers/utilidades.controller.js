
//funcion para enviar la imagen del logo 
const fs = require('fs');
const path = require('path');
const envio = (req, res) => {
    const imagen = 'logo.png';
    const imagePath = path.join(__dirname, 'img', imagen); // Asegúrate de que la ruta sea correcta
    console.log(imagePath, req);

    fs.exists(imagePath, exists => {
        console.log(imagePath, exists);

        if (exists) {
            const { size } = fs.statSync(imagePath);

            res.writeHead(200, {
                'Content-Type': 'image/png',
                'Content-Length': size,
                'Content-Disposition': `attachment; filename='${imagen}'`
            });
            console.log(imagePath, res);
            fs.createReadStream(imagePath).pipe(res);

        } else {
            res.status(400).send('Error: Image does not exist');
        }
    });
};


module.exports = {
 envio:envio
}