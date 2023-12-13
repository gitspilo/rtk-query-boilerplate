import { routes } from 'constants/pageroutes.constants';

import { styles } from 'styles/notfound.styles';
import { useNavigate } from 'react-router-dom';
import { Button, Result, Typography } from 'antd';


const { Text } = Typography;

const NotFound = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(routes.LoginUrl, { replace: true });
  };

  return (
    <div style={styles.errorMain}>
      <Result
        status="404"
        subTitle={
          <Text style={styles.errorLabel}>Sorry, the page you visited does not exist.</Text>
        }
        extra={
          <Button type="primary" onClick={handleNavigate}>
            Back Home
          </Button>
        }
      />
    </div>
  );
};

export default NotFound;
