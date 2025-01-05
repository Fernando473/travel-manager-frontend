interface RegisterUser {
  name: string;
  identification: string;
  email: string;
}

export interface Expense {
  id: number;
  registerDate: string;
  registerUser: RegisterUser;
  status: 'REGISTERED' | 'APPROVED' | 'REJECTED';
  isNational: boolean;
  projectName: string;
  tripReason: string;
  dateTrip: string | null;
  invitationTrip: string | null;
}
