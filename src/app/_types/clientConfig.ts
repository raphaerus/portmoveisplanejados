export interface ClientConfig {
    businessName: string;
    whatsappNumber: string;
    location: string;
    instagram?: string; // Link direto: https://instagram.com/perfil
    fullAddress?: string; // Endereço completo para o rodapé
    primaryColor?: string;
    hero: {
        title: string;
        subtitle: string;
        bgImage: string;
    };
    galleryImages: {
        id: number;
        src: string;
        alt: string;
    }[];
}
