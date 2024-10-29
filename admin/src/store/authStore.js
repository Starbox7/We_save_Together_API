import { create } from 'zustand';
import auth from '../data/repository/auth';
import cookieService from '../data/storage/cookie';

const authStore = create((set, get) => ({
  signState: false,
  signData: {
    id: '',
    password: '',
    confirm: '',
    name: '',
    hakbun: '',
    email: '',
    phone: '',
    authNum: '',
  },
  isLoading: false,

  setSignData: (targetId, targetValue) => {
    const signData = get().signData;
    set({
      signData: {
        ...signData,
        [targetId]: targetValue,
      },
    });
  },

  verifySignData: (navigateToUp) => {
    const signData = get().signData;
    const nameRegex = /^[가-힣]{2,5}$/;
    const hakbunRegex = /^\d{8}$/;
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

    if (!signData.name) {
      return alert('이름을 입력해주세요 :D');
    }
    if (!nameRegex.test(signData.name)) {
      return alert('정확한 이름 형식을 사용해주세요 :D');
    }
    if (!signData.hakbun) {
      return alert('학생 번호를 입력해주세요 :D');
    }
    if (!hakbunRegex.test(signData.hakbun)) {
      return alert('학생 번호는 8자리 숫자입니다 :D');
    }
    if (!signData.email) {
      return alert('이메일 주소도 입력해주세요 :D');
    }
    if (!emailRegex.test(signData.email)) {
      return alert('이메일 형식을 확인해주세요 :D');
    }

    navigateToUp();
  },

  /** sign up */
  signUp: async () => {
    const signData = get().signData;
    const idRegex = /^[A-Za-z0-9]{5,}$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{10,}$/;

    if (!signData.name || !signData.hakbun || !signData.email) {
      window.location.replace('/info');
      return alert('가입 오류가 발생하였습니다 :(');
    }
    if (!signData.id) {
      return alert('아이디를 입력해주세요 :D');
    }
    if (!idRegex.test(signData.id)) {
      return alert('아이디는 영문 대소문자와 숫자만 사용 가능하게 구성된 5글자 이상이여야 합니다 :D');
    }
    if (!signData.password) {
      return alert('비밀번호를 입력해주세요 :D');
    }
    if (!passwordRegex.test(signData.password)) {
      return alert('비밀번호는 최소 1개 이상의 영문 대문자와 소문자, 숫자, 특수문자를 포함한 10자리 이상이여야합니다. :D');
    }
    if (signData.password !== signData.confirm) {
      return alert('비밀번호 재확인이 일치하지 않습니다 :(');
    }
    const newSignData = {
      id: signData.id,
      password: signData.password,
      name: signData.name,
      hakbun: signData.hakbun,
      email: signData.email,
    };
    set({
      isLoading: true,
    });
    try {
      await auth.signUp(newSignData);
      window.location.replace('/in');
      return alert('회원가입 성공!');
    } catch (err) {
      /** Test!!! */ console.log(`signUp : ${err}`);
      set({
        isLoading: false,
      });
      window.location.replace('/info');
      return alert('axios Error : signup');
    }
  },
  /** sign in */
  signIn: async (navigateToConsole, navigateToAuth) => {
    const signData = get().signData;

    if (!signData.id) {
      return alert('아이디를 입력해주세요 :D');
    }
    if (!signData.password) {
      return alert('비밀번호를 입력해주세요 :D');
    }
    const newSignData = {
      id: signData.id,
      password: signData.password,
    };

    set({
      isLoading: true,
    });

    try {
      const res = await auth.signIn(newSignData);
      // if (!res.data.phone) {
      //   navigateToAuth();
      //   alert('최초 1회 번호 인증이 필요합니다.');
      //   return set({
      //     isLoading: false,
      //   });
      // }
      const accessToken = res.data.accessToken;
      const refreshToken = res.data.refreshToken;
      if (!accessToken) {
        throw new Error('No Access Token In Axios');
      }
      if (!refreshToken) {
        throw new Error('No Refresh Token In Axios');
      }
      cookieService.setTokens(accessToken, refreshToken);
      const tokenCheck = cookieService.getTokens();
      if (!tokenCheck.accessToken) {
        throw new Error('No Access Token In Cookie');
      }
      if (!tokenCheck.refreshToken) {
        throw new Error('No Refresh Token In Cookie');
      }

      set({
        signState: true,
      });

      set({
        signData: {
          ...signData,
          id: res.data.id,
        },
      });

      navigateToConsole();

      return set({
        isLoading: false,
      });
    } catch (err) {
      set({
        isLoading: false,
      });
      window.location.replace('/in');
      return alert('axios Error : signin');
    }
  },
  autoSign: async () => {
    const token = cookieService.getTokens();
    const signData = get().signData;
    try {
      if (token.refreshToken) {
        const res = await auth.autoSign(token.refreshToken);
        const accessToken = res.data.accessToken;
        const refreshToken = res.data.refreshToken;
        if (!accessToken) {
          throw new Error('No Access Token In Axios');
        }
        if (!refreshToken) {
          throw new Error('No Refresh Token In Axios');
        }
        cookieService.setTokens(accessToken, refreshToken);
        const tokenCheck = cookieService.getTokens();
        if (!tokenCheck.accessToken) {
          throw new Error('No Access Token In Cookie');
        }
        if (!tokenCheck.refreshToken) {
          throw new Error('No Refresh Token In Cookie');
        }

        set({
          signState: true,
        });
        const state = get().signState;
        set({
          isLoading: false,
        });
        set({
          signData: {
            ...signData,
            id: res.data.id,
          },
        });
        return state;
      } else {
        return set({
          isLoading: false,
        });
      }
    } catch (err) {
      return set({
        isLoading: false,
      });
    }
  },
  signOut: async () => {
    cookieService.removeTokens();
    set({
      signState: false,
    });
  },
  authRequest: async () => {
    const phone = get().signData.phone;
    if (!phone) {
      return alert('휴대폰 번호를 입력해주세요.');
    }
    try {
      //네이버 클라우드 디벨로퍼 서비스 중단
      // const res = await auth.authRequest(phone);
      // cookieService.setAuth(res.data.smsNum);
      return alert('인증번호가 발송되었습니다.');
    } catch (err) {
      alert('axios error : authRequest');
    }
  },
  authConfirm: async (navigateToSignIn) => {
    const authNum = get().signData.authNum;
    const authCookie = cookieService.getAuth();
    if (authNum !== authCookie) {
      return alert('인증번호가 일치하지 않습니다.');
    }
    const id = get().signData.id;
    const phone = get().signData.phone;
    try {
      await auth.authConfirm(id, phone);
      alert('인증 완료!');
      cookieService.removeAuth();
      return navigateToSignIn();
    } catch (err) {
      return alert(`Error : authConfirm : ${err}`);
    }
  },
  findId: async () => {
    const hakbun = get().signData.hakbun;
    const email = get().signData.email;
    try {
      /** Test!!! */ console.log(`check : ${hakbun} and ${email}`);
      const res = await auth.findId({ hakbun, email });
      const id = res.data.id;
      alert(`확인 : 아이디는 ${id} 입니다.`);
      return window.location.replace('/in');
    } catch (err) {
      return alert(`Error in findId : ${err}`);
    }
  },
  findPwConfirm: async () => {
    const id = get().signData.id;
    const phone = get().signData.phone;
    if (!id || !phone) {
      alert('아이디 또는 전화번호를 입력하세요');
      return false;
    }
    try {
      const res = await auth.findPwConfirm(id, phone);
      cookieService.setAuth(res.data.smsNum);
      alert('인증번호가 발송되었습니다.');
      return true;
    } catch (err) {
      return alert(`Error in findPwConfirm : ${err}`);
    }
  },
  findPw: async () => {
    const authNum = get().signData.authNum;
    const authCookie = cookieService.getAuth();
    if (authNum !== authCookie) {
      return alert('인증번호가 일치하지 않습니다.');
    }
    return true;
  },
  resetPw: async () => {
    const signData = get().signData;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{10,}$/;
    if (!signData.password) {
      return alert('비밀번호를 입력해주세요 :D');
    }
    if (!passwordRegex.test(signData.password)) {
      return alert('비밀번호는 최소 1개 이상의 영문 대문자와 소문자, 숫자, 특수문자를 포함한 10자리 이상이여야합니다. :D');
    }
    if (signData.password !== signData.confirm) {
      return alert('비밀번호 재확인이 일치하지 않습니다 :(');
    }
    try {
      await auth.updatePw(signData.id, signData.password);
      alert('변경 완료!');
      return window.location.replace('/in');
    } catch (err) {
      return alert(`Error in resetPw : ${err}`);
    }
  },
  deleteAdmin: async () => {
    const id = get().signData.id;
    try {
      await auth.deleteAdmin(id);
      alert('탈퇴완료');
      return window.location.replace('/');
    } catch (err) {
      alert('오류가 발생했습니다 : 오류코드 0x11011010!');
    }
  },
}));

export default authStore;
//              /** Test!!! */ console.log(`${}`);
