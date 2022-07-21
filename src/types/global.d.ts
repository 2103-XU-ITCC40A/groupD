// TYPES AND INTERFACES
interface NewsInterface {
  title: string;
  timeDate: Date;
  description: string;
  photoUrl: string;
}
interface NewsInterfaceComponent {
  payload: NewsInterface[];
}

interface SpotlightInterface {
  name: string;
  title: string;
  imageUrl: string;
}
interface SpotlightInterfaceComponent {
  payload: SpotlightInterface[];
}

// HOOK INTERFACE
interface HookInterface {}
