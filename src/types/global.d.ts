// TYPES AND INTERFACES
interface NewsInterface {
  title: string;
  timeDate: Date;
  description: string;
  photoUrl: string;
}
interface SpotlightInterface {
  name: string;
  title: string;
  imageUrl: string;
}

interface SpotlightInterfaceComponent {
  payload: SpotlightInterface[];
}
interface NewsInterfaceComponent {
  payload: NewsInterface[];
}
