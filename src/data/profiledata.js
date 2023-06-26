import React from "react";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import EditIcon from '@mui/icons-material/Edit';
import LogoutIcon from '@mui/icons-material/Logout';

export const profileData = [
    {
        title:"MyProfile",
        link:"/profile",
        icon:<AccountCircleOutlinedIcon/>,
    },
    {
        title:"Edit Profile",
        link:"/editprofile",
        icon:<EditIcon/>
    },
    {
        title:"Logout",
        link:"/",
        icon:<LogoutIcon/>,
    }
]

