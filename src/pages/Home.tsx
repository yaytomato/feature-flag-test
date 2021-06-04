import React from "react";
import { Feature } from "flagged";

import { NewFeature } from "../components/NewFeature";
import { ThisFeature } from "../components/ThisFeature";
import { ThatFeature } from "../components/ThatFeature";

interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {
  return (
    <>
      {/* NOTE: CASE show/hide a feature */}
      <Feature name="newFeature">
        <NewFeature />
      </Feature>

      {/* NOTE: CASE show feature A or feature B(fallback) */}
      <Feature name="thisFeature">
        {(enabled: boolean) => (enabled ? <ThisFeature /> : <ThatFeature />)}
      </Feature>
    </>
  );
};
