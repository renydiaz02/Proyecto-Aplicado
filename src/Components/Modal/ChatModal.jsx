import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Chat from '../../Chat2/App'



const style = {
  position: 'absolute',
  top: '25%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '40%', 
  height: '48%',
  bgcolor: 'black',
  border: 'none',
  boxShadow: 'none',
  // p: '4',
};

const BasicModal = ({ open, setOpen }) => {

  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Chat style={{boxShadow:'none',border:'none'}}/>
        </Box>
      </Modal>
    </div>
    
  )
}

export default BasicModal
