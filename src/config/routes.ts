const SERVICES = {
  AUTH: '/auth',
};

const AUTH_SERVICES = {
  LOGIN: '/login',
  SIGN_UP: '/signup',
  SEND_EMAIL_VERIFICATION_LINK: '/send-verification-link',
  CONFIRM_EMAIL: '/confirm-email',
};

const ROUTES = {
  LOGIN: SERVICES.AUTH + AUTH_SERVICES.LOGIN,
  SIGN_UP: SERVICES.AUTH + AUTH_SERVICES.SIGN_UP,
  SEND_EMAIL_VERIFICATION_LINK:
    SERVICES.AUTH + AUTH_SERVICES.SEND_EMAIL_VERIFICATION_LINK,
  CONFIRM_EMAIL: SERVICES.AUTH + AUTH_SERVICES.CONFIRM_EMAIL,
};

export { AUTH_SERVICES, ROUTES, SERVICES };
