// import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient();
// async function main() {
//   const alice = await prisma.user.upsert({
//     create: {
//       email: "asdasd@asd.com",
//       username: "asdasd",
//       password: "asdasd",
//       role: "2",
//       Post: {
//         create: {
//           title: "Check out Prisma with Next.js",
//           published: true,
//           created_at: new Date(),
//           updated_at: new Date(),
//         },
//       },
//     },
//   });
//   const bob = await prisma.user.upsert({
//     update: {},
//     create: {
//       email: "bob@prisma.io",
//       username: "Bob",
//       role: "1",
//       Post: {
//         create: [
//           {
//             title: "Follow Prisma on Twitter",
//             // content: "https://twitter.com/prisma",
//             published: true,
//             created_at: new Date(),
//             updated_at: new Date(),
//           },
//           {
//             title: "Follow Nexus on Twitter",
//             // content: "https://twitter.com/nexusgql",
//             published: true,
//             created_at: new Date(),
//             updated_at: new Date(),
//           },
//         ],
//       },
//     },
//   });
//   console.log({ alice, bob });
// }
// main()
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });
