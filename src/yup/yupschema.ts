import * as yup from 'yup';

export const addUserSchema = yup.object().shape({
  firstName: yup.string().required('Required'),
  lastName: yup.string().required('Required'),
  email: yup.string().email().required('Required')
});
