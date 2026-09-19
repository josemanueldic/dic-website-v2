import type { ProjectPhoto } from "@/lib/data/projects";
import { PhotoSlot } from "@/components/ui/PhotoSlot";

type GalleryFullProps = {
  projectSlug: string;
  photos: ProjectPhoto[];
};

// gallery.full, uniform grid variant (spec section 4).
// Filtering by phase/space and the lightbox are not implemented in this
// static scaffold; photos render as a plain grid labelled by phase.
// Renders nothing if the project has no photos yet (spec section 6.5).
export function GalleryFull({ projectSlug, photos }: GalleryFullProps) {
  if (photos.length === 0) return null;

  return (
    <section className="bg-muted">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-bold text-primary">Gallery</h2>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {photos.map((photo) => (
            <div key={photo.slot}>
              <PhotoSlot slot={`project/${projectSlug}/gallery/${photo.slot}`} ratio="4/3" />
              <p className="mt-1 text-xs text-muted-foreground">{photo.phase}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
