# Aprofundamento SQL

## Atividade TERÇA FEIRA

### EXERCÍCIO 01

a) ALTER TABLE Actor DROP COLUMN salary; => => DROP COLUMN é usado para excluir uma coluna de uma tabela, nesse caso a coluna salary.

b) ALTER TABLE Actor CHANGE gender sex VARCHAR(6); => => Troca o nome **gender** para **sex**

c) ALTER TABLE Actor CHANGE gender gender VARCHAR(255); => => Troca o **VARCHAR(6)** para **VARCHAR(255)**

d) ALTER TABLE Actor CHANGE gender gender VARCHAR(100); => => Trocou o **VARCHAR(6)** para **VARCHAR(100)**

### EXERCÍCIO 02

a) UPDATE Actor SET name = "Kate Beckinsale", birth_date = "1973-07-26" WHERE id = "003";

b) UPDATE Actor SET name = "JULIANA PÃES" WHERE id = "006";

C) SET name = "Scarlett Johansson", birth_date = "1984-11-22", salary = 432100, gender = "female" WHERE id = "005";

d) SET name = "Scarlett Johansson", birth_date = "1984-11-22", salary = 432100, gender = "female" WHERE id = "009"; não retornou mudanças na tabela nem erro.

### EXERCÍCIO 03

a) DELETE FROM Actor WHERE name = "Fernanda Montenegro";
 
b) DELETE FROM Actor WHERE gender = "male" AND salary > 1000000

### EXERCÍCIO 04

a) SELECT MAX(salary) FROM Actor;

b) SELECT MIN(salary) FROM Actor;

c) SELECT COUNT(*) FROM Actor WHERE gender = "female";

d) SELECT SUM(salary) FROM Actor;

### EXERCÍCIO 05

a)





