import React, { useState } from "react";
import { Feature } from "flagged";
import { Checkbox, Container, FormControlLabel } from "@material-ui/core";

import { NewFeature } from "../components/NewFeature";
import { ThisFeature } from "../components/ThisFeature";
import { ThatFeature } from "../components/ThatFeature";

interface HomeProps {
  features: { [key: string]: boolean };
  setFeatures: React.Dispatch<
    React.SetStateAction<{
      [key: string]: boolean;
    }>
  >;
}

export const Home: React.FC<HomeProps> = ({ features, setFeatures }) => {
  return (
    <>
      <main>
        {/* NOTE: CASE show/hide a feature */}
        <Feature name="newFeature">
          <NewFeature />
        </Feature>

        {/* NOTE: CASE show feature A or feature B(fallback) */}
        <Feature name="thisFeature">
          {(enabled: boolean) => (enabled ? <ThisFeature /> : <ThatFeature />)}
        </Feature>
      </main>

      <Container maxWidth="xs">
        {Object.keys(features).map((key, i) => (
          <FormControlLabel
            key={i}
            control={
              <Checkbox
                checked={features[key]}
                onChange={(e) =>
                  setFeatures((prev) => ({ ...prev, [key]: e.target.checked }))
                }
              />
            }
            label={key}
          />
        ))}
      </Container>
    </>
  );
};
