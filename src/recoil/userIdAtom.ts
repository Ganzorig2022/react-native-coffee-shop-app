import { atom } from 'recoil';

// 1) Declaring type
export interface DocumentIdState {
  documentId: string;
}

// 2) Defining Default State
const defaultDocumentState: DocumentIdState = {
  documentId: '',
};

// 3) Creating global state
export const documentIdState = atom<DocumentIdState>({
  key: 'documentIdState', // unique ID
  default: defaultDocumentState, // default value (aka initial value)
});
