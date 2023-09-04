## 코로나 세계 현황판 만들기

최종 프로젝트 폴더입니다

## 자바스크립트 프로젝트에 타입스크립트 적용하기

0. 자바스크립트 파일에 JSDoc으로 타입 시스템 입히기
 -> /**
 * @typedef {object} CovidSummary
 * @property {Array<object>} Country
 */
// api
/**
 * 
 * @returns {Promise<CovidSummary>}
 */

1. 타입스크립트의 기본 환경 구성
    - [x] NPM 초기화 [npm init -y]
    - [x] 타입스크립트 라이브러리 설치 [npm i typescript --save-dev]
    - [x] 타입스크립트 설정 파일 생성 및 기본 값 추가 []
    - [x] 자바스크립트 파일을 타입스크립트 파일로 변환
    - [x] `tsc` 명령어로 타입스크립트 컴파일하기

2. 명시적인 `any` 선언하기
    - `tsconfig.json`파일에 `noImplicitAny` 값을 `true`로 추가
    - 가능한 구체적인 타입으로 타입 정의
    - 라이브러리를 쓰는 경우 DefinitelyTyped에서 `@types`관련 라이브러리를 찾아 설치
    - 타입을 정하기 어려운 경우 명시적으로라도 `any`를 선언한다.

3. 라이브러리 설치
    - `npm i -D typescript @babel/core @babel/preset-env @babel/preset-typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint prettier eslint-plugin-prettier`

4. 프로젝트 환경 구성
    - babel, eslint, perttier 등의 환경 설정

5. 외부 라이브러리 모듈화

6. `strict`옵션 추가 후 타입 정의

## 참고 자료

- [존스 홉킨스 코로나 현황](https://www.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6)
- [Postman API](https://documenter.getpostman.com/view/10808728/SzS8rjbc?version=latest#27454960-ea1c-4b91-a0b6-0468bb4e6712)
- [Type Vue without Typescript](https://blog.usejournal.com/type-vue-without-typescript-b2b49210f0b)