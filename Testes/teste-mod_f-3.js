// script para fazer fatorial
function test (n) {
    let resu = 1;

    for (let i = n; i > 1; i--) {
        resu *= i
    }

    return resu
}

console.log(test(5))

// OUTRA FORMA 

/*
    function test (n) {
        if (n == 1) {
            return 1
        } else {
            return n * test(n-1)
        }
    }

    console.log(test(n))
*/