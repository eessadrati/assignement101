import { RouterProvider } from 'react-router-dom';
import router from './router';
import { Suspense } from 'react';
import { Loader2 } from 'lucide-react';

function App() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center w-full h-full">
          <Loader2 className="mr-2 animate-spin" />
          Loading ...
        </div>
      }
    >
      <RouterProvider router={router} />;
    </Suspense>
  );
}

export default App;
