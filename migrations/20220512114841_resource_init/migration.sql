-- CreateTable
CREATE TABLE "Resource" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "reason" TEXT NOT NULL,
    "claimedBy" TEXT NOT NULL
);
