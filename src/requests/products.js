import { dummyJson } from '../services/api';

// Task 1
export async function getAllProducts() {
  return await dummyJson.get('/products');
}
