import { addUserSchema } from './yupschema';

export const addUserSync = {
  async validator({ field }: any, value: any) {
    await addUserSchema.validateSyncAt(field, { [field]: value });
  }
};
