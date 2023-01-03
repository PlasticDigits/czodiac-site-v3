import Image from 'next/image'
import { Box, useTheme } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
import ButtonPrimary from '../styled/ButtonPrimary';
import { Stack } from '@mui/system';

export default function TestimonialCard({ profileSrc, profileName, profileLocation, testimonial }) {
    const theme = useTheme();
    const bp = theme.breakpoints.values;
    const mq = bp => `@media (min-width: ${bp}px)`;
    return (<Box css={{ minHeight:380, position: 'relative', borderRadius: 26, [mq(bp.xs)]: { padding: '10px 15px 40px 15px' }, [mq(bp.md)]: { padding: '20px 20px 40px 20px' }, backgroundColor: theme.palette.primary.light }}>
        <Image
            src="/images/icons/Comma.svg"
            alt={"Quotation Mark"}
            width={26}
            height={17}
            priority
            css={{ position: 'absolute', top: 30, right: 30 }}
        /><br />
        <Image
            src={profileSrc}
            alt={profileName + "'s picture"}
            width={120}
            height={120}
            priority
        />
        <p css={{ color: "#AF413E", fontWeight: 'bold', fontSize: 18, margin: 0 }}>
            {profileName}
        </p>
        <p css={{ color: "#CDACA2", fontSize: 16, margin: 0 }}>
            {profileLocation}
        </p>
        <p css={{fontSize:16}} >
            {testimonial}
        </p>
    </Box>)
}