/**
 * Repositorios públicos de GitHub.
 *
 * Se leen de la API en cada build para que el listado no se quede desfasado.
 * Si la API falla (sin red, rate limit…), se usa la copia local de abajo: el
 * build nunca se rompe por GitHub. Para subir el límite de peticiones, define
 * `GITHUB_TOKEN` en el entorno del build (Vercel/Netlify o `.env` local).
 */

export interface GitHubRepo {
  name: string;
  displayName: string;
  description: string | null;
  language: string | null;
  url: string;
  homepage: string | null;
  topics: string[];
  stars: number;
  pushedAt: string;
}

interface RepoResponse {
  name: string;
  description: string | null;
  language: string | null;
  html_url: string;
  homepage: string | null;
  topics?: string[];
  stargazers_count: number;
  pushed_at: string;
  fork: boolean;
  archived: boolean;
}

export const GITHUB_USERNAME = 'serpermar';

/** Repos que no queremos listar (el propio portfolio). */
const EXCLUDED = new Set(['myPortfolio']);

/** Nombres de repos que no quedan bien al pasarlos a texto. */
const DISPLAY_NAMES: Record<string, string> = {
  communityHub: 'Community Hub',
  guessVerse: 'GuessVerse',
  'bdo-incidencias': 'BDO Incidencias',
  controlGastos: 'Control de Gastos',
  Tron: 'Tron',
  Justnet: 'Justnet',
  'Footprint-Mappa': 'Footprint Mappa',
  'Programador-a-Jr-PHP-x-Actua': 'Programador Jr PHP x Actúa',
  CRUD: 'Crud',
  Concurso: 'Concurso',
  APIGame: 'ApiGame',
};

/**
 * Copia de seguridad con el estado del perfil en noviembre de 2026.
 * Solo se usa si la API no responde.
 */
const FALLBACK: RepoResponse[] = [
  {
    name: 'communityHub',
    description: null,
    language: 'TypeScript',
    html_url: 'https://github.com/serpermar/communityHub',
    homepage: null,
    stargazers_count: 0,
    pushed_at: '2026-11-04T17:48:31Z',
    fork: false,
    archived: false,
  },
  {
    name: 'guessVerse',
    description: null,
    language: 'TypeScript',
    html_url: 'https://github.com/serpermar/guessVerse',
    homepage: null,
    stargazers_count: 0,
    pushed_at: '2026-10-29T18:53:31Z',
    fork: false,
    archived: false,
  },
  {
    name: 'bdo-incidencias',
    description: null,
    language: 'Java',
    html_url: 'https://github.com/serpermar/bdo-incidencias',
    homepage: null,
    stargazers_count: 0,
    pushed_at: '2026-10-26T19:35:00Z',
    fork: false,
    archived: false,
  },
  {
    name: 'controlGastos',
    description: null,
    language: 'JavaScript',
    html_url: 'https://github.com/serpermar/controlGastos',
    homepage: null,
    stargazers_count: 0,
    pushed_at: '2026-10-01T15:30:34Z',
    fork: false,
    archived: false,
  },
  {
    name: 'Tron',
    description: 'Tron Motorcycle Game',
    language: 'JavaScript',
    html_url: 'https://github.com/serpermar/Tron',
    homepage: null,
    stargazers_count: 0,
    pushed_at: '2026-09-22T14:15:20Z',
    fork: false,
    archived: false,
  },
  {
    name: 'Justnet',
    description: null,
    language: 'TypeScript',
    html_url: 'https://github.com/serpermar/Justnet',
    homepage: null,
    stargazers_count: 0,
    pushed_at: '2026-07-17T20:47:05Z',
    fork: false,
    archived: false,
  },
  {
    name: 'Footprint-Mappa',
    description: null,
    language: 'TypeScript',
    html_url: 'https://github.com/serpermar/Footprint-Mappa',
    homepage: 'https://footprint-mappa.vercel.app',
    stargazers_count: 0,
    pushed_at: '2026-06-30T08:46:35Z',
    fork: false,
    archived: false,
  },
  {
    name: 'Programador-a-Jr-PHP-x-Actua',
    description:
      'Crear una app PHP que carga un fichero CSV en una base de datos y visualiza datos en el navegador y Descargar datos de una API Publica y convertir a CSV',
    language: 'PHP',
    html_url: 'https://github.com/serpermar/Programador-a-Jr-PHP-x-Actua',
    homepage: null,
    stargazers_count: 0,
    pushed_at: '2025-03-19T23:41:47Z',
    fork: false,
    archived: false,
  },
  {
    name: 'CRUD',
    description: null,
    language: 'PHP',
    html_url: 'https://github.com/serpermar/CRUD',
    homepage: null,
    stargazers_count: 0,
    pushed_at: '2025-02-11T18:06:12Z',
    fork: false,
    archived: false,
  },
  {
    name: 'Concurso',
    description: null,
    language: 'JavaScript',
    html_url: 'https://github.com/serpermar/Concurso',
    homepage: null,
    stargazers_count: 0,
    pushed_at: '2025-02-11T15:20:43Z',
    fork: false,
    archived: false,
  },
  {
    name: 'APIGame',
    description: 'sergipermar',
    language: 'Kotlin',
    html_url: 'https://github.com/serpermar/APIGame',
    homepage: null,
    stargazers_count: 0,
    pushed_at: '2024-06-06T15:10:19Z',
    fork: false,
    archived: false,
  },
];

function prettify(name: string): string {
  return name
    .replace(/[-_]+/g, ' ')
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function normalize(repos: RepoResponse[]): GitHubRepo[] {
  return repos
    .filter((repo) => !repo.fork && !repo.archived && !EXCLUDED.has(repo.name))
    .map((repo) => ({
      name: repo.name,
      displayName: DISPLAY_NAMES[repo.name] ?? prettify(repo.name),
      description: repo.description,
      language: repo.language,
      url: repo.html_url,
      homepage: repo.homepage,
      topics: repo.topics ?? [],
      stars: repo.stargazers_count,
      pushedAt: repo.pushed_at,
    }))
    .sort((a, b) => b.pushedAt.localeCompare(a.pushedAt));
}

export async function getGitHubRepos(): Promise<GitHubRepo[]> {
  try {
    const headers: Record<string, string> = {
      Accept: 'application/vnd.github+json',
      'User-Agent': 'sergi-perez-portfolio',
    };

    const token = process.env.GITHUB_TOKEN;
    if (token) headers.Authorization = `Bearer ${token}`;

    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=pushed`,
      { headers, signal: AbortSignal.timeout(8000) },
    );

    if (!response.ok) {
      throw new Error(`GitHub respondió ${response.status}`);
    }

    const data = (await response.json()) as RepoResponse[];
    if (!Array.isArray(data) || data.length === 0) {
      throw new Error('respuesta vacía');
    }

    return normalize(data);
  } catch (error) {
    console.warn(
      `[github] No se pudo leer la API; se usa la copia local. ${String(error)}`,
    );
    return normalize(FALLBACK);
  }
}
