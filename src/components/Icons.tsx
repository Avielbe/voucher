import React from "react";
import { FaMobileAlt, FaUmbrellaBeach, FaRegCreditCard } from "react-icons/fa";

/** 📱 — מחליף את VoucherIcon */
export const VoucherIcon: React.FC = () => (
  <FaMobileAlt className="w-full h-full" />
);

/** 🏖 — מחליף את HotelIcon */
export const HotelIcon: React.FC = () => (
  <FaUmbrellaBeach className="w-full h-full" />
);

/** 💳 — מחליף את PaymentIcon */
export const PaymentIcon: React.FC = () => (
  <FaRegCreditCard className="w-full h-full" />
);
