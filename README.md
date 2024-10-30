# 🌐 We Save Together Platform (시민용 앱 + 운영자 웹)
**React Native로 제작된 시민용 모바일 앱**과 **React로 제작된 운영자 웹 애플리케이션**이 통합된 환경보호 플랫폼 서비스입니다.
이 프로젝트는 대구광역시 환경문제를 해결하기 위하여 대구테크노파크와 협력하여 진행되었습니다.

## 🛠 기술 스택
- **Frontend (시민용 앱)**: React Native, Expo-cli, Axios
- **Frontend (운영자 웹)**: React, Zustand, Axios, Recharts
- **Backend**: Node.js, Express, Crypto, Cookie, CORS, JWT, Morgan, Naver Cloud SENS 
- **Database**: MongoDB
- **Deployment**: 문서의 "📦 배포" 영역에 따릅니다. 

## 📂 폴더 구조  
root  
├── user                    # React Native 기반 시민용 앱  
│   ├── src  
│   │   ├── components      # UI 컴포넌트  
│   │   ├── navigators      # 네이게이션 처리 (스택, 바텀, 드로어)  
│   │   └── screens         # 주요 화면  
│   └── package.json  
│  
├── admin                   # React 기반 운영자 웹 애플리케이션  
│   ├── src  
│   │   ├── components      # UI 컴포넌트  
│   │   ├── pages           # 주요 페이지   
│   │   └── store           # Zustand 상태 관리  
│   └── package.json  
│  
└── server                  # 백엔드 서버  
    ├── controllers         # API 엔드포인트  
    ├── models              # 데이터베이스 모델  
    ├── routes              # 라우터  
    └── app.js              # 서버 설정 및 실행  
  
## 🚀 시작하기  
  
### 클론 및 의존성 설치  
git clone https://github.com/username/repository-name.git  
cd repository-name  
**설명**: 레포지토리를 클론한 후 각 애플리케이션별로 의존성을 설치하는 방법을 안내합니다.  
  
#### 1. 시민용 앱 의존성 설치
cd citizen-app
npm install or yarn

#### 2. 운영자 웹 의존성 설치
cd ../admin-web
npm install or yarn 

#### 3. 서버 의존성 설치
cd ../server
npm install or yarn 

---

### 환경 변수 설정
각 폴더 (`user`, `admin`, `server`)에 `.env` 파일을 생성하고 다음 변수를 설정하세요.

**.env 예시**:
API_URL=https://api.yourdomain.com MONGO_URI=mongodb://localhost:27017/yourdb

### 1. 📱 시민용 앱 실행 (React Native)
cd user
npm run start or yarn start
⚠️ 참고: 시민용 앱 실행 시 Android 또는 iOS 에뮬레이터가 필요합니다.

#### 2. 🖥 운영자 웹 실행 (React)
cd admin
npm start or yarn start
운영자 웹은 http://localhost:3000에서 확인할 수 있습니다.


#### 3. 🌐 백엔드 서버 실행
cd server
npm start or yarn start:dev
서버는 http://localhost:5000에서 실행됩니다.

---

### 📦 배포
- **시민용 앱**: 스토어 및 Firebase를 통해 배포합니다. (준비중)
- **운영자 웹**: AWS를 통해 배포합니다. (준비중)

## 📄 API 문서
백엔드 API 문서는 준비중입니다. 

## 📝 라이선스
이 프로젝트는 MIT 라이선스를 따릅니다. 

---

<div align="center">
  <h3>We Save Together Platform에 방문해주셔서 감사합니다!</h3>
  <p>궁금한 점이나 제안 사항이 있으면 <a href="mailto:starbox918@naver.com">starbox918@naver.com</a>로 연락해 주세요.</p>
</div>
