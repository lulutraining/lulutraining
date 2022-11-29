## Team

`프론트엔드 박지윤`<br>
`프론트엔드 안소현`<br>
`프론트엔드 지희영`<br>
`기획 한인창`

## Project Start

```
npm run build
npm run start
```

## USED

<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/react recoil-EC5990?style=for-the-badge&logo=react query&logoColor=black"> <img src="https://img.shields.io/badge/react query-FF4154?style=for-the-badge&logo=react query&logoColor=black">
<img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">

## Auth & Database

<img src="https://img.shields.io/badge/firebase -FFCA28?style=for-the-badge&logo=firebase&logoColor=black"><br><br>

[1. 프로젝트 개요](https://github.com/jiyun-par/oz-training#1-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EA%B0%9C%EC%9A%94)

[2. 서비스 구성](https://github.com/jiyun-par/oz-training#2-%EC%84%9C%EB%B9%84%EC%8A%A4-%EA%B5%AC%EC%84%B1)

[3. 프로젝트 IA](https://github.com/jiyun-par/oz-training#3-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-ia)

## 1. 프로젝트 개요

혼자서 운동하기 힘들거나, 루틴을 체크해가며 운동하고 싶은 사용자들을 위한 서비스 입니다. 다양한 코스가 있고, 원하는 코스를 선택하여 운동 루틴을 시작 할 수 있습니다. 코스를 완주하면 다음 레벨의 코스의 잠금이 열리고 뱃지를 하나씩 모으며 성취감을 끌어올려, 혼자 운동하면서도 재미를 느끼며 꾸준히 할 수 있도록 지원해주는 서비스 입니다.

## 2. 서비스 구성

### 1) 회원가입 / 로그인

#### ⭐️ 회원가입

개인정보없이 이메일과 비밀번호를 등록하여 회원가입을 진행합니다.
가입시, 개인식별정보로 간단한 질의응답을 등록합니다.
키와 몸무게를 기입하여 기초대사량, 활동대사량, 필요섭취칼로리 등을 계산하여 개인 정보에 등록합니다.
계정 등록은 `firebase`를 이용했습니다.

#### ⭐️ 로그인

로그인은 등록한 이메일과 비밀번호로 로그인 됩니다.

### 2) 메인

#### ⭐️ 건강관련 토막 지식 랜덤 노출

#### ⭐️ 운동 코스 카테고리 노출

- 레벨별 추천 코스
- 유산소
- 근력
- 스트레칭

### 3) 코스 카테고리별 페이지 - 루틴 패키지

#### ⭐️ 루틴 패키지 운영 방식

- 각 코스별로 3개의 레벨 (초급 / 중급 / 고급)
- 루틴은 모든 코스가 첫번째 한개만 열려있습니다. - 루틴을 모두 완주해야만 다음 루틴의 잠금을 풀 수 있습니다.

### 4) 마이페이지

#### ⭐️ 요건별 칭호 부여

일정 요건을 만족하면 단계별로 칭호를 부여합니다.

#### ⭐️ 뱃지 부여

코스를 완주 할때마다 뱃지를 부여하고 일정 갯수의 뱃지를 획득하면 포인트를 지급합니다.

## 3. 프로젝트 IA

![oz-IA](https://user-images.githubusercontent.com/72537762/193749936-188a3cd7-67e3-43f3-84f1-c25a9b73e86e.png)

## 4. 세부 기획

[오즈의 트레이닝 와이어 프레임](https://www.figma.com/file/phoz6srPFIhEeNStysBTWZ/Side-project_%EC%98%A4%EC%A6%88%EC%9D%98-%ED%8A%B8%EB%A0%88%EC%9D%B4%EB%8B%9D-%ED%81%B4%EB%9F%BD?node-id=404%3A6423&t=LlD5G3qZSXrdauKW-0)
