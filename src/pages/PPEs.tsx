import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const PPEs = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <h1 className="mb-4 text-3xl font-medium">P.P.Es Page </h1>
      <p className="my-2"> Please Check P.P.E Violations page</p>
      <Link to="/PPE_violations">
        <Button>Go to P.P.E Violations</Button>
      </Link>
    </div>
  );
};

export default PPEs;
