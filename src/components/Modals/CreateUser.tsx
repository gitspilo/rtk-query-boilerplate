import { Button, Modal, message } from 'antd';
import { useFormik } from 'formik';
import RequiredTitle from 'components/core/RequiredTitle';
import { addUserSchema } from 'yup/yupschema';
import './styles.less';

interface CreateUserProps {
  isOpen: boolean;
  handleOpenCloseModal: (data: boolean) => void;
}

const CreateUser = ({ isOpen, handleOpenCloseModal }: CreateUserProps) => {
  const [messageApi, contextHolder] = message.useMessage();
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: ''
    },
    validationSchema: addUserSchema,
    onSubmit: () => {
      messageApi.open({
        type: 'success',
        content: 'User add successfully'
      });
      handleOpenCloseModal(false);
      formik.resetForm();
    }
  });

  return (
    <Modal
      title="Create User"
      centered
      open={isOpen}
      className="create-user-modal"
      onCancel={() => {
        handleOpenCloseModal(false);
        formik.resetForm();
      }}
      footer={null}
      width={521}>
      {contextHolder}
      <form onSubmit={formik.handleSubmit} className="add-user-org">
        <div>
          <RequiredTitle title="First Name" className="form-title" />
          <div>
            <input
              id="firstName"
              name="firstName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.firstName}
            />
            {formik.touched.firstName && formik.errors.firstName && (
              <div>{formik.errors.firstName}</div>
            )}
          </div>
        </div>
        <div>
          <RequiredTitle title="Last Name" className="form-title" />
          <div>
            <input
              id="lastName"
              name="lastName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.lastName}
            />
            {formik.touched.lastName && formik.errors.lastName && (
              <div>{formik.errors.lastName}</div>
            )}
          </div>
        </div>
        <div>
          <RequiredTitle title="Email Address" className="form-title" />
          <div>
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email && <div>{formik.errors.email}</div>}
          </div>
        </div>
        <div>
          <Button htmlType="submit" type="primary">
            Submit
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default CreateUser;
