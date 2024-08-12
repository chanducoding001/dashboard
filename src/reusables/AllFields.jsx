import React from "react";
import DateField from "./DateField";
import ReUseButton from "./ReUseButton";

const AllFields = (props) => {
  const { componentType, ...rest } = props;
  switch (componentType) {
    case "date":
      return <DateField {...rest} />;
    case "normalBtn":
      return <ReUseButton {...rest} />;
    default:
      return null;
  }
};

export default AllFields;
