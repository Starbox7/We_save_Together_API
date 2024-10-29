# 🌐 We Save Together Platform (시민용 앱 + 운영자 웹)
**React Native로 제작된 시민용 모바일 앱**과 **React로 제작된 운영자 웹 애플리케이션**이 통합된 플랫폼 서비스입니다. 이 프로젝트는 시민과 운영자 모두에게 편리한 사용자 경험을 제공합니다.

## 🛠 기술 스택
- **Frontend (시민용 앱)**: React Native, Redux, Axios
- **Frontend (운영자 웹)**: React, Redux, Axios, Material-UI
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Deployment**: Firebase (시민용 앱), Vercel (운영자 웹)

## 📂 폴더 구조  
root  
├── citizen-app             # React Native 기반 시민용 앱  
│   ├── src  
│   │   ├── components      # UI 컴포넌트  
│   │   ├── screens         # 주요 화면 및 페이지  
│   │   └── redux           # Redux 상태 관리  
│   └── package.json  
│  
├── admin-web               # React 기반 운영자 웹 애플리케이션  
│   ├── src  
│   │   ├── components      # UI 컴포넌트  
│   │   ├── pages           # 주요 페이지   
│   │   └── redux           # Redux 상태 관리  
│   └── package.json  
│  
└── server                  # 백엔드 서버  
    ├── controllers         # API 엔드포인트  
    ├── models              # 데이터베이스 모델  
    ├── routes              # 라우터  
    └── app.js              # 서버 설정 및 실행  
  
## 🚀 시작하기

### 1. 클론 및 의존성 설치
```bash
git clone https://github.com/username/repository-name.git
cd repository-name


**설명**: 레포지토리를 클론한 후 각 애플리케이션별로 의존성을 설치하는 방법을 안내합니다.

#### 시민용 앱 의존성 설치

```markdown
**시민용 앱 의존성 설치**
```bash
cd citizen-app
npm install


#### 운영자 웹 의존성 설치

```markdown
**운영자 웹 의존성 설치**
```bash
cd ../admin-web
npm install


#### 서버 의존성 설치

```markdown
**서버 의존성 설치**
```bash
cd ../server
npm install


---

### 6. **환경 변수 설정**

```markdown
### 2. 환경 변수 설정
각 폴더 (`citizen-app`, `admin-web`, `server`)에 `.env` 파일을 생성하고 다음 변수를 설정하세요.

**.env 예시**:
API_URL=https://api.yourdomain.com MONGO_URI=mongodb://localhost:27017/yourdb

## 📱 시민용 앱 실행 (React Native)
```bash
cd citizen-app
npm run start
⚠️ 참고: 시민용 앱 실행 시 Android 또는 iOS 에뮬레이터가 필요합니다.


#### 운영자 웹 실행

```markdown
## 🖥 운영자 웹 실행 (React)
```bash
cd admin-web
npm start
운영자 웹은 http://localhost:3000에서 확인할 수 있습니다.


#### 서버 실행

```markdown
## 🌐 백엔드 서버 실행
```bash
cd server
npm start
서버는 http://localhost:5000에서 실행됩니다.


---

### 8. **배포**

```markdown
## 📦 배포
- **시민용 앱**: Firebase를 통해 배포합니다.
- **운영자 웹**: Vercel을 사용하여 CI/CD 자동 배포가 설정되어 있습니다.

## 📄 API 문서
백엔드 API 문서는 Swagger를 통해 자동화되어 있으며 `/api-docs`에서 확인할 수 있습니다.

## 📝 라이선스
이 프로젝트는 MIT 라이선스를 따릅니다. 자세한 내용은 [LICENSE](./LICENSE) 파일을 참고하세요.

<div align="center">
  <h3>Starbox Platform에 방문해주셔서 감사합니다!</h3>
  <p>궁금한 점이나 제안 사항이 있으면 <a href="mailto:your-email@example.com">이메일</a>로 연락해 주세요.</p>
</div>
