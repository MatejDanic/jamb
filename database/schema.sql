--
-- PostgreSQL database dump
--

-- Dumped from database version 12.3
-- Dumped by pg_dump version 12.3

-- Started on 2020-10-05 10:18:16

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 202 (class 1259 OID 30722)
-- Name: auth_role; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.auth_role (
    id integer NOT NULL,
    description character varying(255),
    label character varying(255)
);


ALTER TABLE public.auth_role OWNER TO postgres;

--
-- TOC entry 204 (class 1259 OID 30732)
-- Name: auth_user; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.auth_user (
    id integer NOT NULL,
    password character varying(255) NOT NULL,
    username character varying(15) NOT NULL
);


ALTER TABLE public.auth_user OWNER TO postgres;

--
-- TOC entry 203 (class 1259 OID 30730)
-- Name: auth_user_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.auth_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.auth_user_id_seq OWNER TO postgres;

--
-- TOC entry 2894 (class 0 OID 0)
-- Dependencies: 203
-- Name: auth_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.auth_user_id_seq OWNED BY public.auth_user.id;


--
-- TOC entry 205 (class 1259 OID 30738)
-- Name: auth_user_role; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.auth_user_role (
    user_id integer NOT NULL,
    role_id integer NOT NULL
);


ALTER TABLE public.auth_user_role OWNER TO postgres;

--
-- TOC entry 206 (class 1259 OID 30743)
-- Name: box_type; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.box_type (
    id integer NOT NULL,
    label character varying(255) NOT NULL
);


ALTER TABLE public.box_type OWNER TO postgres;

--
-- TOC entry 207 (class 1259 OID 30748)
-- Name: column_type; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.column_type (
    id integer NOT NULL,
    label character varying(255) NOT NULL
);


ALTER TABLE public.column_type OWNER TO postgres;

--
-- TOC entry 208 (class 1259 OID 30753)
-- Name: game_box; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.game_box (
    available boolean,
    filled boolean,
    value integer,
    column_type_id integer NOT NULL,
    form_id integer NOT NULL,
    box_type integer NOT NULL
);


ALTER TABLE public.game_box OWNER TO postgres;

--
-- TOC entry 209 (class 1259 OID 30758)
-- Name: game_column; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.game_column (
    column_type integer NOT NULL,
    form_id integer NOT NULL
);


ALTER TABLE public.game_column OWNER TO postgres;

--
-- TOC entry 210 (class 1259 OID 30763)
-- Name: game_dice; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.game_dice (
    ordinal_number integer NOT NULL,
    value integer,
    form_id integer NOT NULL
);


ALTER TABLE public.game_dice OWNER TO postgres;

--
-- TOC entry 212 (class 1259 OID 30770)
-- Name: game_form; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.game_form (
    id integer NOT NULL,
    roll_count integer NOT NULL,
    announcement integer,
    user_id integer NOT NULL
);


ALTER TABLE public.game_form OWNER TO postgres;

--
-- TOC entry 211 (class 1259 OID 30768)
-- Name: game_form_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.game_form_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.game_form_id_seq OWNER TO postgres;

--
-- TOC entry 2895 (class 0 OID 0)
-- Dependencies: 211
-- Name: game_form_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.game_form_id_seq OWNED BY public.game_form.id;


--
-- TOC entry 214 (class 1259 OID 30778)
-- Name: game_score; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.game_score (
    id integer NOT NULL,
    date timestamp without time zone NOT NULL,
    value integer NOT NULL,
    user_id integer NOT NULL
);


ALTER TABLE public.game_score OWNER TO postgres;

--
-- TOC entry 213 (class 1259 OID 30776)
-- Name: game_score_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.game_score_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.game_score_id_seq OWNER TO postgres;

--
-- TOC entry 2896 (class 0 OID 0)
-- Dependencies: 213
-- Name: game_score_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.game_score_id_seq OWNED BY public.game_score.id;


--
-- TOC entry 2728 (class 2604 OID 30735)
-- Name: auth_user id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.auth_user ALTER COLUMN id SET DEFAULT nextval('public.auth_user_id_seq'::regclass);


--
-- TOC entry 2729 (class 2604 OID 30773)
-- Name: game_form id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.game_form ALTER COLUMN id SET DEFAULT nextval('public.game_form_id_seq'::regclass);


--
-- TOC entry 2730 (class 2604 OID 30781)
-- Name: game_score id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.game_score ALTER COLUMN id SET DEFAULT nextval('public.game_score_id_seq'::regclass);


--
-- TOC entry 2732 (class 2606 OID 30729)
-- Name: auth_role auth_role_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.auth_role
    ADD CONSTRAINT auth_role_pkey PRIMARY KEY (id);


--
-- TOC entry 2734 (class 2606 OID 30737)
-- Name: auth_user auth_user_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.auth_user
    ADD CONSTRAINT auth_user_pkey PRIMARY KEY (id);


--
-- TOC entry 2738 (class 2606 OID 30742)
-- Name: auth_user_role auth_user_role_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.auth_user_role
    ADD CONSTRAINT auth_user_role_pkey PRIMARY KEY (user_id, role_id);


--
-- TOC entry 2740 (class 2606 OID 30747)
-- Name: box_type box_type_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.box_type
    ADD CONSTRAINT box_type_pkey PRIMARY KEY (id);


--
-- TOC entry 2742 (class 2606 OID 30752)
-- Name: column_type column_type_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.column_type
    ADD CONSTRAINT column_type_pkey PRIMARY KEY (id);


--
-- TOC entry 2744 (class 2606 OID 30757)
-- Name: game_box game_box_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.game_box
    ADD CONSTRAINT game_box_pkey PRIMARY KEY (box_type, column_type_id, form_id);


--
-- TOC entry 2746 (class 2606 OID 30762)
-- Name: game_column game_column_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.game_column
    ADD CONSTRAINT game_column_pkey PRIMARY KEY (column_type, form_id);


--
-- TOC entry 2748 (class 2606 OID 30767)
-- Name: game_dice game_dice_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.game_dice
    ADD CONSTRAINT game_dice_pkey PRIMARY KEY (form_id, ordinal_number);


--
-- TOC entry 2750 (class 2606 OID 30775)
-- Name: game_form game_form_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.game_form
    ADD CONSTRAINT game_form_pkey PRIMARY KEY (id);


--
-- TOC entry 2752 (class 2606 OID 30783)
-- Name: game_score game_score_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.game_score
    ADD CONSTRAINT game_score_pkey PRIMARY KEY (id);


--
-- TOC entry 2736 (class 2606 OID 30785)
-- Name: auth_user uk_t1iph3dfc25ukwcl9xemtnojn; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.auth_user
    ADD CONSTRAINT uk_t1iph3dfc25ukwcl9xemtnojn UNIQUE (username);


--
-- TOC entry 2753 (class 2606 OID 30786)
-- Name: auth_user_role fk3eldmba9luu9l0apl0791x8vd; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.auth_user_role
    ADD CONSTRAINT fk3eldmba9luu9l0apl0791x8vd FOREIGN KEY (role_id) REFERENCES public.auth_role(id);


--
-- TOC entry 2760 (class 2606 OID 30821)
-- Name: game_form fk5fukikinvbehdywf6s79skboj; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.game_form
    ADD CONSTRAINT fk5fukikinvbehdywf6s79skboj FOREIGN KEY (announcement) REFERENCES public.box_type(id);


--
-- TOC entry 2757 (class 2606 OID 30806)
-- Name: game_column fk5rmevrkk08enig97bagfb0w2n; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.game_column
    ADD CONSTRAINT fk5rmevrkk08enig97bagfb0w2n FOREIGN KEY (column_type) REFERENCES public.column_type(id);


--
-- TOC entry 2758 (class 2606 OID 30811)
-- Name: game_column fkav7dnj94s35iqy6n7li3ktfmc; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.game_column
    ADD CONSTRAINT fkav7dnj94s35iqy6n7li3ktfmc FOREIGN KEY (form_id) REFERENCES public.game_form(id);


--
-- TOC entry 2754 (class 2606 OID 30791)
-- Name: auth_user_role fkebutsbqm58ehnlffb299ng0ap; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.auth_user_role
    ADD CONSTRAINT fkebutsbqm58ehnlffb299ng0ap FOREIGN KEY (user_id) REFERENCES public.auth_user(id);


--
-- TOC entry 2755 (class 2606 OID 30796)
-- Name: game_box fkfng8iwpfxifxmye17r7e3rchp; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.game_box
    ADD CONSTRAINT fkfng8iwpfxifxmye17r7e3rchp FOREIGN KEY (column_type_id, form_id) REFERENCES public.game_column(column_type, form_id);


--
-- TOC entry 2756 (class 2606 OID 30801)
-- Name: game_box fkg7l2jbn5r8kr4np2tv3h2eobe; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.game_box
    ADD CONSTRAINT fkg7l2jbn5r8kr4np2tv3h2eobe FOREIGN KEY (box_type) REFERENCES public.box_type(id);


--
-- TOC entry 2762 (class 2606 OID 30831)
-- Name: game_score fkhmp80nlkr2we1sf7df3i5ovuj; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.game_score
    ADD CONSTRAINT fkhmp80nlkr2we1sf7df3i5ovuj FOREIGN KEY (user_id) REFERENCES public.auth_user(id);


--
-- TOC entry 2759 (class 2606 OID 30816)
-- Name: game_dice fki4h5x3240ies5nav4mhbdtjwr; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.game_dice
    ADD CONSTRAINT fki4h5x3240ies5nav4mhbdtjwr FOREIGN KEY (form_id) REFERENCES public.game_form(id);


--
-- TOC entry 2761 (class 2606 OID 30826)
-- Name: game_form fkm6ypqwcglruknc58mu578pg79; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.game_form
    ADD CONSTRAINT fkm6ypqwcglruknc58mu578pg79 FOREIGN KEY (user_id) REFERENCES public.auth_user(id);


-- Completed on 2020-10-05 10:18:16

--
-- PostgreSQL database dump complete
--

