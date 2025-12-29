import '@/lib/errorReporter';
import { enableMapSet } from "immer";
enableMapSet();
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { RouteErrorBoundary } from '@/components/RouteErrorBoundary';
import '@/index.css';
import { HomePage } from '@/pages/HomePage';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { QuoteModal } from '@/components/QuoteModal';
import { 
  AboutPage, 
  ServicesPage, 
  ServiceDetail, 
  WorkPage, 
  TeamPage, 
  BlogPage, 
  ContactPage 
} from '@/pages/Placeholders';
const queryClient = new QueryClient();
const RootLayout = () => (
  <PublicLayout>
    <Outlet />
    <QuoteModal />
  </PublicLayout>
);
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <RouteErrorBoundary />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "services", element: <ServicesPage /> },
      { path: "services/:slug", element: <ServiceDetail /> },
      { path: "work", element: <WorkPage /> },
      { path: "team", element: <TeamPage /> },
      { path: "blog", element: <BlogPage /> },
      { path: "contact", element: <ContactPage /> },
    ]
  },
]);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary>
        <RouterProvider router={router} />
      </ErrorBoundary>
    </QueryClientProvider>
  </StrictMode>,
);