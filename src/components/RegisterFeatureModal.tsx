import React, { useCallback, useState } from "react";
import {
  Modal,
  Paper,
  Typography,
  TextField,
  Grid,
  ButtonGroup,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { IFeature } from "../pages/Home";

interface RegisterFeatureModalProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  addToDataGrid: (feature: IFeature) => void;
}

const useStyles = makeStyles((theme) => ({
  modal: {
    width: theme.breakpoints.width("md"),
    position: "absolute",
    margin: "auto",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    height: "80%",
  },
}));

const defaultFeature = { id: "" };

export const RegisterFeatureModal: React.FC<RegisterFeatureModalProps> = ({
  showModal,
  setShowModal,
  addToDataGrid,
}) => {
  const [data, setData] = useState<IFeature>(defaultFeature);
  const classes = useStyles();

  const close = useCallback(() => {
    setShowModal(false);
    setData(defaultFeature);
  }, [setShowModal]);

  const onFieldChange = useCallback((e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  const save = useCallback(() => {
    // TODO: send Add feature request to server
    console.log(data);
    addToDataGrid(data);

    setShowModal(false);
    setData(defaultFeature);
  }, [addToDataGrid, setShowModal, data]);

  return (
    <Modal open={showModal} onClose={() => setShowModal(false)}>
      <Paper className={classes.modal}>
        <Typography variant="h4">Register a feature</Typography>
        <Grid container>
          <Grid item xs={6}>
            <TextField
              label="id"
              name="id"
              placeholder="PS-000"
              fullWidth
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={onFieldChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="page"
              name="page"
              placeholder="/telemetry"
              fullWidth
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={onFieldChange}
            />
          </Grid>
        </Grid>

        <TextField
          label="title"
          name="title"
          placeholder="Feature name"
          fullWidth
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={onFieldChange}
        />
        <TextField
          label="description"
          name="description"
          placeholder="This feature does ABC..."
          fullWidth
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
          multiline
          rows={5}
          onChange={onFieldChange}
        />
        <ButtonGroup>
          <Button onClick={close}>Close</Button>
          <Button onClick={save}>Save</Button>
        </ButtonGroup>
      </Paper>
    </Modal>
  );
};
