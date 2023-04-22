/**
 * HTTP 상태코드 리스트, 필요시 더 추가해서 사용하세요.
 * 참고 링크 ->
 * 1.  공식문서 : https://developer.mozilla.org/ko/docs/Web/HTTP/Status
 * 2.  대백과 : https://ko.wikipedia.org/wiki/HTTP_%EC%83%81%ED%83%9C_%EC%BD%94%EB%93%9C
 * 3.  블로그 : https://www.whatap.io/ko/blog/40/
 * */

const StatusCode = {
    OK: {
        status: 200,
        message: 'OK',
    },
    CREATED: {
        status: 201,
        message: 'CREATED',
    },
    BAD_REQUEST: {
        status: 400,
        message: 'BAD REQUEST',
    },
    UNAUTHORIZED: {
        status: 401,
        message: 'UNAUTHORIZED',
    },
    NOT_FOUND: {
        status: 404,
        message: 'NOT FOUND',
    },
    CONFLICT: {
        status: 409,
        message: 'CONFLICT',
    },
    SERVER_ERROR: {
        status: 500,
        message: 'INTERNAL SERVER ERROR',
    },
};

export default StatusCode;
