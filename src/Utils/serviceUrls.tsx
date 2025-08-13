export const serviceUrls = {
  Auth: {
    getOtp: '/api/Auth/send-registration-otp',
    ForgetPassword: '/api/Auth/reset-password',
    register: '/api/Auth/register',

  },
};

export const BaseURL = process.env.API_BASE_URL;
