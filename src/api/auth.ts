import { AxiosError } from 'axios';
import { axios } from 'src/config';

interface SignUpValues {
  firstName: string;
  lastName: string;
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
    const { data } = await axios.post('/auth/signup', JSON.stringify(values));

    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw error.response?.data;
    }
  }
};

const login = async (values: SignInValues) => {
  console.log('values', values);
  try {
    const { data } = await axios.post('/auth/login', JSON.stringify(values));

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
      '/auth/send-verification-link',
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
      '/auth/confirm-email',
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
