type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

type RequestOptions = {
  method?: HttpMethod;
  path: string;
  query?: Record<string, string | number | boolean | undefined>;
  body?: unknown;
  token?: string;
  signal?: AbortSignal;
};

export class ApiClientError extends Error {
  status: number;
  details: unknown;

  constructor(message: string, status: number, details: unknown) {
    super(message);
    this.name = "ApiClientError";
    this.status = status;
    this.details = details;
  }
}

const API_BASE_URL = "https://api.example.invalid";

function buildUrl(path: string, query?: RequestOptions["query"]) {
  const url = new URL(path, API_BASE_URL);

  Object.entries(query ?? {}).forEach(([key, value]) => {
    if (value !== undefined) {
      url.searchParams.set(key, String(value));
    }
  });

  return url.toString();
}

async function parseBody(response: Response) {
  const text = await response.text();

  if (!text) {
    return null;
  }

  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
}

export async function apiRequest<TResponse>({
  method = "GET",
  path,
  query,
  body,
  token,
  signal,
}: RequestOptions): Promise<TResponse> {
  const headers = new Headers({
    Accept: "application/json",
  });

  if (body !== undefined) {
    headers.set("Content-Type", "application/json");
  }

  if (token) {
    headers.set("Authorization", `Bearer ${token}`);
  }

  const response = await fetch(buildUrl(path, query), {
    method,
    headers,
    body: body === undefined ? undefined : JSON.stringify(body),
    signal,
  });

  const payload = await parseBody(response);

  if (!response.ok) {
    throw new ApiClientError("Request failed", response.status, payload);
  }

  return payload as TResponse;
}

type DemoPortfolioSummary = {
  walletId: string;
  totalValueUsd: number;
  assetCount: number;
};

export async function loadDemoPortfolioSummary(token: string) {
  return apiRequest<DemoPortfolioSummary>({
    path: "/v1/demo/portfolio-summary",
    query: { walletId: "wallet_demo_001" },
    token,
  });
}

