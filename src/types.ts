export interface RobotStructure {
  id: number;
  name: string;
  image: string;
  speed: number;
  endurance: number;
  year: number;
  movie: string;
  description: string;
}

export interface RobotStoreStructure {
  robots: RobotStructure[];
}
