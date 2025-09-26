"use client";

import React, { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import ComplianceNotice from "@/components/account-offer/ComplianceNotice";
import FilterTabs from "@/components/account-offer/FilterTabs";
import OfferTable from "@/components/account-offer/OfferTable";
import { useUrlParams } from "@/hooks/useUrlParams";
import { mockOffers } from "@/data/mockOffers";
import { AccountOffer } from "@/types";

function AccountOfferContent() {
  const { updateParams, getParam } = useUrlParams();
  const [offers, setOffers] = useState<AccountOffer[]>(mockOffers);
  const [activeFilter, setActiveFilter] = useState<string>("Bank");


  useEffect(() => {
    const categoryParam = getParam("category");
    if (
      categoryParam &&
      ["Bank", "Acquiring", "Alternative", "Crypto"].includes(categoryParam)
    ) {
      setActiveFilter(categoryParam);
    }
  }, [getParam]);

  const filteredOffers = offers.filter(
    (offer) => offer.category === activeFilter
  );

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    updateParams({ category: filter });
  };

  const handleStatusChange = (
    offerId: string,
    newStatus: AccountOffer["status"]
  ) => {
    setOffers((prevOffers) =>
      prevOffers.map((offer) =>
        offer.id === offerId ? { ...offer, status: newStatus } : offer
      )
    );
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title="Account Offer / First Company Bank Account / One Request Apply" />

        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-6">
              <div className="flex items-center mb-2">
                <Image
                  src="icons/vertex_logo.png"
                  alt="Vertex Finance"
                  width={32}
                  height={32}
                  className="mr-3"
                />
                <h1 className="text-2xl font-bold text-slate-900">
                  Vertex Finance
                </h1>
              </div>
              <ComplianceNotice />
            </div>

            {/* Filter Tabs */}
            <FilterTabs
              activeFilter={activeFilter}
              onFilterChange={handleFilterChange}
            />

            {/* Offers Table */}
            <div className="bg-white rounded-lg shadow-sm border border-slate-200">
              <OfferTable
                offers={filteredOffers}
                onStatusChange={handleStatusChange}
              />
            </div>

            {/* Subscription Notice */}
            <div className="mt-8 text-center">
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  Heads up!
                </h3>
                <p className="text-gray-700 mb-6">
                  You'll need to subscription to apply for more than 3
                  categories.
                </p>
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-2 rounded-lg transition-colors duration-200">
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default function AccountOfferPage() {
  return (
    <Suspense
      fallback={
        <div className="flex h-screen bg-gray-50">
          <Sidebar />
          <div className="flex-1 flex items-center justify-center">
            <div className="animate-pulse">Loading...</div>
          </div>
        </div>
      }
    >
      <AccountOfferContent />
    </Suspense>
  );
}
