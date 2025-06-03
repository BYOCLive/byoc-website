// Purchase History Table
import React, { useState, useEffect } from 'react';

export default function PurchaseHistory ({ purchases }) {
  if (purchases.length === 0) {
    return (
      <section className="py-20 px-4 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Purchase History</h2>
            <p className="text-gray-400">No purchases yet. Make your first investment above!</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Purchase History</h2>
          <p className="text-gray-400">Track your BYOC token investments</p>
        </div>

        <div className="bg-gray-900/50 border border-gray-700 rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-800">
                <tr>
                  <th className="px-6 py-4 text-left text-white font-medium">Date</th>
                  <th className="px-6 py-4 text-left text-white font-medium">Name</th>
                  <th className="px-6 py-4 text-left text-white font-medium">Amount (₹)</th>
                  <th className="px-6 py-4 text-left text-white font-medium">Tokens</th>
                  <th className="px-6 py-4 text-left text-white font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {purchases.map((purchase) => (
                  <tr key={purchase.id} className="border-t border-gray-700">
                    <td className="px-6 py-4 text-gray-300">{purchase.date}</td>
                    <td className="px-6 py-4 text-gray-300">{purchase.name}</td>
                    <td className="px-6 py-4 text-gray-300">₹{purchase.amount}</td>
                    <td className="px-6 py-4 text-purple-400 font-bold">{purchase.tokens}</td>
                    <td className="px-6 py-4">
                      <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
                        {purchase.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};