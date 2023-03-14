import { Container, StyledIconBtn } from './style';
import { authAPI, localAuth } from 'apis/auth';
import logoImage from '/public/images/logo_v2.png';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useState } from 'react';
import { Settings, AccountCircleRounded } from '@mui/icons-material';
import { Menu, MenuItem } from '@mui/material';

export const Header = () => {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClickUserIcon = () => {
    router.push('/mypage');
  };
  const handleClickLogo = () => {
    router.push('/');
  };
  const handleClickSetting = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClickProfileModify = () => {
    router.push('/signup/body-check');
  };
  const handleSingOut = async () => {
    await authAPI.signout();
    await localAuth.signout();
    router.push('/signin');
  };
  return (
    <Container>
      <h1 className="header__logo" onClick={handleClickLogo}>
        <Image src={logoImage} alt="lulutraining-logo" priority />
      </h1>
      {router.pathname === '/' ? (
        <StyledIconBtn onClick={handleClickUserIcon}>
          <AccountCircleRounded />
        </StyledIconBtn>
      ) : (
        <div>
          <StyledIconBtn
            className="header__button-setting"
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClickSetting}
          >
            <Settings />
          </StyledIconBtn>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handleClickProfileModify}>회원정보 수정</MenuItem>
            <MenuItem onClick={handleSingOut}>로그아웃</MenuItem>
          </Menu>
        </div>
      )}
    </Container>
  );
};
