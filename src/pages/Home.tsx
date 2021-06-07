import React, { useState } from "react";
import { Feature } from "flagged";
import { Container, Typography, ButtonGroup, Button } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";

import { NewFeature } from "../components/NewFeature";
import { ThisFeature } from "../components/ThisFeature";
import { ThatFeature } from "../components/ThatFeature";
import { RegisterFeatureModal } from "../components/RegisterFeatureModal";

export interface IFeature {
  id: string;
  page?: string;
  title?: string;
  description?: string;
}
interface HomeProps {
  features: string[];
  setFeatures: React.Dispatch<React.SetStateAction<string[]>>;
}

const columns = [
  { field: "id", headerName: "ID" },
  { field: "page", headerName: "Related page", width: 200 },
  { field: "title", headerName: "Title", width: 200 },
  { field: "description", headerName: "Description", width: 200 },
];

export const Home: React.FC<HomeProps> = ({ setFeatures }) => {
  const [showModal, setShowModal] = useState(false);
  const [rows, setRows] = useState<IFeature[]>([
    {
      id: "PS-12389",
      page: "/telemetry",
      title: "right click disabled",
      description: "hi hello",
    },
    {
      id: "PS-23439",
      page: "/telemetry",
      title: "right click disabled",
      description: "hi hello",
    },
  ]);

  return (
    <>
      <main>
        <Container maxWidth="md">
          {/* NOTE: CASE show/hide a feature */}
          <Feature name="PS-12389">
            <NewFeature />
          </Feature>

          {/* NOTE: CASE show feature A or feature B(fallback) */}
          <Feature name="PS-23439">
            {(enabled: boolean) =>
              enabled ? <ThisFeature /> : <ThatFeature />
            }
          </Feature>
        </Container>
      </main>

      <Container maxWidth="md">
        <Typography variant="h4">Features</Typography>
        <div style={{ height: 400 }}>
          <DataGrid
            columns={columns}
            rows={rows}
            checkboxSelection
            onSelectionModelChange={(newSelection) => {
              setFeatures(newSelection.selectionModel as string[]);
            }}
          />
        </div>
        <ButtonGroup>
          <Button onClick={() => setShowModal(true)}>Add</Button>
          <Button>Reset</Button>
          <Button>Save</Button>
        </ButtonGroup>
      </Container>

      <RegisterFeatureModal
        showModal={showModal}
        setShowModal={setShowModal}
        addToDataGrid={(row) => setRows((prev) => [...prev, row])}
      />
    </>
  );
};
