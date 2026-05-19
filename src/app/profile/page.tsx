"use client";

import { useEffect, useMemo, useState } from "react";
import { LockKeyhole, MapPinHouse, Plus, UserRound, X } from "lucide-react";
import { AuthGuard } from "@/components/auth/AuthGuard";
import { FamilySection } from "@/components/profile/family/FamilySection";
import { useAuth } from "@/providers/AuthProvider";
import { profileService } from "@/services/profile/profile.service";
import type { UserAddress, UserProfile, UserProfileAddressPayload } from "@/services/profile/profile.types";

type AddressFormItem = UserProfileAddressPayload & {
  id: string;
  apiId: string | null;
};

function createAddress(defaults?: Partial<UserProfileAddressPayload>, apiId: string | null = null): AddressFormItem {
  return {
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    apiId,
    street: defaults?.street ?? "",
    city: defaults?.city ?? "",
    state: defaults?.state ?? "",
    postalCode: defaults?.postalCode ?? "",
    country: defaults?.country ?? "India",
    isDefault: defaults?.isDefault ?? false,
    addressType: defaults?.addressType ?? "home",
  };
}

function SectionMessage({ message, tone }: { message: string; tone: "success" | "error" }) {
  const className = tone === "success"
    ? "rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700"
    : "rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700";

  return <p className={className}>{message}</p>;
}

export default function ProfilePage() {
  const { user } = useAuth();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [draftFirstName, setDraftFirstName] = useState("");
  const [draftLastName, setDraftLastName] = useState("");
  const [draftPhoneNumber, setDraftPhoneNumber] = useState("");
  const [draftCountryCode, setDraftCountryCode] = useState("+91");
  const [addresses, setAddresses] = useState<AddressFormItem[]>([createAddress({ isDefault: true })]);
  const [initialAddressesById, setInitialAddressesById] = useState<Record<string, UserProfileAddressPayload>>({});
  const [removedAddressIds, setRemovedAddressIds] = useState<string[]>([]);
  const [isProfileLoading, setIsProfileLoading] = useState(true);
  const [isSavingAddresses, setIsSavingAddresses] = useState(false);
  const [isSavingProfileDetails, setIsSavingProfileDetails] = useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  const [isChangePasswordOpen, setIsChangePasswordOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const canRemoveAddress = useMemo(() => addresses.length > 1, [addresses.length]);

  function applyProfile(nextProfile: UserProfile) {
    setProfile(nextProfile);
    setFirstName(nextProfile.firstName);
    setLastName(nextProfile.lastName);
    setPhoneNumber(nextProfile.phoneNumber);
    setCountryCode(nextProfile.countryCode || "+91");
    setDraftFirstName(nextProfile.firstName);
    setDraftLastName(nextProfile.lastName);
    setDraftPhoneNumber(nextProfile.phoneNumber);
    setDraftCountryCode(nextProfile.countryCode || "+91");
  }

  function applyAddresses(nextAddresses: UserAddress[]) {
    const hasDefault = nextAddresses.some((address) => address.isDefault);

    if (nextAddresses.length === 0) {
      setAddresses([createAddress({ isDefault: true, country: "India", addressType: "home" })]);
    } else {
      setAddresses(
        nextAddresses.map((address, index) => createAddress({
          street: address.street,
          city: address.city,
          state: address.state,
          postalCode: address.postalCode,
          country: address.country,
          isDefault: hasDefault ? address.isDefault : index === 0,
          addressType: address.addressType,
        }, address.id)),
      );
    }

    setRemovedAddressIds([]);
    setInitialAddressesById(
      nextAddresses.reduce<Record<string, UserProfileAddressPayload>>((result, address) => {
        result[address.id] = {
          street: address.street,
          city: address.city,
          state: address.state,
          postalCode: address.postalCode,
          country: address.country,
          isDefault: address.isDefault,
          addressType: address.addressType,
        };

        return result;
      }, {}),
    );
  }

  async function refreshProfile() {
    const [nextProfile, addressList] = await Promise.all([
      profileService.getUserProfile(),
      profileService.getUserAddresses(),
    ]);

    applyProfile(nextProfile);
    applyAddresses(addressList);
  }

  useEffect(() => {
    let isMounted = true;

    async function loadProfile() {
      setIsProfileLoading(true);
      setErrorMessage("");

      try {
        const [nextProfile, addressList] = await Promise.all([
          profileService.getUserProfile(),
          profileService.getUserAddresses(),
        ]);

        if (!isMounted) {
          return;
        }

        applyProfile(nextProfile);
        applyAddresses(addressList);
      } catch {
        if (!isMounted) {
          return;
        }

        setErrorMessage("Unable to load profile right now. You can still edit and save manually.");
      } finally {
        if (isMounted) {
          setIsProfileLoading(false);
        }
      }
    }

    void loadProfile();

    return () => {
      isMounted = false;
    };
  }, []);

  function handleAddressChange(id: string, field: keyof UserProfileAddressPayload, value: string | boolean) {
    setAddresses((currentAddresses) => currentAddresses.map((address) => (
      address.id !== id
        ? address
        : {
          ...address,
          [field]: value,
        }
    )));
  }

  function setDefaultAddress(id: string) {
    setAddresses((currentAddresses) => currentAddresses.map((address) => ({
      ...address,
      isDefault: address.id === id,
    })));
  }

  function addAddress() {
    setAddresses((currentAddresses) => [...currentAddresses, createAddress()]);
  }

  function removeAddress(id: string) {
    setAddresses((currentAddresses) => {
      const removedAddress = currentAddresses.find((address) => address.id === id);

      if (removedAddress?.apiId) {
        setRemovedAddressIds((currentRemovedAddresses) => (
          currentRemovedAddresses.includes(removedAddress.apiId as string)
            ? currentRemovedAddresses
            : [...currentRemovedAddresses, removedAddress.apiId as string]
        ));
      }

      const nextAddresses = currentAddresses.filter((address) => address.id !== id);

      if (nextAddresses.length === 0) {
        return [createAddress({ isDefault: true, country: "India", addressType: "home" })];
      }

      if (!nextAddresses.some((address) => address.isDefault)) {
        return nextAddresses.map((address, index) => ({
          ...address,
          isDefault: index === 0,
        }));
      }

      return nextAddresses;
    });
  }

  function openEditProfilePopup() {
    setDraftFirstName(firstName);
    setDraftLastName(lastName);
    setDraftPhoneNumber(phoneNumber);
    setDraftCountryCode(countryCode);
    setIsEditProfileOpen(true);
  }

  function openChangePasswordPopup() {
    setOldPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setIsChangePasswordOpen(true);
  }

  async function handleSaveProfileDetails(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSavingProfileDetails(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const result = await profileService.updateUserProfile({
        firstName: draftFirstName,
        lastName: draftLastName,
        phoneNumber: draftPhoneNumber,
        countryCode: draftCountryCode,
      });

      setFirstName(draftFirstName.trim());
      setLastName(draftLastName.trim());
      setPhoneNumber(draftPhoneNumber.trim());
      setCountryCode(draftCountryCode.trim());
      setSuccessMessage(result.message || "Profile details updated successfully.");
      setIsEditProfileOpen(false);

      try {
        const nextProfile = await profileService.getUserProfile();
        applyProfile(nextProfile);
      } catch {
        // Preserve local state if a refresh fails.
      }
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Unable to update profile details right now. Please try again.");
    } finally {
      setIsSavingProfileDetails(false);
    }
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSavingAddresses(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      if (removedAddressIds.length > 0) {
        await Promise.all(removedAddressIds.map((addressId) => profileService.deleteUserAddress(addressId)));
      }

      for (const address of addresses) {
        const payload: UserProfileAddressPayload = {
          street: address.street,
          city: address.city,
          state: address.state,
          postalCode: address.postalCode,
          country: address.country,
          isDefault: address.isDefault,
          addressType: address.addressType,
        };

        if (!address.apiId) {
          await profileService.createUserAddress(payload);
          continue;
        }

        const initialAddress = initialAddressesById[address.apiId];

        if (!initialAddress) {
          await profileService.updateUserAddress(address.apiId, payload);
          continue;
        }

        const changedFields: Partial<UserProfileAddressPayload> = {};

        if (initialAddress.street !== payload.street) changedFields.street = payload.street;
        if (initialAddress.city !== payload.city) changedFields.city = payload.city;
        if (initialAddress.state !== payload.state) changedFields.state = payload.state;
        if (initialAddress.postalCode !== payload.postalCode) changedFields.postalCode = payload.postalCode;
        if (initialAddress.country !== payload.country) changedFields.country = payload.country;
        if (initialAddress.addressType !== payload.addressType) changedFields.addressType = payload.addressType;

        if (Object.keys(changedFields).length > 0) {
          await profileService.updateUserAddress(address.apiId, changedFields);
        }
      }

      const selectedDefaultAddress = addresses.find((address) => address.isDefault);

      if (selectedDefaultAddress?.apiId) {
        await profileService.setDefaultUserAddress(selectedDefaultAddress.apiId);
      }

      setSuccessMessage("Addresses updated successfully.");

      try {
        await refreshProfile();
      } catch {
        // Keep current form values if refresh fails.
      }
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Unable to update profile right now. Please try again.");
    } finally {
      setIsSavingAddresses(false);
    }
  }

  async function handleChangePassword(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");

    if (!oldPassword || !newPassword || !confirmPassword) {
      setErrorMessage("Please fill old password, new password, and confirm password.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setErrorMessage("New password and confirm password do not match.");
      return;
    }

    setIsChangingPassword(true);

    try {
      const result = await profileService.updateUserProfile({
        firstName,
        lastName,
        phoneNumber,
        countryCode,
        oldPassword,
        password: newPassword,
      });

      setOldPassword("");
      setNewPassword("");
      setConfirmPassword("");
      setSuccessMessage(result.message || "Password changed successfully.");
      setIsChangePasswordOpen(false);
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Unable to change password right now. Please try again.");
    } finally {
      setIsChangingPassword(false);
    }
  }

  const profileTitle = [firstName, lastName].filter(Boolean).join(" ") || profile?.username || user?.username || "Your Profile";

  return (
    <AuthGuard allowedRoles={["USER", "ADMIN"]}>
      <main className="mx-auto min-h-[70vh] w-full max-w-[1480px] px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-foreground/45">Profile</p>
            <h1 className="display-font mt-3 text-4xl text-deep sm:text-5xl">Manage Your Account Details</h1>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-foreground/65">
              Update your personal details, maintain delivery addresses, and manage password security from one place.
            </p>
          </div>

          <div className="rounded-[24px] border border-gold/20 bg-white/70 px-5 py-4 text-sm text-foreground/72 shadow-[0_10px_30px_rgba(55,31,10,0.05)]">
            Signed in as <span className="font-semibold text-deep">{user?.email || profile?.email || "Customer"}</span>
          </div>
        </div>

        <section className="mt-8 rounded-[34px] border border-foreground/10 bg-white/90 p-6 shadow-[0_20px_60px_rgba(55,31,10,0.06)] backdrop-blur-sm sm:p-8">
          {isProfileLoading ? <p className="mb-5 text-sm font-medium text-foreground/60">Loading profile...</p> : null}

          <div className="rounded-[28px] border border-foreground/10 bg-[linear-gradient(135deg,#fdfbf7_0%,#f5f0e8_100%)] p-5 sm:p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/35 bg-white text-deep">
                  <UserRound className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-foreground/45">Profile Details</p>
                  <h2 className="mt-1 text-2xl font-bold tracking-[-0.03em] text-deep">{profileTitle}</h2>
                  <p className="mt-2 text-sm text-foreground/62">{profile?.email || user?.email || "No email available"}</p>
                  <p className="mt-1 text-sm text-foreground/62">{countryCode} {phoneNumber || "No phone number saved"}</p>
                </div>
              </div>

              <button
                type="button"
                onClick={openEditProfilePopup}
                className="rounded-full border border-gold/35 bg-white px-5 py-3 text-xs font-bold uppercase tracking-[0.08em] text-deep transition hover:border-deep hover:bg-deep hover:text-white"
              >
                Edit Profile
              </button>
            </div>
          </div>

          <form className="mt-7 space-y-7" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3 text-deep">
                  <MapPinHouse className="h-5 w-5" />
                  <h2 className="text-xl font-bold">Addresses</h2>
                </div>
                <button
                  type="button"
                  onClick={addAddress}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-gold/35 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.08em] text-deep transition hover:border-deep hover:bg-deep hover:!text-white"
                >
                  <Plus className="h-3.5 w-3.5" />
                  Add Address
                </button>
              </div>

              <div className="space-y-4">
                {addresses.map((address, index) => (
                  <article key={address.id} className="rounded-[24px] border border-foreground/10 bg-surface p-4 sm:p-5">
                    <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <p className="text-sm font-bold uppercase tracking-[0.12em] text-foreground/52">Address {index + 1}</p>
                      <div className="flex items-center gap-3">
                        <label className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.1em] text-foreground/55">
                          <input
                            type="radio"
                            name="defaultAddress"
                            checked={address.isDefault}
                            onChange={() => setDefaultAddress(address.id)}
                          />
                          Default
                        </label>
                        <button
                          type="button"
                          onClick={() => removeAddress(address.id)}
                          disabled={!canRemoveAddress}
                          className="rounded-full border border-rose-200 px-3 py-1 text-xs font-bold uppercase tracking-[0.08em] text-rose-600 transition enabled:hover:bg-rose-600 enabled:hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          Remove
                        </button>
                      </div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <label className="flex flex-col gap-2 text-sm font-semibold text-foreground/88">
                        Street
                        <input
                          type="text"
                          value={address.street}
                          onChange={(event) => handleAddressChange(address.id, "street", event.target.value)}
                          className="h-11 rounded-xl border border-foreground/12 bg-white px-4 text-sm font-medium text-deep outline-none transition focus:border-deep"
                          required
                        />
                      </label>
                      <label className="flex flex-col gap-2 text-sm font-semibold text-foreground/88">
                        City
                        <input
                          type="text"
                          value={address.city}
                          onChange={(event) => handleAddressChange(address.id, "city", event.target.value)}
                          className="h-11 rounded-xl border border-foreground/12 bg-white px-4 text-sm font-medium text-deep outline-none transition focus:border-deep"
                          required
                        />
                      </label>
                      <label className="flex flex-col gap-2 text-sm font-semibold text-foreground/88">
                        State
                        <input
                          type="text"
                          value={address.state}
                          onChange={(event) => handleAddressChange(address.id, "state", event.target.value)}
                          className="h-11 rounded-xl border border-foreground/12 bg-white px-4 text-sm font-medium text-deep outline-none transition focus:border-deep"
                          required
                        />
                      </label>
                      <label className="flex flex-col gap-2 text-sm font-semibold text-foreground/88">
                        Postal Code
                        <input
                          type="text"
                          value={address.postalCode}
                          onChange={(event) => handleAddressChange(address.id, "postalCode", event.target.value)}
                          className="h-11 rounded-xl border border-foreground/12 bg-white px-4 text-sm font-medium text-deep outline-none transition focus:border-deep"
                          required
                        />
                      </label>
                      <label className="flex flex-col gap-2 text-sm font-semibold text-foreground/88">
                        Country
                        <input
                          type="text"
                          value={address.country}
                          onChange={(event) => handleAddressChange(address.id, "country", event.target.value)}
                          className="h-11 rounded-xl border border-foreground/12 bg-white px-4 text-sm font-medium text-deep outline-none transition focus:border-deep"
                          required
                        />
                      </label>
                      <label className="flex flex-col gap-2 text-sm font-semibold text-foreground/88">
                        Address Type
                        <select
                          value={address.addressType}
                          onChange={(event) => handleAddressChange(address.id, "addressType", event.target.value)}
                          className="h-11 rounded-xl border border-foreground/12 bg-white px-4 text-sm font-medium text-deep outline-none transition focus:border-deep"
                        >
                          <option value="home">Home</option>
                          <option value="work">Work</option>
                          <option value="other">Other</option>
                        </select>
                      </label>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {successMessage ? <SectionMessage message={successMessage} tone="success" /> : null}
            {errorMessage ? <SectionMessage message={errorMessage} tone="error" /> : null}

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isSavingAddresses}
                className="cta-sweep border border-deep bg-deep px-7 py-3 text-sm font-bold uppercase tracking-[0.08em] text-white transition hover:border-gold hover:text-deep focus-visible:border-gold focus-visible:text-deep disabled:opacity-70"
              >
                <span className="relative z-10">{isSavingAddresses ? "Saving..." : "Save Addresses"}</span>
              </button>
            </div>
          </form>
        </section>

        <FamilySection />

        <section className="mt-8 rounded-[34px] border border-foreground/10 bg-white/90 p-6 shadow-[0_20px_60px_rgba(55,31,10,0.06)] backdrop-blur-sm sm:p-8">
          <div className="rounded-[28px] border border-foreground/10 bg-[linear-gradient(135deg,#fdfbf7_0%,#f5f0e8_100%)] p-5 sm:p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/35 bg-white text-deep">
                  <LockKeyhole className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-foreground/45">Security</p>
                  <h2 className="mt-1 text-2xl font-bold tracking-[-0.03em] text-deep">Change Password</h2>
                  <p className="mt-2 text-sm text-foreground/62">Update your account password securely from a dedicated popup form.</p>
                </div>
              </div>

              <button
                type="button"
                onClick={openChangePasswordPopup}
                className="rounded-full border border-gold/35 bg-white px-5 py-3 text-xs font-bold uppercase tracking-[0.08em] text-deep transition hover:border-deep hover:bg-deep hover:text-white"
              >
                Open Change Password
              </button>
            </div>
          </div>
        </section>

        {isEditProfileOpen ? (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 px-4 py-8">
            <div className="w-full max-w-2xl rounded-[30px] border border-foreground/10 bg-white p-6 shadow-[0_30px_80px_rgba(55,31,10,0.2)] sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="display-font text-3xl text-deep">Edit Profile Details</h2>
                  <p className="mt-2 text-sm text-foreground/58">Update first name, last name, phone number, and country code.</p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsEditProfileOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-foreground/12 text-deep transition hover:bg-deep hover:text-white"
                  aria-label="Close edit profile"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <form className="mt-6 grid gap-4 md:grid-cols-2" onSubmit={handleSaveProfileDetails}>
                <label className="flex flex-col gap-2 text-sm font-semibold text-foreground/88">
                  First Name
                  <input
                    type="text"
                    value={draftFirstName}
                    onChange={(event) => setDraftFirstName(event.target.value)}
                    className="h-11 rounded-xl border border-foreground/12 bg-white px-4 text-sm font-medium text-deep outline-none transition focus:border-deep"
                    required
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm font-semibold text-foreground/88">
                  Last Name
                  <input
                    type="text"
                    value={draftLastName}
                    onChange={(event) => setDraftLastName(event.target.value)}
                    className="h-11 rounded-xl border border-foreground/12 bg-white px-4 text-sm font-medium text-deep outline-none transition focus:border-deep"
                    required
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm font-semibold text-foreground/88">
                  Country Code
                  <input
                    type="text"
                    value={draftCountryCode}
                    onChange={(event) => setDraftCountryCode(event.target.value)}
                    className="h-11 rounded-xl border border-foreground/12 bg-white px-4 text-sm font-medium text-deep outline-none transition focus:border-deep"
                    required
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm font-semibold text-foreground/88">
                  Phone Number
                  <input
                    type="tel"
                    value={draftPhoneNumber}
                    onChange={(event) => setDraftPhoneNumber(event.target.value)}
                    className="h-11 rounded-xl border border-foreground/12 bg-white px-4 text-sm font-medium text-deep outline-none transition focus:border-deep"
                    required
                  />
                </label>

                <div className="md:col-span-2 flex justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsEditProfileOpen(false)}
                    className="rounded-full border border-gold/35 bg-white px-5 py-2 text-xs font-bold uppercase tracking-[0.08em] text-deep transition hover:border-deep hover:bg-deep hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSavingProfileDetails}
                    className="cta-sweep border border-deep bg-deep px-6 py-2 text-xs font-bold uppercase tracking-[0.08em] text-white transition hover:border-gold hover:text-deep focus-visible:border-gold focus-visible:text-deep disabled:opacity-70"
                  >
                    <span className="relative z-10">{isSavingProfileDetails ? "Saving..." : "Save Profile Details"}</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        ) : null}

        {isChangePasswordOpen ? (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 px-4 py-8">
            <div className="w-full max-w-2xl rounded-[30px] border border-foreground/10 bg-white p-6 shadow-[0_30px_80px_rgba(55,31,10,0.2)] sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="display-font text-3xl text-deep">Change Password</h2>
                  <p className="mt-2 text-sm text-foreground/58">Enter your old password and choose a new password.</p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsChangePasswordOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-foreground/12 text-deep transition hover:bg-deep hover:text-white"
                  aria-label="Close change password"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <form className="mt-6 grid gap-4 md:grid-cols-3" onSubmit={handleChangePassword}>
                <label className="md:col-span-3 flex flex-col gap-2 text-sm font-semibold text-foreground/88">
                  Old Password
                  <input
                    type="password"
                    value={oldPassword}
                    onChange={(event) => setOldPassword(event.target.value)}
                    className="h-11 rounded-xl border border-foreground/12 bg-white px-4 text-sm font-medium text-deep outline-none transition focus:border-deep"
                    required
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm font-semibold text-foreground/88">
                  New Password
                  <input
                    type="password"
                    value={newPassword}
                    onChange={(event) => setNewPassword(event.target.value)}
                    className="h-11 rounded-xl border border-foreground/12 bg-white px-4 text-sm font-medium text-deep outline-none transition focus:border-deep"
                    required
                  />
                </label>
                <label className="md:col-span-2 flex flex-col gap-2 text-sm font-semibold text-foreground/88">
                  Confirm Password
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(event) => setConfirmPassword(event.target.value)}
                    className="h-11 rounded-xl border border-foreground/12 bg-white px-4 text-sm font-medium text-deep outline-none transition focus:border-deep"
                    required
                  />
                </label>

                <div className="md:col-span-3 flex justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsChangePasswordOpen(false)}
                    className="rounded-full border border-gold/35 bg-white px-5 py-2 text-xs font-bold uppercase tracking-[0.08em] text-deep transition hover:border-deep hover:bg-deep hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isChangingPassword}
                    className="cta-sweep border border-deep bg-deep px-6 py-2 text-xs font-bold uppercase tracking-[0.08em] text-white transition hover:border-gold hover:text-deep focus-visible:border-gold focus-visible:text-deep disabled:opacity-70"
                  >
                    <span className="relative z-10">{isChangingPassword ? "Updating..." : "Change Password"}</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        ) : null}
      </main>
    </AuthGuard>
  );
}