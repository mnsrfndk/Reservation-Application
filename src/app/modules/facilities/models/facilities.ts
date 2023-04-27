import { Instrument } from "../../instruments/models/instruments";

export interface Facility {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  isAvailable: boolean;
  instruments: Instrument[];
}
