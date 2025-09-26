import { AccountOffer } from '@/types';

export const mockOffers: AccountOffer[] = [
  {
    id: '1',
    acctName: 'libertanco-business',
    country: 'France',
    type: 'Swift',
    openFee: '$3,000',
    includingFee: '0.3% + 2€ EUR USD\n+ 20 GBP',
    outgoingFee: '0.3% + 200 EUR USD\n+ 20 GBP',
    expTime: '3 Biz. Days',
    status: 'Applied',
    category: 'Bank'
  },
  {
    id: '2',
    acctName: 'libertanco-business',
    country: 'France',
    type: 'Swift',
    openFee: '$5,000',
    includingFee: '0.3% + 2€ EUR USD\n+ 20 GBP',
    outgoingFee: '0.3% + 200 EUR USD\n+ 20 GBP',
    expTime: '5 Biz. Days',
    status: 'Applied',
    category: 'Bank'
  },
  {
    id: '3',
    acctName: 'libertanco-business',
    country: 'France',
    type: 'Swift',
    openFee: '$5,000',
    includingFee: '0.3% + 2€ EUR USD\n+ 20 GBP',
    outgoingFee: '0.3% + 200 EUR USD\n+ 20 GBP',
    expTime: '7 Biz. Days',
    status: 'Pending',
    category: 'Bank'
  },
  {
    id: '4',
    acctName: 'libertanco-business',
    country: 'France',
    type: 'Swift',
    openFee: '$5,000',
    includingFee: '0.3% + 2€ EUR USD\n+ 20 GBP',
    outgoingFee: '0.3% + 200 EUR USD\n+ 20 GBP',
    expTime: '3 Biz. Days',
    status: 'Pending',
    category: 'Bank'
  },
  {
    id: '5',
    acctName: 'libertanco-business',
    country: 'France',
    type: 'Swift',
    openFee: '$5,000',
    includingFee: '0.3% + 2€ EUR USD\n+ 20 GBP',
    outgoingFee: '0.3% + 200 EUR USD\n+ 20 GBP',
    expTime: '5 Biz. Days',
    status: 'Pending',
    category: 'Bank'
  },
  {
    id: '6',
    acctName: 'libertanco-business',
    country: 'France',
    type: 'Swift',
    openFee: '$5,000',
    includingFee: '0.3% + 2€ EUR USD\n+ 20 GBP',
    outgoingFee: '0.3% + 200 EUR USD\n+ 20 GBP',
    expTime: '7 Biz. Days',
    status: 'Applied',
    category: 'Bank'
  },

  {
    id: '7',
    acctName: 'payment-gateway',
    country: 'UK',
    type: 'Online',
    openFee: '$1,500',
    includingFee: '2.5% + €0.25',
    outgoingFee: '3.2% + €0.30',
    expTime: '2 Biz. Days',
    status: 'Pending',
    category: 'Acquiring'
  },
  {
    id: '8',
    acctName: 'merchant-account',
    country: 'Germany',
    type: 'POS',
    openFee: '$2,000',
    includingFee: '1.8% + €0.15',
    outgoingFee: '2.1% + €0.20',
    expTime: '3 Biz. Days',
    status: 'Applied',
    category: 'Acquiring'
  },

  {
    id: '9',
    acctName: 'e-money-account',
    country: 'Luxembourg',
    type: 'Digital',
    openFee: '$500',
    includingFee: '1.2% + €0.50',
    outgoingFee: '1.5% + €0.75',
    expTime: '1 Biz. Day',
    status: 'Pending',
    category: 'Alternative'
  },
  {
    id: '10',
    acctName: 'neobank-account',
    country: 'Estonia',
    type: 'API',
    openFee: '$750',
    includingFee: '0.8% + €0.25',
    outgoingFee: '1.1% + €0.35',
    expTime: '2 Biz. Days',
    status: 'Disabled',
    category: 'Alternative'
  },

  {
    id: '11',
    acctName: 'crypto-exchange',
    country: 'Switzerland',
    type: 'Custody',
    openFee: '$10,000',
    includingFee: '0.5% + 0.001 BTC',
    outgoingFee: '0.8% + 0.002 BTC',
    expTime: '7 Biz. Days',
    status: 'Pending',
    category: 'Crypto'
  },
  {
    id: '12',
    acctName: 'defi-platform',
    country: 'Malta',
    type: 'Smart Contract',
    openFee: '$5,000',
    includingFee: '1.0% + 50 USDT',
    outgoingFee: '1.2% + 75 USDT',
    expTime: '5 Biz. Days',
    status: 'Applied',
    category: 'Crypto'
  }
];