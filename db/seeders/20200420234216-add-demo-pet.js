"use strict";

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert("Pets", [
			{
				breedId: 21,
				shelterId: 1,
				petName: "Doge",
				age: 4,
				sex: 2,
				size: 3,
				description: "Much doge. Very wow.",
				photo:
					"https://vignette.wikia.nocookie.net/dogelore/images/9/97/Doge.jpg/revision/latest?cb=20190205113053",
				isAdopted: false,
				isOkayKids: true,
				isOkayPets: true,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				breedId: 2,
				shelterId: 1,
				petName: "Shana",
				age: 3,
				sex: 2,
				size: 4,
				description:
					"Shana came to us as a retired breeder dog from a farm and is a purebred German Shepherd. Shana is about 9 years old and she does need to lose some weight at 90 pounds. Shana is very good with people, children and other dogs. She had been loose as a farm dog and is used to be around all kinds of livestock and does very well with them. Shana is scheduled to be spayed and have a dental. Shana is doing very well with housebreaking in her foster home. Shana is up to date with vaccines, microchipped and heartworm negative. ",
				photo:
					"https://images.pexels.com/photos/2695827/pexels-photo-2695827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
				isAdopted: false,
				isOkayKids: true,
				isOkayPets: true,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				breedId: 1,
				shelterId: 1,
				petName: "Twain",
				age: 3,
				sex: 1,
				size: 4,
				description: "Much doge. Very wow.",
				photo:
					"https://images.pexels.com/photos/5549/yellow-dog-pet-labrador-5549.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
				isAdopted: false,
				isOkayKids: true,
				isOkayPets: true,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				breedId: 7,
				shelterId: 1,
				petName: "Swag",
				age: 2,
				sex: 1,
				size: 3,
				description: "Much doge. Very wow.",
				photo:
					"https://images.pexels.com/photos/1294062/pexels-photo-1294062.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
				isAdopted: false,
				isOkayKids: true,
				isOkayPets: true,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				breedId: 6,
				shelterId: 1,
				petName: "Cartoon",
				age: 1,
				sex: 2,
				size: 2,
				description: "Much doge. Very wow.",
				photo:
					"https://images.pexels.com/photos/1596579/pexels-photo-1596579.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
				isAdopted: false,
				isOkayKids: true,
				isOkayPets: true,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				breedId: 11,
				shelterId: 1,
				petName: "Goof",
				age: 4,
				sex: 2,
				size: 1,
				description: "Much doge. Very wow.",
				photo:
					"https://images.pexels.com/photos/1386615/pexels-photo-1386615.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
				isAdopted: false,
				isOkayKids: true,
				isOkayPets: true,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				breedId: 14,
				shelterId: 1,
				petName: "Burger",
				age: 2,
				sex: 1,
				size: 1,
				description: "Much doge. Very wow.",
				photo:
					"https://images.pexels.com/photos/3351190/pexels-photo-3351190.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
				isAdopted: false,
				isOkayKids: true,
				isOkayPets: true,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				breedId: 19,
				shelterId: 1,
				petName: "Martian",
				age: 2,
				sex: 1,
				size: 4,
				description: "Much doge. Very wow.",
				photo:
					"https://bowwowinsurance.com.au/wp-content/uploads/2018/10/great-dane-700x700.jpg",
				isAdopted: false,
				isOkayKids: true,
				isOkayPets: true,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				breedId: 22,
				shelterId: 1,
				petName: "Jenga",
				age: 2,
				sex: 2,
				size: 3,
				description: "Much doge. Very wow.",
				photo:
					"https://images.pexels.com/photos/1078089/pexels-photo-1078089.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
				isAdopted: false,
				isOkayKids: true,
				isOkayPets: true,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				breedId: 22,
				shelterId: 1,
				petName: "Bagel",
				age: 2,
				sex: 2,
				size: 3,
				description: "Much doge. Very wow.",
				photo:
					"https://d17fnq9dkz9hgj.cloudfront.net/uploads/2018/09/PF2015_009_Rue_FrontYard-768x512.jpg",
				isAdopted: false,
				isOkayKids: true,
				isOkayPets: true,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				breedId: 22,
				shelterId: 1,
				petName: "Arctic",
				age: 3,
				sex: 2,
				size: 3,
				description: "Much doge. Very wow.",
				photo:
					"https://images.pexels.com/photos/2795879/pexels-photo-2795879.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
				isAdopted: false,
				isOkayKids: true,
				isOkayPets: true,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				breedId: 22,
				shelterId: 1,
				petName: "Acorn",
				age: 1,
				sex: 2,
				size: 3,
				description: "Much doge. Very wow.",
				photo:
					"https://images.pexels.com/photos/4201722/pexels-photo-4201722.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
				isAdopted: false,
				isOkayKids: true,
				isOkayPets: true,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				breedId: 22,
				shelterId: 1,
				petName: "Boo",
				age: 2,
				sex: 1,
				size: 2,
				description: "Much doge. Very wow.",
				photo:
					"https://images.pexels.com/photos/3361716/pexels-photo-3361716.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
				isAdopted: false,
				isOkayKids: true,
				isOkayPets: true,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				breedId: 8,
				shelterId: 1,
				petName: "Fiji",
				age: 2,
				sex: 2,
				size: 3,
				description: "Much doge. Very wow.",
				photo:
					"https://images.pexels.com/photos/3299899/pexels-photo-3299899.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
				isAdopted: false,
				isOkayKids: true,
				isOkayPets: true,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				breedId: 10,
				shelterId: 1,
				petName: "Fuse",
				age: 1,
				sex: 2,
				size: 2,
				description: "Much doge. Very wow.",
				photo:
					"https://images.pexels.com/photos/2023384/pexels-photo-2023384.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
				isAdopted: false,
				isOkayKids: true,
				isOkayPets: true,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				breedId: 22,
				shelterId: 2,
				petName: "Babs",
				age: 3,
				sex: 2,
				size: 2,
				description: "Much doge. Very wow.",
				photo:
					"https://images.pexels.com/photos/3361722/pexels-photo-3361722.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
				isAdopted: false,
				isOkayKids: true,
				isOkayPets: true,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				breedId: 22,
				shelterId: 2,
				petName: "Gypsy",
				age: 3,
				sex: 2,
				size: 3,
				description: "Much doge. Very wow.",
				photo:
					"https://images.pexels.com/photos/1089394/pexels-photo-1089394.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
				isAdopted: false,
				isOkayKids: true,
				isOkayPets: true,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				breedId: 22,
				shelterId: 2,
				petName: "Chauncy",
				age: 1,
				sex: 1,
				size: 2,
				description: "Much doge. Very wow.",
				photo:
					"https://images.pexels.com/photos/239331/pexels-photo-239331.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
				isAdopted: false,
				isOkayKids: true,
				isOkayPets: true,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				breedId: 20,
				shelterId: 2,
				petName: "Quincy",
				age: 2,
				sex: 1,
				size: 4,
				description: "Much doge. Very wow.",
				photo:
					"https://img.dog-learn.com/dog-breeds/sheltie/shetland-sheepdog-i2-i3-sz6.jpg",
				isAdopted: false,
				isOkayKids: true,
				isOkayPets: true,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				breedId: 3,
				shelterId: 2,
				petName: "Stuart",
				age: 2,
				sex: 1,
				size: 2,
				description: "Much doge. Very wow.",
				photo:
					"https://images.pexels.com/photos/977281/pexels-photo-977281.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
				isAdopted: false,
				isOkayKids: true,
				isOkayPets: true,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				breedId: 22,
				shelterId: 2,
				petName: "Ion",
				age: 4,
				sex: 1,
				size: 4,
				description: "Much doge. Very wow.",
				photo:
					"https://images.pexels.com/photos/46505/swiss-shepherd-dog-dog-pet-portrait-46505.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
				isAdopted: false,
				isOkayKids: true,
				isOkayPets: true,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				breedId: 22,
				shelterId: 2,
				petName: "Magnet",
				age: 2,
				sex: 2,
				size: 1,
				description: "Much doge. Very wow.",
				photo:
					"https://images.pexels.com/photos/1390784/pexels-photo-1390784.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
				isAdopted: false,
				isOkayKids: true,
				isOkayPets: true,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				breedId: 13,
				shelterId: 2,
				petName: "Pumpkin",
				age: 3,
				sex: 2,
				size: 4,
				description: "Much doge. Very wow.",
				photo:
					"https://images.pexels.com/photos/1242419/pexels-photo-1242419.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
				isAdopted: false,
				isOkayKids: true,
				isOkayPets: true,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				breedId: 22,
				shelterId: 2,
				petName: "Crumb",
				age: 2,
				sex: 1,
				size: 3,
				description: "Much doge. Very wow.",
				photo:
					"https://images.pexels.com/photos/1078090/pexels-photo-1078090.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
				isAdopted: false,
				isOkayKids: true,
				isOkayPets: true,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				breedId: 22,
				shelterId: 2,
				petName: "Ozzy",
				age: 4,
				sex: 1,
				size: 3,
				description: "Much doge. Very wow.",
				photo:
					"https://images.pexels.com/photos/803766/pexels-photo-803766.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
				isAdopted: false,
				isOkayKids: true,
				isOkayPets: true,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				breedId: 22,
				shelterId: 2,
				petName: "Duncan",
				age: 4,
				sex: 1,
				size: 1,
				description: "Much doge. Very wow.",
				photo:
					"https://images.pexels.com/photos/1147812/pexels-photo-1147812.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
				isAdopted: false,
				isOkayKids: true,
				isOkayPets: true,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				breedId: 16,
				shelterId: 2,
				petName: "Clue",
				age: 4,
				sex: 1,
				size: 4,
				description: "Much doge. Very wow.",
				photo:
					"https://images.pexels.com/photos/2853422/pexels-photo-2853422.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
				isAdopted: false,
				isOkayKids: true,
				isOkayPets: true,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				breedId: 17,
				shelterId: 2,
				petName: "Ragu",
				age: 2,
				sex: 2,
				size: 1,
				description: "Much doge. Very wow.",
				photo:
					"https://images.pexels.com/photos/3309884/pexels-photo-3309884.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
				isAdopted: false,
				isOkayKids: true,
				isOkayPets: true,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				breedId: 5,
				shelterId: 2,
				petName: "Meeko",
				age: 3,
				sex: 1,
				size: 2,
				description: "Much doge. Very wow.",
				photo:
					"https://images.pexels.com/photos/1420405/pexels-photo-1420405.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
				isAdopted: false,
				isOkayKids: true,
				isOkayPets: true,
				createdAt: new Date(),
				updatedAt: new Date()
			}
		]);
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete("Pets", null, {});
	}
};