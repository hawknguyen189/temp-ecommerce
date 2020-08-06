import * as contentful from "contentful";

const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: "2iaa0iutda2i",
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: "Z7EiiFRb5EBNy4oJeSm8PGEqUTUpQhb6PHEoH2z32Ek",
});
// // This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token.
// client
//   .getEntry("5PeGS2SoZGSa4GuiQsigQu")
//   .then((entry) => console.log(entry))
//   .catch((err) => console.log(err));
export default client;
