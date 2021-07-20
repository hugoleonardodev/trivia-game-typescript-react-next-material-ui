/**
 * Action types
 * @LOAD_MERCHANT load merchant data to redux
 * @HANDLE_EXIST if no exist merchant
 * @LOAD_CATEGORIES load categories data to redux
 */

export enum GenerericReducer {
  UPDATE = '@questions/UPDATE',
  HANDLE_EXIST = '@merchants/HANDLE_EXIST',
  LOAD_CATEGORIES = '@merchants/LOAD_CATEGORIES',
  CLEAR_MERCHANT = '@merchants/CLEAR_MERCHANT',
  UPDATE_MERCHANT_AVAILABILITY = '@merchants/UPDATE_MERCHANT_AVAILABILITY',
  UPDATE_MERCHANT_CATEGORY_AVAILABILITY = '@merchants/UPDATE_MERCHANT_CATEGORY_AVAILABILITY',
  UPDATE_MERCHANT_PRODUCT_AVAILABILITY = '@merchants/UPDATE_MERCHANT_PRODUCT_AVAILABILITY',
  UPDATE_MERCHANT_PRODUCT = '@merchants/UPDATE_MERCHANT_PRODUCT',
  UPDATE_MERCHANT_PRODUCT_CURRENT_STOCK = '@merchants/UPDATE_MERCHANT_PRODUCT_CURRENT_STOCK',
}

export interface Action {
  payload: any;
  type: string;
  [key: string]: any;
}
