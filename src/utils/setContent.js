import Spinner from '../components/spinner/Spinner';
import Skeleton from '../components/skeleton/Skeleton';
import ErrorMessage from '../components/errorMessage/ErrorMessage';

const setContent = (process, Component, data, all) => {
  switch (process) {
    case 'waiting':
      return <Skeleton />;
    case 'loading':
      return <Spinner />;
    case 'confirmed':
      return <Component data={data} all={all} />;
    case 'error':
      return <ErrorMessage />;
    default:
      throw new Error('Unexpected process state');
  }
};

export default setContent;
