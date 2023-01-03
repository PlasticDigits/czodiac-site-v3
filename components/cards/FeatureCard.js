import Image from 'next/image'
import { Box, useTheme } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
import ButtonPrimary from '../styled/ButtonPrimary';
import { Stack } from '@mui/system';

export default function FeatureCard({ title, description, linkLabel, link }) {
    const theme = useTheme();
    const bp = theme.breakpoints.values;
    const mq = bp => `@media (min-width: ${bp}px)`;
    return (<Box css={{ borderRadius: 26, [mq(bp.xs)]: { padding: '40px 10px' }, [mq(bp.sm)]: { padding: '40px 20px' }, [mq(bp.md)]: { padding: 40 }, backgroundColor: theme.palette.primary.light }}>
        <Stack>
            <h3 css={{ color: "#702624", fontWeight: 'bold', fontSize: 28, margin: 0 }}>
                {title}
            </h3>
            <p css={{ fontSize: 18 }}>
                {description}
            </p>
            <ButtonPrimary href={link} css={{ marginTop: 15,fontWeight:500 }}>
                {linkLabel}
            </ButtonPrimary>
        </Stack>
    </Box>)
}