import React, { useState } from 'react';
import './Ticket.css';

const Ticket = () => {
  return (
    <div>
      <div className="banner-container">
        <img className="banner-image" src={require("../Ticket/Ticket-Banner.png")} alt="Ticket Banner" />
      </div>

      <div className="grid-container">
        <div></div> {/* Bagian kiri */}
        <div>
          <table className="custom-table">
            <thead>
              <tr>
                <th>TICKET BOOK</th>
                <th>PRICE</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Adult (> 21 years old)</td>
                <td>100.000.00</td>
                <td>
                  <button className="custom-button">Book</button>
                </td>
              </tr>
              <tr>
                <td>Student (13-21 years old)</td>
                <td>50.000.00</td>
                <td>
                  <button className="custom-button">Book</button>
                </td>
              </tr>
              <tr>
                <td>Children (7-12 years old)</td>
                <td>25.000.00</td>
                <td>
                  <button className="custom-button">Book</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div> {/* bagian kanan */}
      </div>
    </div>
  );
};

export default Ticket;