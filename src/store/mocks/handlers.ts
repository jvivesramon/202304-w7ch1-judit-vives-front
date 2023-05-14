import { rest } from "msw";
import { robotTestMock } from "./mocks";

const apiUrl = import.meta.env.VITE_API_URL;

export const handlers = [
  rest.get(`${apiUrl}robots`, (_request, response, context) => {
    return response(context.status(200), context.json(robotTestMock));
  }),
];
