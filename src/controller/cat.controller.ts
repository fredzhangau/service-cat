import { NextFunction, Request, Response } from "express";
import _ from "lodash";
import { getCatBreed, getHighest } from "../utils";
import { setQueryFields } from "../service/cat.service";
import { ICatBreed } from "../interfaces/catBreed";
import { parseNum } from "../utils/parseNum.utils";

export async function getCatBreedHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const limit = req.query.limit as string;
  const includeSame = req.query.includeSame as string;
  const inputFields = req.query.fields as string;
  const childWeight = req.query.childWeight as string;
  const strangerWeight = req.query.strangerWeight as string;
  const dogWeight = req.query.dogWeight as string;
  const outputFields = setQueryFields(inputFields);

  try {
    const apiResponse = await getCatBreed();
    if (apiResponse.status !== 200)
      throw Error(
        "An error occurred when calling the CAT API. Please try again later..."
      );
    else {
      // Set default value
      let limitReq: number = 5;
      let cw: number = 1;
      let sw: number = 1;
      let dw: number = 1;
      if (limit) limitReq = parseNum("limit", limit);
      if (childWeight) cw = parseNum("childWeight", childWeight);
      if (strangerWeight) sw = parseNum("strangerWeight", strangerWeight);
      if (dogWeight) dw = parseNum("dogWeight", dogWeight);

      const topCats: ICatBreed[] = getHighest(
        apiResponse.data,
        limitReq,
        includeSame === "true" ? true : false,
        cw,
        sw,
        dw
      );
      const returnCats: ICatBreed[] = [];
      topCats.map((cat) => {
        const result: ICatBreed = _.pick(cat, outputFields);
        returnCats.push(result);
      });
      res.send(returnCats);
    }
  } catch (err) {
    next(err.message);
  }
}
