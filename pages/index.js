import { Open_Sans } from '@next/font/google'
import { useTheme } from '@mui/material';
import TopBar from '../components/layout/TopBar';
import Mission from '../components/layout/Mission';
import StatsBar from '../components/layout/StatsBar';
import FairTribes from '../components/layout/FairTribe';
import Features from '../components/layout/Features';
import Testimonials from '../components/layout/Testimonials';
import Roadmap from '../components/layout/Roadmap';
import BottomBar from '../components/layout/BottomBar';

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
        <Features />
        <Testimonials />
        <Roadmap />
        <BottomBar />
      </main>
    </>
  )
}
