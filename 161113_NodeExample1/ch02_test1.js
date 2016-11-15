var calc = require('./calc');
var calc2 = require('./calc2');
var nconf = require('nconf');
nconf.env();

console.log('모듈 분리한 calc 결과 : %d', calc.add(10, 10));
console.log('모듈 분리한 calc2 결과 : %d', calc2.add(10, 5));
console.log('JAVA_HOME 환경 변수의 값 : %s', nconf.get('JAVA_HOME'));




var result = 0;
console.time('duration_sum');

for (var i = 0; i <= 1000; i++) {
    result += i;
}

console.timeEnd('duration_sum');
console.log('1부터 1000까지 더한 결과물 : %d', result);




