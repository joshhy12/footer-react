import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPaperPlane, FaGift, FaEnvelopeOpenText, FaWhatsapp } from 'react-icons/fa';
import DataTable from 'react-data-table-component';
import { Form, Button } from 'react-bootstrap';
import './PaymentHistory.css';

const Payments = () => {
  const [perPage, setPerPage] = useState(100);
  const [searchTerm, setSearchTerm] = useState('');

  const paymentData = [
    {
      date: '2024-08-27 17:24:25',
      transactionToken: 'C1462D8E-F4D1-414E-A804-B6E047663770',
      reference: 'R60068274',
      for: 'ecard',
      amount: 4000,
      paymentMethod: 'Online',
      status: 'Paid'
    },
    {
      date: '2024-08-26 15:30:00',
      transactionToken: 'B1462D8E-F4D1-414E-A804-B6E047663771',
      reference: 'R60068275',
      for: 'SMS TopUp',
      amount: 2000,
      paymentMethod: 'Mobile Money',
      status: 'Paid'
    },
    {
      date: '2024-08-25 12:15:30',
      transactionToken: 'A1462D8E-F4D1-414E-A804-B6E047663772',
      reference: 'R60068276',
      for: 'WhatsApp Credit',
      amount: 5000,
      paymentMethod: 'Bank Transfer',
      status: 'Pending'
    },
    {
      date: '2024-08-25 12:15:30',
      transactionToken: 'A1462D8E-F4D1-414E-A804-B6E047663772',
      reference: 'R60068276',
      for: 'WhatsApp Credit',
      amount: 5000,
      paymentMethod: 'Bank Transfer',
      status: 'Failed'
    }
  ];

  const columns = [
    { name: 'Date', selector: (row) => row.date, sortable: true },
    { name: 'Transaction Token', selector: (row) => row.transactionToken, sortable: true },
    { name: 'Reference', selector: (row) => row.reference, sortable: true },
    { name: 'Payment For', selector: (row) => row.for, sortable: true },
    { name: 'Amount', selector: (row) => row.amount, sortable: true },
    { name: 'Payment Method', selector: (row) => row.paymentMethod, sortable: true },
    {
      name: 'Status',
      selector: (row) => row.status,
      sortable: true,
      cell: (row) => (
        <span className={`Payment-badge Payment-badge-${row.status === 'Paid'
          ? 'success'
          : row.status === 'Failed'
            ? 'danger'
            : 'warning'
          }`}>
          {row.status}
        </span>
      )
    }
  ];

  const filteredData = paymentData.filter(payment =>
    payment.reference.toLowerCase().includes(searchTerm.toLowerCase()) ||
    payment.transactionToken.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2 className="text-center" style={{ color: '#24366b' }}> Payments Panel  </h2>

          <p className="text-muted">
          </p>

          <div className="dashboard row mt-4">
            <div className="dashboard col text-center">
              <Link to="/admin/sms-topup" className="text-decoration-none">
                <div className="dashboard bg-dash p-4 rounded-lg">
                  <div className="dashText">
                    <FaPaperPlane className="mb-2" size={24} />
                    <div>Message TopUp</div>
                  </div>
                </div>
              </Link>
            </div>

            <div className="dashboard col text-center">
              <Link to="/admin/ecards" className="text-decoration-none">
                <div className="dashboard bg-dash p-4 rounded-lg">
                  <div className="dashText">
                    <FaEnvelopeOpenText className="mb-2" size={24} />
                    <div>Buy Ecards</div>
                  </div>
                </div>
              </Link>
            </div>

            <div className="dashboard col text-center">
              <Link to="/admin/send-invitations" className="text-decoration-none">
                <div className="dashboard bg-dash p-4 rounded-lg">
                  <div className="dashText">
                    <FaWhatsapp className="mb-2" size={24} />
                    <div>WhatApp Credit</div>
                  </div>
                </div>
              </Link>
            </div>

            <div className="dashboard col text-center">
              <Link to="/admin/send-invitations" className="text-decoration-none">
                <div className="dashboard bg-dash p-4 rounded-lg">
                  <div className="dashText">
                    <FaGift className="mb-2" size={24} />
                    <div>Discount </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4">
      <h2 className="text-left" style={{ color: '#24366b' }}>Historia ya malipo</h2>
        <div className="search-box mb-3">
          
        </div>
        <div className="table-scroll">
          <div className="datatable-wrapper">
            <DataTable
              columns={columns}
              data={filteredData}
              pagination
              paginationRowsPerPageOptions={[100, 200, 500]}
              paginationPerPage={perPage}
              onChangeRowsPerPage={setPerPage}
              highlightOnHover
              striped
              dense
              responsive
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payments;