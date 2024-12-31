import React from 'react'
import HeroBgAnimation from '../HeroBgAnimation'
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle,SocialMediaIcons,SocialMediaIcon, ResumeButton } from './HeroStyle'
import HeroImg from '../../images/me.jpg'
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
const handleSubmit = (e) => {
      console.log("hiii");
  };

const HeroSection = () => {
    return (
        <div id="about">
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer >
                    <HeroLeftContainer id="Left">
                        <Title>Hello, I am <br /> {Bio.name}</Title>
                        <TextLoop>
                            I am a
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{Bio.description}<Span onClick={handleSubmit}> Know more..</Span></SubTitle>
                        <SocialMediaIcons>
                            <SocialMediaIcon href={Bio.github} target="display"><GitHubIcon/></SocialMediaIcon>
                            <SocialMediaIcon href={Bio.linkedin} target="display"><LinkedInIcon /></SocialMediaIcon>
                            <SocialMediaIcon href={Bio.insta} target="display"><InstagramIcon /></SocialMediaIcon>
                            <SocialMediaIcon href={Bio.mail} target="display"><MailIcon/></SocialMediaIcon>
                        </SocialMediaIcons>
                        <ResumeButton href={Bio.resume} target='display'>Check Resume</ResumeButton>
                        
                    </HeroLeftContainer>

                    <HeroRightContainer id="Right">

                        <Img src={HeroImg} alt="hero-image" />
                    </HeroRightContainer>
                </HeroInnerContainer>

            </HeroContainer>
        </div>
    )
}

export default HeroSection