export interface SearchResponse {
  data: Gif[];
  pagination: Pagination;
  meta: Meta;
}

export interface Gif {
  id: number;
  display_name: string;
  parent: null;
  slug: string;
  type: string;
  content_type: string;
  short_display_name: string;
  description: string;
  has_children: boolean;
  featured_gif: FeaturedGIF;
  banner_image: null | string;
  user: User;
  ancestors: any[];
  tags: any[];
  analytics_response_payload: string;
}

export interface FeaturedGIF {
  type: string;
  id: string;
  url: string;
  slug: string;
  bitly_gif_url: string;
  bitly_url: string;
  embed_url: string;
  username: string;
  source: string;
  title: string;
  rating: string;
  content_url: string;
  source_tld: string;
  source_post_url: string;
  is_sticker: number;
  import_datetime: Date;
  trending_datetime: string;
  images: Images;
  user: User;
}

export interface Images {
  hd?: The4_K;
  fixed_width_still: The480_WStill;
  fixed_height_downsampled: FixedHeight;
  preview_gif: The480_WStill;
  preview: The4_K;
  fixed_height_small: FixedHeight;
  downsized: The480_WStill;
  fixed_width_downsampled: FixedHeight;
  fixed_width: FixedHeight;
  downsized_still: The480_WStill;
  downsized_medium: The480_WStill;
  original_mp4: The4_K;
  downsized_large: The480_WStill;
  preview_webp: The480_WStill;
  original: FixedHeight;
  original_still: The480_WStill;
  fixed_height_small_still: The480_WStill;
  fixed_width_small: FixedHeight;
  looping: Looping;
  downsized_small: The4_K;
  fixed_width_small_still: The480_WStill;
  fixed_height_still: The480_WStill;
  fixed_height: FixedHeight;
  '480w_still': The480_WStill;
  '4k'?: The4_K;
}

export interface The480_WStill {
  url: string;
  width: string;
  height: string;
  size?: string;
}

export interface The4_K {
  height: string;
  mp4: string;
  mp4_size: string;
  width: string;
}

export interface FixedHeight {
  height: string;
  mp4?: string;
  mp4_size?: string;
  size: string;
  url: string;
  webp: string;
  webp_size: string;
  width: string;
  frames?: string;
  hash?: string;
}

export interface Looping {
  mp4: string;
  mp4_size: string;
}

export interface User {
  avatar_url: string;
  banner_image: string;
  banner_url: string;
  profile_url: string;
  username: string;
  display_name: string;
  description: string;
  is_verified: boolean;
  website_url: string;
  instagram_url: string;
}

export interface Meta {
  msg: string;
  status: number;
  response_id: string;
}

export interface Pagination {
  total_count: number;
  count: number;
  offset: number;
}
