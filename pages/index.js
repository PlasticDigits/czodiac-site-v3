import { useTheme } from '@mui/material';
import { Open_Sans } from '@next/font/google';
import BottomBar from '../components/layout/BottomBar';
import Czblue from '../components/layout/Czblue';
import FairTribes from '../components/layout/FairTribe';
import Features from '../components/layout/Features';
import Mission from '../components/layout/Mission';
import Roadmap from '../components/layout/Roadmap';
import StatsBar from '../components/layout/StatsBar';
import Testimonials from '../components/layout/Testimonials';
import TopBar from '../components/layout/TopBar';

const openSans = Open_Sans({ subsets: ['latin'] });

export default function Home() {
  const theme = useTheme();
  return (
    <>
      <main className={openSans.className} css={{ color: theme.palette.common.black }} >
        <TopBar />
        <Mission />
        <StatsBar />
        <FairTribes />
        <Czblue />
        <Features />
        <Testimonials />
        <Roadmap />
        <BottomBar />
      </main>
    </>
  )
}
