import React from 'react';
import { Button, Typography } from 'antd';

const { Text } = Typography;

const PageHeader = ({ title, onClick, icon }: any) => {
  return (
    <>
      {icon && (
        <Button
          type="text"
          shape="circle"
          icon={icon}
          onClick={onClick}
          className="back-icon-btn"
        />
      )}
      <Text>{title}</Text>
    </>
  );
};

export default PageHeader;
