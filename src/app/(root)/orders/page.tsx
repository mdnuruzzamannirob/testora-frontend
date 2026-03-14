"use client";

import { useState } from "react";
import { Eye, Search, ShoppingBag, Truck, X, CreditCard, MapPin, Phone } from "lucide-react";

type OrderStatus = "Shipped" | "Delivered" | "Processing" | "New";
type PaymentStatus = "Paid" | "COD Pending";

interface Order {
  id: string;
  status: OrderStatus;
  paymentStatus: PaymentStatus;
  items: { name: string; qty: number; price: number }[];
  date: string;
  total: number;
  payment: string;
  courier?: string;
  tracking?: string;
  address: string;
  phone: string;
}

const ORDERS: Order[] = [
  {
    id: "ORD-2024-001",
    status: "Shipped",
    paymentStatus: "Paid",
    items: [
      { name: "Wireless Bluetooth Headphones", qty: 1, price: 89.99 },
      { name: "USB-C Charging Cable", qty: 2, price: 12.99 },
    ],
    date: "Mar 10, 2024",
    total: 124.96,
    payment: "Credit Card",
    courier: "FedEx",
    tracking: "FDX1234567890",
    address: "123 Main Street, San Francisco, CA 94102",
    phone: "+1 (555) 123-4567",
  },
  {
    id: "ORD-2024-002",
    status: "Delivered",
    paymentStatus: "Paid",
    items: [{ name: "Smart Watch Series 5", qty: 1, price: 312.98 }],
    date: "Mar 8, 2024",
    total: 312.98,
    payment: "PayPal",
    courier: "UPS",
    tracking: "UPS9876543210",
    address: "456 Oak Avenue, New York, NY 10001",
    phone: "+1 (555) 987-6543",
  },
  {
    id: "ORD-2024-003",
    status: "Processing",
    paymentStatus: "COD Pending",
    items: [{ name: "Laptop Backpack", qty: 1, price: 66.98 }],
    date: "Mar 5, 2024",
    total: 66.98,
    payment: "Cash on Delivery",
    address: "789 Pine Street, Austin, TX 78701",
    phone: "+1 (555) 456-7890",
  },
  {
    id: "ORD-2024-004",
    status: "New",
    paymentStatus: "Paid",
    items: [{ name: "Portable Phone Charger 20000mAh", qty: 1, price: 40.98 }],
    date: "Mar 1, 2024",
    total: 40.98,
    payment: "Debit Card",
    address: "321 Elm Street, Seattle, WA 98101",
    phone: "+1 (555) 321-0987",
  },
];

const STATUS_STYLE: Record<OrderStatus, string> = {
  Shipped: "bg-purple-100 text-purple-700",
  Delivered: "bg-green-100 text-green-700",
  Processing: "bg-amber-100 text-amber-700",
  New: "bg-blue-100 text-blue-700",
};

const PAYMENT_STYLE: Record<PaymentStatus, string> = {
  Paid: "bg-green-100 text-green-700",
  "COD Pending": "bg-orange-100 text-orange-700",
};

export default function OrdersPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Statuses");
  const [paymentFilter, setPaymentFilter] = useState("All Payment Statuses");
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  const filtered = ORDERS.filter((o) => {
    const matchSearch = search === "" || o.id.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === "All Statuses" || o.status === statusFilter;
    const matchPayment =
      paymentFilter === "All Payment Statuses" || o.paymentStatus === paymentFilter;
    return matchSearch && matchStatus && matchPayment;
  });

  return (
    <section className="app-container w-full flex-1 py-10">
      <h1 className="mb-1 text-2xl font-extrabold text-gray-900">My Orders</h1>
      <p className="mb-8 text-sm text-gray-500">
        Track your marketplace purchases and order status
      </p>

      {/* Filters */}
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <div className="relative">
          <Search className="absolute top-1/2 left-3 h-3.5 w-3.5 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Enter Order ID..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="focus:border-primary w-full rounded-lg border border-gray-200 py-2 pr-3 pl-8 text-xs focus:outline-none sm:w-44"
          />
        </div>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="focus:border-primary w-full rounded-lg border border-gray-200 px-3 py-2 text-xs focus:outline-none sm:w-auto"
        >
          {["All Statuses", "New", "Processing", "Shipped", "Delivered"].map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
        <select
          value={paymentFilter}
          onChange={(e) => setPaymentFilter(e.target.value)}
          className="focus:border-primary w-full rounded-lg border border-gray-200 px-3 py-2 text-xs focus:outline-none sm:w-auto"
        >
          {["All Payment Statuses", "Paid", "COD Pending"].map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </div>

      {/* Orders list */}
      <div className="space-y-4">
        {filtered.length === 0 ? (
          <div className="rounded-xl bg-white py-16 text-center text-sm text-gray-400">
            No orders found.
          </div>
        ) : (
          filtered.map((order) => (
            <div key={order.id} className="rounded-xl border border-gray-200 bg-white p-5">
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <span className="text-sm font-bold text-gray-900">Order {order.id}</span>
                <span
                  className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold ${STATUS_STYLE[order.status]}`}
                >
                  {order.status}
                </span>
                <span
                  className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold ${PAYMENT_STYLE[order.paymentStatus]}`}
                >
                  {order.paymentStatus}
                </span>
              </div>
              <div className="mb-3 flex items-center gap-4">
                <div className="bg-primary/5 flex h-12 w-12 items-center justify-center rounded-xl">
                  <ShoppingBag className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    {order.items[0].name}
                    {order.items.length > 1 && (
                      <span className="ml-1 text-xs text-gray-400">
                        +{order.items.length - 1} more item{order.items.length > 2 ? "s" : ""}
                      </span>
                    )}
                  </p>
                  <p className="text-xs text-gray-400">Ordered on {order.date}</p>
                </div>
                <button
                  onClick={() => setSelectedOrder(order)}
                  className="ml-auto flex items-center gap-1.5 rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50"
                >
                  <Eye className="h-3.5 w-3.5" />
                  View Details
                </button>
              </div>
              <div className="flex flex-wrap gap-4 text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <span className="text-gray-400">$</span>
                  {order.total.toFixed(2)}
                </span>
                <span className="flex items-center gap-1">
                  <CreditCard className="h-3.5 w-3.5 text-gray-400" />
                  {order.payment}
                </span>
                {order.courier && (
                  <span className="flex items-center gap-1">
                    <Truck className="h-3.5 w-3.5 text-gray-400" />
                    {order.courier}
                  </span>
                )}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Order Detail Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm">
          <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
            <div className="flex items-center justify-between p-5 pb-0">
              <h2 className="text-base font-bold text-gray-900">Order Details</h2>
              <button
                onClick={() => setSelectedOrder(null)}
                className="p-1 text-gray-400 hover:text-gray-700"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-5">
              {/* Header */}
              <div className="mb-4 flex flex-wrap gap-3 border-b border-gray-200 pb-4">
                <div>
                  <p className="text-xs text-gray-400">Order ID</p>
                  <p className="text-sm font-bold text-gray-900">{selectedOrder.id}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400">Order Date</p>
                  <p className="text-sm font-bold text-gray-900">{selectedOrder.date}</p>
                </div>
                <div className="ml-auto flex gap-2">
                  <span
                    className={`flex items-center justify-center rounded-full px-2.5 text-[10px] font-semibold ${STATUS_STYLE[selectedOrder.status]}`}
                  >
                    {selectedOrder.status}
                  </span>
                  <span
                    className={`flex items-center justify-center rounded-full px-2.5 text-[10px] font-semibold ${PAYMENT_STYLE[selectedOrder.paymentStatus]}`}
                  >
                    {selectedOrder.paymentStatus}
                  </span>
                </div>
              </div>

              {/* Ordered Items */}
              <h3 className="mb-3 text-sm font-bold text-gray-900">Ordered Items</h3>
              <div className="mb-4 space-y-3">
                {selectedOrder.items.map((item) => (
                  <div key={item.name} className="flex items-center gap-3">
                    <div className="bg-primary/5 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl">
                      <ShoppingBag className="h-6 w-6 text-blue-300" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{item.name}</p>
                      <p className="text-xs text-gray-400">Quantity: {item.qty}</p>
                    </div>
                    <p className="text-sm font-bold text-gray-900">
                      ${(item.price * item.qty).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="mb-4 border-t border-gray-200 pt-4">
                <h3 className="mb-3 text-sm font-bold text-gray-900">Order Summary</h3>
                <div className="space-y-1.5 text-sm">
                  <div className="flex justify-between text-gray-500">
                    <span>Subtotal</span>
                    <span>${(selectedOrder.total - 5.99).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-500">
                    <span>Shipping Cost</span>
                    <span>$5.99</span>
                  </div>
                  <div className="flex justify-between border-t border-gray-200 pt-2 font-bold text-gray-900">
                    <span>Total</span>
                    <span>${selectedOrder.total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Payment + Address */}
              <div className="mb-4 grid grid-cols-2 gap-4 border-t border-gray-200 pt-4">
                <div>
                  <div className="mb-2 flex items-center gap-1.5">
                    <CreditCard className="text-primary h-4 w-4" />
                    <span className="text-xs font-bold text-gray-900">Payment Information</span>
                  </div>
                  <p className="text-xs text-gray-500">Payment Method</p>
                  <p className="text-xs font-semibold text-gray-800">{selectedOrder.payment}</p>
                  <p className="mt-1 text-xs text-gray-500">Payment Status</p>
                  <span
                    className={`inline-block rounded-full px-2 py-0.5 text-[10px] font-semibold ${PAYMENT_STYLE[selectedOrder.paymentStatus]}`}
                  >
                    {selectedOrder.paymentStatus}
                  </span>
                </div>
                <div>
                  <div className="mb-2 flex items-center gap-1.5">
                    <MapPin className="text-primary h-4 w-4" />
                    <span className="text-xs font-bold text-gray-900">Shipping Address</span>
                  </div>
                  <p className="text-xs text-gray-700">{selectedOrder.address}</p>
                  <p className="mt-1 flex items-center gap-1 text-xs text-gray-500">
                    <Phone className="h-3 w-3" />
                    {selectedOrder.phone}
                  </p>
                </div>
              </div>

              {/* Tracking */}
              {selectedOrder.courier && (
                <div className="bg-primary/5 mb-4 rounded-xl p-3">
                  <div className="mb-2 flex items-center gap-1.5">
                    <Truck className="text-primary h-4 w-4" />
                    <span className="text-xs font-bold text-blue-900">Tracking Information</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <div>
                      <p className="text-gray-500">Courier</p>
                      <p className="font-bold text-gray-800">{selectedOrder.courier}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-500">Tracking Number</p>
                      <p className="font-bold text-gray-800">{selectedOrder.tracking}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="flex gap-2">
                <button className="bg-primary hover:bg-primary/90 flex flex-1 items-center justify-center gap-1.5 rounded-lg py-2.5 text-xs font-semibold text-white">
                  <Truck className="h-3.5 w-3.5" />
                  Track Order
                </button>
                <button className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-gray-200 py-2.5 text-xs font-medium text-gray-700 hover:bg-gray-50">
                  <ShoppingBag className="h-3.5 w-3.5" />
                  Continue Shopping
                </button>
                <button className="flex flex-1 items-center justify-center rounded-lg border border-gray-200 py-2.5 text-xs font-medium text-gray-700 hover:bg-gray-50">
                  Contact Support
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
