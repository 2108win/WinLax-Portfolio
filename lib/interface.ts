export interface Project {
  title: string;
  slug: string;
  time: Date;
  description: any;
  heroImage: Image;
  information: {
    _key: string;
    informationTitle: string;
    informationType: "string" | "url";
    informationDescription?: string;
    informationUrl?: {
      url: string;
      title: string;
    };
  }[];
  projectImages: Image[];
  technologies: string[];
}

export interface Image {
  _id: string;
  url: string;
  nameImage: string;
  _updatedAt: Date;
}
