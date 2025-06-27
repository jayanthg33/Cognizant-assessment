-- ========================================
-- Cognizant Weekly Assessment
-- Exercise 3: Stored Procedures
-- Name: [Your Name]
-- Date: [DD-MMM-YYYY]
-- ========================================

-- ===============================
-- SCENARIO 1: Monthly Interest for Savings Accounts
-- ===============================

-- Drop table if exists
BEGIN
  EXECUTE IMMEDIATE 'DROP TABLE SAVINGS_ACCOUNTS';
EXCEPTION
  WHEN OTHERS THEN NULL;
END;
/

-- Create table
CREATE TABLE SAVINGS_ACCOUNTS (
  AccountID   NUMBER PRIMARY KEY,
  CustomerID  NUMBER,
  Balance     NUMBER
);

-- Insert sample data
INSERT INTO SAVINGS_ACCOUNTS VALUES (201, 1, 10000);
INSERT INTO SAVINGS_ACCOUNTS VALUES (202, 2, 5000);
INSERT INTO SAVINGS_ACCOUNTS VALUES (203, 3, 25000);
COMMIT;

-- Create procedure
CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest IS
BEGIN
  FOR acc IN (SELECT AccountID, Balance FROM SAVINGS_ACCOUNTS) LOOP
    UPDATE SAVINGS_ACCOUNTS
    SET Balance = Balance + (Balance * 0.01)
    WHERE AccountID = acc.AccountID;
  END LOOP;
END;
/

-- Execute procedure
BEGIN
  ProcessMonthlyInterest;
END;
/

-- ===============================
-- SCENARIO 2: Bonus for Employees by Department
-- ===============================

-- Drop table if exists
BEGIN
  EXECUTE IMMEDIATE 'DROP TABLE EMPLOYEES';
EXCEPTION
  WHEN OTHERS THEN NULL;
END;
/

-- Create table
CREATE TABLE EMPLOYEES (
  EmployeeID   NUMBER PRIMARY KEY,
  Name         VARCHAR2(100),
  Department   VARCHAR2(50),
  Salary       NUMBER
);

-- Insert sample data
INSERT INTO EMPLOYEES VALUES (1, 'Alice', 'HR', 50000);
INSERT INTO EMPLOYEES VALUES (2, 'Bob', 'IT', 60000);
INSERT INTO EMPLOYEES VALUES (3, 'Charlie', 'IT', 65000);
INSERT INTO EMPLOYEES VALUES (4, 'Diana', 'HR', 55000);
COMMIT;

-- Create procedure
CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus (
  p_department IN VARCHAR2,
  p_bonus_pct  IN NUMBER
) IS
BEGIN
  UPDATE EMPLOYEES
  SET Salary = Salary + (Salary * p_bonus_pct / 100)
  WHERE Department = p_department;
END;
/

-- Execute procedure
BEGIN
  UpdateEmployeeBonus('IT', 10);
END;
/

-- ===============================
-- SCENARIO 3: Fund Transfer Between Accounts
-- ===============================

-- Drop table if exists
BEGIN
  EXECUTE IMMEDIATE 'DROP TABLE BANK_ACCOUNTS';
EXCEPTION
  WHEN OTHERS THEN NULL;
END;
/

-- Create table
CREATE TABLE BANK_ACCOUNTS (
  AccountID   NUMBER PRIMARY KEY,
  CustomerID  NUMBER,
  Balance     NUMBER
);

-- Insert sample data
INSERT INTO BANK_ACCOUNTS VALUES (301, 1, 8000);
INSERT INTO BANK_ACCOUNTS VALUES (302, 2, 3000);
COMMIT;

-- Create procedure
CREATE OR REPLACE PROCEDURE TransferFunds (
  p_from_account IN NUMBER,
  p_to_account   IN NUMBER,
  p_amount       IN NUMBER
) IS
  v_balance NUMBER;
BEGIN
  SELECT Balance INTO v_balance FROM BANK_ACCOUNTS WHERE AccountID = p_from_account;

  IF v_balance < p_amount THEN
    RAISE_APPLICATION_ERROR(-20001, 'Insufficient balance.');
  END IF;

  -- Deduct from source
  UPDATE BANK_ACCOUNTS
  SET Balance = Balance - p_amount
  WHERE AccountID = p_from_account;

  -- Add to destination
  UPDATE BANK_ACCOUNTS
  SET Balance = Balance + p_amount
  WHERE AccountID = p_to_account;

  COMMIT;
END;
/

-- Execute procedure
BEGIN
  TransferFunds(301, 302, 2000);
END;
/
