function add1(a: number, b: number) {
  return a + b;
}

//a1과 a2는 같은거
const add2 = (a: number, b: number) => a + b;

//위 처럼 타입을 지저분하게 작성하고 싶지 않아
//타입을 미리 정의하놓고 갖다 쓸래 그럼 바로
//Call Signatures
//타입을 먼저 생각하고 함수를 구현한다. 인터페이스의 역할과 비슷해 보이는데?
type worldclass = (league: number, champs: number) => number;

const sonny: worldclass = (a, b) => a + b; //콜시그니쳐로 타입을 추론하지
console.log(sonny(5, 2));

//오버로딩
//하나의 함수가 여러개의 콜 시그니쳐를 가진다
//자바에서의 개념과 같다
type Config = {
  path: string;
  state: Object;
};

type Push = {
  (path: string): void;
  (config: Config): void;
};

const push: Push = (param) => {
  if (typeof param === 'string') {
    console.log('문자열 오버로딩');
    console.log(param);
  } else {
    console.log('오브젝트 오버로딩');
    console.log(param.path, param.state);
  }
};

const test: Config = {
  path: 'test',
  state: 'object',
};

console.log(push(test));
console.log(push('오버로딩 하하하'));

type AddOverloading = {
  (a: number, b: number): number;
  (a: number, b: number, c: number): number;
};

const add: AddOverloading = (a, b, c?: number) => {
  if (c) return a + b + c;
  return a + b;
};

console.log(add(1, 2));
console.log(add(1, 2, 3));
