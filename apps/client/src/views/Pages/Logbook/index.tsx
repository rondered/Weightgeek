import React from "react";
import { Page } from "@/components/layout";

export const Logbook: React.FC<{}> = (props) => {
  return (
    <Page>
      <div className="flex flex-col md:(flex-row) p-10 bg-purple-600 relative">
        <div className="card p-5 flex flex-col">
            <div className="header">Add a log</div>
        </div>
      </div>
    </Page>
  );
};
