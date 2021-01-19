
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
INSERT INTO "purpose" ("purpose")
VALUES 
('Serum'),
('Moisturizer'),
('Sunscreen'),
('Cleanser'),
('Exfoliator'),
('Spot Treatment'),
('Oil');

INSERT INTO user_profile (user_id, purpose_id, frequency, review, in_use, description, product_name)
VALUES(
1, 3, 'twice a day', 'great sunscreen little white cast left to skin no irritation', true, 'spf 80 waterproof sunscreen', 'Neutrogena'
)

SELECT * FROM user_profile WHERE in_use = true;

DELETE from user_profile WHERE user_id = 1 AND id = 1;

