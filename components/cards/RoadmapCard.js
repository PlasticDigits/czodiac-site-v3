import Image from 'next/image'
import { Box, useTheme } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
import ButtonPrimary from '../styled/ButtonPrimary';
import { Stack } from '@mui/system';

export default function RoadmapCard({ iconSrc, title, description }) {
    const theme = useTheme();
    const bp = theme.breakpoints.values;
    const mq = bp => `@media (min-width: ${bp}px)`;
    return (
        <Box css={{ [mq(bp.xs)]: { width: '100%', paddingBottom: '100%', height: 0, borderRadius: '50%' }, backgroundColor: theme.palette.primary.light }}>
            <Image
                src={iconSrc}
                alt={title + "' Icon"}
                width={40}
                height={40}
                priority
                css={{
                    marginTop: '20%',
                    marginBottom: 20
                }}
            />
            <p css={{ color: "#AF3532", fontWeight: 'bold', fontSize: 22, margin: 0, [mq(bp.md)]: { fontSize: 32 } }}>
                {title}
            </p>
            <p css={{ fontSize: 16, marginLeft: 'auto', marginRight: 'auto', maxWidth: '80%', marginTop: 15, [mq(bp.md)]: { fontSize: 18, marginTop: 10 } }} >
                {description}
            </p>
        </Box>)
}