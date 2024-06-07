import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from "react-router-dom";
import './index.css';
import { router } from './Routes/router';
import { ToastContainer } from 'react-toastify';
import AuthProviders from './provider/AuthProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProviders>
        <RouterProvider router={router} />
      </AuthProviders>
    </QueryClientProvider>
    <ToastContainer />
  </React.StrictMode>,
)
