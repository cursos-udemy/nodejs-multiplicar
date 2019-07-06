const fs = require('fs');
var colors = require('colors');

const LIMITE_DEFAULT = 10;

const getTable = (base, limite = LIMITE_DEFAULT) => {
    let tabla = [];
    for (let i = 1; i <= limite; i++) {
        tabla.push({ base, number: i, result: (i * base) })
    }
    return tabla;
};

const tableToData = (table) => table.reduce(
    (data, { base, number, result }) => data + `${number} * ${base} = ${result} \n`, ''
);

const listarTabla = (base, limite = LIMITE_DEFAULT) => {
    if (!Number(base)) {
        throw new Error('La base no es numerica');
    }
    if (!Number(limite)){
        throw new Error('El limite debe ser numerico');
    }
    const table = getTable(base, limite);

    console.log('=========================='.green)
    console.log(`        tabla del ${base}`.green)
    console.log('==========================\n'.green)
    console.log(tableToData(table).yellow);
    console.log('=========================='.green)
}

const generarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject('La base no es numerica');
            return;
        }
        const filename = `tablas/tabla-${base}.txt`;
        const table = getTable(base, limite);
        const data = new Uint8Array(Buffer.from(tableToData(table)));
        fs.writeFile(filename, data, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve(filename);
            }
        });
    });
};

module.exports = {
    generarTabla,
    listarTabla
}
