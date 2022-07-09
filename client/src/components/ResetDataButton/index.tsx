import { useClearDataMutation, useResetDataMutation } from '../../graphql/schema';

import LoadingButton from '@mui/lab/LoadingButton';
import getTestData from './get-test-data';

const ResetDataButton: React.FC = () => {
  const testData = getTestData();
  const [clearData, { loading: clearLoading }] = useClearDataMutation();
  const [submit, { loading }] = useResetDataMutation();

  function handleSubmit() {
    clearData();
    for (const smoothie of testData) {
      submit({ variables: { input: smoothie } });
    }
  }

  return (
    <LoadingButton loading={loading || clearLoading} onClick={handleSubmit}>
      Add Test Data
    </LoadingButton>
  );
};

export default ResetDataButton;
