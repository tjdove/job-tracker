export interface User {
  id: number;
  first_name: string;
  last_name: string;
  addr1: string;
  addr2: string;
  state: string;
  zip: string;
}

export interface Job {
  id: number;
  title: string;
  company: string;
  contact: string;
  phoneNumber: string;
  state: string;
  zip: string;
}
