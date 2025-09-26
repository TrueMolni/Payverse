"use client";

import React from "react";
import Image from "next/image";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalTitle,
  ModalDescription,
  ModalFooter,
} from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { AccountOffer } from "@/types";


interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  offer: AccountOffer | null;
}

export default function ApplicationModal({
  isOpen,
  onClose,
  onConfirm,
  offer,
}: ApplicationModalProps) {
  if (!offer) return null;

  return (
    <Modal open={isOpen} onOpenChange={onClose}>
      <ModalContent className="max-w-md">
        <ModalHeader className="text-center">
          <div className="mx-auto mb-4 flex items-center justify-center">
         
            <Image
              src="/icons/startup-img.png"
              alt="Edit"
              width={113}
              height={113}
            />
          </div>
          <ModalTitle className="text-[26px] font-bold text-center">
            Your Request is Submitted
          </ModalTitle>
          <ModalDescription className="mt-2 text-black text-center">
            Your Application was sent to the bank for review. Current status can
            be tracked using Active Cases Tab.
          </ModalDescription>
        </ModalHeader>

        <ModalFooter className="mt-6">
          <Button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            onClick={onConfirm}
          >
            Got it
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
