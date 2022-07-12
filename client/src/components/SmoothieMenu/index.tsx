import { GetSmoothiesDocument, useDeleteSmoothieMutation } from '../../graphql/schema';
import { useContext, useEffect, useState } from 'react';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { PageContext } from '../Page';
import { useNavigate } from 'react-router-dom';

interface SmoothieMenuProps {
  smoothieId: string;
}

const SmoothieMenu: React.FC<SmoothieMenuProps> = ({ smoothieId }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const { setError, setLoading } = useContext(PageContext);
  const [deleteSmoothie, { loading }] = useDeleteSmoothieMutation({
    variables: { smoothieId },
    onError: (err) => setError(err),
    awaitRefetchQueries: true,
    refetchQueries: [{ query: GetSmoothiesDocument, variables: { page: 1, limit: 8 } }],
  });

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = () => {
    deleteSmoothie();
    navigate('/');
  };

  useEffect(() => {
    setLoading(loading);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  return (
    <div>
      <Button onClick={handleClick}>
        <MoreHorizIcon />
      </Button>
      <Menu id="smoothie-menu" anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={handleDelete}>Delete</MenuItem>
      </Menu>
    </div>
  );
};

export default SmoothieMenu;
