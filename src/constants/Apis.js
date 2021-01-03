const BaseApi = "http://localhost:8000"
export { BaseApi }

export default {
    REGISTER: BaseApi + "/user/signup",
    LOGIN: BaseApi + "/user/login",
    GET_USER: BaseApi + "/user/",
    LOGOUT: BaseApi + "/user/logout",
    UPLOAD: BaseApi + '/user/upload'
}