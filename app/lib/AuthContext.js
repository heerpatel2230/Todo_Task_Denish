import React, {createContext, useContext, useState} from 'react';
import {alertRef, NativeAlert} from '../Components/UI/NativeAlert';
const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({children}) => {
  const [backCount, setBackCount] = useState(0);
  const [showExitDialog, setShowExitDialog] = useState(false);

  const value = {
    backCount: backCount,
    setBackCount: setBackCount,
    showExitDialog: showExitDialog,
    setShowExitDialog: setShowExitDialog,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
      <NativeAlert ref={alertRef} />
    </AuthContext.Provider>
  );
};
