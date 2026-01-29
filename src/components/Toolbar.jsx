import React, { useState } from 'react';
import {
  AppBar,
  Toolbar as MuiToolbar,
  Button,
  Menu,
  MenuItem,
  IconButton,
  Box,
  List,
  ListItem,
  ListItemText,
  Divider,
  ListSubheader,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const menuItems = [
  {
    title: 'Resume',
    url: '/assets/MikeTalleyResume.pdf',
  },
  {
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/michaeldtalley/',
  },
  {
    title: 'Github',
    url: 'https://github.com/miketalley',
  },
  {
    title: 'Project Examples',
    links: [
      {
        title: 'Bodlytics',
        url: 'https://bodlytics.com',
      },
    ],
  },
];

function Toolbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState(null);
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuOpen = (event, menuTitle) => {
    setAnchorEl(event.currentTarget);
    setActiveMenu(menuTitle);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setActiveMenu(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMenuAnchor(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuAnchor(null);
  };

  return (
    <AppBar position="static" color="default" sx={{ backgroundColor: '#1e1e1e', fontFamily: '"Open Sans", sans-serif' }}>
      <MuiToolbar>
        {/* Desktop Menu */}
        {!isMobile && (
          <Box sx={{ display: 'flex', gap: 1 }}>
            {menuItems.map((item) =>
              item.links ? (
                <React.Fragment key={item.title}>
                  <Button
                    color="inherit"
                    onClick={(e) => handleMenuOpen(e, item.title)}
                    sx={{ textTransform: 'none' }}
                  >
                    {item.title}
                  </Button>
                  <Menu
                    anchorEl={anchorEl}
                    open={activeMenu === item.title}
                    onClose={handleMenuClose}
                    PaperProps={{
                      sx: { fontFamily: '"Open Sans", sans-serif' },
                    }}
                  >
                    {item.links.map((link) => (
                      <MenuItem
                        key={link.title}
                        component="a"
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={handleMenuClose}
                        sx={{ 
                          fontFamily: '"Open Sans", sans-serif',
                          fontSize: '0.875rem',
                          fontWeight: 500,
                        }}
                      >
                        {link.title}
                      </MenuItem>
                    ))}
                  </Menu>
                </React.Fragment>
              ) : (
                <Button
                  key={item.title}
                  color="inherit"
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ textTransform: 'none' }}
                >
                  {item.title}
                </Button>
              )
            )}
          </Box>
        )}

        {/* Mobile Menu */}
        {isMobile && (
          <>
            <IconButton
              color="inherit"
              onClick={handleMobileMenuOpen}
              edge="start"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={mobileMenuAnchor}
              open={Boolean(mobileMenuAnchor)}
              onClose={handleMobileMenuClose}
              PaperProps={{
                sx: { minWidth: 200 },
              }}
            >
              <List dense>
                {menuItems.map((item) =>
                  item.links ? (
                    <React.Fragment key={item.title}>
                      <Divider />
                      <ListSubheader sx={{ backgroundColor: 'inherit' }}>
                        {item.title}
                      </ListSubheader>
                      {item.links.map((link) => (
                        <ListItem
                          key={link.title}
                          component="a"
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={handleMobileMenuClose}
                          sx={{ pl: 4 }}
                        >
                          <ListItemText primary={link.title} />
                        </ListItem>
                      ))}
                    </React.Fragment>
                  ) : (
                    <ListItem
                      key={item.title}
                      component="a"
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={handleMobileMenuClose}
                    >
                      <ListItemText primary={item.title} />
                    </ListItem>
                  )
                )}
              </List>
            </Menu>
          </>
        )}

        <Box sx={{ flexGrow: 1 }} />

        <Button
          color="inherit"
          href="mailto:michaeldtalley@gmail.com"
          target="_blank"
          sx={{ textTransform: 'none' }}
        >
          Email Mike
        </Button>
      </MuiToolbar>
    </AppBar>
  );
}

export default Toolbar;
