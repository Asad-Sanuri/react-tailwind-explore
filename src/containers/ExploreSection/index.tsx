import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Element } from "react-scroll";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

//Images
import BaliTempleImg from "../../images/bali-temple.jpg";
import RiceTerraceImg from "../../images/rice-terrace.jpg";
import ExoticBromoImg from "../../images/exotic-bromo.jpg";
import WaterfallImg from "../../images/Aikmual Waterfall, Taliwang, Indonesia.jpg";
import LakeBaturTempleImg from "../../images/Temple at Lake Batur, Bali, Indonesia.jpg";
import PadarIslandImg from "../../images/Padar Island, Indonesia.jpg"
import OneEightyImg from "../../images/One Eighty, Bali, Indonesia.jpg"
import KlingkingBeachImg from "../../images/Klingking-beach-Bali.jpg" 

const ExploreSectionContainer = tw(Element)`    
    w-full
    h-full
    flex
    flex-col
    relative
    pt-1
    pb-1
    xl:pt-2
    xl:pb-2   
    items-center
`;

const Title = tw.h1`
    text-3xl
    xl:text-3xl
    2xl:text-5xl
    mt-6
    lg:mt-0
    2xl:mt-6
    2xl:mb-6
    text-gray-800
    font-bold
    text-center
`;

const SectionInfo = tw.p`
    text-base
    2xl:text-lg
    text-gray-700
    text-center
    mt-8
    2xl:mt-2
    max-w-lg
    xl:max-w-3xl
    pl-4
    pr-4
    lg:pl-2
    lg:pr-2    
  `;

const ExploreSectionWrapper = tw.div`       
    w-full
    h-full
    flex
    flex-col
    justify-center
    items-center
    mt-3
    xl:mt-6
    2xl:mt-10
    max-w-sm    
    xl:max-w-2xl
    2xl:max-w-4xl                                 
`;

const Item = styled.div`
  ${tw`                       
        flex
        flex-col                                     
    `}
    
  img {
    ${tw`                        
      max-w-full
      object-contain         
                       
    `}
    max-height: 700px        
  }
`;

const Description = tw.p`
    text-gray-300
    text-center
    bg-black
    bottom-10
    left-1/2
    pl-4
    pr-4
    pt-2
    pb-2
    rounded-2xl
    opacity-80
    transform[translateX(-50%)]
    absolute
`;

export function ExploreSection() {
  return (
    <ExploreSectionContainer name="Explore">
      <Title>Explore Travel Locations</Title>
      <SectionInfo>
        View our tour package and find out more about the places we will visit
        together on this journey to beautiful Indonesia, exploring various
        historical and amazing locations with the group.        
      </SectionInfo>
      <ExploreSectionWrapper>
        <Carousel dynamicHeight={false}>
          <Item>
            <img src={BaliTempleImg} alt="Bali Temple"/>
            <Description>Bali Temple</Description>
          </Item>
          <Item>
            <img src={RiceTerraceImg} alt="Rice Terrace" />
            <Description>Rice Terrace</Description>
          </Item>
          <Item>
            <img src={ExoticBromoImg} alt="Exotic Bromo"/>
            <Description>Exotic Bromo</Description>
          </Item>
          <Item>
            <img src={WaterfallImg} alt="Aikmual Waterfall" />
            <Description>Aikmual Waterfall</Description>
          </Item>
          <Item>
            <img src={LakeBaturTempleImg} alt="Temple at Lake Batur"/>
            <Description>Temple at Lake Batur</Description>
          </Item>
          <Item>
            <img src={PadarIslandImg} alt="Padar Island"/>
            <Description>Padar Island</Description>
          </Item>
          <Item>
            <img src={OneEightyImg} alt="One Eighty Resort"/>
            <Description>One Eighty Resort</Description>
          </Item>   
          <Item>
            <img src={KlingkingBeachImg} alt="Klingking Beach"/>
            <Description>Klingking Beach</Description>
          </Item>                
        </Carousel>
      </ExploreSectionWrapper>
    </ExploreSectionContainer>
  );
}
