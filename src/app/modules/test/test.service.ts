import { TTest } from './test.interface';
import { Test } from './test.model';

//create test collection
const createTestCollection = async (payload: TTest) => {
  const result = await Test.create(payload);
  return result;
};
export const TestServices = {
  createTestCollection,
};
