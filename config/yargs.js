const options = {
    base: { demand: true, alias: 'b' },
    limite: { demand: false, alias: 'l', default: 10 }
}


const argv = require('yargs')
    .command('listar', 'imprime en consola la tabla de multiplicar', options)
    .command('crear', 'genera un archivo con la tabla de multiplicar', options)
    .help()
    .argv;

module.exports = {
    argv
}