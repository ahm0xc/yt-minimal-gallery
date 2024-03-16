import Footer from "@/components/footer";
import Header from "@/components/header";
import { Zoom } from "@/components/zoom";

interface GalleryType {
  url: string;
}

const galleryImages: GalleryType[] = [
  {
    url: "/images/1.jpg",
  },
  {
    url: "/images/2.jpg",
  },
  {
    url: "/images/3.jpg",
  },
  {
    url: "/images/4.jpg",
  },
  {
    url: "/images/5.jpg",
  },
  {
    url: "/images/6.jpg",
  },
  {
    url: "/images/7.jpg",
  },
  {
    url: "/images/8.jpg",
  },
  {
    url: "/images/9.jpg",
  },
  {
    url: "/images/10.jpg",
  },
  {
    url: "/images/11.jpg",
  },
  {
    url: "/images/12.jpg",
  },
  {
    url: "/images/13.jpg",
  },
  {
    url: "/images/14.jpg",
  },
  {
    url: "/images/15.jpg",
  },
];

export default function Home() {
  return (
    <main className="max-w-3xl pt-24 pb-20 mx-auto px-4">
      <Header />
      <section className="gap-5 py-10 columns-1 sm:columns-2 md:columns-3">
        {galleryImages.map((image, i) => {
          return (
            <Zoom key={`image-${i}`}>
              <div className="relative mb-5">
                {/* eslint-disable-next-line */}
                <img
                  src={image.url}
                  // width={1080}
                  // height={1440}
                  className="w-full object-cover rounded-md"
                  alt=""
                />
              </div>
            </Zoom>
          );
        })}
      </section>
      <Footer />
    </main>
  );
}
