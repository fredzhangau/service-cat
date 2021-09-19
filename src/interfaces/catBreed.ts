import { IWeight } from "./weight";
import { IImage } from "./image";

export interface ICatBreed {
  id?: string;
  name?: string;
  friendliness?: number;
  adaptability?: number;
  affection_level?: number;
  alt_names?: string;
  cfa_url?: string;
  child_friendly?: number;
  country_code?: string;
  country_codes?: string;
  description?: string;
  dog_friendly?: number;
  energy_level?: number;
  experimental?: number;
  grooming?: number;
  hairless?: number;
  health_issues?: number;
  hypoallergenic?: number;
  image?: IImage;
  indoor?: number;
  intelligence?: number;
  lap?: number;
  life_span?: string;
  natural?: number;
  origin?: string;
  rare?: number;
  reference_image_id?: string;
  rex?: number;
  shedding_level?: number;
  short_legs?: number;
  social_needs?: number;
  stranger_friendly?: number;
  suppressed_tail?: number;
  temperament?: string;
  vcahospitals_url?: string;
  vetstreet_url?: string;
  vocalisation?: number;
  weight?: IWeight;
  wikipedia_url?: string;
}

export const keys = [
  "id",
  "name",
  "friendliness",
  "adaptability",
  "affection_level",
  "alt_names",
  "cfa_url",
  "child_friendly",
  "country_code",
  "country_codes",
  "description",
  "dog_friendly",
  "energy_level",
  "experimental",
  "grooming",
  "hairless",
  "health_issues",
  "hypoallergenic",
  "image",
  "indoor",
  "intelligence",
  "lap",
  "life_span",
  "natural",
  "origin",
  "rare",
  "reference_image_id",
  "rex",
  "shedding_level",
  "short_legs",
  "social_needs",
  "stranger_friendly",
  "suppressed_tail",
  "temperament",
  "vcahospitals_url",
  "vetstreet_url",
  "vocalisation",
  "weight",
  "wikipedia_url",
];
