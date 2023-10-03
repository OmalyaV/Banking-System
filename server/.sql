CREATE TABLE `onlineLoanRequest` (
  `request_id` VARCHAR(36),
  `requested_amount` DECIMAL(6,2),
  `FD_id` VARCHAR(36),
  PRIMARY KEY (`request_id`)
);

CREATE TABLE `Saving account` (
  `account_number` BIGINT(10),
  `balance` Decimal(12,2),
  PRIMARY KEY (`account_number`)
);

CREATE TABLE `FD_plan` (
  `plan_id` VARCHAR(36),
  `time_in_months` INT,
  `interest_rate` DECIMAL(4,2),
  PRIMARY KEY (`plan_id`)
);

CREATE TABLE `FixedDeposit` (
  `FD_id` VARCHAR(36),
  `saving_account_number` BIGINT(10),
  `amount` DECIMAL(18,2),
  `plan_id` VARCHAR(36),
  PRIMARY KEY (`FD_id`),
  FOREIGN KEY (`plan_id`) REFERENCES `FD_plan`(`plan_id`),
  FOREIGN KEY (`saving_account_number`) REFERENCES `Saving account`(`account_number`)
);

CREATE TABLE `Customer` (
  `customer_NIC` BIGINT(10),
  `name` VARCHAR(20),
  `date_of_birth` DATE,
  `telephone_number` VARCHAR(10),
  `email` VARCHAR(50),
  PRIMARY KEY (`customer_NIC`)
);

CREATE TABLE `Branch` (
  `branch code` INT,
  `Branch name` VARCHAR(20),
  `address` VARCHAR(50),
  PRIMARY KEY (`branch code`)
);

CREATE TABLE `Employee` (
  `employee_id` VARCHAR(36),
  `branch_code` INT,
  `name` VARCHAR(50),
  `telephone_number` VARCHAR(10),
  `position` VARCHAR(20),
  `email` VARCHAR(50),
  PRIMARY KEY (`employee_id`),
  FOREIGN KEY (`branch_code`) REFERENCES `Branch`(`branch code`)
);

CREATE TABLE `saving_plan` (
  `name` VARCHAR(10),
  `interest_rate` DECIMAL(4,2),
  `minimum_deposit` INT,
  PRIMARY KEY (`name`)
);

CREATE TABLE `Loan` (
  `loan_id` VARCHAR(36),
  `amount` DECIMAL(6,2),
  `interest_rate` DECIMAL(4,2),
  `request_id` VARCHAR(36),
  PRIMARY KEY (`loan_id`),
  FOREIGN KEY (`request_id`) REFERENCES `FixedDeposit`(`FD_id`)
);

CREATE TABLE `Account` (
  `account_number` BIGINT(10),
  `type` ENUM('savings', 'current'),
  `customer_id` BIGINT(10),
  `branch_code` INT,
  `balance` DECIMAL(10,2),
  PRIMARY KEY (`account_number`),
  FOREIGN KEY (`branch_code`) REFERENCES `Branch`(`branch code`),
  FOREIGN KEY (`customer_id`) REFERENCES `Customer`(`customer_NIC`)
);

CREATE TABLE `Transaction` (
  `transaction_id` VARCHAR(36),
  `sender_account_number` BIGINT(10),
  `receiver_account_number` BIGINT(10),
  `transfer_amount` DECIMAL(12,2),
  `transaction_date_time` DATETIME,
  PRIMARY KEY (`transaction_id`),
  FOREIGN KEY (`sender_account_number`) REFERENCES `Account`(`account_number`),
  FOREIGN KEY (`receiver_account_number`) REFERENCES `Account`(`account_number`)
);

CREATE TABLE `User` (
  `user_NIC` VARCHAR(10),
  `username` VARCHAR(20),
  `password_hash` VARCHAR(50),
  PRIMARY KEY (`user_NIC`)
);

alter table Branch
    add manager_id varchar(36) null;

ALTER TABLE Branch
ADD CONSTRAINT manager_id
FOREIGN KEY (manager_id)
REFERENCES employee(employee_id);

create table `position` (
    `position_id` INT,
    `position_name` varchar(50),
    primary key (`position_id`)

);
ALTER TABLE Employee
    ADD CONSTRAINT Employee_position_position_id_fk
    FOREIGN KEY (position_id) REFERENCES `position` (position_id);


rename table `Saving account` to saving_account;

alter table Loan ADD column customer_NIC BIGINT;
alter table Loan
add CONSTRAINT  fk_customer_NIC
FOREIGN KEY (customer_NIC)
REFERENCES Customer(customer_NIC);

DELIMITER //
create PROCEDURE DeleteFDLoan(IN FD_ID_in varchar(36))
BEGIN
    DELETE FROM Loan where request_id in(
        select request_id from onlineLoanRequest where FD_id = FD_ID_in
        );
end //
DELIMITER ;

DELIMITER //

create PROCEDURE DeleteAccountFD(IN account_number_in BIGINT)
BEGIN
    DELETE FROM FixedDeposit where saving_account_number = account_number_in;
end //
DELIMITER ;


DELIMITER //

create PROCEDURE DeleteCustomerAccount(customer_ID_in BIGINT )
BEGIN
    DELETE FROM Account where customer_NIC= customer_ID_in;


end //
DELIMITER ;

DELIMITER //
create PROCEDURE DeleteAccountSavingAccount(account_number_in BIGINT,type enum('savings', 'current'))
BEGIN
    if type = 'savings' then
        delete from saving_account where account_number = account_number_in;
    end if ;
end //
DELIMITER ;

DELIMITER //
create TRIGGER customer_delete_trigger
after delete on Customer
    for each row
    BEGIN
        CALL DeleteCustomerAccount(OLD.customer_NIC);
    end;
//
DELIMITER ;
DROP TRIGGER IF EXISTS account_delete_trigger;

show triggers ;
create trigger account_delete_trigger
    after delete
    on Account
    for each row
begin
    CALL DeleteAccountSavingAccount(OLD.account_number, OLD.type);
end;

create trigger FD_delete_trigger
    after delete
    on saving_account
    for each row
begin
    call DeleteAccountFD(OLD.account_number);
end;

create trigger loan_delete_trigger_1
    after delete
    on FixedDeposit
    for each row
begin
    call DeleteFDLoan(OLD.FD_id);
end;
