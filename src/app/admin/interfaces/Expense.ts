export interface Expense {
  isNational: boolean;
  projectName: string;
  tripReason: string;
  dateInvitationTrip: string;
}

export interface ExpenseResponse {
  status: string;
  registerDate: Date;
  isNational: boolean;
  projectName: string;
  tripReason: string;
  invitationTrip: Date | null;
  dateTrip: Date | null;
  requester: string;
  approvedBy: string;
}

export interface PendingExpense {
  travelExpenseApprovalId: number,
  status:String,
  travelExpenseByUserResponse:ExpenseResponse
}

