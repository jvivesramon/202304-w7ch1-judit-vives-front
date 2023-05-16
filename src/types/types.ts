interface RobotCapabilities {
  speed: number;
  endurance: number;
}

export interface RobotStructure {
  _id: string;
  name: string;
  movie: string;
  image: string;
  year: number;
  description: string;
  capabilities: RobotCapabilities;
}

export interface RobotStoreStructure {
  robots: RobotStructure[];
}

export interface UserCredentials {
  username: string;
  password: string;
}
