import Grid2 from "@mui/material/Unstable_Grid2";
import { SubscribeForm } from "../src/SubscribeForm/SubscribeForm";
import { submitTimeString } from "../src/SubscribeForm/submitTimeString";
import { RetrieveForm } from "../src/RetrieveForm/RetrieveForm";
import { retrieveTimeString } from "../src/RetrieveForm/retrieveTimeString";

const homePage = (): any => {
  return (
    <Grid2 container>
      <Grid2 xs={12}>Hello world!</Grid2>
      <Grid2 xs={12}>
        <RetrieveForm retrieveTimeString={retrieveTimeString} />
      </Grid2>
      <Grid2 xs={"auto"}>
        <SubscribeForm submitTimeString={submitTimeString} />
      </Grid2>
    </Grid2>
  );
};

export default homePage;
