/**
 * Centralized filtering for the Chadwit NYC directory.
 * Uses static data from src/data/organizations.ts only.
 * Launch visibility: high/medium confidence + Active/Checked/Opportunity Open unless user overrides.
 */

import {
  organizations,
  getOrganizationsForLaunch as getLaunchOrgs,
  getCardSignals as getCardSignalsFromData,
  LAUNCH_VISIBLE_CONFIDENCE,
  LAUNCH_VISIBLE_STATUSES,
  type Organization,
} from "../data/organizations";

const LAUNCH_CONFIDENCE_SET = new Set<string>(LAUNCH_VISIBLE_CONFIDENCE as unknown as string[]);
const LAUNCH_STATUS_SET = new Set<string>(LAUNCH_VISIBLE_STATUSES as unknown as string[]);

/** Re-export for directory page */
export { getLaunchOrgs as getOrganizationsForLaunch };
export { getCardSignalsFromData as getCardSignals };
export { LAUNCH_VISIBLE_CONFIDENCE, LAUNCH_VISIBLE_STATUSES };
export type { Organization };

type OrgWithFeatured = Organization & { featured?: boolean };

export interface DirectoryFilters {
  category: string;
  borough: string;
  status: string;
  typeLabel: string;
  includeLowConfidence: boolean;
}

export const defaultFilters: DirectoryFilters = {
  category: "",
  borough: "",
  status: "",
  typeLabel: "",
  includeLowConfidence: false,
};

/** Borough values used in data. NYC-wide = serves all/multiple boroughs. Unspecified = not yet classified. */
export const BOROUGH_VALUES = [
  "Bronx",
  "Brooklyn",
  "Manhattan",
  "Queens",
  "Staten Island",
  "NYC-wide",
  "Unspecified",
] as const;

/** When a specific borough is selected, also show NYC-wide orgs. Unspecified is excluded from specific-borough results. */
const SPECIFIC_BOROUGHS = ["Bronx", "Brooklyn", "Manhattan", "Queens", "Staten Island"] as const;

function matchesBoroughFilter(orgBorough: string, filterBorough: string): boolean {
  if (!filterBorough) return true;
  if (filterBorough === "NYC-wide" || filterBorough === "Unspecified") {
    return orgBorough === filterBorough;
  }
  return orgBorough === filterBorough || orgBorough === "NYC-wide";
}

/**
 * Single source of truth: filter organizations by current filters.
 * When includeLowConfidence is OFF: only high/medium confidence and launch-visible statuses.
 * When includeLowConfidence is ON: all confidence levels; status still filtered by dropdown (or all statuses if "All statuses").
 * Borough: "All boroughs" shows everything; a specific borough shows that borough + NYC-wide; Unspecified does not appear in specific-borough results.
 */
export function filterOrganizations(
  orgs: ReadonlyArray<Organization>,
  filters: DirectoryFilters
): Organization[] {
  return [...orgs].filter((org) => {
    if (!filters.includeLowConfidence) {
      if (!LAUNCH_CONFIDENCE_SET.has(org.confidence)) return false;
      if (!filters.status) {
        if (!LAUNCH_STATUS_SET.has(org.statusLabel)) return false;
      } else if (org.statusLabel !== filters.status) return false;
    } else {
      if (filters.status && org.statusLabel !== filters.status) return false;
    }
    if (filters.category && org.category !== filters.category) return false;
    if (filters.borough && !matchesBoroughFilter(org.borough, filters.borough)) return false;
    if (filters.typeLabel && org.typeLabel !== filters.typeLabel) return false;
    return true;
  });
}

/** Featured = data's featured flag. Call with already-filtered list so featured respect filters. */
export function getFeaturedOrganizations(orgs: ReadonlyArray<Organization>): Organization[] {
  return orgs.filter((org) => (org as OrgWithFeatured).featured === true);
}

/** Up to maxCount featured orgs from an already-filtered list. Use for "Top recommended" cap. */
export function getFeaturedOrganizationsMax(
  orgs: ReadonlyArray<Organization>,
  maxCount: number
): Organization[] {
  return getFeaturedOrganizations(orgs).slice(0, maxCount);
}

/** One page of items. page is 1-based. Returns items for that page, totalPages, and totalCount. */
export function getPaginatedPage<T>(
  items: readonly T[],
  page: number,
  pageSize: number
): { items: T[]; totalPages: number; totalCount: number } {
  const totalCount = items.length;
  const totalPages = Math.max(1, Math.ceil(totalCount / pageSize));
  const safePage = Math.max(1, Math.min(page, totalPages));
  const start = (safePage - 1) * pageSize;
  const itemsSlice = items.slice(start, start + pageSize);
  return { items: [...itemsSlice], totalPages, totalCount };
}

export function getUniqueCategories(orgs: ReadonlyArray<Organization>): string[] {
  const set = new Set(orgs.map((o) => o.category));
  return Array.from(set).sort();
}

/** Borough options for the filter dropdown: five boroughs, NYC-wide, Unspecified. Order: boroughs first, then NYC-wide, then Unspecified. */
export function getUniqueBoroughs(orgs: ReadonlyArray<Organization>): string[] {
  const set = new Set<string>();
  for (const o of orgs) {
    const b = o.borough ?? "Unspecified";
    set.add(b);
  }
  const boroughs = Array.from(set);
  const order = [...SPECIFIC_BOROUGHS, "NYC-wide", "Unspecified"];
  return order.filter((b) => boroughs.includes(b));
}

export function getUniqueStatusLabels(orgs: ReadonlyArray<Organization>): string[] {
  const set = new Set(orgs.map((o) => o.statusLabel));
  return Array.from(set).sort();
}

export function getUniqueTypeLabels(orgs: ReadonlyArray<Organization>): string[] {
  const set = new Set(orgs.map((o) => o.typeLabel));
  return Array.from(set).sort();
}

/** All organizations (static data). Use with filterOrganizations for directory. */
export function getAllOrganizations(): ReadonlyArray<Organization> {
  return organizations;
}
