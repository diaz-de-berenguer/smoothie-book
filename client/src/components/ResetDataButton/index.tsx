import { GetSmoothiesDocument, useResetDataMutation } from '../../graphql/schema';
import { useLocation, useNavigate } from 'react-router-dom';

import LoadingButton from '@mui/lab/LoadingButton';

const ResetDataButton: React.FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [resetData, { loading }] = useResetDataMutation({
    awaitRefetchQueries: true,
    refetchQueries: [{ query: GetSmoothiesDocument, variables: { page: 1, limit: 8 } }],
    onCompleted: () => (pathname === '/' ? navigate(0) : navigate('/')),
  });

  return (
    <LoadingButton loading={loading} onClick={() => resetData()} color="inherit">
      Reset Test Data
    </LoadingButton>
  );
};

export default ResetDataButton;
