import { rest } from "msw";
import { robotTest } from "./mocks";

const apiUrl = import.meta.env.VITE_API_URL;

export const handlers = [
  rest.get(`${apiUrl}robots`, (_request, response, context) => {
    return response(context.status(200), context.json(robotTest));
  }),
];
