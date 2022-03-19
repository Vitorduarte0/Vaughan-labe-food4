import React, { useContext } from "react";
import CardFeed from "./CardFeed/CardFeed";
import { PageTittleContainer, TittleNavContainer, ContainerSearch, Container } from "./styled"
import Box from '@mui/material/Box'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import FormControl from '@mui/material/FormControl'
import SearchIcon from '@mui/icons-material/Search'
import Divider from '@mui/material/Divider';
import NavBarHome from "../../components/NavBar/NarBarHome";
import { goToSearch } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import UseProtectPage from "../../hooks/useProtectPage";

const FeedPage = () => {
  const navigate = useNavigate()

  UseProtectPage()
  return (
    <div>

      <Container>

        <PageTittleContainer>
          <TittleNavContainer>
            <p>FutureEats</p>
          </TittleNavContainer>
        </PageTittleContainer>

        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Divider />
          <ContainerSearch>
            <FormControl sx={{ m: 1, width: '40ch' }} variant="outlined" >
              <OutlinedInput
                onClick={() => goToSearch(navigate)}
                type={'text'}
                startAdornment={
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>}
                placeholder="Restaurante"
              />
            </FormControl>
          </ContainerSearch>
        </Box>

        <CardFeed />
        <NavBarHome />
      </Container>

    </div>
  )
}

export default FeedPage