import { primary } from 'constants/color.constant';

export const styles: any = {
  customStyles: {
    control: () => ({
      border: '1px solid #c7c7cc',
      height: 32,
      borderRadius: 4,
      display: 'flex'
    }),
    singleValue: (provided: any) => ({
      ...provided,
      color: primary
    })
  }
};
