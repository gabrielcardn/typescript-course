# Execute index.html
need to execute with:
npx parcel index.html

# Fakes library (installation)
A community fork of Faker was made to save the project:

https://github.com/faker-js/faker

To use this library, you can install it by running:

npm install @faker-js/faker@7.6.0

You'll then need to update all of your imports:

import { faker } from "@faker-js/faker";

As of their v6 release, TS support is now native and does not require installing the @types declarations.

https://github.com/faker-js/faker#typescript-support

# Generating an API Key
To use google maps, use this pre-generated API key:
AIzaSyBNLrJhOMz6idD05pzfn5lhA-TAw-mAZCU

# Installing type for google maps
npm install @types/google.maps