module.exports = {
    sum(a, b) {
        return a + b
    },
    mul(a, b) {
        return a * b
    },
    init({ option, param}) {
        console.log('init start', option, param)
    }
} 