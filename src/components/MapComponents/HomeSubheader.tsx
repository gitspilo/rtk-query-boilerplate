import { Button } from 'antd';
import MapIcon from 'assets/svg/MapIcon';
import ListIcon from 'assets/svg/ListIcon';
import {  white } from 'constants/color.constant';
import './styles.less';

interface HomeSubheaderProps {
  handleListView: Function;
}

const HomeSubheader = ({
  handleListView
}: HomeSubheaderProps) => {
  return (
    <div className="create-list-div">
      <Button.Group className="list-map-grp-btn">
        <Button
          className= 'active-view-btn'
          icon={<MapIcon color={ white} />}
        />
        <Button
          
          icon={<ListIcon color='#42444A' />}
          onClick={() => handleListView()}
        />
      </Button.Group>
    </div>
  );
};

export default HomeSubheader;
