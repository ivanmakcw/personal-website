import React from 'react';
import {
  Pages,
  PagesName,
  PagesUrl,
} from '../../constants';
import styles from './Header.module.css';
import {
  useLocation,
  Link
} from "react-router-dom";

function HeaderButton(props) {
  const to = PagesUrl[props.id];
  if (to == props.path) {
    return (<span>{PagesName[props.id]}</span>);
  } else {
    return (<Link to={to}>{PagesName[props.id]}</Link>);
  }
}

export function Header() {
  const location = useLocation();
  const path = location.pathname;
  return (
    <div>
      <ul>
        <li>
          <HeaderButton id={Pages.home} path={path} />
        </li >
        <li>
          <HeaderButton id={Pages.aboutMe} path={path} />
        </li>
        <li>
          <HeaderButton id={Pages.myWork} path={path} />
        </li>
        <li>
          <HeaderButton id={Pages.contactMe} path={path} />
        </li>
      </ul>
    </div>
  );
}
