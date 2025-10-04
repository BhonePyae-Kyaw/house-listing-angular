import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'details/:id',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      // Return all the valid housing location IDs for prerendering
      // Based on the housing service data, IDs are 0-9
      return Array.from({ length: 10 }, (_, i) => ({ id: i.toString() }));
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
