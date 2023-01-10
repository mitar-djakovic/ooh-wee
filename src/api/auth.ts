import { AxiosError } from 'axios';
import { axios, ROUTES } from 'src/config';

interface SignUpValues {
  email: string;
  password: string;
  confirmPassword: string;
}

interface SignInValues {
  email: string;
  password: string;
}

const signUp = async (values: SignUpValues) => {
  try {
    const { data } = await axios.post(ROUTES.SIGN_UP, JSON.stringify(values));

    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw error.response?.data;
    }
  }
};

const login = async (values: SignInValues) => {
  try {
    const { data } = await axios.post(ROUTES.LOGIN, JSON.stringify(values));

    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw error.response?.data;
    }
  }
};

const sendEmailVerificationLink = async (email: string) => {
  try {
    const { data } = await axios.post(
      ROUTES.SEND_EMAIL_VERIFICATION_LINK,
      JSON.stringify({ email })
    );

    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw error.response?.data;
    }
  }
};

const confirmEmail = async (email: string) => {
  try {
    const { data } = await axios.post(
      ROUTES.CONFIRM_EMAIL,
      JSON.stringify({ email })
    );

    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw error.response?.data;
    }
  }
};

export { confirmEmail, login, sendEmailVerificationLink, signUp };
