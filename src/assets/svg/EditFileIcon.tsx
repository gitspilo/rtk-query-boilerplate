import { primary } from 'constants/color.constant';
import { IconProps } from 'types/common.types';

const EditFileIcon = ({ color, height, width, onClick }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      onClick={onClick}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.6141 2.89107C12.4969 2.77386 12.3379 2.70801 12.1722 2.70801C12.0064 2.70801 11.8474 2.77386 11.7302 2.89107L4.06989 10.5514C3.99137 10.6299 3.93519 10.7279 3.90712 10.8354L3.07379 14.0257C3.01772 14.2404 3.07967 14.4687 3.23656 14.6256C3.39346 14.7825 3.62178 14.8445 3.83646 14.7884L7.02681 13.9551C7.13425 13.927 7.23228 13.8708 7.3108 13.7923L14.9711 6.13197C15.2152 5.88789 15.2152 5.49217 14.9711 5.24809L12.6141 2.89107ZM5.07369 11.3154L12.1722 4.21689L13.6453 5.69003L6.54683 12.7885L4.55286 13.3093L5.07369 11.3154Z"
        fill={color}
      />
      <path
        d="M3.33333 16.0413C2.98815 16.0413 2.70833 16.3212 2.70833 16.6663C2.70833 17.0115 2.98815 17.2913 3.33333 17.2913H15.8333C16.1785 17.2913 16.4583 17.0115 16.4583 16.6663C16.4583 16.3212 16.1785 16.0413 15.8333 16.0413H3.33333Z"
        fill={color}
      />
    </svg>
  );
};
EditFileIcon.defaultProps = {
  color: primary,
  height: 20,
  width: 20,
  onClick: () => {}
};

export default EditFileIcon;
