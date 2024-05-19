# building web application:
To build the app and run the development server, simply run the following command in your terminal:

npx parcel index.html

Also, make sure to add type="module" to the script tag of your index.html

<script type="module" src="./src/index.ts"></script>

# small update for json server and parcel start script
In the upcoming lecture, we will be installing our JSON server globally. It would actually be a better idea to install this locally to our web project:

npm install json-server@0

Note - We are installing the latest version less than 1.0 as all 1.0+ versions are currently very broken.

Additionally, we need to make one small change to our scripts in the package.json file. Now that we are using npx to run Parcel, our command should instead be the following:

"start:parcel": "npx parcel index.html"

# Attributes.ts fix
In the upcoming lecture will be creating our Attribute.ts file. You will end up seeing an error here, with this.data underlined in red:

  set(update: T): void {
    Object.assign(this.data, update);
  }
In src/models/Attributes.ts, we need to change:

export class Attributes<T> {

to

export class Attributes<T extends object> {

# structure / architecture
# class User
- private data: UserProps - Object to store information about a particular user (name, age, etc)
- get(propName: string): (string | name) - Get a single piece of info about this user (name, age, etc)
- set(update: UserProps): void - Change info about this user (name user, etc)
- on(eventName: string, callback: () => {}) - Registers an event handler with this object, so other parts of the app know when something changes
- trigger(eventName: string): void - Triggers an event to tell other parts of the app that something has changed
- fetch(): Promise - Fetches some data from the server about a particular user
- save(): Promise - Saves some data about this user to the server