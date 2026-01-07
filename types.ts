
export interface Achievement {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}

export interface Goal {
  id: number;
  title: string;
  icon: string;
}

export interface NewsItem {
  id: number;
  title: string;
  date: string;
  summary: string;
  image: string;
}

export interface BankAccount {
  bankName: string;
  accountNumber: string;
}
