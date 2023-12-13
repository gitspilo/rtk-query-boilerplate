import { Outlet } from 'react-router-dom';
import HeaderV1 from 'components/Header/HeaderV1';
import { Content, Header } from 'antd/es/layout/layout';
import { Layout } from 'antd';

const Layouts = () => {
  return (
    <Layout className='main-layout'>
      <Header className='main-header'><HeaderV1 /></Header>
      <Content className='main-content'><Outlet/></Content>
    </Layout>
  );
};

export default Layouts;
