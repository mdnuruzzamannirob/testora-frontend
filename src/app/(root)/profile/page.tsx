"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { User, LogOut, Lock, Mail, CheckCircle, Globe, Shield, Box, X, Save } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { logout } from "@/store/slices/authSlice";
import { ROUTES } from "@/constants";

type SettingsPanel = "none" | "password" | "login";

type ProfileForm = {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  address: string;
};

type PasswordForm = {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
};

type LoginForm = {
  loginEmail: string;
  loginPhone: string;
};

const emptyPasswordForm: PasswordForm = {
  currentPassword: "",
  newPassword: "",
  confirmPassword: "",
};

export default function ProfilePage() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);

  const baseProfileForm = useMemo<ProfileForm>(
    () => ({
      fullName: user?.name ?? "John Doe",
      email: user?.email ?? "john.doe@example.com",
      phone: "+1 (555) 123-4567",
      city: "San Francisco",
      address: "123 Main Street, CA 94102",
    }),
    [user]
  );

  const baseLoginForm = useMemo<LoginForm>(
    () => ({
      loginEmail: user?.email ?? "john.doe@example.com",
      loginPhone: "+1 (555) 123-4567",
    }),
    [user]
  );

  const [initialProfileFormState, setInitialProfileFormState] =
    useState<ProfileForm>(baseProfileForm);
  const [profileForm, setProfileForm] = useState<ProfileForm>(baseProfileForm);

  const [initialLoginFormState, setInitialLoginFormState] = useState<LoginForm>(baseLoginForm);
  const [loginForm, setLoginForm] = useState<LoginForm>(baseLoginForm);

  const [passwordForm, setPasswordForm] = useState<PasswordForm>(emptyPasswordForm);

  const [openPanel, setOpenPanel] = useState<SettingsPanel>("none");
  const [profileSaved, setProfileSaved] = useState(false);
  const [passwordSaved, setPasswordSaved] = useState(false);
  const [loginSaved, setLoginSaved] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  useEffect(() => {
    // Defer resetting form state to the next tick to avoid synchronous setState
    // inside the effect which can trigger cascading renders.
    const timer = setTimeout(() => {
      setInitialProfileFormState(baseProfileForm);
      setProfileForm(baseProfileForm);
      setInitialLoginFormState(baseLoginForm);
      setLoginForm(baseLoginForm);
      setPasswordForm(emptyPasswordForm);
      setOpenPanel("none");
      setProfileSaved(false);
      setPasswordSaved(false);
      setLoginSaved(false);
      setPasswordError("");
    }, 0);

    return () => clearTimeout(timer);
  }, [baseProfileForm, baseLoginForm]);

  const isProfileDirty =
    profileForm.fullName !== initialProfileFormState.fullName ||
    profileForm.email !== initialProfileFormState.email ||
    profileForm.phone !== initialProfileFormState.phone ||
    profileForm.city !== initialProfileFormState.city ||
    profileForm.address !== initialProfileFormState.address;

  const isPasswordDirty =
    passwordForm.currentPassword !== "" ||
    passwordForm.newPassword !== "" ||
    passwordForm.confirmPassword !== "";

  const isLoginDirty =
    loginForm.loginEmail !== initialLoginFormState.loginEmail ||
    loginForm.loginPhone !== initialLoginFormState.loginPhone;

  function handleProfileChange(e: React.ChangeEvent<HTMLInputElement>) {
    setProfileSaved(false);
    setProfileForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPasswordSaved(false);
    setPasswordError("");
    setPasswordForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleLoginChange(e: React.ChangeEvent<HTMLInputElement>) {
    setLoginSaved(false);
    setLoginForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSaveProfile(e: React.FormEvent) {
    e.preventDefault();

    if (!isProfileDirty) return;

    setInitialProfileFormState(profileForm);
    setProfileSaved(true);
  }

  function handleSavePassword() {
    if (!isPasswordDirty) return;

    if (
      !passwordForm.currentPassword ||
      !passwordForm.newPassword ||
      !passwordForm.confirmPassword
    ) {
      setPasswordError("All password fields are required.");
      return;
    }

    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      setPasswordError("New password and confirm password do not match.");
      return;
    }

    setPasswordError("");
    setPasswordSaved(true);
    setPasswordForm(emptyPasswordForm);
    setOpenPanel("none");
  }

  function handleSaveLoginDetails() {
    if (!isLoginDirty) return;

    const updatedProfile: ProfileForm = {
      ...profileForm,
      email: loginForm.loginEmail,
      phone: loginForm.loginPhone,
    };

    const updatedLogin: LoginForm = {
      loginEmail: loginForm.loginEmail,
      loginPhone: loginForm.loginPhone,
    };

    setProfileForm(updatedProfile);
    setInitialProfileFormState(updatedProfile);
    setLoginForm(updatedLogin);
    setInitialLoginFormState(updatedLogin);
    setLoginSaved(true);
    setOpenPanel("none");
  }

  function handleCancelAll() {
    setProfileForm(initialProfileFormState);
    setLoginForm(initialLoginFormState);
    setPasswordForm(emptyPasswordForm);
    setOpenPanel("none");
    setProfileSaved(false);
    setPasswordSaved(false);
    setLoginSaved(false);
    setPasswordError("");
  }

  return (
    <section className="app-container w-full flex-1 py-10">
      <h1 className="mb-1 text-2xl font-extrabold text-gray-900">Account / Profile</h1>
      <p className="mb-8 text-sm text-gray-500">
        Manage your personal information and account settings
      </p>

      <form onSubmit={handleSaveProfile} className="space-y-5">
        {/* Header Banner */}
        <section className="from-primary to-primary2 rounded-2xl bg-linear-to-r p-6 text-white">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/15">
              <User className="h-8 w-8 text-white" />
            </div>

            <div>
              <h2 className="text-lg font-extrabold">{profileForm.fullName}</h2>
              <p className="text-sm text-white/85">{profileForm.email}</p>
              <p className="mt-1 text-xs text-white/80">One account works across Web and App</p>
            </div>
          </div>
        </section>

        {/* Personal Information */}
        <section className="rounded-2xl border border-gray-200 bg-white p-6">
          <div className="mb-5 flex items-start gap-3">
            <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-xl">
              <User className="text-primary h-4 w-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-900">Personal Information</h3>
              <p className="text-xs text-gray-500">
                Update your personal details and contact information
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-xs font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={profileForm.fullName}
                onChange={handleProfileChange}
                className="focus:border-primary w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm focus:outline-none"
              />
            </div>

            <div>
              <label className="mb-1 block text-xs font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                name="email"
                value={profileForm.email}
                onChange={handleProfileChange}
                className="focus:border-primary w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm focus:outline-none"
              />
            </div>

            <div>
              <label className="mb-1 block text-xs font-medium text-gray-700">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={profileForm.phone}
                onChange={handleProfileChange}
                className="focus:border-primary w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm focus:outline-none"
              />
            </div>

            <div>
              <label className="mb-1 block text-xs font-medium text-gray-700">City</label>
              <input
                type="text"
                name="city"
                value={profileForm.city}
                onChange={handleProfileChange}
                className="focus:border-primary w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm focus:outline-none"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="mb-1 block text-xs font-medium text-gray-700">
                Address <span className="font-normal text-gray-400">(Optional)</span>
              </label>
              <input
                type="text"
                name="address"
                value={profileForm.address}
                onChange={handleProfileChange}
                className="focus:border-primary w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm focus:outline-none"
              />
            </div>
          </div>

          {profileSaved && !isProfileDirty && (
            <p className="mt-4 text-xs font-medium text-green-600">
              Personal information updated successfully.
            </p>
          )}
        </section>

        {/* Account Settings */}
        <section className="rounded-2xl border border-gray-200 bg-white p-6">
          <div className="mb-5 flex items-start gap-3">
            <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-xl">
              <Shield className="text-primary h-4 w-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-900">Account Settings</h3>
              <p className="text-xs text-gray-500">Manage your security and login preferences</p>
            </div>
          </div>

          <div className="space-y-3">
            {/* Change Password */}
            <div className="rounded-xl border border-gray-100 bg-gray-50 px-4 py-4">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Lock className="h-4 w-4 text-gray-600" />
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Change Password</p>
                    <p className="text-xs text-gray-500">
                      Update your password to keep your account secure
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    setOpenPanel((prev) => (prev === "password" ? "none" : "password"))
                  }
                  className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-xs font-semibold text-gray-700"
                >
                  {openPanel === "password" ? "Close" : "Change"}
                </button>
              </div>

              {openPanel === "password" && (
                <div className="mt-4 space-y-4 border-t border-gray-200 pt-4">
                  <div>
                    <label className="mb-1 block text-xs font-medium text-gray-700">
                      Current Password
                    </label>
                    <input
                      type="password"
                      name="currentPassword"
                      value={passwordForm.currentPassword}
                      onChange={handlePasswordChange}
                      className="focus:border-primary w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm focus:outline-none"
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1 block text-xs font-medium text-gray-700">
                        New Password
                      </label>
                      <input
                        type="password"
                        name="newPassword"
                        value={passwordForm.newPassword}
                        onChange={handlePasswordChange}
                        className="focus:border-primary w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="mb-1 block text-xs font-medium text-gray-700">
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        name="confirmPassword"
                        value={passwordForm.confirmPassword}
                        onChange={handlePasswordChange}
                        className="focus:border-primary w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm focus:outline-none"
                      />
                    </div>
                  </div>

                  {passwordError && (
                    <p className="text-xs font-medium text-red-500">{passwordError}</p>
                  )}

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handleSavePassword}
                      disabled={!isPasswordDirty}
                      className={`rounded-lg px-4 py-2 text-xs font-semibold ${
                        isPasswordDirty
                          ? "bg-primary text-white"
                          : "cursor-not-allowed border border-gray-200 bg-gray-100 text-gray-400"
                      }`}
                    >
                      Update Password
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setPasswordForm(emptyPasswordForm);
                        setPasswordError("");
                        setOpenPanel("none");
                        setPasswordSaved(false);
                      }}
                      className="rounded-lg border border-gray-200 px-4 py-2 text-xs font-semibold text-gray-700"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Manage Login Details */}
            <div className="rounded-xl border border-gray-100 bg-gray-50 px-4 py-4">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-gray-600" />
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Manage Login Details</p>
                    <p className="text-xs text-gray-500">Update email or phone number for login</p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setOpenPanel((prev) => (prev === "login" ? "none" : "login"))}
                  className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-xs font-semibold text-gray-700"
                >
                  {openPanel === "login" ? "Close" : "Manage"}
                </button>
              </div>

              {openPanel === "login" && (
                <div className="mt-4 space-y-4 border-t border-gray-200 pt-4">
                  <div>
                    <label className="mb-1 block text-xs font-medium text-gray-700">
                      Login Email
                    </label>
                    <input
                      type="email"
                      name="loginEmail"
                      value={loginForm.loginEmail}
                      onChange={handleLoginChange}
                      className="focus:border-primary w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-xs font-medium text-gray-700">
                      Login Phone
                    </label>
                    <input
                      type="tel"
                      name="loginPhone"
                      value={loginForm.loginPhone}
                      onChange={handleLoginChange}
                      className="focus:border-primary w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm focus:outline-none"
                    />
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handleSaveLoginDetails}
                      disabled={!isLoginDirty}
                      className={`rounded-lg px-4 py-2 text-xs font-semibold ${
                        isLoginDirty
                          ? "bg-primary text-white"
                          : "cursor-not-allowed border border-gray-200 bg-gray-100 text-gray-400"
                      }`}
                    >
                      Save Login Details
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setLoginForm(initialLoginFormState);
                        setOpenPanel("none");
                        setLoginSaved(false);
                      }}
                      className="rounded-lg border border-gray-200 px-4 py-2 text-xs font-semibold text-gray-700"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {passwordSaved && !isPasswordDirty && (
            <p className="mt-4 text-xs font-medium text-green-600">
              Password changed successfully.
            </p>
          )}

          {loginSaved && !isLoginDirty && (
            <p className="mt-2 text-xs font-medium text-green-600">
              Login details updated successfully.
            </p>
          )}
        </section>

        {/* My Packages */}
        <section className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
          <div className="mb-4 flex items-start justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/80">
                <Box className="text-primary h-5 w-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-900">My Packages</h3>
                <p className="text-xs text-gray-500">Your active learning packages</p>
              </div>
            </div>

            <span className="rounded-full bg-green-100 px-2.5 py-0.5 text-[10px] font-semibold text-green-700">
              Active
            </span>
          </div>

          <div className="rounded-xl border border-blue-100 bg-white p-4">
            <p className="text-base font-bold text-gray-900">Premium Learning Package</p>
            <p className="mt-1 text-sm text-gray-500">Access to all courses and materials</p>

            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm">
              <p className="text-gray-600">
                Status: <span className="font-semibold text-green-600">Active</span>
              </p>
              <p className="text-gray-600">
                Expires: <span className="font-medium">Dec 31, 2024</span>
              </p>
            </div>
          </div>

          <div className="mt-4 rounded-xl border border-blue-100 bg-blue-100/50 p-3">
            <p className="text-xs text-blue-900">
              <span className="font-semibold">Note:</span> Purchased packages are used inside the
              Testora mobile app for learning and practice.
            </p>
          </div>

          <Link
            href={ROUTES.MY_PACKAGES}
            className="bg-primary mt-4 inline-flex w-full items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-white"
          >
            View My Packages
          </Link>
        </section>

        {/* Connected Experience */}
        <section className="rounded-2xl border border-blue-100 bg-blue-50/50 p-6">
          <div className="mb-4 flex items-start gap-3">
            <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-xl">
              <Globe className="text-primary h-4 w-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-900">Connected Experience</h3>
            </div>
          </div>

          <ul className="space-y-3 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <CheckCircle className="text-primary mt-0.5 h-4 w-4 shrink-0" />
              <span>
                <span className="font-semibold">Same Account, Multiple Platforms:</span> Your
                Testora account works seamlessly across both web and mobile app.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="text-primary mt-0.5 h-4 w-4 shrink-0" />
              <span>
                <span className="font-semibold">Website:</span> Manage your account, browse and
                purchase packages, shop in the marketplace, and read our blog.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="text-primary mt-0.5 h-4 w-4 shrink-0" />
              <span>
                <span className="font-semibold">Mobile App:</span> All your learning activities,
                practice sessions, quizzes, and course content are accessed through the Testora
                mobile app.
              </span>
            </li>
          </ul>
        </section>

        {/* Bottom Action Bar */}
        <div className="rounded-2xl border border-gray-200 bg-white p-4">
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="submit"
              disabled={!isProfileDirty}
              className={`inline-flex items-center justify-center gap-2 rounded-xl px-6 py-2.5 text-sm font-semibold ${
                isProfileDirty
                  ? "bg-primary text-white"
                  : "cursor-not-allowed border border-gray-200 bg-gray-100 text-gray-400"
              }`}
            >
              <Save className="h-4 w-4" />
              Save Changes
            </button>

            <button
              type="button"
              onClick={handleCancelAll}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 px-6 py-2.5 text-sm font-medium text-gray-700"
            >
              <X className="h-4 w-4" />
              Cancel
            </button>

            <button
              type="button"
              onClick={() => dispatch(logout())}
              className="ml-auto rounded-xl border border-red-200 bg-red-50 px-6 py-2.5 text-sm font-semibold text-red-600"
            >
              <LogOut className="mr-2 inline h-4 w-4" />
              Logout
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}
