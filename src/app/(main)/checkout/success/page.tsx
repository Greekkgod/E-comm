"use client";

import { Suspense } from "react";
import CheckoutSuccessPage from "./CheckoutSuccess";

export default function CheckoutSuccessPageWrapper() {
  return (
    <Suspense>
      <CheckoutSuccessPage />
    </Suspense>
  );
}