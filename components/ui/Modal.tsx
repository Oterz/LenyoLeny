"use client";

import { X } from "lucide-react";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Backdrop } from "@/components/ui/Backdrop";

type ModalProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  title?: string;
  children: React.ReactNode;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  showCloseButton?: boolean;
  variant?: "default" | "image";
};

export default function Modal({
  open,
  setOpen,
  title,
  children,
  maxWidth = "lg",
  showCloseButton = true,
  variant = "default",
}: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const maxWidthClasses = {
    "2xl": "max-w-2xl",
    full: "max-w-full",
    lg: "max-w-lg",
    md: "max-w-md",
    sm: "max-w-sm",
    xl: "max-w-xl",
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [open, setOpen]);

  const handleBackdropClick = () => {
    setOpen(false);
  };

  if (!open) return null;

  // Для варианта с картинкой
  if (variant === "image") {
    const modalContent = (
      <>
        <Backdrop
          isOpen={open}
          onClick={handleBackdropClick}
          zIndex={60}
          className="bg-black/90 backdrop-blur-sm"
        />
        <div className="pointer-events-none fixed inset-0 z-61 flex items-center justify-center p-4">
          {/* Close button */}
          {showCloseButton && (
            <button
              onClick={() => {
                return setOpen(false);
              }}
              className="pointer-events-auto absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
              aria-label="Close modal"
            >
              <X className="h-6 w-6" />
            </button>
          )}

          {/* Content */}
          <div ref={modalRef} className="pointer-events-auto relative">
            {children}
          </div>
        </div>
      </>
    );

    return createPortal(modalContent, document.body);
  }

  // Обычная модалка
  const modalContent = (
    <>
      <Backdrop
        isOpen={open}
        onClick={handleBackdropClick}
        zIndex={60}
        className="bg-black/60 backdrop-blur-sm"
      />
      <div className="pointer-events-none fixed inset-0 z-61 flex items-center justify-center p-4">
        <div
          ref={modalRef}
          className={`pointer-events-auto relative w-full ${maxWidthClasses[maxWidth]} bg-deep-brown/30 rounded-lg shadow-2xl backdrop-blur-3xl`}
          role="dialog"
          aria-modal="true"
          aria-labelledby={title ? "modal-title" : undefined}
        >
          {(title || showCloseButton) && (
            <div className="border-pattern-accent flex items-center justify-between border-b px-6 py-4">
              {title && (
                <h2 id="modal-title" className="text-lg font-semibold text-white">
                  {title}
                </h2>
              )}
              {showCloseButton && (
                <button
                  onClick={() => {
                    return setOpen(false);
                  }}
                  className="ml-auto flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-white transition-colors hover:bg-neutral-100 hover:text-neutral-900"
                  aria-label="Close modal"
                >
                  <X className="h-5 w-5" />
                </button>
              )}
            </div>
          )}

          <div className="max-h-[calc(100vh-12rem)] overflow-y-auto px-6 py-4">{children}</div>
        </div>
      </div>
    </>
  );

  return createPortal(modalContent, document.body);
}
