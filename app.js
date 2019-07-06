
const colors = require('colors');

const { generarTabla, listarTabla } = require('./multiplicar/multiplicar');
// const argv = require('./config/yargs').argv;
const { argv } = require('./config/yargs');



if (!argv._) {
    throw new Error('Debe indicar el comando a ejecutar: [listar, generar]');
} else if (argv._.length > 1) {
    throw new Error('Solo puede ejecutar un comando. ', argv._);
}

const comando = argv._[0];
switch (comando) {
    case 'listar': {
        listarTabla(argv.base, argv.limite);
        break;
    } case 'crear': {
        generarTabla(argv.base, argv.limite)
            .then(filename => console.log(`Se genero el archivo `.bold +  `"${filename}"`.yellow.bold))
            .catch(err => console.error(err));
        break;
    } default: {
        console.log('comando no reconocido: ', comando);
        break;
    }
}
