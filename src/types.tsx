export interface RobotStructure {
  id: number;
  name: string;
  image: string;
  speed: number;
  resistence: number;
  creationDate: string;
}

export interface RobotStoreStructure {
  robots: RobotStructure[];
}
