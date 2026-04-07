type SelectorOption = {
  value: string;
  label: string;
};

type ShopSelectorProps = {
  value: string;
  onChange: (value: string) => void;
  options: SelectorOption[];
  ariaLabel: string;
  className?: string;
};

export function ShopSelector({ value, onChange, options, ariaLabel, className = "" }: ShopSelectorProps) {
  return (
    <div className={`relative ${className}`}>
      <select
        aria-label={ariaLabel}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-14 w-full appearance-none border border-black/45 bg-[#090f1a] px-4 pr-12 text-sm font-bold text-[#8f9298] outline-none"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <span className="pointer-events-none absolute right-0 top-0 inline-flex h-14 w-12 items-center justify-center border-l border-black/45 text-[#8f9298]">
        v
      </span>
    </div>
  );
}