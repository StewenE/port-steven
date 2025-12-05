export type ProjectLink = 
    | { type: 'link'; label: string; url: string }
    | { type: 'text'; label: string; content: string }
    | { type: 'button'; label: string; action: string };

export interface Project {
    id: number;
    title: string;
    description: string;
    longDescription: string;
    tech: string[];
    features: string[];
    challenges: string[];
    learned: string[];
    links: ProjectLink[];
    images?: GalleryImage[];
    timeToDevelop?: string;
}

export interface ImageGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: GalleryImage[];
  title?: string;
}

export type GalleryImage = {
    src: string;
    title: string;
}
