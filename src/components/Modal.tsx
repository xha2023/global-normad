"use client";
import React from "react";
import Button from "@/components/Button";
import clsx from "clsx";

interface ModalProps {
  open: boolean;
  title?: string;
  children?: React.ReactNode;
  confirmText?: string;
  cancelText?: string;
  onClose?: () => void;
  onConfirm?: () => void;
  widthClass?: string; // "max-w-md" 등
}

export default function Modal({
  open,
  title,
  children,
  confirmText = "확인",
  cancelText = "취소",
  onClose,
  onConfirm,
  widthClass = "max-w-md",
}: ModalProps) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
        aria-hidden
      />
      <div
        role="dialog"
        aria-modal="true"
        className={clsx(
          "relative w-full",
          widthClass,
          "bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-border-default p-6"
        )}
      >
        {/* Header */}
        <div className="flex items-start justify-between">
          {title ? <h3 className="typo-18-b">{title}</h3> : <div />}
          <button
            onClick={onClose}
            className="h-8 w-8 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label="닫기"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="mt-4">{children}</div>

        {/* Footer */}
        <div className="mt-6 flex justify-end gap-2">
          <Button variant="ghost" size="sm" label={cancelText} onClick={onClose} />
          <Button size="sm" label={confirmText} onClick={onConfirm} />
        </div>
      </div>
    </div>
  );
}
