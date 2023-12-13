import { Typography } from 'antd';
import './styles.less';

const { Text } = Typography;

interface RequiredTitleProps {
  title: string | null;
  isRequired?: boolean;
  style?: any;
  className?: string;
}

const RequiredTitle = ({ isRequired, title, style, className }: RequiredTitleProps) => {
  return (
    <div className={`input-label ${className}`} style={style}>
      {title}
      {isRequired && <Text type="danger">*</Text>}
    </div>
  );
};

RequiredTitle.defaultProps = {
  isRequired: false,
  style: {},
  className: ''
};
export default RequiredTitle;
