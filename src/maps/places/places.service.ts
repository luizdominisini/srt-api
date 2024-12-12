import {
  Client as GoogleMapsClient,
  PlaceInputType,
} from '@googlemaps/google-maps-services-js';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PlacesService {
  constructor(private readonly googleMapsCliente: GoogleMapsClient) {}

  async findPlaces(text: string) {
    const { data } = await this.googleMapsCliente.findPlaceFromText({
      params: {
        input: text,
        inputtype: PlaceInputType.textQuery,
        fields: ['place_id', 'formatted_address', 'geometry', 'name'],
        key: process.env.GOOGLE_API_KEY,
      },
    });

    return data;
  }
}
