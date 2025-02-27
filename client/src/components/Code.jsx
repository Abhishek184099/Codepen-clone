import { useContext } from 'react';

//components
import Codepen from './Codepen';
import { Box, styled } from '@mui/material';

import { DataContext } from '../context/DataProvider';

const Container = styled(Box)`
    display : flex;
height :40vh;  
`

const Code = () => {

    const { html, css, js, setHtml, setCss, setJs } = useContext(DataContext);

    return (
        <Container>
            <Codepen 
                language="xml"
                heading="HTML"
                value={html}
                onChange={setHtml}
                icon='/'
                color='#FF3C41'
            />
            <Codepen 
                language="css"
                heading="CSS"
                value={css}
                onChange={setCss}
                icon='*'
                color='#0EBEFF'
            />
            <Codepen 
                language="javascript"
                heading="JS"
                value={js}
                onChange={setJs}
                icon='( )'
                color='#FCD000'
            />
        </Container>
    )
}

export default Code;