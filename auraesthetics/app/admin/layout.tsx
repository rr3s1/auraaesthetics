"use client";

import { useEffect, useState } from "react";

import { PasskeyModal } from "@/components/PasskeyModal";
import { decryptKey } from "@/lib/utils";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuthentication = () => {
      const encryptedKey = 
        typeof window !== "undefined" 
          ? window.localStorage.getItem("accessKey") 
          : null;
      
      const accessKey = encryptedKey && decryptKey(encryptedKey);
      
      if (accessKey === process.env.NEXT_PUBLIC_ADMIN_PASSKEY?.toString()) {
        setIsAuthenticated(true);
        setShowModal(false);
      } else {
        setIsAuthenticated(false);
        setShowModal(true);
      }
      
      setIsLoading(false);
    };

    checkAuthentication();
  }, []);

  const handleModalClose = () => {
    setShowModal(false);
    // The PasskeyModal will handle navigation
  };

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  if (!isAuthenticated && showModal) {
    return <PasskeyModal onClose={handleModalClose} />;
  }

  if (!isAuthenticated && !showModal) {
    // This shouldn't happen, but just in case
    return null;
  }

  return <>{children}</>;
} 