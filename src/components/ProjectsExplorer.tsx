import { useMemo, useState } from 'react';

export interface ProjectItem {
  id: string;
  title: string;
  summary: string;
  year: number;
  role: string;
  context: string;
  stack: string[];
  cover: string;
  demo?: string;
  repo?: string;
}

const FILTERS = ['Todos', 'Profesional', 'Personal', 'Académico'] as const;

export default function ProjectsExplorer({ projects }: { projects: ProjectItem[] }) {
  const [context, setContext] = useState<string>('Todos');
  const [query, setQuery] = useState('');

  const counts = useMemo(() => {
    const map: Record<string, number> = { Todos: projects.length };
    for (const project of projects) {
      map[project.context] = (map[project.context] ?? 0) + 1;
    }
    return map;
  }, [projects]);

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return projects.filter((project) => {
      const matchesContext = context === 'Todos' || project.context === context;
      const haystack = [project.title, project.summary, project.role, ...project.stack]
        .join(' ')
        .toLowerCase();
      return matchesContext && (!needle || haystack.includes(needle));
    });
  }, [projects, context, query]);

  return (
    <div>
      <div className="pe-controls">
        <div className="pe-chips" role="group" aria-label="Filtrar por tipo de proyecto">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              type="button"
              className="pe-chip"
              aria-pressed={context === filter}
              onClick={() => setContext(filter)}
            >
              {filter} <span aria-hidden="true">({counts[filter] ?? 0})</span>
            </button>
          ))}
        </div>

        <label className="sr-only" htmlFor="pe-search">
          Buscar por nombre o tecnología
        </label>
        <input
          id="pe-search"
          className="pe-search"
          type="search"
          placeholder="Buscar por tecnología…"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>

      <p className="pe-count" aria-live="polite">
        {filtered.length} {filtered.length === 1 ? 'proyecto' : 'proyectos'}
      </p>

      {filtered.length === 0 ? (
        <p className="pe-empty">
          No hay proyectos con ese filtro. Prueba con otra tecnología o quita la búsqueda.
        </p>
      ) : (
        <div className="project-grid">
          {filtered.map((project) => (
            <article className="card" key={project.id}>
              <a className="card-media" href={`/proyectos/${project.id}`} tabIndex={-1} aria-hidden="true">
                <img src={project.cover} alt="" loading="lazy" decoding="async" />
                <span className="card-badge">{project.context}</span>
              </a>

              <div className="card-body">
                <div className="card-top">
                  <h3 className="card-title">
                    <a href={`/proyectos/${project.id}`}>{project.title}</a>
                  </h3>
                  <span className="card-year">{project.year}</span>
                </div>

                <p className="card-summary">{project.summary}</p>

                <ul className="tags">
                  {project.stack.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>

                <div className="card-links">
                  <a href={`/proyectos/${project.id}`}>Caso →</a>
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noreferrer">
                      Demo ↗
                    </a>
                  )}
                  {project.repo && (
                    <a href={project.repo} target="_blank" rel="noreferrer">
                      Código ↗
                    </a>
                  )}
                  {!project.demo && !project.repo && (
                    <span className="is-disabled">Sin enlace público</span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
