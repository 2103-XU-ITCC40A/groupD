// TYPES AND INTERFACES NEWS && SPOTLIGHT
interface NewsInterface {
  _id: string;
  title: string;
  timeDate: string;
  description: string;
  photoUrl: string;
}
interface NewsInterfaceComponent {
  payload: NewsInterface[];
}
interface NewsInterfaceComponentSingle {
  payload: NewsInterface;
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
