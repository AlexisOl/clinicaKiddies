const pg = require( 'pg');
const environment = require( '../config.js');

 const pool = new pg.Pool(
    {
        host: environment.HOST,
        database:environment.NOMBRE_BASEDATOS,
        user:environment.USUARIO,
        password:environment.PASSWORD,
        port:environment.PUERTO
    }
)

module.exports = {
    pool:pool
}