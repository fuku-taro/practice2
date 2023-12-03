import React from 'react';
import { Link } from 'react-router-dom';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';

// icons
import HomeIcon from '@mui/icons-material/Home';
import AddHomeIcon from '@mui/icons-material/AddHome';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import NotificationsIcon from "@mui/icons-material/Notifications";
import LogoutIcon from '@mui/icons-material/Logout';

// const navigateTo = useNavigate();
export const mainListItems = (
  <React.Fragment>
<Link to={'/Admin'}>
    <ListItemButton>
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText primary="物件一覧" />
    </ListItemButton>
</Link>

<Link to={'/AdminRegistration'}>
    <ListItemButton>
      <ListItemIcon>
        <AddHomeIcon />
      </ListItemIcon>
      <ListItemText primary="物件登録" />
    </ListItemButton>
</Link>

<Link>
    <ListItemButton>
      <ListItemIcon>
        <HomeWorkIcon />
      </ListItemIcon>
      <ListItemText primary="成約物件一覧" />
    </ListItemButton>
</Link>

<Link>
    <ListItemButton>
      <ListItemIcon>
        <AddHomeWorkIcon />
      </ListItemIcon>
      <ListItemText primary="成約物件登録" />
    </ListItemButton>
</Link>

<Link>
    <ListItemButton>
      <ListItemIcon>
        <LocationOnIcon />
      </ListItemIcon>
      <ListItemText primary="参考物件一覧" />
    </ListItemButton>
</Link>

<Link>
    <ListItemButton>
      <ListItemIcon>
        <AddLocationAltIcon />
      </ListItemIcon>
      <ListItemText primary="参考物件登録" />
    </ListItemButton>
</Link>

<Link>
    <ListItemButton>
      <ListItemIcon>
        <NotificationsIcon />
      </ListItemIcon>
      <ListItemText primary="お問い合わせ情報" />
    </ListItemButton>
</Link>

<Link>
    <ListItemButton>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="顧客管理" />
    </ListItemButton>
</Link>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="設定" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <LogoutIcon />
      </ListItemIcon>
      <ListItemText primary="ログアウト" />
    </ListItemButton>
  </React.Fragment>
);