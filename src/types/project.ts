import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { Key } from "react";

type SanityImageReference = {
  _ref: string;
  url: string;
};

type SanityImage = {
  _type: 'image';
  asset: SanityImageReference;
};

type ProjectContent = {
  asset: SanityImageSource;
  _key: Key | null | undefined;
  _type: 'block';
  style: 'normal';
  children: Array<{
    _key: Key | null | undefined;
    _type: 'span';
    text: string;
  }>;
};

export type ProjectType = {
  title: string;
  category: string;
  slug: {
    current: string;
    _type: 'slug';
  };
  featuredImage: SanityImageSource;
  content: ProjectContent[];
};