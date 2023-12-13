/* @flow */
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { message, Button, Form, Input, Typography } from 'antd';
import SatsureIcon from 'assets/svg/SatsureIcon';
import { routes } from 'constants/pageroutes.constants';
import { useAppDispatch } from 'hooks/useReduxHook';
import { setAccessToken, setUser } from 'store/users';
import { useLoginMutation } from 'services/userApis';
import './styles.less';

const { Text } = Typography;

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();
  const [login, { data: loginData, isLoading, isError, isSuccess, error, originalArgs }] =
    useLoginMutation();

  const handleLogin = async (values: { username: string; password: string }) => {
    login({
      username: values.username,
      password: values.password
    });
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(setUser(originalArgs));
      dispatch(setAccessToken(loginData?.data?.token));
      message.success({
        content: 'Successfully login'
      });
      navigate(routes.Home);
    } else if (isError) {
      message.error({
        // @ts-ignore
        content: `${error?.message}`
      });
    }
  }, [loginData]);

  return (
    <div className="main-login-page">
      <div className="login-content">
        <div className="welcome-label">
          <Typography>Welcome to</Typography>
          <Typography>CFNPD</Typography>
        </div>
        <Form
          form={form}
          layout="vertical"
          autoComplete="off"
          className="login-form"
          initialValues={{ username: 'mor_2314', password: '83r5^_' }}
          onFinish={handleLogin}>
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Required' }]}
            label="User Name"
            className="email-input">
            <Input placeholder="Enter your username" className="form-input" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Required' }]}
            label="Password"
            className="password-input">
            <Input.Password placeholder="Enter your password" className="form-input" />
          </Form.Item>
          <Button
            loading={isLoading}
            className="login-btn"
            type="primary"
            htmlType="submit"
            block
            size="large">
            Log In
          </Button>
        </Form>
        <div className="satsure-logo">
          <Text>Powered By</Text>
          <SatsureIcon />
        </div>
      </div>
    </div>
  );
};

export default Login;
