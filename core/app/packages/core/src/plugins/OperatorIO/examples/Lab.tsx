import * as fos from "@tensorgrid/state";
import { Typography } from "@mui/material";
import { useRecoilValue } from "recoil";

export default function Lab() {
  const filters = useRecoilValue(fos.filters);

  console.log(">>>", filters);

  return <Typography>Lab</Typography>;
}
