import React from 'react';
import Image from "next/image";
import { clientData } from '@/_data/clientData';

export default function MasonryGallery() {
    return (
        <section className="py-16 bg-stone-50" id="projetos">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-stone-800 mb-2">Nossos Projetos Recentes</h2>
                    <p className="text-stone-600">Acabamento impecável e design exclusivo.</p>
                </div>

                {/* MÁGICA DO TAILWIND AQUI: columns-2 md:columns-3 */}
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
                    {clientData.galleryImages.map((img) => (
                        <div key={img.id} className="break-inside-avoid relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">

                            {/* Imagem */}
                            <div className="relative w-full h-auto">
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    width={500}
                                    height={500}
                                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />
                            </div>

                            {/* Overlay com Texto (Só aparece ao passar o mouse) */}
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white font-medium text-lg px-4 text-center">
                                    {img.alt}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <a
                        href={`https://wa.me/${clientData.whatsappNumber}?text=Olá! Vi o site e gostaria de um orçamento.`}
                        target="_blank"
                        className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all transform hover:-translate-y-1"
                    >
                        Solicitar Orçamento no WhatsApp
                    </a>
                </div>
            </div>
        </section>
    );
}