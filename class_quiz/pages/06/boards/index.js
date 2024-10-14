import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import Register from "./RegisterProduct.container";

export default function RegisterProduct() {
  return (
    <>
      <Register />
    </>
  );
}
