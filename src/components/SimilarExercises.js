import React from "react";
import { Box, Stack, Typography } from "@mui/material";

import HorizontalScrollbar from "./HorizontalScrollbar";
import Loader from "./Loader";

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  console.log(targetMuscleExercises);
  return (
    <Box
      sx={{
        marginTop: { lg: "100px", xs: "80px" },
        marginLeft: { lg: "40px", xs: "30px" },
      }}
    >
      <Typography variant="h3" mb="8px" ml="10px" mt="40px">
        Exercises that target the same muscle group
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative" }}>
        {targetMuscleExercises.length ? (
          <HorizontalScrollbar data={targetMuscleExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
      <Typography variant="h3" mb="8px" ml="10px" mt="40px">
        Exercises that target the same equipment
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative" }}>
        {equipmentExercises.length ? (
          <HorizontalScrollbar data={equipmentExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
