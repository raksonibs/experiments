create database books;

use books;

CREATE  TABLE CATEGORY (
ID  INT NOT NULL  AUTO_INCREMENT ,
CATEGORY_DESCRIPTION  VARCHAR(20)  NOT NULL ,
PRIMARY KEY (ID)
);

CREATE  TABLE BOOK (
ID  INT NOT  NULL AUTO_INCREMENT,
CATEGORY_ID  INT  NOT  NULL ,
BOOK_TITLE  VARCHAR(60) NOT NULL,
PUBLISHER  VARCHAR(60) NOT NULL ,
PRIMARY KEY (ID) ,
CONSTRAINT  FK_BOOK_1  FOREIGN KEY (CATEGORY_ID) REFERENCES CATEGORY(ID)
);

describe author;

insert into category (category_description) values ('Clojure');
insert into category (category_description) values ('Groovy');
insert into category (category_description) values ('Java');
insert into category (category_description) values ('Scala');

  select * from category;

  insert into Book (CATEGORY_ID, BOOK_TITLE, PUBLISHER) values (1, 'Practical Clojure', 'Apress');
insert into Book (CATEGORY_ID, BOOK_TITLE, PUBLISHER) values (2, 'Beginning Groovy, Grails and
Griffon', 'Apress');
insert into Book (CATEGORY_ID, BOOK_TITLE, PUBLISHER) values (2, 'Definitive Guide to Grails 2',
'Apress');
insert into Book (CATEGORY_ID, BOOK_TITLE, PUBLISHER) values (2, 'Groovy and Grails Recipes',
'Apress');
insert into Book (CATEGORY_ID, BOOK_TITLE, PUBLISHER) values (3, 'Modern Java Web Development',
'Apress');
insert into Book (CATEGORY_ID, BOOK_TITLE, PUBLISHER) values (3, 'Java 7 Recipes', 'Apress');
insert into Book (CATEGORY_ID, BOOK_TITLE, PUBLISHER) values (3, 'Java EE 7 Recipes', 'Apress');
insert into Book (CATEGORY_ID, BOOK_TITLE, PUBLISHER) values (3, 'Beginning Java 7 ', 'Apress');
insert into Book (CATEGORY_ID, BOOK_TITLE, PUBLISHER) values (3, 'Pro Java 7 NIO.2', 'Apress');
insert into Book (CATEGORY_ID, BOOK_TITLE, PUBLISHER) values (3, 'Java 7 for Absolute Beginners',
'Apress');
insert into Book (CATEGORY_ID, BOOK_TITLE, PUBLISHER) values (3, 'Oracle Certified Java Enterprise
Architect Java EE7', 'Apress');
insert into Book (CATEGORY_ID, BOOK_TITLE, PUBLISHER) values (4, 'Beginning Scala', 'Apress');


select * from book;

insert into Author (BOOK_ID, FIRST_NAME, LAST_NAME) values (1, 'Luke', 'VanderHart');
insert into Author (BOOK_ID, FIRST_NAME, LAST_NAME) values (2, 'Vishal', 'Layka');
insert into Author (BOOK_ID, FIRST_NAME, LAST_NAME) values (3, 'Jeff', 'Brown');
insert into Author (BOOK_ID, FIRST_NAME, LAST_NAME) values (4, 'Bashar', 'Jawad');
insert into Author (BOOK_ID, FIRST_NAME, LAST_NAME) values (5, 'Vishal', 'Layka');
insert into Author (BOOK_ID, FIRST_NAME, LAST_NAME) values (6, 'Josh',  'Juneau');
insert into Author (BOOK_ID, FIRST_NAME, LAST_NAME) values (7, 'Josh', 'Juneau');
insert into Author (BOOK_ID, FIRST_NAME, LAST_NAME) values (8, 'Jeff', 'Friesen');
insert into Author (BOOK_ID, FIRST_NAME, LAST_NAME) values (9, 'Anghel', 'Leonard');
insert into Author (BOOK_ID, FIRST_NAME, LAST_NAME) values (10, 'Jay',  'Bryant');
insert into Author (BOOK_ID, FIRST_NAME, LAST_NAME) values (11, 'B V', 'Kumar');
insert into Author (BOOK_ID, FIRST_NAME, LAST_NAME) values (12, 'David', 'Pollak');

select * from author;