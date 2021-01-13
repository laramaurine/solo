
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);



CREATE TABLE "purpose" (
	"id" SERIAL PRIMARY KEY,
	"purpose" VARCHAR (80)
);

CREATE TABLE "user_profile" (
	id SERIAL PRIMARY KEY,
	"user_id" INT references "user",
	"purpose_id" INT references purpose,
	"frequency" VARCHAR (80),
	"review" VARCHAR (500),
	"in_use" BOOLEAN,
	"img_url" VARCHAR (500),
	"description" TEXT NOT NULL,
	"product_name" VARCHAR (80) 
	
);
