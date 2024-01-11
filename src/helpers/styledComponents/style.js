const styles = {
  heading2:
    "font-poppins font-semibold md:text-[24px] text-[17px] text-grey md:leading-[36.8px] leading-[36px] ",
  paragraph: "font-poppins font-normal text-black text-[18px] leading-[30.8px]",

  flexCenter: "flex justify-center items-center",

  paddingX: "px-10",

  marginX: "",
  marginY: "md:my-10 my-10",
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingX} ${styles.marginY} md:mr-10 mr-0  relative`,
  sectionReverse: `flex md:flex-row-reverse flex-col ${styles.paddingX} ${styles.marginY} md:mr-10 mr-0  relative`,
};

export const animation = {
  rightAnimation: `md:animate-fade-right animate-fade-down animate-duration-1000 animate-once`,
  leftAnimation: `md:animate-fade-left animate-fade-up md:animate-duration-1000 animate-once`,
};

export const phonePosition = {
  column: `md:mt-0 mt-10`,
};

export default styles;
