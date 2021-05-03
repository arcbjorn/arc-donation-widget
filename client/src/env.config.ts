function parse(value: string, fallback: string | boolean | number) {
  if (typeof value === "undefined") {
    return fallback;
  }

  switch (typeof fallback) {
    case "boolean":
      return !!JSON.parse(value);
    case "number":
      return JSON.parse(value);
    default:
      return value;
  }
}

export default {
  apiUrl: parse(process.env.VUE_APP_API_URL, "http://localhost:8081"),
};
