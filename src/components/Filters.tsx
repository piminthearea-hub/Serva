import type { DirectoryFilters } from "../lib/organizations";

interface FiltersProps {
  filters: DirectoryFilters;
  setFilters: (f: DirectoryFilters) => void;
  categories: string[];
  boroughs: string[];
  statuses: string[];
  typeLabels: string[];
  onReset: () => void;
}

export function Filters({
  filters,
  setFilters,
  categories,
  boroughs,
  statuses,
  typeLabels,
  onReset,
}: FiltersProps) {
  const update = (key: keyof DirectoryFilters, value: string | boolean) =>
    setFilters({ ...filters, [key]: value });

  const hasActiveFilters =
    filters.category ||
    filters.borough ||
    filters.status ||
    filters.typeLabel ||
    filters.includeLowConfidence;

  return (
    <div className="filter-bar">
      <select
        value={filters.category}
        onChange={(e) => update("category", e.target.value)}
        aria-label="Filter by category"
      >
        <option value="">All categories</option>
        {categories.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
      <select
        value={filters.borough}
        onChange={(e) => update("borough", e.target.value)}
        aria-label="Filter by borough"
      >
        <option value="">All boroughs</option>
        {boroughs.map((b) => (
          <option key={b} value={b}>
            {b}
          </option>
        ))}
      </select>
      <select
        value={filters.status}
        onChange={(e) => update("status", e.target.value)}
        aria-label="Filter by status"
      >
        <option value="">All statuses</option>
        {statuses.map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>
      <select
        value={filters.typeLabel}
        onChange={(e) => update("typeLabel", e.target.value)}
        aria-label="Filter by type"
      >
        <option value="">All types</option>
        {typeLabels.map((t) => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </select>
      <label className="filter-toggle" title="Show listings we haven’t verified as recently; may be outdated.">
        <input
          type="checkbox"
          checked={filters.includeLowConfidence}
          onChange={(e) => update("includeLowConfidence", e.target.checked)}
          aria-describedby="filter-low-confidence-hint"
        />
        <span>Include low-confidence</span>
      </label>
      <span id="filter-low-confidence-hint" className="filter-hint" aria-hidden="true">
        (older or unverified listings)
      </span>
      {hasActiveFilters && (
        <button type="button" className="filter-reset" onClick={onReset}>
          Reset filters
        </button>
      )}
    </div>
  );
}
