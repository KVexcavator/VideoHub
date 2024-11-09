import {
  Account,
  Avatars,
  Client,
  Databases,
  ID,
  Query,
  Storage,
} from "react-native-appwrite";

export const config = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.kvexcavator.test.react.native",
  projectId: "672eefe8000ba24b77bf",
  databaseId: "672ef9060013d5270545",
  userCollectionId: "672ef987000fcc9fc3cf",
  videoCollectionId: "672efa20003053af20ba",
  storageID: "672f03250032e4b5ead4",
};

// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(config.endpoint) // Your Appwrite Endpoint
  .setProject(config.projectId) // Your project ID
  .setPlatform(config.platform); // Your application ID or bundle ID.

const account = new Account(client);

export const createUser = () => {
  account.create(ID.unique(), "admin@admin.local", "12345678", "admin").then(
    function (response) {
      console.log(response);
    },
    function (error) {
      console.log(error);
    },
  );
};
