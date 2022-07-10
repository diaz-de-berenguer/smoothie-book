import { useClearDataMutation, useResetDataMutation } from '../../graphql/schema';

import LoadingButton from '@mui/lab/LoadingButton';
import { PageContext } from '../Page';
import getTestData from './get-test-data';
import { useContext } from 'react';

const ResetDataButton: React.FC = () => {
  const { setError } = useContext(PageContext);
  const testData = getTestData();
  const [clearData, { loading: clearLoading }] = useClearDataMutation({
    onError: (err) => setError(err),
  });
  const [submit, { loading }] = useResetDataMutation({
    onError: (err) => setError(err),
  });

  function handleSubmit() {
    clearData().then(() => {
      for (const smoothie of testData) {
        submit({ variables: { input: smoothie } });
      }
    });
  }

  return (
    <LoadingButton loading={loading || clearLoading} onClick={handleSubmit}>
      Reset Test Data
    </LoadingButton>
  );
};

export default ResetDataButton;
