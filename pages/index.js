import Image from 'next/image'
import { Open_Sans } from '@next/font/google'
import { Box, Button, Container, Stack, useTheme } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
import MenuLink from '../components/styled/MenuLink';
import MenuLinkSocialIcon from '../components/styled/MenuLinkSocialIcon';
import ButtonPrimary from '../components/styled/ButtonPrimary';
import TopBar from '../components/layout/TopBar';
import Mission from '../components/layout/Mission';
import StatsBar from '../components/layout/StatsBar';

const openSans = Open_Sans({ subsets: ['latin'] });

export default function Home() {
  const theme = useTheme();
  return (
    <>
      <main className={openSans.className} >
        <TopBar />
        <Mission />
        <StatsBar />
      </main>
    </>
  )
}
