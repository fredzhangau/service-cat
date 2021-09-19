import _ from "lodash";
import { ICatBreed } from "../interfaces/catBreed";

export const getHighest = (
  cats: ICatBreed[],
  limit: number,
  includeSame: boolean,
  childWeight: number,
  strangerWeight: number,
  dogWeight: number
) => {
  cats.map((cat) => {
    const friendliness =
      cat.child_friendly * childWeight +
      cat.dog_friendly * dogWeight +
      cat.stranger_friendly * strangerWeight;
    cat.friendliness = friendliness;
  });

  let sortedList: ICatBreed[] = _.orderBy(
    cats,
    ["friendliness", "id"],
    ["desc", "asc"]
  );

  const requiredList: ICatBreed[] = _.slice(sortedList, 0, limit);
  if (includeSame) {
    for (let i = limit; i < sortedList.length; i++) {
      if (sortedList[i].friendliness === sortedList[limit].friendliness)
        requiredList.push(sortedList[i]);
      else i = sortedList.length;
    }
  }

  return requiredList;
};
