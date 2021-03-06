/* eslint no-unused-vars: 0 */
const HomePage = "HomePage";
const CoffeePage = "CoffeePage";
const BeerPage = "BeerPage";
const BeerDetailsPage = "BeerDetailsPage";
const NotFoundPage = "NotFoundPage";

// Tab defaults to page id. Indicate exceptions here.
const tabMap = {
  [BeerDetailsPage]: BeerPage
};

const compose = (...funcs) => x =>
  funcs.reduceRight((value, func) => func(value), x);
