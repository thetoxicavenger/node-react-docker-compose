create database the_visual_text;

create table users(
    id bigserial primary key, 
    first_name varchar(255), 
    last_name varchar(255), 
    email text unique not null, 
    pass varchar(16)
);

insert into users(first_name, last_name, email)
values ('Mitch', 'Cravens', 'mcravens12@gmail.com');

create table posts(
    id bigserial primary key, 
    author_id serial, 
    title text, 
    blurb text, 
    created_at timestamptz, 
    updated_at timestamptz,
    img_url text, 
    body text
);
