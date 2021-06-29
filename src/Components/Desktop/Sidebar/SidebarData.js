import React from 'react'
import WhatshotIcon from '@material-ui/icons/Whatshot';
import MovieCreationIcon from '@material-ui/icons/MovieCreation';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
export const SidebarData=[
    {   
        title: 'Trending',
        icon:<WhatshotIcon style={{ fontSize:"2.875rem",lineHeight:"2.25rem" }}/>,
        link:"/trending"
    },
    {
        title: 'Movies',
        icon:<MovieCreationIcon style={{ fontSize:"2.875rem",lineHeight:"2.25rem" }}/>,
        link:"/movies"
    },
    {
        title: 'Series',
        icon:<DesktopWindowsIcon style={{ fontSize:"2.875rem",lineHeight:"2.25rem" }}/>,
        link:"/series"
    },
]
    

