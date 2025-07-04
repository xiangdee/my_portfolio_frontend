import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { Key } from "react";

type SanityImageReference = {
  _ref: string;
  url: string;
};

export type SanityImage = {
  _type: 'image';
  asset: SanityImageReference;
};

export type ProjectContent = {
  asset: SanityImageSource;
  _key: Key | null | undefined;
  _type: 'block';
  style: 'normal' | 'h3' | 'h4';
  listItem?:string | undefined | null;
  title?:string | undefined | null;
  level?:number | undefined | null;
  images?:ImageType[] | undefined | null;
  markDefs?:{"_type": string,"href"?: string,"_key": string}[];
  children: Array<{
    _key: Key | null | undefined;
    _type: 'span';
    text: string;
  }>;
};

export interface imageGroupImages {
__ref:string
}

export interface ImageType {
  altText: string; // Alternate text for the image
  _type: string; // Type of the object, should be 'image'
  caption: string; // Caption for the image
  _key: string; // Unique key for the image
  asset: SanityImageReference; // The asset reference
}

export type ProjectType = {
  title: string;
  category: string;
  slug: {
    current: string;
    _type: 'slug';
  };
  tags:string[],
  featuredImage: SanityImageSource;
  content: ProjectContent[];
};