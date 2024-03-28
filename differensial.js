const a = 0;
const b = 1;
const h = 0.1;
const y0 = 0.5;

function f(x, y) {
    return x + y ** 2;
    // return 2*x**2 + x*y;
}

function eulerMethod(a, b, h, y0) {
    const n = Math.floor((b - a) / h);
    let x = a;
    let y = y0;
    let result = [[x, y]];

    for (let i = 1; i <= n; i++) {
        y = y + h * f(x, y);
        x = a + i * h;
        result.push([x.toFixed(1), y.toFixed(5)]);
    }

    return result;
}

console.table(eulerMethod(a,b,h,y0));