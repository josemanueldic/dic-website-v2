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
      className={`flex items-center justify-center border border-dashed border-border bg-muted text-center text-xs text-muted-foreground ${className}`}
      style={{ aspectRatio: ratio }}
    >
      <span className="px-4">
        Photo slot: {slot}, {ratio}
      </span>
    </div>
  );
}
