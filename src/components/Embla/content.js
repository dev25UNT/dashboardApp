import { infoData } from "../Layout";

export const media = infoData;
export const mediaByIndex = (index) => media[index % media.length];
