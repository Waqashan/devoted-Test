import React from 'react';
import { Box, AppBar, Toolbar, Typography } from '@mui/material';

const Layout = (props) => {
  return (
    <Box>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6">Title</Typography>
        </Toolbar>
      </AppBar>
      {props.children}
    </Box>
  );
}

export default Layout;
