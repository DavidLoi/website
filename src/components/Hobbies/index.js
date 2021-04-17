import React from 'react'
import basketball from '../../images/svg-4.svg'
import monitor from '../../images/svg-5.svg'
import music from '../../images/svg-6.svg'
import {HobbiesContainer, HobbiesH1, HobbiesWrapper, HobbiesCard, HobbiesIcon, HobbiesH2, HobbiesP} from './HobbiesElements'

const Hobbies = () => {
  return (
    <HobbiesContainer id="hobbies">
      <HobbiesH1>My Hobbies!</HobbiesH1>
      <HobbiesWrapper>
        <HobbiesCard>
          <HobbiesIcon src={basketball}/>
          <HobbiesH2>SPORTS</HobbiesH2>
          <HobbiesP>Swimming, basketball, volleyball and many more.</HobbiesP>
        </HobbiesCard>
        <HobbiesCard onClick={() => window.open("https://myanimelist.net/animelist/Duckchay", "_blank")}>
          <HobbiesIcon src={monitor}/>
          <HobbiesH2>ANIME</HobbiesH2>
          <HobbiesP>Feel free to check out myanimelist.</HobbiesP>
        </HobbiesCard>
        <HobbiesCard onClick={() => window.open("https://open.spotify.com/user/duckchay123?si=758e9b51e18340b2", "_blank")}>
          <HobbiesIcon src={music}/>
          <HobbiesH2>MUSIC</HobbiesH2>
          <HobbiesP>Polo G, JID, Yorushika, and majiko.</HobbiesP>
        </HobbiesCard>
      </HobbiesWrapper>
    </HobbiesContainer>
  )
}

export default Hobbies;
