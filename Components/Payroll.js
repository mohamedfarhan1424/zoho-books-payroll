import Image from "next/image";
import React from "react";
import PayrollLogo from "./zoho-payroll-logo.svg";
import Addpayroll from "./vector14.svg";
import Approvepayroll from "./vector15.svg";
import Makepayroll from "./vector16.svg";
import ManageEmployee from "./manageemployee.svg";
import StatutoryComponents from "./Statutorycomponents.svg";
import EmployeePortal from "./employeeportal.svg";
import FlexiblePayment from "./flexiblepayment.svg";
import Loans from "./loans.svg";
import EasytoSwitch from "./Easytoswitch.svg";
import styles from "./Payroll.module.css";

function Payroll() {
  return (
    <>
      <div className={styles.head}>
        <div className={styles.logo}>
          <Image src={PayrollLogo} />
        </div>
        <p className={styles.stream}>
          Streamline payroll operations and pay your employees on time.
        </p>
        <button className={styles.trybutton}>Try Payroll</button>
        <div className={styles.images}>
          <div className={styles.svgs}>
            <Image src={Addpayroll} />
            <p>Add Payroll Inputs</p>
          </div>
          <div className={styles.svgs}>
            <Image src={Approvepayroll} />
            <p>Approve Payroll</p>
          </div>
          <div className={styles.svgs}>
            <Image src={Makepayroll} />
            <p>Make Payments</p>
          </div>
        </div>
        <div className={styles.lower}>
          <p className={styles.stream1}>
            Powerful features that make running payroll a breeze
          </p>
          <div className={styles.content}>
            <div className={styles.descriptions}>
              <div className={styles.icons}>
                <Image src={ManageEmployee} />
              </div>
              <h4 className={styles.header}>Manage your employees</h4>
              <p className={styles.bodies}>
                Add all your employees' information easily and process their
                salary payments every month.
              </p>
            </div>
            <div className={styles.descriptions}>
              <div className={styles.icons}>
                <Image src={StatutoryComponents} />
              </div>
              <h4 className={styles.header}>Statutory Components</h4>
              <p className={styles.bodies}>
                Stay compliant with the Government mandated schemes such as EPF,
                ESI and LWF which provide several benefits to your employees.
              </p>
            </div>
            <div className={styles.descriptions}>
              <div className={styles.icons}>
                <Image src={EmployeePortal} />
              </div>
              <h4 className={styles.header}>Employee Portal</h4>
              <p className={styles.bodies}>
                Enable employees to access their payslips and perform payroll
                related activities like Income Tax Declaration and Proof of
                Investment submission through the dedicated employee
                self-service portal.
              </p>
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.descriptions}>
              <div className={styles.icons}>
                <Image src={FlexiblePayment} />
              </div>
              <h4 className={styles.header}>Flexible Payment Methods</h4>
              <p className={styles.bodies}>
                You can either automate salary payments through direct bank
                transfers or you can manually write your employees cheques.
              </p>
            </div>
            <div className={styles.descriptions}>
              <div className={styles.icons}>
                <Image src={Loans} />
              </div>
              <h4 className={styles.header}>Handle Employee Loans</h4>
              <p className={styles.bodies}>
                Record the loans that you've issued to your employees and
                collect repayments as a part of each month's pay run.
              </p>
            </div>
            <div className={styles.descriptions}>
              <div className={styles.icons}>
                <Image src={EasytoSwitch} />
              </div>
              <h4 className={styles.header}>Easy to Switch</h4>
              <p className={styles.bodies}>
                You can move all your past data from your existing system and
                we'll ensure there is no duplicate or missing paperwork so you
                can continue without a hitch.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Payroll;
