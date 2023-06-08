import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

export default function News() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Tabs
                value={value}
                onChange={handleChange}
                textColor="black"
                indicatorColor="primary"
                aria-label="tabs example"
            >

                <Tab label="HOT NEWS" id="tab-1" value={1} />

            </Tabs>
            <TabPanel value={value} index={1}>
                <img src='https://cdn.marvel.com/content/1x/marvel-snap-spider-versus-new-season-article-card.jpg' />
                <h5  className='font-bold'>How many Spider-People can you name? Travel across the Spider-Verse with the latest season of MARVEL SNAP!</h5>
                <p className='text-left'>Swing into action during MARVEL SNAP’s newest season, Spider-Versus! In this thrilling new season, you'll join forces with iconic web-slingers, face off against menacing villains, and unravel the secrets of the Spider-Verse. Are your spider-senses tingling yet?</p>
                <h5 className='font-bold'>SPIDER-VERSUS SEASON PASS</h5>
                <p className='text-left'>Spider-Versus Season Pass features some incredible Spider-People from across the multiverse, including the brand new Ghost-Spider! As you progress through the season, you'll have the opportunity to unlock a brand new card, variants, avatars, and card backs, all inspired by the exhilarating world of the Spider-Verse.</p>
                <h5 className='font-bold'>GHOST-SPIDER</h5>
                <p className='text-left'>Gwen Stacy is the famous wall-crawler on Earth-65, an alternate universe, where she’s bitten by the infamous irradiated arachnid and dubbed Spider-Woman or “Spider-Gwen.”When Gwen's friend Peter Parker, who looked up to Spider-Woman, dies after a scientific experiment gone wrong, her alter ego receives the blame and is subsequently hunted as a criminal by her own father. Though she comes to terms with Parker's death, she wears her mask as a badge to honor his memory and go where she is needed most.</p>
                <h5 className='font-bold'>THERE ARE MORE SEASONAL REWARDS!</h5>
                <h5 className='font-bold'>NEW CARDS & MORE</h5>
                <p className='text-left'>Spider-Versus is our first ever season with Series 4 direct releases!</p>
            </TabPanel>
            
        </Box>
    );
}