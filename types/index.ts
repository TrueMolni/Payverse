export interface AccountOffer {
  id: string;
  acctName: string;
  country: string;
  type: string;
  openFee: string;
  includingFee: string;
  outgoingFee: string;
  expTime: string;
  status: 'Pending' | 'Applied' | 'Disabled';
  category: 'Bank' | 'Acquiring' | 'Alternative' | 'Crypto';
}

export interface FilterParams {
  category?: string;
}

export interface User {
  name: string;
  role: string;
  avatar: string;
}