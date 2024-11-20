import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import App from './App.jsx';
import './index.css';
import { ThemeProvider } from './contexts/ThemeContext';
import { UserSessionProvider } from './contexts/UserSessionContext';
import ErrorBoundary from './components/ErrorBoundary';
import 'leaflet/dist/leaflet.css';

// Initialize React Query Client
const queryClient = new QueryClient();

// Root rendering function
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <UserSessionProvider>
          <ThemeProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </ThemeProvider>
        </UserSessionProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  </StrictMode>
);