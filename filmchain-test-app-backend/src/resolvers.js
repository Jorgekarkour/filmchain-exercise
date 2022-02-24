const { prisma } = require("./database.js");

const resolvers = {
  Query: {
    allMovies: () => {
      return prisma.movie.findMany();
    },
    movie: (parent, args) => {
      return prisma.movie.findFirst({
        where: { id: Number(args.id) },
      });
    },
    allShareholders: () => {
      return prisma.shareholder.findMany();
    },
    shareholder: (parent, args) => {
      return prisma.shareholder.findFirst({
        where: { id: Number(args.id) },
      });
    },
    allShareholderTransfer: (parent, args) => {
      return prisma.shareholderTransfer.findMany({
        where: { shareholderId: args.shareholderId },
      });
    },
  },

  Mutation: {
    registerShareholder: (parent, args) => {
      return prisma.shareholder.create({
        data: {
          firstname: args.firstname,
          lastname: args.lastname,
          address: args.address,
          iban: args.iban,
          balance: 0,
          movieId: args.movieId,
        },
      });
    },
    registerMovie: async (parent, args) => {
      return prisma.movie.create({
        data: {
          title: args.title,
        },
      });
    },
    registerMovieTransfer: async (parent, args) => {
      try {
        const shareholders = await prisma.shareholder.findMany({
          where: { movieId: Number(args.movieId) },
        });
        const amountPerShareholder = args.amount / shareholders.length;

        for (const shareholder of shareholders) {
          await prisma.shareholderTransfer.create({
            data: {
              shareholderId: shareholder.id,
              amount: Number(amountPerShareholder),
            },
          });

          await prisma.shareholder.update({
            where: { id: shareholder.id },
            data: { balance: shareholder.balance + amountPerShareholder },
          });
        }

        return prisma.movieTransfer.create({
          data: {
            movieId: args.movieId,
            amount: args.amount,
            description: args.description,
          },
        });
      } catch (e) {
        console.log(e);
        return e;
      }
    },
  },
};

module.exports = { resolvers };
