import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { X, ZoomIn } from 'lucide-react'

export const Route = createFileRoute('/gallery')({
  component: Gallery,
})

type GalleryImage = {
  id: string
  src: string
  caption: string
  category: string
  width: number
  height: number
}

const images: GalleryImage[] = [
  { id: '1', src: 'https://picsum.photos/seed/arch1/1200/900', caption: 'Urban Architecture', category: 'Architecture', width: 1200, height: 900 },
  { id: '2', src: 'https://picsum.photos/seed/port2/800/1100', caption: 'Editorial Portrait', category: 'Portrait', width: 800, height: 1100 },
  { id: '3', src: 'https://picsum.photos/seed/land3/1400/900', caption: 'Coastal Landscape', category: 'Landscape', width: 1400, height: 900 },
  { id: '4', src: 'https://picsum.photos/seed/abs4/900/900', caption: 'Abstract Forms', category: 'Abstract', width: 900, height: 900 },
  { id: '5', src: 'https://picsum.photos/seed/city5/1200/800', caption: 'City at Dusk', category: 'Urban', width: 1200, height: 800 },
  { id: '6', src: 'https://picsum.photos/seed/nat6/800/1200', caption: 'Forest Light', category: 'Nature', width: 800, height: 1200 },
  { id: '7', src: 'https://picsum.photos/seed/min7/1100/700', caption: 'Minimalist Study', category: 'Abstract', width: 1100, height: 700 },
  { id: '8', src: 'https://picsum.photos/seed/port8/850/1100', caption: 'Street Portrait', category: 'Portrait', width: 850, height: 1100 },
  { id: '9', src: 'https://picsum.photos/seed/arch9/1300/850', caption: 'Brutalist Lines', category: 'Architecture', width: 1300, height: 850 },
  { id: '10', src: 'https://picsum.photos/seed/sea10/1200/800', caption: 'Seascape', category: 'Landscape', width: 1200, height: 800 },
  { id: '11', src: 'https://picsum.photos/seed/neon11/900/1200', caption: 'Neon Nights', category: 'Urban', width: 900, height: 1200 },
  { id: '12', src: 'https://picsum.photos/seed/mtn12/1400/950', caption: 'Mountain Dawn', category: 'Landscape', width: 1400, height: 950 },
]

const categories = ['All', ...Array.from(new Set(images.map((i) => i.category)))]

function netlifyImage(src: string, w: number, q = 80) {
  return `/.netlify/images?url=${encodeURIComponent(src)}&w=${w}&q=${q}`
}

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightbox, setLightbox] = useState<GalleryImage | null>(null)

  const filtered =
    activeCategory === 'All'
      ? images
      : images.filter((img) => img.category === activeCategory)

  return (
    <div className="min-h-screen">
      <section className="max-w-6xl mx-auto px-6 py-20">
        <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">Visual Work</p>
        <h1 className="text-5xl font-bold mb-4">Gallery</h1>
        <p className="text-muted-foreground mb-10 max-w-xl">
          A curated collection of photography and visual work — exploring architecture,
          portraiture, and the natural world through a considered eye.
        </p>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border ${
                activeCategory === cat
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'border-border text-muted-foreground hover:border-primary/50 hover:text-foreground bg-transparent'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry gallery */}
        <div className="gallery-grid">
          {filtered.map((img) => (
            <div
              key={img.id}
              className="gallery-item group relative cursor-pointer overflow-hidden rounded-xl border border-border hover:border-primary/40 transition-all duration-300"
              onClick={() => setLightbox(img)}
            >
              <img
                src={netlifyImage(img.src, 600)}
                alt={img.caption}
                loading="lazy"
                className="w-full h-auto block transition-transform duration-500 group-hover:scale-105"
                srcSet={`${netlifyImage(img.src, 400)} 400w, ${netlifyImage(img.src, 600)} 600w, ${netlifyImage(img.src, 800)} 800w`}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div className="flex items-end justify-between w-full">
                  <div>
                    <p className="text-white font-semibold text-sm">{img.caption}</p>
                    <p className="text-white/60 text-xs">{img.category}</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <ZoomIn size={14} className="text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            <X size={18} />
          </button>
          <div
            className="max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={netlifyImage(lightbox.src, 1200, 90)}
              alt={lightbox.caption}
              className="w-full h-auto max-h-[80vh] object-contain rounded-xl"
            />
            <div className="mt-4 text-center">
              <p className="text-white font-semibold">{lightbox.caption}</p>
              <p className="text-white/50 text-sm">{lightbox.category}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
