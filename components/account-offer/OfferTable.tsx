"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AccountOffer } from "@/types";
import { cn } from "@/lib/utils";
import ApplicationModal from "./ApplicationModal";

interface OfferTableProps {
  offers: AccountOffer[];
  onStatusChange: (offerId: string, newStatus: AccountOffer["status"]) => void;
}

export default function OfferTable({
  offers,
  onStatusChange,
}: OfferTableProps) {
  const [showModal, setShowModal] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState<AccountOffer | null>(null);

  const handleApply = (offer: AccountOffer) => {
    setSelectedOffer(offer);
    setShowModal(true);
  };

  const handleConfirmApplication = () => {
    if (selectedOffer) {
      onStatusChange(selectedOffer.id, "Applied");
      setShowModal(false);
      setSelectedOffer(null);
    }
  };

  const getStatusBadge = (status: AccountOffer["status"]) => {
    const statusConfig = {
      Pending: { className: "bg-gray-100 text-gray-600", label: "—" },
      Applied: {
        className: "bg-blue-100 text-blue-700 font-medium",
        label: "Applied",
      },
      Disabled: { className: "bg-gray-100 text-gray-800", label: "Disabled" },
    };

    const config = statusConfig[status];
    return (
      <Badge
        className={cn(
          "px-3 py-1 text-xs rounded-full border-0",
          config.className
        )}
      >
        {config.label}
      </Badge>
    );
  };

  if (offers.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">
          No offers available for the selected category
        </p>
        <p className="text-gray-400 text-sm mt-2">
          Try selecting a different filter
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-200">
              <th className="text-left py-3 px-4 font-medium text-slate-900">
                Acct Name
              </th>
              <th className="text-left py-3 px-4 font-medium text-slate-900">
                Country
              </th>
              <th className="text-left py-3 px-4 font-medium text-slate-900">
                Type
              </th>
              <th className="text-left py-3 px-4 font-medium text-slate-900">
                Open Fee
              </th>
              <th className="text-left py-3 px-4 font-medium text-slate-900">
                Including Fee
              </th>
              <th className="text-left py-3 px-4 font-medium text-slate-900">
                Outgoing Fee
              </th>
              <th className="text-left py-3 px-4 font-medium text-slate-900">
                Exp. Time
              </th>
              <th className="text-left py-3 px-4 font-medium text-slate-900">
                Status
              </th>
              <th className="text-left py-3 px-4 font-medium text-slate-900">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {offers.map((offer) => (
              <tr
                key={offer.id}
                className="border-b border-slate-100 hover:bg-slate-50"
              >
                <td className="py-4 px-4">
                  <div>
                    <p className="font-medium text-slate-900">
                      {offer.acctName}
                    </p>
                  </div>
                </td>
                <td className="py-4 px-4 text-slate-700">{offer.country}</td>
                <td className="py-4 px-4 text-slate-700">{offer.type}</td>
                <td className="py-4 px-4 text-slate-700">{offer.openFee}</td>
                <td className="py-4 px-4 text-slate-700">
                  {offer.includingFee}
                </td>
                <td className="py-4 px-4 text-slate-700">
                  {offer.outgoingFee}
                </td>
                <td className="py-4 px-4 text-slate-700">{offer.expTime}</td>
                <td className="py-4 px-4">{getStatusBadge(offer.status)}</td>
                <td className="py-4 px-4">
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-blue-600 border-blue-200 hover:bg-blue-50"
                    >
                      Details
                    </Button>
                    {offer.status === "Applied" ? (
                      <div className="flex space-x-1">
                        <Button
                          size="sm"
                          variant="outline"
                          className=" text-white group transition-all duration-200 p-0"
                        >
                          <Image
                            src="/icons/default_edit_icon.svg"
                            alt="Edit"
                            width={24}
                            height={24}
                            className="group-hover:hidden transition-opacity duration-200"
                          />

                          <Image
                            src="/icons/hover_edit_icon.svg"
                            alt="Edit"
                            width={24}
                            height={24}
                            className="hidden group-hover:block transition-opacity duration-200"
                          />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="text-red-500 border-red-200 p-0 hover:bg-red-50 group transition-all duration-200"
                        >
                          <Image
                            src="/icons/default_delete_icon.svg"
                            alt="Delete"
                            width={24}
                            height={24}
                            className="group-hover:hidden transition-opacity duration-200"
                          />
                          <Image
                            src="/icons/hover_delete_icon.svg"
                            alt="Delete"
                            width={24}
                            height={24}
                            className="hidden group-hover:block transition-opacity duration-200"
                          />
                        </Button>
                      </div>
                    ) : (
                      <Button
                        size="sm"
                        onClick={() => handleApply(offer)}
                        disabled={offer.status === "Disabled"}
                        className=" text-white"
                      >
                        Apply
                      </Button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile version */}
      <div className="md:hidden">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className="bg-white border border-slate-200 rounded-lg p-4 mb-4"
          >
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-medium text-slate-900">{offer.acctName}</h3>
              {getStatusBadge(offer.status)}
            </div>

            <div className="grid grid-cols-2 gap-2 text-sm mb-4">
              <div>
                <span className="text-slate-500">Country:</span>
                <span className="ml-2 text-slate-700">{offer.country}</span>
              </div>
              <div>
                <span className="text-slate-500">Type:</span>
                <span className="ml-2 text-slate-700">{offer.type}</span>
              </div>
              <div>
                <span className="text-slate-500">Open Fee:</span>
                <span className="ml-2 text-slate-700">{offer.openFee}</span>
              </div>
              <div>
                <span className="text-slate-500">Exp. Time:</span>
                <span className="ml-2 text-slate-700">{offer.expTime}</span>
              </div>
            </div>

            <div className="flex space-x-2">
              <Button
                variant="outline"
                size="sm"
                className="flex-1 text-blue-600 border-blue-200"
              >
                Details
              </Button>
              {offer.status === "Applied" ? (
                <div className="flex space-x-1 flex-1">
                  <Button
                    size="sm"
                    className="text-white flex-1 group"
                    variant="outline"
                  >
                    <Image
                      src="/icons/default_edit_icon.svg"
                      alt="Edit"
                      width={24}
                      height={24}
                      className="mr-1 group-hover:hidden"
                    />
                    <Image
                      src="/icons/hover_edit_icon.svg"
                      alt="Edit"
                      width={24}
                      height={24}
                      className="mr-1 hidden group-hover:block"
                    />
                    Edit
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="text-red-500 border-red-200 px-3 group"
                  >
                    <Image
                      src="/icons/default_delete_icon.svg"
                      alt="Delete"
                      width={24}
                      height={24}
                    />
                    <Image
                      src="/icons/hover_delete_icon.svg"
                      alt="delete"
                      width={24}
                      height={24}
                      className="mr-1 hidden group-hover:block"
                    />
                  </Button>
                </div>
              ) : (
                <Button
                  size="sm"
                  className="flex-1  text-white"
                  onClick={() => handleApply(offer)}
                  disabled={offer.status === "Disabled"}
                >
                  Apply
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>

      <ApplicationModal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
          setSelectedOffer(null);
        }}
        onConfirm={handleConfirmApplication}
        offer={selectedOffer}
      />
    </>
  );
}
