import { RobotStoreStructure, RobotStructure } from "../../types/types";

export const robotTest: RobotStructure[] = [
  {
    description: "xsdf",
    _id: "4",
    image: "/img/wall-e.webp",
    name: "Wall-E",
    capabilities: {
      endurance: 100,
      speed: 30,
    },
    year: 1999,
    movie: "Wall-E",
  },
  {
    description: "xsdf",
    _id: "5",
    image: "robot.jpg",
    name: "xxx",
    capabilities: {
      endurance: 100,
      speed: 30,
    },
    year: 1999,
    movie: "xxx",
  },
];

export const robotTestMock: RobotStoreStructure = {
  robots: [
    {
      description: "xsdf",
      _id: "4",
      image: "/img/wall-e.webp",
      name: "Wall-E",
      capabilities: {
        endurance: 100,
        speed: 30,
      },
      year: 1999,
      movie: "Wall-E",
    },
    {
      description: "xsdf",
      _id: "5",
      image: "robot.jpg",
      name: "xxx",
      capabilities: {
        endurance: 100,
        speed: 30,
      },
      year: 1999,
      movie: "xxx",
    },
  ],
};

export const robotsTestStore = {
  robots: {
    robots: robotTest,
  },
};

export const userCredentials = {
  username: "Judit",
  password: "nothingnothing",
};

export const tokenMock = {
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDYzMjdmNjA5MGE0OWZhYWVlNDRkYjQiLCJuYW1lIjoiSnVkaXQiLCJpYXQiOjE2ODQyNjEwNTQsImV4cCI6MTY4NDQzMzg1NH0.frmwLkTjCzIvfZlbIBN7aAfjKqdjXiQkCuIO4M_blQQ",
};
