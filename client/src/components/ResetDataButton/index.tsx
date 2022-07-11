import {
  GetSmoothiesDocument,
  useClearDataMutation,
  useResetDataMutation,
} from '../../graphql/schema';
import { useLocation, useNavigate } from 'react-router-dom';

import LoadingButton from '@mui/lab/LoadingButton';
import { PageContext } from '../Page';
import getTestData from './get-test-data';
import { useContext } from 'react';

const ResetDataButton: React.FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { setError } = useContext(PageContext);
  const testData = getTestData();

  const [clearData, { loading: clearLoading }] = useClearDataMutation({
    onError: (err) => setError(err),
  });

  const [submit, { loading }] = useResetDataMutation({
    onError: (err) => setError(err),
    awaitRefetchQueries: true,
    refetchQueries: [{ query: GetSmoothiesDocument, variables: { page: 1, limit: 8 } }],
  });

  function handleSubmit() {
    clearData().then(() => {
      Promise.all(testData.map((smoothie) => submit({ variables: { input: smoothie } }))).then(() =>
        pathname === '/' ? navigate(0) : navigate('/')
      );
    });
  }

  return (
    <LoadingButton loading={loading || clearLoading} onClick={handleSubmit} color="inherit">
      Reset Test Data
    </LoadingButton>
  );
};

export default ResetDataButton;
