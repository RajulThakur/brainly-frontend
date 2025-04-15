import {renderToString} from 'react-dom/server';

import {routes} from './App.server';
import { createStaticHandler, createStaticRouter, StaticRouterProvider } from 'react-router';

export async function render(request: Request) {
  const {query, dataRoutes} = createStaticHandler(routes);
  const context = await query(request);

  // Handle redirects
  if (context instanceof Response) {
    throw context;
  }

  const router = createStaticRouter(dataRoutes, context);

  return renderToString(
    <StaticRouterProvider
      router={router}
      context={context}
    />
  );
}
