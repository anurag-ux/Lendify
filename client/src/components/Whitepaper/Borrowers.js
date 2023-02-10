import React from 'react';

import './Borrowers.css'

const Borrowers = () => {
  return (
    <>
      <h3>🥷 How it works for borrowers</h3>
      <p>
      Lendify makes it easy for borrowers to access affordable financing options. Heres how it works:
      </p>
      <ol>
        <li>
          <strong>Register for an account:</strong> To use the platform, you will need to create an account by providing
          some basic information and completing a simple registration process.
        </li>
        <li>
          <strong>Submit a loan application:</strong> Once you have an account, you can submit a loan application by
          providing details about your borrowing needs and financial situation.
        </li>
        <li>
          <strong>Receive loan approval and disbursement:</strong> If your loan application is approved, you will
          receive the loan disbursement according to the terms agreed upon with the lender.
        </li>
        <li>
          <strong>Repay the loan:</strong> You will be responsible for repaying the loan according to the agreed upon
          terms, which may include regular payments and interest. The platform uses smart contracts to automate this
          process and ensure that the terms are enforceable.
        </li>
      </ol>
    </>
  );
};

export default Borrowers;
