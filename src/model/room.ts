export type SimpleObject = {
  _id: string;
  name: string;
};

export type FullRoom = {
  _id: string;
  amenities: SimpleObject[];
  category: SimpleObject;
  city: string;
  cleaning_fee: number;
  country: string;
  description: string;
  house_type: string;
  id: string;
  maximum_guests: number;
  name: string;
  number_of_bed: number;
  number_of_room: number;
  number_of_toilet: number;
  owner: SimpleObject;
  pet_friendly: string;
  pictures: string[];
  price: string;
  things_to_know: string;
};
