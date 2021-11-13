// const readline = require("readline");
// const rl = readline.createInterface(process.stdin, process.stdout);
// let data = [];
// let numbers = [];
// let resultado = 0;
// rl.on("line", (line) => {
//   data = line.split(" ");
// });

// rl.on("close", () => {
//   // conversion a entero para la suma
//   numbers = data.map((e) => {
//     return parseInt(e, 10);
//   });
//   // sumando los valores
//   numbers.map((num) => {
//     return (resultado = resultado + num);
//   });
//   console.log(resultado);
// });

// Dado un número en base binaria (2) convertir este en base cuaternaria (4).
// const readline = require("readline");
// const rl = readline.createInterface(process.stdin, process.stdout);
// const readline = require("readline");
// const rl = readline.createInterface(process.stdin, process.stdout);
// let data = "";
// let base2 = [];
// rl.on("line", (line) => {
//   data = line;
// });
// rl.on("close", () => {
//   // verificar el rango
//   let entero = parseInt(data);
//   if (entero >= 1 && entero <= Math.pow(2, 1000000)) {
//     //     verificar si el valor es par
//     if (data.length % 2 !== 0) {
//       data = 0 + data;
//     }
//     // dividir en cifras de 2
//     let acumulador = "";
//     let par = 0;
//     for (let i = data.length - 1; i >= 0; i--) {
//       par++;
//       acumulador = data[i] + acumulador;
//       if (par % 2 === 0) {
//         base2.push(acumulador);
//         acumulador = "";
//       }
//     }
//     //     convertir a base 4
//     let resultado = "";
//     base2.forEach((el) => {
//       switch (el) {
//         case "01":
//           resultado = "1" + resultado;
//           break;
//         case "11":
//           resultado = "3" + resultado;
//           break;
//         case "10":
//           resultado = "2" + resultado;
//           break;
//         default:
//           break;
//       }
//     });
//     console.log(resultado);
//   }
// });

const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);
let data = [];
rl.on("line", (line) => {
  data.push(line.split(" "));
});
rl.on("close", () => {
  data[1].map((el) => {
    return parseInt(el);
  });
  if (3 <= parseInt(data[0]) <= 1000) {
    //     verificando si el tamaño del segundo array tiene el tamaño asignado
    if (
      data[1].length === parseInt(data[0]) &&
      1 <= parseInt(data[2]) <= 1000
    ) {
      for (let j = 3; j <= data.length - 1; j++) {
        // crear subArr con cada rango de comprobacion
        let subArr = [];
        for (let i = parseInt(data[j][0]); i <= parseInt(data[j][1]); i++) {
          subArr.push(data[1][i]);
        }
        // ordenar el subarr para verificar si existen repetidos
        let tempArr = subArr.sort();
        let repetidos = false;
        // recorree los elementos del subarr ordenado
        for (let x = 0; x <= tempArr.length - 1; x++) {
          if (tempArr[x + 1] === tempArr[x]) {
            repetidos = true;
            break;
          }
          continue;
        }
        // si el valor de repetidos es true exiten valores repetidos en el arr
        if (repetidos === true) {
          console.log("repetidos");
        } else {
          console.log("no repetidos");
        }
      }
    }
  }
});

// ejer 3
const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);
let data = [];
let base2 = [];
let entero = [];
rl.on("line", (line) => {
  data.push(line.split(""));
});
rl.on("close", () => {
  // pasar a entero los valores
  entero = data[0].map((e) => {
    return parseInt(e);
  });
  let rango = null;
  // verificar si es un numero en base 2
  entero.map((el) => {
    if (el >= 0 && el <= 1) {
      rango = true;
    } else {
      rango = false;
    }
  });

  if (rango) {
    //verificar si el valor es par
    if (entero.length % 2 !== 0) {
      entero.unshift(0);
    }

    let acumulador = "";
    let par = 0;
    for (let i = entero.length - 1; i >= 0; i--) {
      par++;
      acumulador = entero[i] + acumulador;
      if (par % 2 === 0) {
        base2.push(acumulador);
        acumulador = "";
      }
    }
    //     convertir a base 4
    let resultado = "";
    base2.forEach((el) => {
      switch (el) {
        case "00":
          resultado = "0" + resultado;
          break;
        case "01":
          resultado = "1" + resultado;
          break;
        case "10":
          resultado = "2" + resultado;
          break;
        case "11":
          resultado = "3" + resultado;
          break;

        default:
          break;
      }
    });
    console.log(resultado);
  }
});
// pasar a entero los valores
entero = data[0].map((e) => {
  return parseInt(e);
});
let rango = null;
// verificar si es un numero en base 2
entero.map((el) => {
  if (el >= 0 && el <= 1) {
    rango = true;
  } else {
    rango = false;
  }
});

if (rango) {
  console.log("puede continuar");
}

const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);
let data = [];
let valoresPermutaciones = [];
let permutaciones = 0;
rl.on("line", (line) => {
  data.push(line.split(" "));
});
rl.on("close", () => {
  // pasar a enteros los valores de las permutaciones
  per = parseInt(data[0]);
  vPer = data[1].map((e) => {
    return parseInt(e);
  });
  let rango = null;
  //     verificar que el conjunto de valores este en el rango
  for (let i = 0; i <= vPer.length - 1; i++) {
    if (vPer[i] >= 1 && vPer[i] <= 100000) {
      rango = true;
    } else {
      rango = false;
      break;
    }
  }
  // verificar que el valor de la linea 1 se aigual al tamño de valores de la linea 2
  if (per === vPer.length && per >= 3 && per <= 100 && rango) {
    console.log("continua");
  }

  //
});


[ 3, 5, 8 ]
[ 2, 3, 5 ]
[ 2, 3, 8 ]
[ 2, 5, 8 ]