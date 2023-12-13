/* @flow */
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Select from 'react-select';
import { Button, Divider, Table, Typography } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { isEmpty } from 'lodash';
import { routes } from 'constants/pageroutes.constants';
import RequiredTitle from 'components/core/RequiredTitle';
import PageHeader from 'components/PageHeader/PageHeader';
import CreateUser from 'components/Modals/CreateUser';
import { useAppSelector, useAppDispatch } from 'hooks/useReduxHook';
import { useGetUsersQuery } from 'services/userApis';
import { User } from 'store/users/types';
import { styles } from 'styles/organisation.styles';
import { setUsers, getPhoneOptions, getSelectedPhoneUsers } from 'store/users';
import './styles.less';

const { Text } = Typography;

const Organization = () => {
  const navigate = useNavigate();
  const phoneOptions = useAppSelector((state) => getPhoneOptions(state));
  const [selectedPhone, setSelectedPhone] = useState<string | null>(null);
  const [isOpenCreateUser, setOpenCreateUser] = useState<boolean>(false);
  const selectedPhoneUsers = useAppSelector((state) => getSelectedPhoneUsers(state, selectedPhone));
  const dispatch = useAppDispatch();
  const { data, isFetching } = useGetUsersQuery({});

  useEffect(() => {
    if (!isFetching && !isEmpty(data)) {
      dispatch(setUsers(data));
    }
  }, [data, isFetching]);

  const handleNavigateHome = () => {
    navigate(routes.Home);
  };
  const handleOpenCloseModal = () => {
    setOpenCreateUser(false);
  };

  const columns: ColumnsType<User> = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: 'EMAIL ADDRESS',
      dataIndex: 'email',
      key: 'email'
    },
    {
      title: 'PHONE',
      dataIndex: 'phone',
      key: 'phone'
    },
    {
      title: 'User Name',
      dataIndex: 'username',
      key: 'username'
    },
    {
      title: 'Password',
      dataIndex: 'password',
      key: 'password'
    }
  ];

  return (
    <div className="main-org">
      <div className="org-label">
        <PageHeader title="Organisation Members" />
      </div>
      <div className="org-member">
        <div>
          <Text>Add Members to Organisation</Text>
          <Button onClick={handleNavigateHome}>Skip</Button>
        </div>

        <Divider />
      </div>
      <form method="post" autoComplete="off" className="add-member-form">
        <div className="add-member-content">
          <div className="member-content">
            <div className="input-main-content">
              <div>
                <RequiredTitle title="Phone" className="form-title" />
                <Select
                  name="phone"
                  className="add-member-select"
                  placeholder="Select"
                  options={phoneOptions}
                  isClearable
                  onChange={(value) => setSelectedPhone((value && value.value) || null)}
                  components={{
                    IndicatorSeparator: () => null
                  }}
                  getOptionLabel={(opt: any) => opt.label}
                  styles={styles.customStyles}
                />
              </div>
            </div>
            <div>
              <Button
                className="add-user-btn"
                type="primary"
                block
                onClick={() => setOpenCreateUser(true)}>
                Add User
              </Button>
            </div>
          </div>
        </div>
      </form>
      <div className="user-list-table">
        <Table
          loading={isFetching}
          className="user-table"
          scroll={{ y: 'calc(100% - 55px)' }}
          dataSource={selectedPhoneUsers}
          columns={columns}
          pagination={false}
          rowKey={(record) => record.id}
        />
      </div>
      <CreateUser isOpen={isOpenCreateUser} handleOpenCloseModal={handleOpenCloseModal} />
    </div>
  );
};

export default Organization;
