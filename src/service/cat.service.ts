import { keys } from "../interfaces/catBreed";

export function setQueryFields(inputFields: string) {
  let outputFields = [
    "id",
    "name",
    "child_friendly",
    "dog_friendly",
    "stranger_friendly",
  ];
  if (inputFields) {
    const cleaned = (outputFields = inputFields
      .split(",")
      .filter((field) => keys.includes(field)));
  }
  return outputFields;
}
