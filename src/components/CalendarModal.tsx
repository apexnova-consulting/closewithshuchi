"use client";

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CalendarScheduler from './CalendarScheduler';

interface CalendarModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceType: 'real-estate' | 'title-insurance' | 'notary';
}

export default function CalendarModal({ isOpen, onClose, serviceType }: CalendarModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 md:inset-10 bg-white md:rounded-lg shadow-xl z-50 overflow-hidden flex flex-col"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Calendar content */}
            <div className="h-full overflow-auto -mt-2 md:mt-0">
              <div className="sticky top-0 z-10 bg-white py-2 px-4 md:hidden">
                <h2 className="text-xl font-heading font-bold text-center">Schedule Appointment</h2>
              </div>
              <CalendarScheduler serviceType={serviceType} />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}