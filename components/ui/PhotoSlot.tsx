type PhotoSlotProps = {
  slot: string;
  ratio: string;
  className?: string;
};

// Spec section 8: an empty slot shows a labelled grey tile in development
// so the team can see what photo is missing, identified by its slot name.
export function PhotoSlot({ slot, ratio, className = "" }: PhotoSlotProps) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden rounded-xl border border-dashed border-border bg-gradient-to-br from-muted to-border/40 text-center ${className}`}
      style={{ aspectRatio: ratio }}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="absolute h-8 w-8 text-muted-foreground/30"
        fill="currentColor"
      >
        <path d="M4 5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H4Zm0 2h16v7.59l-3.3-3.3a1 1 0 0 0-1.4 0L11 15.59l-2.3-2.3a1 1 0 0 0-1.4 0L4 16.59V7Zm3 3a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      </svg>
      <span className="relative px-4 text-xs text-muted-foreground">
        Photo slot: {slot}, {ratio}
      </span>
    </div>
  );
}
