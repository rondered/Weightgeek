import React from "react";

export const useSidebar = () => {
  const [sidebar, setSidebar] = React.useState<boolean>(false);

  return {
    toggleSidebar: () => {
      setSidebar(!sidebar);
    },
    sidebar,
  };
};
