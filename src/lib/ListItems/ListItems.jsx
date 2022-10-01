import * as React from 'react';
import { Logout, Dashboard, LocalLibrary, BookmarkAdded, Grade } from "@mui/icons-material";
import NavBarItem from '../../components/NavBarItem/NavBarItem';
import { Link } from 'react-router-dom';

export const studentListItems = (
  <React.Fragment>
    {
      [
        {
          "name": "Dashboard",
          "icon": <Dashboard />,
          "link": "/"
        },
        {
          "name": "All Courses",
          "icon": <LocalLibrary />,
          "link": "/courses"
        },
        {
          "name": "Enrollments",
          "icon": <BookmarkAdded />,
          "link": "/enrollments"
        },
        {
          "name": "Grades",
          "icon": <Grade />,
          "link": "/grades"
        }
      ].map((item) => (
        <Link to={item.link} style={{textDecoration: 'none', color: 'black'}}>
          <NavBarItem title={item.name} icon={item.icon} />
        </Link>
      ))

    }
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    {
      [
        {
          "name": "Log out",
          "icon": <Logout />
        }
      ].map((item) => (
        <NavBarItem title={item.name} icon={item.icon} />
      ))

    }
  </React.Fragment>
);
