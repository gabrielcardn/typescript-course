import { User } from "./models/User";

const user = new User({ name: "name record", age: 0 });

console.log(user.get("name"));

user.on("change", () => {
  console.log("User was changed");
});

// user.trigger("change");

user.set({ name: "New name" });
