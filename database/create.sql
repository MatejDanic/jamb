--
-- Drop current database
--

DROP DATABASE "jambDB";


--
-- Create database
--

CREATE DATABASE "jambDB" WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'English_United States.1252' LC_CTYPE = 'English_United States.1252';


--
-- Set owner to postgres
--

ALTER DATABASE "jambDB" OWNER TO postgres;
CREATE SCHEMA public;
ALTER SCHEMA public OWNER TO postgres;
COMMENT ON SCHEMA public IS 'standard public schema';


--
-- Create table auth_role
--

CREATE TABLE public.auth_role (
    id integer NOT NULL,
    description character varying(255),
    label character varying(255)
);

ALTER TABLE public.auth_role OWNER TO postgres;

CREATE SEQUENCE public.auth_role_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

ALTER TABLE public.auth_role_id_seq OWNER TO postgres;

ALTER SEQUENCE public.auth_role_id_seq OWNED BY public.auth_role.id;


--
-- Create table auth_user
--

CREATE TABLE public.auth_user (
    id integer NOT NULL,
    password character varying(255) NOT NULL,
    username character varying(15) NOT NULL
);

ALTER TABLE public.auth_user OWNER TO postgres;

CREATE SEQUENCE public.auth_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

ALTER TABLE public.auth_user_id_seq OWNER TO postgres;

ALTER SEQUENCE public.auth_user_id_seq OWNED BY public.auth_user.id;


--
-- Create table auth_user_role
--

CREATE TABLE public.auth_user_role (
    user_id integer NOT NULL,
    role_id integer NOT NULL
);

ALTER TABLE public.auth_user_role OWNER TO postgres;


--
-- Create table box
--

CREATE TABLE public.box (
    box_type integer NOT NULL,
    available boolean,
    filled boolean,
    value integer,
    column_type integer NOT NULL,
    form_id integer NOT NULL
);

ALTER TABLE public.box OWNER TO postgres;


--
-- Create table column
--

CREATE TABLE public."column" (
    column_type integer NOT NULL,
    form_id integer NOT NULL
);

ALTER TABLE public."column" OWNER TO postgres;


--
-- Create table dice
--

CREATE TABLE public.dice (
    ordinal_number integer NOT NULL,
    value integer,
    form_id integer NOT NULL
);

ALTER TABLE public.dice OWNER TO postgres;


--
-- Create table form
--

CREATE TABLE public.form (
    id integer NOT NULL,
    announcement integer,
    roll_count integer NOT NULL,
    user_id integer NOT NULL
);

ALTER TABLE public.form OWNER TO postgres;

CREATE SEQUENCE public.form_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.form_id_seq OWNER TO postgres;

ALTER SEQUENCE public.form_id_seq OWNED BY public.form.id;


--
-- Create table score
--

CREATE TABLE public.score (
    id integer NOT NULL,
    date timestamp without time zone NOT NULL,
    value integer NOT NULL,
    user_id integer NOT NULL
);

ALTER TABLE public.score OWNER TO postgres;

CREATE SEQUENCE public.score_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

ALTER TABLE public.score_id_seq OWNER TO postgres;

ALTER SEQUENCE public.score_id_seq OWNED BY public.score.id;

ALTER TABLE ONLY public.auth_role ALTER COLUMN id SET DEFAULT nextval('public.auth_role_id_seq'::regclass);

ALTER TABLE ONLY public.auth_user ALTER COLUMN id SET DEFAULT nextval('public.auth_user_id_seq'::regclass);

ALTER TABLE ONLY public.form ALTER COLUMN id SET DEFAULT nextval('public.form_id_seq'::regclass);

ALTER TABLE ONLY public.score ALTER COLUMN id SET DEFAULT nextval('public.score_id_seq'::regclass);

SELECT pg_catalog.setval('public.auth_role_id_seq', 1, false);

SELECT pg_catalog.setval('public.auth_user_id_seq', 12, true);

SELECT pg_catalog.setval('public.form_id_seq', 1389, true);

SELECT pg_catalog.setval('public.score_id_seq', 466, true);

ALTER TABLE ONLY public.auth_role
    ADD CONSTRAINT auth_role_pkey PRIMARY KEY (id);

ALTER TABLE ONLY public.auth_user
    ADD CONSTRAINT auth_user_pkey PRIMARY KEY (id);

ALTER TABLE ONLY public.auth_user_role
    ADD CONSTRAINT auth_user_role_pkey PRIMARY KEY (user_id, role_id);

ALTER TABLE ONLY public.box
    ADD CONSTRAINT box_pkey PRIMARY KEY (box_type, column_type, form_id);

ALTER TABLE ONLY public."column"
    ADD CONSTRAINT column_pkey PRIMARY KEY (column_type, form_id);
	
ALTER TABLE ONLY public.dice
    ADD CONSTRAINT dice_pkey PRIMARY KEY (form_id, ordinal_number);

ALTER TABLE ONLY public.form
    ADD CONSTRAINT form_pkey PRIMARY KEY (id);

ALTER TABLE ONLY public.score
    ADD CONSTRAINT score_pkey PRIMARY KEY (id);

ALTER TABLE ONLY public.auth_user
    ADD CONSTRAINT uk_t1iph3dfc25ukwcl9xemtnojn UNIQUE (username);

ALTER TABLE ONLY public.auth_user_role
    ADD CONSTRAINT fk3eldmba9luu9l0apl0791x8vd FOREIGN KEY (role_id) REFERENCES public.auth_role(id);

ALTER TABLE ONLY public.form
    ADD CONSTRAINT fk3s9oibuul2i2n2cj5j4a7a0wv FOREIGN KEY (user_id) REFERENCES public.auth_user(id);

ALTER TABLE ONLY public."column"
    ADD CONSTRAINT fk4tm0coo1ytodhkl7g71xg4c01 FOREIGN KEY (form_id) REFERENCES public.form(id);

ALTER TABLE ONLY public.auth_user_role
    ADD CONSTRAINT fkebutsbqm58ehnlffb299ng0ap FOREIGN KEY (user_id) REFERENCES public.auth_user(id);

ALTER TABLE ONLY public.box
    ADD CONSTRAINT fketqc11wr8yw4b14lyvjpk69u FOREIGN KEY (column_type, form_id) REFERENCES public."column"(column_type, form_id);

ALTER TABLE ONLY public.dice
    ADD CONSTRAINT fkkil3cliiocp5msjhyfriid052 FOREIGN KEY (form_id) REFERENCES public.form(id);

ALTER TABLE ONLY public.score
    ADD CONSTRAINT fklc33gyad0wxre2rbl4vbr3uem FOREIGN KEY (user_id) REFERENCES public.auth_user(id);