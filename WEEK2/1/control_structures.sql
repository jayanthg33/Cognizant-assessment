-- ============================
-- Cognizant Weekly Assessment
-- PL/SQL Control Structures
-- Name: [Your Name]
-- Date: [Add Date]
-- ============================

-- DROP existing tables (optional)
BEGIN
  EXECUTE IMMEDIATE 'DROP TABLE LOANS';
  EXECUTE IMMEDIATE 'DROP TABLE CUSTOMERS';
EXCEPTION
  WHEN OTHERS THEN NULL;
END;
/

-- CREATE TABLES
CREATE TABLE CUSTOMERS (
  CustomerID         NUMBER PRIMARY KEY,
  Name               VARCHAR2(100),
  Age                NUMBER,
  Balance            NUMBER,
  IsVIP              VARCHAR2(5),
  LoanInterestRate   NUMBER
);

CREATE TABLE LOANS (
  LoanID     NUMBER PRIMARY KEY,
  CustomerID NUMBER,
  DueDate    DATE,
  FOREIGN KEY (CustomerID) REFERENCES CUSTOMERS(CustomerID)
);

-- INSERT DATA
INSERT INTO CUSTOMERS VALUES (1, 'John Doe', 65, 12000, 'FALSE', 9.5);
INSERT INTO CUSTOMERS VALUES (2, 'Jane Smith', 45, 8000, 'FALSE', 10.0);
INSERT INTO CUSTOMERS VALUES (3, 'Arun Kumar', 70, 15000, 'FALSE', 8.5);

INSERT INTO LOANS VALUES (101, 1, SYSDATE + 20);
INSERT INTO LOANS VALUES (102, 2, SYSDATE + 40);
INSERT INTO LOANS VALUES (103, 3, SYSDATE + 10);

COMMIT;

-- SCENARIO 1: Interest Discount
BEGIN
  FOR cust IN (SELECT * FROM CUSTOMERS WHERE Age > 60) LOOP
    UPDATE CUSTOMERS
    SET LoanInterestRate = LoanInterestRate - 1
    WHERE CustomerID = cust.CustomerID;
  END LOOP;
  COMMIT;
END;
/

-- SCENARIO 2: Promote to VIP
BEGIN
  FOR cust IN (SELECT * FROM CUSTOMERS WHERE Balance > 10000) LOOP
    UPDATE CUSTOMERS
    SET IsVIP = 'TRUE'
    WHERE CustomerID = cust.CustomerID;
  END LOOP;
  COMMIT;
END;
/

-- SCENARIO 3: Loan Due Reminders
BEGIN
  FOR loan IN (
    SELECT L.LoanID, C.Name, L.DueDate
    FROM LOANS L
    JOIN CUSTOMERS C ON L.CustomerID = C.CustomerID
    WHERE L.DueDate <= SYSDATE + 30
  ) LOOP
    DBMS_OUTPUT.PUT_LINE('Reminder: ' || loan.Name || ', your loan (ID: ' || loan.LoanID || ') is due on ' || TO_CHAR(loan.DueDate, 'DD-Mon-YYYY'));
  END LOOP;
END;
/
