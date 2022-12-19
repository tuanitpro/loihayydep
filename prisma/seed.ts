import { PrismaClient } from '@prisma/client';
import { quotes } from './data';
const prisma = new PrismaClient();

async function main() {
  console.log(`Start seeding ...`);

  await prisma.quote.deleteMany();
  await prisma.quote.createMany({
    data: quotes.map((item) => {
      return {
        author: item.author,
        content: item.content,
      };
    }),
  });

  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
