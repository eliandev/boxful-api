-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "collectAddress" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "phone" TEXT NOT NULL,
    "deliveryAddress" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "referencePoint" TEXT NOT NULL,
    "indications" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
