import Image from "next/image";

export default function InstagramFeed() {
  // Array fictício de imagens (usando a mesma imagem de exemplo por enquanto)
  const posts = [1, 2, 3, 4];

  return (
    <section className="bg-[#F2F4E9] py-20">
      <div className="container mx-auto px-4 text-center">
        
        {/* Título */}
        <h2 className="text-4xl font-serif font-bold text-plantGreen mb-12">
          Follow us on Instagram
        </h2>

        {/* Grid de Fotos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {posts.map((item, index) => (
            <div key={index} className="group relative aspect-square overflow-hidden rounded-3xl cursor-pointer">
              {/* Overlay que aparece no hover */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
                <span className="text-white font-bold">@plants_avenue</span>
              </div>
              
              {/* Imagem */}
              <Image 
                src="/assets/rubber-plant.png" // Substitua por fotos reais variadas depois
                alt="Instagram post" 
                fill 
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}