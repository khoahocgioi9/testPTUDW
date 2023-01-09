create table oadb.field
(
    ID_FIELD  int          not null  auto_increment
        primary key,
    FIELDNAME varchar(500) null
);

create table oadb.category
(
    ID_CATE  int          not null auto_increment
        primary key,
    CATENAME varchar(100) null,
    ID_FIELD int          null,
    constraint category___fk
        foreign key (ID_FIELD) references oadb.field (ID_FIELD)
);

create table oadb.users
(
    ID_USER  int          not null  auto_increment
        primary key,
    USERNAME varchar(20)  null,
    EMAIL    varchar(50)  null,
    PASSWORD varchar(200) null,
    TYPE     int          null,
    FULLNAME varchar(50)  null,
    PROFILE  varchar(500) null
);

create table oadb.course
(
    ID_COURSE    int           not null auto_increment
        primary key,
    ID_FIELD	 int		null, 
    ID_CATE      int           null,
    ID_USER      int           null,
    COURSENAME   varchar(200)  null,
    LENGTHS      int           null,
    CREATEDATE   date          null,
    LASTUPDATE   date          null,
    PRICE        float         null,
    VIEWED       int           null,
    DESCRIPTIONS varchar(1500) null,
    DISCOUNT     float         null,
    SHORTDES     varchar(500)  null,
    RATENUM      int           null,
    STUNUM       int           null,
	FULLTEXT(COURSENAME),
    constraint FK_RELATIONSHIP_4
        foreign key (ID_CATE) references oadb.category (ID_CATE),
    constraint FK_RELATIONSHIP_7
        foreign key (ID_USER) references oadb.users (ID_USER),
	constraint FK_RELATIONSHIP_11
        foreign key (ID_FIELD) references oadb.field (ID_FIELD)
);

create table oadb.chapter
(
    ID_CHAPTER  int          not null auto_increment
        primary key,
    ID_COURSE  int          null,
    CHAPTERNAME varchar(50)  null,
    constraint FK_RELATIONSHIP_1
        foreign key (ID_COURSE) references oadb.course (ID_COURSE)
);

create table oadb.lesson
(
    ID_LESSON  int          not null auto_increment
        primary key,
    ID_CHAPTER  int          null,
    LESSONNAME varchar(50)  null,
	URL        varchar(200) null,
    REVIEW     tinyint(1)   not null,
    constraint FK_RELATIONSHIP_10
        foreign key (ID_CHAPTER) references oadb.course (ID_CHAPTER)
);

create table oadb.user_course
(
    ID_USER_COURSE int          not null auto_increment
        primary key,
    ID_COURSE      int          null,
    ID_USER        int          null,
    RATE           int          null,
    FEEDBACK       varchar(500) null,
    DONE           tinyint(1)   null,
    constraint FK_RELATIONSHIP_8
        foreign key (ID_USER) references oadb.users (ID_USER),
    constraint FK_RELATIONSHIP_9
        foreign key (ID_COURSE) references oadb.course (ID_COURSE)
);

create table oadb.wishlist
(
    ID_WISHLIST int not null auto_increment
        primary key,
    ID_USER     int null,
    ID_COURSE   int null,
    constraint FK_RELATIONSHIP_5
        foreign key (ID_USER) references oadb.users (ID_USER),
    constraint FK_RELATIONSHIP_6
        foreign key (ID_COURSE) references oadb.course (ID_COURSE)
);


