import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/react";
import React from "react";

const CompletedTasks = (state: string) => {
  return (
    <Alert
      status="success"
      variant="subtle"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      height="200px"
    >
      <AlertIcon boxSize="40px" mr={0} />
      <AlertTitle mt={4} mb={1} fontSize="lg">
        Felicidades!
      </AlertTitle>
      <AlertDescription maxWidth="sm">
        No Tienes ninguna tarea pendiente en {state}
      </AlertDescription>
    </Alert>
  );
};

export default CompletedTasks;
