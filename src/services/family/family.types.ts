export const FAMILY_RELATIONS = [
  "mother",
  "father",
  "sister",
  "brother",
  "spouse",
  "child",
  "other",
] as const;

export type FamilyRelation = (typeof FAMILY_RELATIONS)[number];

export type FamilyRole = "head" | "member" | "none";

export interface FamilyMemberSummary {
  _id: string;
  memberUserId: string;
  email: string;
  relation: FamilyRelation;
  addedAt: string;
}

export interface FamilyHeadSummary {
  _id: string;
  email: string;
  username?: string;
}

export interface FamilyOverview {
  role: FamilyRole;
  discountPercent: number;
  memberCount: number;
  maxMembers: number;
  canAddMore: boolean;
  members?: FamilyMemberSummary[];
  head?: FamilyHeadSummary;
  relationToHead?: FamilyRelation;
}

export interface FamilySearchResult {
  email: string;
}

export interface FamilyInviteResult {
  targetEmail: string;
  otpExpiry: string;
}
