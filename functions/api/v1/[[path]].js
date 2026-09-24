// The Fluent Icons API: /api/v1/… (see agent/http.js).
import { handleApi } from "../../../agent/http.js";

export const onRequest = (context) => handleApi(context);
