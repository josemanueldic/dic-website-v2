import { PhotoSlot } from "@/components/ui/PhotoSlot";

type RichTextProps = {
  eyebrow?: string;
  heading: string;
  body: string;
  imageSlot?: string;
};

// rich.text, image-right variant when imageSlot is given, text-only otherwise (spec section 4).
export function RichText({ eyebrow, heading, body, imageSlot }: RichTextProps) {
  return (
    <section className="bg-background">
      <div
        className={`mx-auto max-w-6xl px-6 py-20 ${
          imageSlot ? "grid items-center gap-12 lg:grid-cols-2" : ""
        }`}
      >
        <div>
          {eyebrow ? (
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">{eyebrow}</p>
          ) : null}
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            {heading}
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">{body}</p>
        </div>
        {imageSlot ? (
          <div className="overflow-hidden rounded-2xl">
            <PhotoSlot slot={imageSlot} ratio="4/3" className="rounded-none" />
          </div>
        ) : null}
      </div>
    </section>
  );
}
