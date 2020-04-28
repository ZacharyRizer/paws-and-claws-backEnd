# Review notes

These are just some feedback items that I see for the project. Thank you for
giving me the chance to review it.

## Overall

I'm _really_ digging the novel and well-styled presentation of the data in this
app. The card layout for browsing dogs, the right-hugging profile box for the
dogs and my profile, the box shadow on the header navigation bar, your use of
Avro, I am very much in like with this site. I would encourage you to add some
media queries in there to let it fit narrower screens just because it's so darn
good on wider ones.

Even though I tried to hack the site using my trusty API client (Insomnia, in
case you're interested, because I despise Postman :-), I couldn't. The backend
is locked down tighter than a tightly-locked down thing. I commend this group on
a strong focus on security.

Great use of working outside your known technologies and bringing in SASS as a
more maintainable alternative to just CSS. Kudos!

I like that you have two different roles in this application, that of adopter
and that of shelter manager. That's really an excellent use of authorization and
authentication. Color me pleased.

I am impressed by the overall polish of this Web application. Again, really well
done.

I did have some trouble editing my "perfect adoption" profile. It didn't seem to
show the saved values in the form when I opened it back up.

I am going to admit that this review is pretty short because there's not much I
can find to suggest to make it better. Sorry.

## Source files

Here is some stuff about the source files.

### README.md

There is no README.md. :cry: After the team adds more to the one in the other
repository, it'd be keen to put it here, too.

### package.json

I'm a fan of different start scripts, so this appealed to me.

### Model files

These all look pretty good.

In **pet.js**, I see some "magic numbers". I refer to these lines:

```js
age: DataTypes.INTEGER, // 1 = baby (0 - 1 y/o), 2 = young (1 - 4 y/o), 3 = adult (4 - 8 y/o), 4 = mature (8+ y/o)
sex: DataTypes.INTEGER, // 1 = male, 2 = female
size: DataTypes.INTEGER, // 1 = smallest, 5 = largest
```

These ache to be their own entities with their own seed data with their own
endpoints for GETting that data. It would greatly improve the long-term
viability and maintainability of the project.

### The route files

Overall, nice.

When you have code like this

```js
const {
  breedId,
  petName,
  age,
  sex,
  size,
  description,
  photo,
  isOkayPets,
  isOkayKids
} = req.body;
const pet = await Pet.create({
  breedId,
  petName,
  age,
  sex,
  size,
  description,
  photo,
  isAdopted: false,
  isOkayPets,
  isOkayKids,
  shelterId: req.user.id
});
```

you may want to consider what you're doing. You're getting some attributes out
of the body and, then, putting them right back into an object for `Pet.create`.
An alternative (and far less verbose) way to do that would be like this

```js
const pet = await Pet.create({
  ...req.body,
  shelterId: req.uer.id,
  isAdopted: false,
});
```

Behold, the power of the spread operator. That'll save some logic and lines for
you in more than one place.

Same sort of thing, here, in **preferredPets.js**.

```js
await pref.update({
  breedId: req.body.breedId,
  age: req.body.age,
  sex: req.body.sex,
  size: req.body.size,
  isOkayPets: req.body.isOkayPets,
  isOkayKids: req.body.isOkayKids,
});
```

could just be

```js
await pref.update(req.body);
```
