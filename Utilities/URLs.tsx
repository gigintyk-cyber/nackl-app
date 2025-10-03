
const Main_URL = 'http://127.0.0.1:<port>/api/'

export const API_URLS = {
    login : `${Main_URL}users/login/`,
    logout : `${Main_URL}users/logout/`,
    RegBrand : `${Main_URL}users/register/brand/`,
    RegOrg : `${Main_URL}users/register/organization/`,
    RegSingle : `${Main_URL}users/register/individual/`,
    SendOTP : `${Main_URL}users/send-otp/`,
    VerifyOTP : `${Main_URL}users/verify-email-otp/`
}