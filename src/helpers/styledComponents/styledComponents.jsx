import styles, { layout } from "./style";

export const StyledSection = ({ children }) => (
  <section className={`${layout.section}`}>{children}</section>
);

export const StyledReversedSection = ({ children }) => (
  <section className={`${layout.sectionReverse}`}>{children}</section>
);

export const StyledHeading = ({ children }) => (
  <h2 className={`${styles.heading2} w-[75%] `}>{children}</h2>
);

export const StyledDiv = ({ children, animation, position }) => (
  <div
    className={`${styles.flexCenter} ${animation} ${position} flex-1 relative`}
  >
    {children}
  </div>
);
