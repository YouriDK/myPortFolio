import React, { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import Flag from 'react-world-flags';
import data from '../data.json';

interface NavBarProps {
  onChangeLang?: any;
}

const NavBar: FC<NavBarProps> = (props: any): JSX.Element => {
  const [lang, setLang] = useState('FR');

  function ChangeLang(params: any): void {
    setLang(params);
    props.onChangeLang(params);
  }

  return (
    <header>
      <nav>
        <NavLink
          to='/'
          activeClassName='active-link'
          className='text-navbar brygada'
        >
          {lang === 'FR' ? data.navbar.accueil.FR : data.navbar.accueil.EN}
        </NavLink>
        <NavLink
          to='/formation'
          activeClassName='active-link'
          className='text-navbar brygada'
        >
          {lang === 'FR' ? data.navbar.formation.FR : data.navbar.formation.EN}
        </NavLink>
        <NavLink
          to='/skill'
          activeClassName='active-link'
          className='text-navbar brygada'
        >
          {lang === 'FR'
            ? data.navbar.competences.FR
            : data.navbar.competences.EN}
        </NavLink>
        <NavLink
          to='/professional'
          activeClassName='active-link'
          className='text-navbar brygada'
        >
          {lang === 'FR' ? data.navbar.xp.FR : data.navbar.xp.EN}
        </NavLink>
        <NavLink
          to='/realisation'
          activeClassName='active-link'
          className='text-navbar brygada'
        >
          {lang === 'FR'
            ? data.navbar.realisations.FR
            : data.navbar.realisations.EN}
        </NavLink>

        <SocialIcon
          url='https://linkedin.com/in/youri-choucoutou-690522142'
          className='icon'
          target='_blank'
          fgColor='#fff'
          style={{ height: 42, width: 42 }}
        />

        <Flag
          onClick={() => ChangeLang(lang === 'FR' ? 'EN' : 'FR')}
          code={lang === 'FR' ? 'FRA' : 'GBR'}
          height='22'
        />

        <div className='animation start-home'></div>
      </nav>
    </header>
  );
};

export default NavBar;
