/* tslint:disable */
import { Customer } from './customer';
import { PurchaseItem } from './purchase-item';
export interface Purchase {
  customer?: Customer;
  dateOfPurchase?: string;
  id?: number;
  purchaseItems?: Array<PurchaseItem>;
  totalcost?: number;
}
