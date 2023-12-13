import { red } from 'constants/color.constant';
import { IconProps } from 'types/common.types';

const DeleteIcon = ({ color, height, width, onClick }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.33342 1.875C7.98824 1.875 7.70842 2.15482 7.70842 2.5V3.125H4.16675C3.82157 3.125 3.54175 3.40482 3.54175 3.75C3.54175 4.09518 3.82157 4.375 4.16675 4.375H15.8334C16.1786 4.375 16.4584 4.09518 16.4584 3.75C16.4584 3.40482 16.1786 3.125 15.8334 3.125H12.2917V2.5C12.2917 2.15482 12.0119 1.875 11.6667 1.875H8.33342Z"
        fill={color}
      />
      <path
        d="M8.33342 8.875C8.67859 8.875 8.95842 9.15482 8.95842 9.5L8.95841 15.3333C8.95841 15.6785 8.67859 15.9583 8.33341 15.9583C7.98824 15.9583 7.70841 15.6785 7.70841 15.3333L7.70842 9.5C7.70842 9.15482 7.98824 8.875 8.33342 8.875Z"
        fill={color}
      />
      <path
        d="M12.2917 9.5C12.2917 9.15482 12.0119 8.875 11.6667 8.875C11.3216 8.875 11.0417 9.15482 11.0417 9.5V15.3333C11.0417 15.6785 11.3216 15.9583 11.6667 15.9583C12.0119 15.9583 12.2917 15.6785 12.2917 15.3333V9.5Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.99294 6.59765C5.0281 6.28113 5.29564 6.04167 5.61411 6.04167H14.386C14.7045 6.04167 14.9721 6.28113 15.0072 6.59765L15.174 8.09877C15.4764 10.8199 15.4764 13.5661 15.174 16.2872L15.1576 16.435C15.0376 17.5151 14.2005 18.3764 13.1242 18.5271C11.0516 18.8172 8.94861 18.8172 6.87598 18.5271C5.7997 18.3764 4.96258 17.5151 4.84256 16.435L4.82614 16.2872C4.5238 13.5661 4.5238 10.8199 4.82614 8.09877L4.99294 6.59765ZM6.17351 7.29167L6.0685 8.23681C5.77635 10.8662 5.77635 13.5198 6.0685 16.1492L6.08492 16.2969C6.14184 16.8092 6.53885 17.2177 7.04929 17.2891C9.00694 17.5632 10.9932 17.5632 12.9509 17.2891C13.4613 17.2177 13.8583 16.8092 13.9152 16.2969L13.9317 16.1492C14.2238 13.5198 14.2238 10.8662 13.9317 8.23681L13.8266 7.29167H6.17351Z"
        fill={color}
      />
    </svg>
  );
};
DeleteIcon.defaultProps = {
  color: red,
  height: 20,
  width: 20,
  onClick: () => {}
};
export default DeleteIcon;