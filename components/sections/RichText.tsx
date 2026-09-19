import { PhotoSlot } from "@/components/ui/PhotoSlot";

type RichTextProps = {
  heading: string;
  body: string;
  imageSlot?: string;
};

// rich.text, image-right variant when imageSlot is given, text-only otherwise (spec section 4).
export function RichText({ heading, body, imageSlot }: RichTextProps) {
  return (
    <section className="bg-background">
      <div
        className={`mx-auto max-w-6xl px-6 py-16 ${
          imageSlot ? "grid items-center gap-10 lg:grid-cols-2" : ""
        }`}
      >
        <div>
          <h2 className="text-2xl font-bold text-primary">{heading}</h2>
          <p className="mt-4 text-muted-foreground">{body}</p>
        </div>
        {imageSlot ? <PhotoSlot slot={imageSlot} ratio="4/3" /> : null}
      </div>
    </section>
  );
}
