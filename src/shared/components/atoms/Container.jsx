import React, { useMemo } from "react";
import SectionTitle from "./SectionTitle";

const Container = ({
  children,
  rowName = "",
  sectionName,
  containerName = "",
  className = "",
  sectionTitleName = "",
  title,
  subtitle,
}) => {
  const showSectionTitle = useMemo(() => {
    return title && subtitle ? (
      <SectionTitle
        title={title}
        subtitle={subtitle}
        sectionTitleName={sectionTitleName}
      />
    ) : null;
  }, [title, subtitle, sectionTitleName]);

  const content = useMemo(() => {
    return (
      <div className={`container ${containerName}`}>
        <div className={`row ${rowName}`}>{children}</div>
      </div>
    );
  }, [children, containerName, rowName]);

  return (
    <section className={`${sectionName}-container section ${className}`}>
      {showSectionTitle}
      {content}
    </section>
  );
};

export default React.memo(Container);
