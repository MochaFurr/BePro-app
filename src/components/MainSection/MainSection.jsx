import { manson, audi } from "../../assets/carousel/index";
import {
  StyledSection,
  StyledReversedSection,
  StyledHeading,
  StyledDiv,
} from "../../helpers/styledComponents/styledComponents";
import { animation, phonePosition } from "../../helpers/styledComponents/style";

const MainSection = () => {
  return (
    <div>
      <StyledSection>
        <StyledDiv animation={animation.rightAnimation}>
          <img className="w-[75%] h-auto rounded-md " src={manson} alt="" />
        </StyledDiv>

        <StyledDiv
          animation={animation.leftAnimation}
          position={phonePosition.column}
        >
          <StyledHeading>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            egestas, purus nec cursus pellentesque, metus ligula condimentum
            elit, vitae viverra dui diam vulputate nisl. Nunc.
          </StyledHeading>
        </StyledDiv>
      </StyledSection>

      <StyledReversedSection>
        <StyledDiv animation={animation.rightAnimation}>
          <img className="w-[75%] h-auto rounded-md" src={audi} alt="" />
        </StyledDiv>
        <StyledDiv
          animation={animation.leftAnimation}
          position={phonePosition.column}
        >
          <StyledHeading>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            egestas, purus nec cursus pellentesque, metus ligula condimentum
            elit, vitae viverra dui diam vulputate nisl. Nunc.
          </StyledHeading>
        </StyledDiv>
      </StyledReversedSection>
    </div>
  );
};

export default MainSection;
