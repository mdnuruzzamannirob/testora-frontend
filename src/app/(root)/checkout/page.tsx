"use client";

import { ROUTES } from "@/constants";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { clearCart } from "@/store/slices/cartSlice";
import { ArrowLeft, CreditCard, ShieldCheck, Truck } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

type PaymentMethod = "card" | "cod";

const CITY_OPTIONS = ["Prishtina", "Prizren", "Peja", "Gjakova", "Gjilan", "Ferizaj", "Mitrovica"];

export default function CheckoutPage() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const items = useAppSelector((s) => s.cart.items);

  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const shipping = subtotal >= 50 || subtotal === 0 ? 0 : 5.99;
  const total = subtotal + shipping;

  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("card");
  const [agreed, setAgreed] = useState(false);
  const [form, setForm] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    city: "Prishtina",
    postalCode: "",
    address: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handlePlaceOrder(e: React.FormEvent) {
    e.preventDefault();

    if (paymentMethod === "card") {
      if (!form.cardNumber || !form.expiry || !form.cvv) return;
    }

    dispatch(clearCart());

    router.push(
      `${ROUTES.ORDER_CONFIRMATION}?method=${paymentMethod}&name=${encodeURIComponent(
        `${form.firstName} ${form.lastName}`
      )}&city=${encodeURIComponent(form.city)}&address=${encodeURIComponent(
        form.address
      )}&postal=${encodeURIComponent(form.postalCode)}&phone=${encodeURIComponent(
        form.phone
      )}&total=${total.toFixed(2)}&subtotal=${subtotal.toFixed(2)}&shipping=${shipping.toFixed(2)}`
    );
  }

  return (
    <section className="app-container w-full flex-1 py-10">
      <Link
        href={ROUTES.CART}
        className="mb-6 flex w-fit items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-gray-800"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Cart
      </Link>

      <h1 className="mb-1 text-2xl font-extrabold text-gray-900">Checkout</h1>
      <p className="mb-8 text-sm text-gray-500">Enter your delivery and payment details</p>

      <form onSubmit={handlePlaceOrder}>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Left column */}
          <div className="space-y-5 lg:col-span-2">
            {/* Customer Information */}
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h2 className="mb-5 text-base font-bold text-gray-900">Customer Information</h2>

              <div className="space-y-4">
                <div>
                  <label className="mb-1 block text-xs text-gray-500">Email</label>
                  <input
                    name="email"
                    type="email"
                    placeholder="user@testora.com"
                    value={form.email}
                    onChange={handleChange}
                    className="focus:border-primary w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-xs text-gray-500">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      name="firstName"
                      required
                      value={form.firstName}
                      onChange={handleChange}
                      className="focus:border-primary w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-xs text-gray-500">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      name="lastName"
                      required
                      value={form.lastName}
                      onChange={handleChange}
                      className="focus:border-primary w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1 block text-xs text-gray-500">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="phone"
                    required
                    placeholder="+383 XX XXX XXX"
                    value={form.phone}
                    onChange={handleChange}
                    className="focus:border-primary w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-xs text-gray-500">
                      City <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="city"
                      required
                      value={form.city}
                      onChange={handleChange}
                      className="focus:border-primary w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-700 focus:outline-none"
                    >
                      {CITY_OPTIONS.map((city) => (
                        <option key={city} value={city}>
                          {city}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="mb-1 block text-xs text-gray-500">Postal Code</label>
                    <input
                      name="postalCode"
                      placeholder="10000"
                      value={form.postalCode}
                      onChange={handleChange}
                      className="focus:border-primary w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1 block text-xs text-gray-500">
                    Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="address"
                    required
                    placeholder="Street name and number"
                    value={form.address}
                    onChange={handleChange}
                    className="focus:border-primary w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h2 className="mb-4 text-base font-bold text-gray-900">Payment Method</h2>

              <div className="mb-4 grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setPaymentMethod("card")}
                  className={`flex items-center justify-center gap-2 rounded-lg border py-3 text-sm font-medium ${
                    paymentMethod === "card"
                      ? "border-primary text-primary bg-primary/5"
                      : "border-gray-200 text-gray-600"
                  }`}
                >
                  <CreditCard className="h-4 w-4" />
                  Card
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod("cod")}
                  className={`flex items-center justify-center gap-2 rounded-lg border py-3 text-sm font-medium ${
                    paymentMethod === "cod"
                      ? "border-primary text-primary bg-primary/5"
                      : "border-gray-200 text-gray-600"
                  }`}
                >
                  <Truck className="h-4 w-4" />
                  Cash on Delivery
                </button>
              </div>

              {paymentMethod === "card" ? (
                <div className="space-y-4">
                  <div>
                    <label className="mb-1 block text-xs text-gray-500">
                      Card Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      name="cardNumber"
                      required={paymentMethod === "card"}
                      placeholder="1234 5678 9012 3456"
                      value={form.cardNumber}
                      onChange={handleChange}
                      className="focus:border-primary w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1 block text-xs text-gray-500">
                        Expiry Date <span className="text-red-500">*</span>
                      </label>
                      <input
                        name="expiry"
                        required={paymentMethod === "card"}
                        placeholder="MM/YY"
                        value={form.expiry}
                        onChange={handleChange}
                        className="focus:border-primary w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="mb-1 block text-xs text-gray-500">
                        CVV <span className="text-red-500">*</span>
                      </label>
                      <input
                        name="cvv"
                        required={paymentMethod === "card"}
                        placeholder="123"
                        value={form.cvv}
                        onChange={handleChange}
                        className="focus:border-primary w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-primary/5 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <Truck className="text-primary mt-0.5 h-4 w-4" />
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Cash on Delivery</p>
                      <p className="text-xs text-gray-600">
                        Pay when your order is delivered to your address.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Terms */}
            <label className="flex cursor-pointer items-center gap-2.5 rounded-xl border border-gray-200 bg-white p-4">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="accent-primary h-4 w-4"
              />
              <span className="text-xs text-gray-600">
                I agree to the{" "}
                <Link href={ROUTES.TERMS_OF_SERVICE} className="text-primary hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href={ROUTES.PRIVACY_POLICY} className="text-primary hover:underline">
                  Privacy Policy
                </Link>
              </span>
            </label>
          </div>

          {/* Order Summary */}
          <div className="h-fit rounded-xl border border-gray-200 bg-white p-5">
            <h2 className="mb-4 text-base font-bold text-gray-900">Order Summary</h2>

            <div className="mb-4 space-y-3">
              {items.length > 0 ? (
                items.map((item) => (
                  <div key={item.id} className="flex items-start gap-3">
                    <div className="bg-primary/5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg">
                      <ShieldCheck className="text-primary h-5 w-5" />
                    </div>

                    <div className="flex-1">
                      <p className="text-xs font-semibold text-gray-800">{item.name}</p>
                      <p className="text-primary text-xs">
                        Qty: {item.quantity} · ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-sm text-gray-500">Your cart is empty.</p>
              )}
            </div>

            <div className="mb-2 flex justify-between text-sm text-gray-600">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <div className="mb-4 flex justify-between text-sm text-gray-600">
              <span>Shipping</span>
              <span className={shipping === 0 ? "font-medium text-green-600" : ""}>
                {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
              </span>
            </div>

            <div className="mb-5 flex justify-between border-t border-gray-200 pt-3 text-sm font-extrabold text-gray-900">
              <span>Total</span>
              <span className="text-primary">${total.toFixed(2)}</span>
            </div>

            <button
              type="submit"
              disabled={!agreed || items.length === 0}
              className="bg-primary flex w-full items-center justify-center gap-2 rounded-lg py-3 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-50"
            >
              <ShieldCheck className="h-4 w-4" />
              Place Order
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}
