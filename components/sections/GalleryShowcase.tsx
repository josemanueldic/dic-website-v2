import type { ProjectPhoto } from "@/lib/data/projects";
import { PhotoSlot } from "@/components/ui/PhotoSlot";

type GalleryShowcaseProps = {
  projectSlug: string;
  photos: ProjectPhoto[];
};

// gallery.showcase, filmstrip variant (spec section 4).
// Renders nothing if the project has no photos yet (spec section 6.5).
export function GalleryShowcase({ projectSlug, photos }: GalleryShowcaseProps) {
  if (photos.length === 0) return null;

  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {photos.slice(0, 6).map((photo) => (
            <div key={photo.slot} className="overflow-hidden rounded-xl">
              <PhotoSlot
                slot={`project/${projectSlug}/showcase/${photo.slot}`}
                ratio="3/2"
                className="rounded-none"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
