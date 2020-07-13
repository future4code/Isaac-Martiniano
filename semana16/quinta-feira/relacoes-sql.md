# RELAÇÕES EM SQL

### EXRCÍCIO 01
a)  Chave estrangeira (FOREIGN KEY) é o meio que faz tabelas se relacionarem.

b)
CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
)

INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
		"004",
    "Engraçado e atrapalhado",
    7.8,
		"003"
);

c) Error Code: 1452. Cannot add or update child row: a foreign key constrant fails, não cria o comentario por não existir um id;

d) ALTER TABLE Movie DROP COLUMN rating; deletado as notas

