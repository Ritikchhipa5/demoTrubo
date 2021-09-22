import Prismic from "prismic-javascript";

export const apiEndpoint = "https://turboassignment.cdn.prismic.io/api/v2";

export const accessToken =
  "MC5ZT1FhRlJFQUFDa0E4Q196.OS4JE--_ve-_ve-_vTwSAWFjUe-_ve-_ve-_ve-_vVR177-977-977-9R--_vSgzMmvvv70d77-977-9"; // This is where you would add your access token for a Private repository

// -- Link resolution rules
// Manages the url links to internal Prismic documents
export const linkResolver = (doc) => {
  if (doc.type === "requin_blog") return `/blog/${doc.uid}`;
  return "/blog";
};

// Client method to query documents from the Prismic repo
export const Client = Prismic.client(apiEndpoint, { accessToken });
