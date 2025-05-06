
// Type definitions for form data and schema
export interface AquaFormData {
    from: string;
    to: string;
    amount: number;
    contractFileHash: string;
    [key: string]: any; // Allow for additional properties
  }
  