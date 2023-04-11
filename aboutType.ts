//타입 추론
let a = 1;
let b = 'ahahah';

//타입 명시
let c: String = 'yeah';
let d: number[] = [1, 2, 3];

//타입 alias
type programmer = {
  name: String;
  skills: String[];
  age?: number; //? is optional
};

let f: programmer = {
  name: '김동환',
  skills: ['java', 'mysql']
};

type name = string;
type playerNumber = number;
type player = {
  name: name;
  no: playerNumber;
  age?: number;
};

//리턴 타입 정의
function playerMaker(name: name, no: playerNumber): player {
  return {
    name,
    no,
  };
}

const kimdevhwan = playerMaker('kimdevhwan', 4);
kimdevhwan.age = 23;

//화살표 함수
const playerMaker2 = (name: string, no: number): player => ({ name, no });
const son = playerMaker2('sonheungmin', 7);
son.age = 32;

console.log('Hell kimdevhwan! welcome to typeworld.');

//readonly
const names: readonly string[] = ['1', '2', '3'];
names.push('ahahah'); //Immutable 불변성, 에러 붐

//tuple 배열 타입을 특수하게 정의, 순서에 따른 타입을 맞춰줘야한다.
let errdreamers: [string, number, boolean, string?] = [
  'kimdevhwan',
  230314,
  'true',
]; //에러 붐
errdreamers[2] = false;
errdreamers[3] = "it's optional";

const realdreamers: [number, string, boolean?] = [230314, 'kimdevhwan'];
realdreamers[0] = '1234'; //에러 붐
realdreamers[2] = true;

// any를 쓸거면 왜 타입스크립트를 쓰나?
// 그런 상황이 있을거라고? 글쎄.. 난 잘 모르겠다.
let badboy: any = "it's too bad";
let badgirl: any = 1818;
console.log(badboy + badgirl); //WTF

//unknown
//타입을 미리알 수 없을때 사용, 타입 확인 작업을 강제
let gg: unknown;
let ga = gg + 1; //에러 붐

if (typeof gg === 'number') {
  let ga = gg + 1;
}

if (typeof gg === 'string') {
  let ga = gg.toLocaleUpperCase;
}

//never
//never 타입을 사용하는 것은 코드의 안정성과 가독성을 높이기 때문
//예외나 무한 루프와 같은 비정상적인 동작이 발생할 수 있는 상황에서 TypeScript 컴파일러가 이러한 동작을 감지하고 경고 또는 오류를 출력
//실행되지 말아야 하거나, 예외를 발생 시킬때 씀

const hoho = (name: string | number) => {
  if (typeof name === 'string') {
    return name + 'haha';
  } else if (typeof name === 'number') {
    return name + 100;
  } else {
    //실행되지 말아야할 구간임을 표현
    name;
  }
};
