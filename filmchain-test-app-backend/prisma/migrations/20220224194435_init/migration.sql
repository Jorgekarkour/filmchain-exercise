-- CreateTable
CREATE TABLE "Movie" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "Movie_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Shareholder" (
    "id" SERIAL NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "iban" TEXT NOT NULL,
    "balance" INTEGER NOT NULL DEFAULT 0,
    "movieId" INTEGER NOT NULL,

    CONSTRAINT "Shareholder_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ShareholderTransfer" (
    "id" SERIAL NOT NULL,
    "shareholderId" INTEGER NOT NULL,
    "amount" INTEGER NOT NULL,

    CONSTRAINT "ShareholderTransfer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MovieTransfer" (
    "id" SERIAL NOT NULL,
    "movieId" INTEGER NOT NULL,
    "amount" INTEGER NOT NULL,
    "description" TEXT,

    CONSTRAINT "MovieTransfer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Movie_title_key" ON "Movie"("title");
