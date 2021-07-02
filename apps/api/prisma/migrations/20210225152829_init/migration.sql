-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "goal" INTEGER,
    "goal_date" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WeightIn" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "weight" INTEGER,
    "date" TEXT NOT NULL,
    "calories" INTEGER,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User.email_unique" ON "User"("email");

-- CreateIndex
CREATE INDEX "User.id_email_index" ON "User"("id", "email");

-- CreateIndex
CREATE INDEX "WeightIn.id_index" ON "WeightIn"("id");

-- AddForeignKey
ALTER TABLE "WeightIn" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
