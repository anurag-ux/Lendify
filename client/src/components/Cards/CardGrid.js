import React from "react";
import './cardgrid.css';

function CardGrid() {
    return (
        <div>
            <div className="card-grid">
                <div className="card">
                    <img src="https://www.svgrepo.com/download/227505/market-supermarket.svg" alt="" />
                    <h2>Marketplace</h2>
                    <p className='caraousel-content'>We provide a user-friendly online marketplace where borrowers and lenders can connect
                        and
                        interact with each other directly.</p>
                </div>
                <div className="card">
                    <img src="https://www.svgrepo.com/download/301672/auction-bid.svg" alt="" />
                    <h2>Loan Bidding</h2>
                    <p className='caraousel-content'>Borrowers list their loan requirements on the platform, including the amount, interest rate, and
                        repayment period. Lenders then browse these listings and place bids on the loans that meet their
                        investment criteria.</p>
                </div>
                <div className="card">
                    <img src="https://www.svgrepo.com/download/428658/ethereum-crypto-cryptocurrency-2.svg" alt="" />
                    <h2>Smart Contracts</h2>
                    <p className='caraousel-content'>Lendify uses smart contracts to automate the loan disbursal and repayment process. This
                        ensures that the terms of the loan are enforceable and reduces the risk of default.</p>
                </div>
                <div className="card">
                    <img src="https://www.svgrepo.com/download/424673/document-filled-international.svg" alt="" />
                    <h2>Track your Applications</h2>
                    <p className='caraousel-content'>The platform provides a simple trackable application process for borrowers to submit their loan applications and for
                        lenders to evaluate and approve these applications.</p>
                </div>
                <div className="card">
                    <img src="https://www.svgrepo.com/download/422189/credit-card-debit.svg" alt="" />
                    <h2>Credit Scoring</h2>
                    <p className='caraousel-content'>Our services use blockchain-based credit scoring algorithms to assess the creditworthiness of
                        borrowers and help lenders make informed investment decisions.</p>
                </div>
                <div className="card">
                    <img src="https://www.svgrepo.com/download/421840/chart-growth-invest.svg" alt="" />
                    <h2>Portfolio Management</h2>
                    <p className='caraousel-content'>Lendify provides investment portfolio management tools to help lenders diversify their
                        investments and optimize their returns.</p>
                </div>
            </div>
        </div>
    );
};

export default CardGrid;