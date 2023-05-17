import { rest } from "msw";
import { robotTestMock, tokenMock } from "./mocks";

const apiUrl = import.meta.env.VITE_API_URL;

export const handlers = [
  rest.get(`${apiUrl}robots`, (_request, response, context) => {
    return response(context.status(200), context.json(robotTestMock));
  }),

  rest.post(`${apiUrl}login`, (_request, response, context) => {
    return response(context.status(200), context.json(tokenMock));
  }),
];
