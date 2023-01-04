import Image from 'next/image'
import { Open_Sans } from '@next/font/google'
import { Box, Button, Container, Stack, useTheme } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
import MenuLink from '../styled/MenuLink';
import MenuLinkSocialIcon from '../styled/MenuLinkSocialIcon';
import ButtonPrimary from '../styled/ButtonPrimary';
import FeatureCard from '../cards/FeatureCard';
import TestimonialCard from '../cards/TestimonialCard';


export default function Testimonials() {
    const theme = useTheme();
    const bp = theme.breakpoints.values;
    const mq = bp => `@media (min-width: ${bp}px)`;
    return (
        <Box id="Testimonials" css={{
            width: '100%',
        }}>
            <Container >
                <h2 css={{ fontSize: 40, fontWeight: 'bold', textAlign: "left", [mq(bp.xs)]: { paddingTop: 20 }, [mq(bp.md)]: { paddingTop: 80 } }}>
                    Loved By Thousands Around The Globe.
                </h2>
                <Grid2 container justifyContent="center" alignItems="stretch" rowSpacing={8} columnSpacing={4} maxWidth={1440}
                    css={{
                        paddingBottom: 100,
                        zIndex: 1,
                        position: "relative",
                        textAlign: "center"
                    }}>
                    <Grid2 item xs={0} sm={3} lg={2} >
                        <Box />
                    </Grid2>
                    <Grid2 item xs={12} sm={6} lg={4}>
                        <TestimonialCard
                            profileSrc="/images/profiles/Jordi.png"
                            profileName="Jordi R."
                            profileLocation="Barcelona, Spain"
                            testimonial="CZodiac is the only inversion that I survived and grow up in this bear and crazy market. Devs and team are always working for the investors. No matter what, the community and tribe family becomes stronger."
                        />
                    </Grid2>
                    <Grid2 item xs={12} sm={6} lg={4}>
                        <TestimonialCard
                            profileSrc="/images/profiles/Mike.png"
                            profileName="Mike Mike"
                            profileLocation="Luzon, Phillipines"
                            testimonial="I'm mike, I've been in czred for over a year. The people here in czred are very nice and kind. We have love and unity, it's like we're a family. If you want to become a millionaire here in czred, just hold here and you will become a millionaire."
                        />
                    </Grid2>
                    <Grid2 item xs={0} sm={3} lg={2} css={{ marginTop: -64 }}>
                        <Box />
                    </Grid2>
                    <Grid2 item xs={12} sm={6} lg={4} >
                        <TestimonialCard
                            profileSrc="/images/profiles/Jsizzle.png"
                            profileName="Jsizzle TheCnote"
                            profileLocation="Lake Stevens, United States"
                            testimonial="CZodiac has given me the opportunity to learn my personal investment profile. No other project has given me the time to figure this out. I have been given over a year and a half of investment holdings, and counting. It continues to be my longest standing benefit to date."
                        />
                    </Grid2>
                    <Grid2 item xs={12} sm={6} lg={4} >
                        <TestimonialCard
                            profileSrc="/images/profiles/Spike.png"
                            profileName="Spike The Great"
                            profileLocation="Bangkok, Thailand"
                            testimonial="In the first week I was in CZodiac, I was just fouling around. But now I see the potential and the community is good and this project has a very loyal holder in me. I'm here for a long term because this project has much potential."
                        />
                    </Grid2>
                    <Grid2 item xs={12} sm={6} lg={4} >
                        <TestimonialCard
                            profileSrc="/images/profiles/Sandra.png"
                            profileName="Sandra Kanya"
                            profileLocation="Kuala Lumpur, Malaysia"
                            testimonial="This project is one of the best we are here for a reason. We all are going to skyrocket and our best dev will make it happen. Now there is a lot of potential, many plans are cooking and soon will be present. So what are you waiting for. CZRED to the moon!"
                        />
                    </Grid2>
                </Grid2>
            </Container>
        </Box >
    )
}