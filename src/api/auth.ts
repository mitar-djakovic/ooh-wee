import { AxiosError } from 'axios';
import { axios } from 'src/config';

interface SignUpValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
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

export { signUp };
