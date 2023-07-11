import React, { useState } from 'react';
import { Fab, Dialog, DialogContent, TextField, Button, useMediaQuery } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
const ChatBot = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleToggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleCloseChat = () => {
    setIsChatOpen(false);
  };

  return (
    <div>
      <Fab
        color="primary"
        onClick={handleToggleChat}
        sx={{ position: 'fixed', bottom: 20, right: 20 }}
      >
        <ChatIcon />
      </Fab>
      <Dialog
        open={isChatOpen}
        onClose={handleCloseChat}
        fullWidth
        maxWidth="sm"
        sx={{ '& .MuiDialog-paper': { maxWidth: '400px' } }}
      >
        <DialogContent sx={{ minHeight: '200px' }}>
          <TextField
            label="Your Message"
            variant="outlined"
            fullWidth
            multiline
            minRows={3}
            sx={{ marginBottom: '16px' }}
          />
          <Button variant="contained" color="primary">
            Send
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ChatBot;
