import { white } from 'constants/color.constant';

import { IconProps } from 'types/common.types';

const MapIcon = ({ color, height, width, onClick }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.96875 18.7477V6.36757C3.96875 5.97751 4.22123 5.6312 4.59554 5.50786L8.889 4.09301C9.26532 3.969 9.67218 3.969 10.0485 4.09301L14.389 5.52335C14.7653 5.64737 15.1722 5.64737 15.5485 5.52335L19.2622 4.29956C19.8558 4.10396 20.4688 4.54073 20.4688 5.15928V16.9352C20.4688 17.2784 20.2726 17.5922 19.962 17.7458L15.7886 19.8087C15.2725 20.0638 14.665 20.0638 14.1489 19.8087L10.2886 17.9005C9.77251 17.6454 9.16499 17.6454 8.64886 17.9005L5.29536 19.5582C4.68587 19.8594 3.96875 19.4213 3.96875 18.7477Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.9688 6V20"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.46875 5V17.5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
MapIcon.defaultProps = {
  color: white,
  width: 24,
  height: 24,
  onClick: () => {}
};

export default MapIcon;
