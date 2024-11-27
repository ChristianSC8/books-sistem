import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import MainPage from './features/website/components/main-page.tsx';
import BookDetails from './features/website/components/book-details.tsx';

const router = createBrowserRouter(
  [
    {
      path: "/", 
      element: <App />,  
      children: [
        {
          path: "/",  
          element: <Navigate to="/books" />,  
        },
        {
          path: "/books",  
          element: <MainPage />
        },
        {
          path: "/books/:id",  
          element: <BookDetails />
        }
      ]
    },
  ],
  {
    future: {
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_relativeSplatPath: true,
      v7_skipActionErrorRevalidation: true,
      v7_startTransition: true,
    } as any
  }
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider
      future={{
        v7_startTransition: true
      }}
      router={router} />
  </StrictMode>,
)
