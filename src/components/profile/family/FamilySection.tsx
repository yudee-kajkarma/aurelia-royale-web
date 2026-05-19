"use client";

import { useEffect, useState } from "react";
import { Users, Plus, X, BadgePercent, ShieldCheck } from "lucide-react";
import {
    familyService,
    FamilyApiError,
} from "@/services/family/family.service";
import type {
    FamilyOverview,
    FamilyRelation,
} from "@/services/family/family.types";
import { FAMILY_RELATIONS } from "@/services/family/family.types";

type Step = "search" | "relation" | "otp";

function formatRelation(rel: string) {
    return rel.charAt(0).toUpperCase() + rel.slice(1);
}

function relationLabel(rel?: string) {
    if (!rel) return "Member";
    return formatRelation(rel);
}

function Banner({
    tone,
    message,
}: {
    tone: "success" | "error" | "info";
    message: string;
}) {
    const toneClass =
        tone === "success"
            ? "border-emerald-200 bg-emerald-50 text-emerald-700"
            : tone === "error"
              ? "border-rose-200 bg-rose-50 text-rose-700"
              : "border-amber-200 bg-amber-50 text-amber-700";
    return (
        <p className={`rounded-2xl border px-4 py-3 text-sm ${toneClass}`}>
            {message}
        </p>
    );
}

export function FamilySection() {
    const [overview, setOverview] = useState<FamilyOverview | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [loadError, setLoadError] = useState("");

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [step, setStep] = useState<Step>("search");
    const [emailDraft, setEmailDraft] = useState("");
    const [verifiedEmail, setVerifiedEmail] = useState("");
    const [relation, setRelation] = useState<FamilyRelation>("other");
    const [otp, setOtp] = useState("");
    const [modalError, setModalError] = useState("");
    const [modalSuccess, setModalSuccess] = useState("");
    const [isWorking, setIsWorking] = useState(false);

    async function loadFamily() {
        setIsLoading(true);
        setLoadError("");
        try {
            const data = await familyService.getFamily();
            setOverview(data);
        } catch (error) {
            const message =
                error instanceof Error
                    ? error.message
                    : "Failed to load family info";
            setLoadError(message);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        void loadFamily();
    }, []);

    function openAddModal() {
        setStep("search");
        setEmailDraft("");
        setVerifiedEmail("");
        setRelation("other");
        setOtp("");
        setModalError("");
        setModalSuccess("");
        setIsModalOpen(true);
    }

    function closeModal() {
        if (isWorking) return;
        setIsModalOpen(false);
    }

    async function handleSearch(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setModalError("");
        setIsWorking(true);
        try {
            const result = await familyService.searchEligibleMember(
                emailDraft.trim().toLowerCase(),
            );
            setVerifiedEmail(result.email);
            setStep("relation");
        } catch (error) {
            const message =
                error instanceof FamilyApiError
                    ? error.message
                    : "Search failed";
            setModalError(message);
        } finally {
            setIsWorking(false);
        }
    }

    async function handleSendInvite(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setModalError("");
        setIsWorking(true);
        try {
            await familyService.sendInvite(verifiedEmail, relation);
            setModalSuccess(
                `OTP sent to ${verifiedEmail}. Ask them for the code to complete the link.`,
            );
            setStep("otp");
        } catch (error) {
            const message =
                error instanceof FamilyApiError
                    ? error.message
                    : "Failed to send invitation";
            setModalError(message);
        } finally {
            setIsWorking(false);
        }
    }

    async function handleVerify(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setModalError("");
        setIsWorking(true);
        try {
            const next = await familyService.verifyInvite(
                verifiedEmail,
                otp.trim(),
            );
            setOverview(next);
            setIsModalOpen(false);
        } catch (error) {
            const message =
                error instanceof FamilyApiError
                    ? error.message
                    : "OTP verification failed";
            setModalError(message);
        } finally {
            setIsWorking(false);
        }
    }

    return (
        <section className="mt-8 rounded-[34px] border border-foreground/10 bg-white/90 p-6 shadow-[0_20px_60px_rgba(55,31,10,0.06)] backdrop-blur-sm sm:p-8">
            <div className="rounded-[28px] border border-foreground/10 bg-[linear-gradient(135deg,#fdfbf7_0%,#f5f0e8_100%)] p-5 sm:p-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex items-start gap-4">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/35 bg-white text-deep">
                            <Users className="h-6 w-6" />
                        </div>
                        <div>
                            <p className="text-xs font-bold uppercase tracking-[0.12em] text-foreground/45">
                                Family
                            </p>
                            <h2 className="mt-1 text-2xl font-bold tracking-[-0.03em] text-deep">
                                Family & Discount
                            </h2>
                            <p className="mt-2 max-w-xl text-sm text-foreground/62">
                                Every account starts with a 5% discount. Add
                                family members to earn +2% per member, up to 4
                                members. Once added, a member cannot be removed.
                            </p>
                        </div>
                    </div>

                    {overview ? (
                        <div className="flex items-center gap-3 rounded-[24px] border border-gold/30 bg-white px-5 py-3">
                            <BadgePercent className="h-5 w-5 text-deep" />
                            <div>
                                <p className="text-xs font-bold uppercase tracking-[0.1em] text-foreground/55">
                                    Your Discount
                                </p>
                                <p className="text-2xl font-bold text-deep">
                                    {overview.discountPercent}%
                                </p>
                            </div>
                        </div>
                    ) : null}
                </div>
            </div>

            {isLoading ? (
                <p className="mt-5 text-sm font-medium text-foreground/60">
                    Loading family info...
                </p>
            ) : loadError ? (
                <div className="mt-5">
                    <Banner tone="error" message={loadError} />
                </div>
            ) : overview?.role === "member" ? (
                <div className="mt-6 flex flex-col gap-3 rounded-[24px] border border-foreground/10 bg-surface p-5">
                    <div className="flex items-center gap-3 text-deep">
                        <ShieldCheck className="h-5 w-5" />
                        <h3 className="text-lg font-bold">
                            You're part of a family
                        </h3>
                    </div>
                    <p className="text-sm text-foreground/70">
                        You're a{" "}
                        <span className="font-semibold text-deep">
                            {relationLabel(overview.relationToHead)}
                        </span>{" "}
                        in{" "}
                        <span className="font-semibold text-deep">
                            {overview.head?.email}
                        </span>
                        's family.
                    </p>
                    {/* <p className="text-sm text-foreground/70">
            Because you're already a member, you cannot add other people to your account.
          </p> */}
                </div>
            ) : (
                <div className="mt-6 space-y-4">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <p className="text-sm text-foreground/65">
                            Members added:{" "}
                            <span className="font-semibold text-deep">
                                {overview?.memberCount ?? 0}
                            </span>{" "}
                            / {overview?.maxMembers ?? 4}
                        </p>
                        <button
                            type="button"
                            onClick={openAddModal}
                            disabled={!overview?.canAddMore}
                            className="inline-flex items-center justify-center gap-2 rounded-full border border-gold/35 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.08em] text-deep transition enabled:hover:border-deep enabled:hover:bg-deep enabled:hover:!text-white disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            <Plus className="h-3.5 w-3.5" />
                            Add Family Member
                        </button>
                    </div>

                    {overview &&
                    overview.members &&
                    overview.members.length > 0 ? (
                        <div className="space-y-3">
                            {overview.members.map((m) => (
                                <article
                                    key={m._id}
                                    className="flex flex-col gap-2 rounded-[20px] border border-foreground/10 bg-surface p-4 sm:flex-row sm:items-center sm:justify-between"
                                >
                                    <div>
                                        <p className="text-sm font-semibold text-deep">
                                            {m.email}
                                        </p>
                                        <p className="text-xs uppercase tracking-[0.1em] text-foreground/55">
                                            {relationLabel(m.relation)} • Added{" "}
                                            {new Date(
                                                m.addedAt,
                                            ).toLocaleDateString()}
                                        </p>
                                    </div>
                                    <span className="rounded-full border border-gold/30 bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-[0.08em] text-deep">
                                        Permanent
                                    </span>
                                </article>
                            ))}
                        </div>
                    ) : (
                        <p className="rounded-[20px] border border-dashed border-foreground/15 bg-surface px-5 py-6 text-center text-sm text-foreground/55">
                            No family members yet. Add one to earn +2% more
                            discount.
                        </p>
                    )}
                </div>
            )}

            {isModalOpen ? (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 px-4 py-8">
                    <div className="w-full max-w-xl rounded-[30px] border border-foreground/10 bg-white p-6 shadow-[0_30px_80px_rgba(55,31,10,0.2)] sm:p-8">
                        <div className="flex items-start justify-between gap-4">
                            <div>
                                <h2 className="display-font text-3xl text-deep">
                                    Add Family Member
                                </h2>
                                <p className="mt-2 text-sm text-foreground/58">
                                    {step === "search"
                                        ? "Find the user by their registered email."
                                        : step === "relation"
                                          ? "Pick the relation. An OTP will be sent to their email."
                                          : "Enter the OTP shared by your invitee to complete the link."}
                                </p>
                            </div>
                            <button
                                type="button"
                                onClick={closeModal}
                                disabled={isWorking}
                                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-foreground/12 text-deep transition hover:bg-deep hover:text-white disabled:opacity-60"
                                aria-label="Close"
                            >
                                <X className="h-4 w-4" />
                            </button>
                        </div>

                        {modalSuccess && step === "otp" ? (
                            <div className="mt-5">
                                <Banner tone="info" message={modalSuccess} />
                            </div>
                        ) : null}

                        {modalError ? (
                            <div className="mt-5">
                                <Banner tone="error" message={modalError} />
                            </div>
                        ) : null}

                        {step === "search" ? (
                            <form
                                className="mt-6 space-y-4"
                                onSubmit={handleSearch}
                            >
                                <label className="flex flex-col gap-2 text-sm font-semibold text-foreground/88">
                                    Email address
                                    <input
                                        type="email"
                                        value={emailDraft}
                                        onChange={(event) =>
                                            setEmailDraft(event.target.value)
                                        }
                                        className="h-11 rounded-xl border border-foreground/12 bg-white px-4 text-sm font-medium text-deep outline-none transition focus:border-deep"
                                        placeholder="member@example.com"
                                        required
                                    />
                                </label>
                                <div className="flex justify-end gap-3 pt-1">
                                    <button
                                        type="button"
                                        onClick={closeModal}
                                        disabled={isWorking}
                                        className=" border border-gold/35 bg-deep  px-5 py-2 text-xs font-bold uppercase tracking-[0.08em] text-white transition hover:border-deep hover:bg-white hover:text-deep disabled:opacity-60"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        disabled={
                                            isWorking || !emailDraft.trim()
                                        }
                                        className="cta-sweep border border-deep bg-white px-6 py-2 text-xs font-bold uppercase tracking-[0.08em] text-deep transition hover:border-gold hover:text-white hover:bg-deep disabled:opacity-70"
                                    >
                                        <span className="relative z-10">
                                            {isWorking
                                                ? "Checking..."
                                                : "Continue"}
                                        </span>
                                    </button>
                                </div>
                            </form>
                        ) : step === "relation" ? (
                            <form
                                className="mt-6 space-y-4"
                                onSubmit={handleSendInvite}
                            >
                                <div className="rounded-[20px] border border-foreground/10 bg-surface px-4 py-3 text-sm text-foreground/70">
                                    Inviting{" "}
                                    <span className="font-semibold text-deep">
                                        {verifiedEmail}
                                    </span>
                                </div>
                                <label className="flex flex-col gap-2 text-sm font-semibold text-foreground/88">
                                    Relation
                                    <select
                                        value={relation}
                                        onChange={(event) =>
                                            setRelation(
                                                event.target
                                                    .value as FamilyRelation,
                                            )
                                        }
                                        className="h-11 rounded-xl border border-foreground/12 bg-white px-4 text-sm font-medium text-deep outline-none transition focus:border-deep"
                                    >
                                        {FAMILY_RELATIONS.map((r) => (
                                            <option key={r} value={r}>
                                                {formatRelation(r)}
                                            </option>
                                        ))}
                                    </select>
                                </label>
                                <div className="flex justify-end gap-3 pt-1">
                                    <button
                                        type="button"
                                        onClick={() => setStep("search")}
                                        disabled={isWorking}
                                        className="rounded-full border border-gold/35 bg-white px-5 py-2 text-xs font-bold uppercase tracking-[0.08em] text-deep transition hover:border-deep hover:bg-deep hover:text-white disabled:opacity-60"
                                    >
                                        Back
                                    </button>
                                    <button
                                        type="submit"
                                        disabled={isWorking}
                                        className="cta-sweep border border-deep bg-deep px-6 py-2 text-xs font-bold uppercase tracking-[0.08em] text-white transition hover:border-gold hover:text-deep disabled:opacity-70"
                                    >
                                        <span className="relative z-10">
                                            {isWorking
                                                ? "Sending OTP..."
                                                : "Send OTP"}
                                        </span>
                                    </button>
                                </div>
                            </form>
                        ) : (
                            <form
                                className="mt-6 space-y-4"
                                onSubmit={handleVerify}
                            >
                                <label className="flex flex-col gap-2 text-sm font-semibold text-foreground/88">
                                    OTP
                                    <input
                                        type="text"
                                        value={otp}
                                        onChange={(event) =>
                                            setOtp(event.target.value)
                                        }
                                        inputMode="numeric"
                                        maxLength={6}
                                        className="h-11 rounded-xl border border-foreground/12 bg-white px-4 text-sm font-medium tracking-[0.4em] text-deep outline-none transition focus:border-deep"
                                        placeholder="••••"
                                        required
                                    />
                                </label>
                                <p className="text-xs text-foreground/55">
                                    Once verified,{" "}
                                    <span className="font-semibold text-deep">
                                        {verifiedEmail}
                                    </span>{" "}
                                    will be permanently linked as your{" "}
                                    <span className="font-semibold text-deep">
                                        {formatRelation(relation)}
                                    </span>
                                    . This cannot be undone.
                                </p>
                                <div className="flex justify-end gap-3 pt-1">
                                    <button
                                        type="button"
                                        onClick={() => setStep("relation")}
                                        disabled={isWorking}
                                        className="rounded-full border border-gold/35 bg-white px-5 py-2 text-xs font-bold uppercase tracking-[0.08em] text-deep transition hover:border-deep hover:bg-deep hover:text-white disabled:opacity-60"
                                    >
                                        Back
                                    </button>
                                    <button
                                        type="submit"
                                        disabled={
                                            isWorking || otp.trim().length < 4
                                        }
                                        className="cta-sweep border border-deep bg-deep px-6 py-2 text-xs font-bold uppercase tracking-[0.08em] text-white transition hover:border-gold hover:text-deep disabled:opacity-70"
                                    >
                                        <span className="relative z-10">
                                            {isWorking
                                                ? "Verifying..."
                                                : "Verify & Add"}
                                        </span>
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            ) : null}
        </section>
    );
}
