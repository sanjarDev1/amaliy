function f(x) {
  return x ** 3 - 2 * x ** 2 +5;
}

function fHosila(x) {
  return 3 * x ** 2 - 4 * x;
}

function newtonsMethod(tahmin, xatolik, maxIterations) {
  let x = tahmin;
  let iterations = 0;

  while (iterations < maxIterations) {
    let fx = f(x);
    let fpx = fHosila(x);

    if (Math.abs(fx) < xatolik) {
      console.log(
        `${iterations} takrorlanganidan keyin x = ${x} da ildiz topildi.`
      );
      return x;
    }

    x = x - fx / fpx;

    iterations++;
  }

  console.log('Maksimum takrorlar erishildi. Ildiz topilmadi.');
  return null;
}

const tahmin = 3;
const xatolik = 0.0001;
const maxIterations = 100;

newtonsMethod(tahmin, xatolik, maxIterations);

