"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { decryptKey, encryptKey } from "@/lib/utils";

interface PasskeyModalProps {
  onClose: () => void;
}

export const PasskeyModal = ({ onClose }: PasskeyModalProps) => {
  const router = useRouter();
  const path = usePathname();
  const [open, setOpen] = useState(false); // Controls AlertDialog visibility
  const [passkey, setPasskey] = useState("");
  const [error, setError] = useState("");

  const encryptedKey =
    typeof window !== "undefined"
      ? window.localStorage.getItem("accessKey")
      : null;

  useEffect(() => {
    const accessKey = encryptedKey && decryptKey(encryptedKey);

    if (path) {
      if (accessKey === process.env.NEXT_PUBLIC_ADMIN_PASSKEY?.toString()) {
        router.push("/admin");
        onClose(); // Notify parent to unmount
      } else {
        setOpen(true); // Not authenticated, show the modal
      }
    }
  }, [encryptedKey, path, router, decryptKey, onClose]); // Added onClose to dependencies

  // Centralized function to handle modal closing and navigation
  const handleModalCloseAction = (targetPath: string) => {
    setOpen(false); // Ensure AlertDialog knows it's closing
    router.push(targetPath);
    onClose(); // Notify parent to unmount
  };

  // Renamed original closeModal for clarity, used by explicit 'X' button
  const onExplicitCloseButtonClick = () => {
    handleModalCloseAction("/");
  };

  // Renamed original validatePasskey for clarity
  const validateAdminPasskey = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();

    if (passkey === process.env.NEXT_PUBLIC_ADMIN_PASSKEY) {
      const newEncryptedKey = encryptKey(passkey);
      localStorage.setItem("accessKey", newEncryptedKey);
      handleModalCloseAction("/admin");
    } else {
      setError("Invalid passkey. Please try again.");
    }
  };

  // Handles AlertDialog's onOpenChange (e.g., Esc key, overlay click)
  const handleAlertDialogOpenChange = (isOpenRequest: boolean) => {
    if (!isOpenRequest) {
      // If AlertDialog is requesting to close due to dismissal
      handleModalCloseAction("/");
    } else {
      // If requesting to open (e.g. programmatically, though useEffect handles initial open)
      setOpen(isOpenRequest);
    }
  };

  return (
    <AlertDialog open={open} onOpenChange={handleAlertDialogOpenChange}>
      <AlertDialogContent className="shad-alert-dialog">
        <AlertDialogHeader>
          <AlertDialogTitle className="flex items-start justify-between">
            Admin Access Verification
            <Image
              src="/assets/icons/close.svg"
              alt="close"
              width={20}
              height={20}
              onClick={onExplicitCloseButtonClick} // Updated to new handler
              className="cursor-pointer"
            />
          </AlertDialogTitle>
          <AlertDialogDescription>
            To access the admin page, please enter the passkey.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div>
          <InputOTP
            maxLength={6}
            value={passkey}
            onChange={(value) => setPasskey(value)}
          >
            <InputOTPGroup className="shad-otp">
              <InputOTPSlot className="shad-otp-slot" index={0} />
              <InputOTPSlot className="shad-otp-slot" index={1} />
              <InputOTPSlot className="shad-otp-slot" index={2} />
              <InputOTPSlot className="shad-otp-slot" index={3} />
              <InputOTPSlot className="shad-otp-slot" index={4} />
              <InputOTPSlot className="shad-otp-slot" index={5} />
            </InputOTPGroup>
          </InputOTP>

          {error && (
            <p className="shad-error text-14-regular mt-4 flex justify-center">
              {error}
            </p>
          )}
        </div>
        <AlertDialogFooter>
          <AlertDialogAction
            onClick={(e) => validateAdminPasskey(e)} // Updated to new handler
            className="shad-primary-btn w-full"
          >
            Enter Admin Passkey
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
