/**
 * Date Types
 * 
 * 여섯개의 Primitive Type과
 * 한개의 오브젝트 타입이있다
 * 
 * 1) Number (숫자)
 * 2) String (무자열)
 * 3) Boolean (불리언)
 * 4) undefined (언디파인드)
 * 5) null (널)
 * 6) Symbol (심볼)
 * 
 * 7) Object (객체)
 */

//넘버타입

const age = 23;
const temature = -15;
const pi = 3.14;

console.log(typeof age);
console.log(typeof temature);
console.log(typeof pi);
console.log('-----------------');

const inFinity = Infinity;
const nInfinity = -Infinity;
console.log(typeof inFinity);
console.log(typeof nInfinity);
console.log('-----------------');
//스트링타입

const codeFactory = '코드팩토리';
console.log(typeof codeFactory);

const ive = "'아이브' 안유진";
console.log(ive);

/**
 * Template Literal
 * 
 * 1) newline 은 \n
 * 2) tab 은 \t
 * 백슬래시를 스트링으로 표현하고 싶다면 두번입력하면된다
 */
const iveYuJin = '아이브\n안유진'
console.log(iveYuJin);

const iveWonYoung = '아이브\t장원영';
console.log(iveWonYoung);

const backSlash = '아이브\\코드팩토리'
console.log(backSlash);

