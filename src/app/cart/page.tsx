"use client";

import Link from "next/link";
import { ArrowLeft, ShoppingBag, ShieldCheck, Truck, Mail, Trash2 } from "lucide-react";
import { SiteNavbar } from "@/components/SiteNavbar";
import { SiteFooter } from "@/components/SiteFooter";
import { ROUTES } from "@/constants";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { removeFromCart, updateQuantity } from "@/store/slices/cartSlice";

export default function CartPage() {
  const dispatch = useAppDispatch();
  const items = useAppSelector((s) => s.cart.items);
  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const shipping = subtotal >= 50 || subtotal === 0 ? 0 : 5.99;
  const total = subtotal + shipping;

  return (
    <main className="min-h-screen bg-gray-50">
      <SiteNavbar />

      <div className="mx-auto max-w-6xl px-6 py-10">
        {items.length === 0 ? (
          /* ── Empty state ── */
          <div className="flex flex-col items-center justify-center py-28 text-center">
            <ShoppingBag className="mb-5 h-20 w-20 text-gray-300" />
            <h2 className="mb-2 text-xl font-bold text-gray-900">Your cart is empty</h2>
            <p className="mb-6 text-sm text-gray-500">
              Add some products to your cart to get started.
            </p>
            <Link
              href={ROUTES.MARKETPLACE}
              className="rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          /* ── Cart with items ── */
          <>
            <Link
              href={ROUTES.MARKETPLACE}
              className="mb-6 flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-800"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Marketplace
            </Link>
            <h1 className="mb-1 text-2xl font-extrabold text-gray-900">Cart</h1>
            <p className="mb-6 text-sm text-gray-500">Review your items before checkout</p>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              {/* Items */}
              <div className="lg:col-span-2">
                <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
                  {items.map((item, idx) => (
                    <div key={item.id}>
                      {idx > 0 && <div className="my-4 border-t border-gray-100" />}
                      <div className="flex items-start gap-4">
                        {/* Product image placeholder */}
                        <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-blue-50">
                          <ShoppingBag className="h-8 w-8 text-blue-300" />
                        </div>
                        <div className="flex flex-1 flex-col gap-2">
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <p className="text-sm font-bold text-gray-900">{item.name}</p>
                              <p className="text-xs font-semibold text-blue-600">
                                ${item.price.toFixed(2)}
                              </p>
                            </div>
                            <button
                              onClick={() => dispatch(removeFromCart(item.id))}
                              className="flex items-center gap-1 text-xs text-red-500 hover:underline"
                            >
                              <Trash2 className="h-3.5 w-3.5" />
                              Remove
                            </button>
                          </div>
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() =>
                                dispatch(
                                  updateQuantity({ id: item.id, quantity: item.quantity - 1 })
                                )
                              }
                              className="flex h-7 w-7 items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50"
                            >
                              −
                            </button>
                            <span className="w-5 text-center text-sm font-semibold">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                dispatch(
                                  updateQuantity({ id: item.id, quantity: item.quantity + 1 })
                                )
                              }
                              className="flex h-7 w-7 items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50"
                            >
                              +
                            </button>
                          </div>
                          <p className="text-right text-sm font-semibold text-gray-700">
                            Item total: ${(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Order summary */}
              <div className="h-fit rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
                <h2 className="mb-4 text-base font-bold text-gray-900">Order Summary</h2>
                <div className="mb-3 flex justify-between text-sm text-gray-600">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="mb-4 flex justify-between text-sm text-gray-600">
                  <span>Shipping</span>
                  <span className={shipping === 0 ? "font-medium text-green-600" : ""}>
                    {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                <div className="mb-5 flex justify-between border-t border-gray-100 pt-3 text-base font-extrabold text-gray-900">
                  <span>Total</span>
                  <span className="text-blue-600">${total.toFixed(2)}</span>
                </div>
                <button className="mb-3 w-full rounded-lg bg-blue-600 py-3 text-sm font-semibold text-white hover:bg-blue-700">
                  Proceed to Checkout
                </button>
                <Link
                  href={ROUTES.MARKETPLACE}
                  className="mb-4 block w-full rounded-lg border border-gray-200 py-3 text-center text-sm font-semibold text-gray-700 hover:bg-gray-50"
                >
                  Continue Shopping
                </Link>
                <div className="flex flex-col gap-2 border-t border-gray-100 pt-4">
                  {[
                    { icon: ShieldCheck, label: "Secure payment" },
                    { icon: Truck, label: "Fast delivery" },
                    { icon: Mail, label: "Order confirmation by email" },
                  ].map((b) => (
                    <div key={b.label} className="flex items-center gap-2 text-xs text-gray-500">
                      <b.icon className="h-4 w-4 text-gray-400" />
                      {b.label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      <SiteFooter />
    </main>
  );
}
