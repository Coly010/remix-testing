import { Mylib } from '@remix-testing/mylib';
import styleModule from './index.module.scss';
import { useRouteError, isRouteErrorResponse } from '@remix-run/react';
export function ErrorBoundary({ error }) {
  console.error(error);
  return (
    <div>
      <h1>Uh oh ...</h1>
      <p>Something went wrong</p>
      <pre>{error.message || 'Unknown error'}</pre>
    </div>
  );
}
export function ErrorBoundary({ error }) {
  console.error(error);
  return (
    <div>
      <h1>Uh oh ...</h1>
      <p>Something went wrong</p>
      <pre>{error.message || 'Unknown error'}</pre>
    </div>
  );
}
export function ErrorBoundary() {
  const error = useRouteError();

  // when true, this is what used to go to 'CatchBoundary'
  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>Oops</h1>
        <p>Status: {error.status}</p>
        <p>{error.data.message}</p>
      </div>
    );
  }

  // Don't forget to typecheck with your own logic.
  // Any value can be thrown, not just errors!
  let errorMessage = 'Unknown error';
  // if (isDefinitelyAnError(error)) {
  //    errorMessage = error.message;
  // }

  return (
    <div>
      <h1>Uh oh ...</h1>
      <p>Something went wrong.</p>
      <pre>{errorMessage}</pre>
    </div>
  );
}

export default function Index() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
      <h1 className="text-xl text-blue-500">Welcome to Remix</h1>
      <p className={styleModule.myP}>Hello there</p>
      <Mylib />
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}
