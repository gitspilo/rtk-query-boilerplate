/* @flow */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { capitalize, find } from 'lodash';
import { Avatar, Dropdown, MenuProps, Typography } from 'antd';
import UserIcon from 'assets/svg/UserIcon';
import SatsureSkiesBlack from 'assets/svg/SatsureSkiesBlack';
import LogOutIcon from 'assets/svg/LogOutIcon';
import { routes } from 'constants/pageroutes.constants';
import { useAppDispatch, useAppSelector } from 'hooks/useReduxHook';
import { setUser, setAccessToken, setUsers } from 'store/users';
import { User } from 'store/users/types';
import { logout } from 'services/axiosClient';
import { shortLabel } from 'utils/utils';
import './styles.less';

const { Text } = Typography;

const HeaderV1 = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { user, users } = useAppSelector((state) => state.user);
  const [currentUser, setCurrentUser] = useState<User | null | undefined>(null);

  useEffect(() => {
    if (user) {
      const loginUser: User | null | undefined = find(users, ['username', user.username]);
      setCurrentUser(loginUser);
    }
  }, [user, users]);

  const handleLogOut = () => {
    logout();
    dispatch(setUser(null));
    dispatch(setUsers([]));
    dispatch(setAccessToken(null));
    navigate(routes.LoginUrl);
  };

  const items: MenuProps['items'] = [
    {
      label: (
        <div className="user-detail">
          <Avatar>{currentUser ? shortLabel(currentUser.email) : shortLabel(user.username)}</Avatar>
          <div>
            <Text>
              {currentUser
                ? capitalize(`${currentUser.name.firstname} ${currentUser.name.lastname}`)
                : capitalize(user.username)}
            </Text>
            <Text>{capitalize('admin')}</Text>
          </div>
        </div>
      ),
      key: '0'
    },
    {
      label: (
        <div className="profile-setting" onClick={handleLogOut}>
          <LogOutIcon />
          <Text>Log out</Text>
        </div>
      ),
      key: '1'
    }
  ];

  return (
    <div className="header-div">
      <SatsureSkiesBlack width={97} height={37} onClick={() => navigate(routes.Home)} />
      <Text className="header-title">CFNPD</Text>
      <Dropdown
        menu={{ items }}
        trigger={['click']}
        className="user-menu"
        overlayClassName="user-menu-item">
        <div onClick={(e) => e.preventDefault()}>
          <UserIcon color="#696B72" />
        </div>
      </Dropdown>
    </div>
  );
};

export default HeaderV1;
