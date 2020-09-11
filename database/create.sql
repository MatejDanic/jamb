DELETE FROM score;
DELETE FROM box;
DELETE FROM "column";
DELETE FROM dice;
DELETE FROM form;
DELETE FROM auth_user_role;
DELETE FROM auth_role;
DELETE FROM auth_user;

--
-- PostgreSQL database dump
--

-- Dumped from database version 12.4 (Ubuntu 12.4-1.pgdg16.04+1)
-- Dumped by pg_dump version 12.3

-- Started on 2020-09-10 15:45:04

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

--
-- TOC entry 3896 (class 0 OID 46459)
-- Dependencies: 202
-- Data for Name: auth_role; Type: TABLE DATA; Schema: public; Owner: tvwexrydbwrtnx
--

INSERT INTO public.auth_role (id, description, label) VALUES (1, NULL, 'USER');
INSERT INTO public.auth_role (id, description, label) VALUES (2, NULL, 'ADMIN');


--
-- TOC entry 3898 (class 0 OID 46467)
-- Dependencies: 204
-- Data for Name: auth_user; Type: TABLE DATA; Schema: public; Owner: tvwexrydbwrtnx
--

INSERT INTO public.auth_user (id, password, username) VALUES (1, '$2a$10$4mtJPUySOPSWIgqOi9YbQ.bDX46wC3Moefxvk8pAvGtrZ0418.EXS', 'matej');
INSERT INTO public.auth_user (id, password, username) VALUES (4, '$2a$10$7wY9nvMQFw0RvYTn8fReeei8uQ83lbInzrXER8/asVDeNxjvxJWje', 'Bumer');
INSERT INTO public.auth_user (id, password, username) VALUES (5, '$2a$10$IKVwNSZPJXj81KRXFDjRFe.N9pwxlDAaaax2dD7wKfYIK58TKju7m', 'anja');
INSERT INTO public.auth_user (id, password, username) VALUES (7, '$2a$10$gwowQgcd7hlpGv/NxfHA4OtHmFFrH.yxT/a5.Or3/sdwyo.XJ5xl6', 'Barbara');
INSERT INTO public.auth_user (id, password, username) VALUES (8, '$2a$10$sgVBigHoFjRGBTAaYTraJepioCtd7CwFjPp3ZpxdwreWxmmnQn8De', 'Kery');
INSERT INTO public.auth_user (id, password, username) VALUES (9, '$2a$10$eBZuGRS6xY9vFSvODvWO5.nSZSUMrV6KctEa0DfPXZfLWq0G6XHdC', 'brana');


--
-- TOC entry 3900 (class 0 OID 46472)
-- Dependencies: 206
-- Data for Name: auth_user_role; Type: TABLE DATA; Schema: public; Owner: tvwexrydbwrtnx
--

INSERT INTO public.auth_user_role (user_id, role_id) VALUES (1, 1);
INSERT INTO public.auth_user_role (user_id, role_id) VALUES (1, 2);
INSERT INTO public.auth_user_role (user_id, role_id) VALUES (4, 1);
INSERT INTO public.auth_user_role (user_id, role_id) VALUES (5, 1);
INSERT INTO public.auth_user_role (user_id, role_id) VALUES (7, 1);
INSERT INTO public.auth_user_role (user_id, role_id) VALUES (8, 1);
INSERT INTO public.auth_user_role (user_id, role_id) VALUES (9, 1);


-- TOC entry 3907 (class 0 OID 46491)
-- Dependencies: 213
-- Data for Name: score; Type: TABLE DATA; Schema: public; Owner: tvwexrydbwrtnx
--

INSERT INTO public.score (id, date, value, user_id) VALUES (2, '2020-08-11 00:00:00', 1179, 4);
INSERT INTO public.score (id, date, value, user_id) VALUES (5, '2020-08-12 00:00:00', 1081, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (6, '2020-08-12 00:00:00', 754, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (7, '2020-08-13 00:00:00', 862, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (8, '2020-08-13 00:00:00', 889, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (9, '2020-08-13 00:00:00', 828, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (10, '2020-08-13 00:00:00', 1033, 1);
INSERT INTO public.score (id, date, value, user_id) VALUES (11, '2020-08-13 00:00:00', 892, 1);
INSERT INTO public.score (id, date, value, user_id) VALUES (12, '2020-08-13 00:00:00', 987, 1);
INSERT INTO public.score (id, date, value, user_id) VALUES (13, '2020-08-14 00:00:00', 1105, 1);
INSERT INTO public.score (id, date, value, user_id) VALUES (14, '2020-08-14 00:00:00', 1033, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (15, '2020-08-14 00:00:00', 1080, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (16, '2020-08-14 00:00:00', 1030, 1);
INSERT INTO public.score (id, date, value, user_id) VALUES (17, '2020-08-14 00:00:00', 1171, 5);
INSERT INTO public.score (id, date, value, user_id) VALUES (18, '2020-08-15 00:00:00', 1069, 1);
INSERT INTO public.score (id, date, value, user_id) VALUES (19, '2020-08-15 00:00:00', 1190, 1);
INSERT INTO public.score (id, date, value, user_id) VALUES (20, '2020-08-15 00:00:00', 811, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (21, '2020-08-15 00:00:00', 1217, 4);
INSERT INTO public.score (id, date, value, user_id) VALUES (22, '2020-08-15 00:00:00', 1070, 1);
INSERT INTO public.score (id, date, value, user_id) VALUES (23, '2020-08-16 00:00:00', 1171, 5);
INSERT INTO public.score (id, date, value, user_id) VALUES (24, '2020-08-16 00:00:00', 1058, 1);
INSERT INTO public.score (id, date, value, user_id) VALUES (25, '2020-08-16 00:00:00', 951, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (26, '2020-08-16 00:00:00', 976, 4);
INSERT INTO public.score (id, date, value, user_id) VALUES (27, '2020-08-16 00:00:00', 1084, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (28, '2020-08-16 00:00:00', 994, 4);
INSERT INTO public.score (id, date, value, user_id) VALUES (29, '2020-08-16 00:00:00', 1085, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (30, '2020-08-16 00:00:00', 1106, 1);
INSERT INTO public.score (id, date, value, user_id) VALUES (31, '2020-08-17 00:00:00', 954, 9);
INSERT INTO public.score (id, date, value, user_id) VALUES (32, '2020-08-17 00:00:00', 928, 9);
INSERT INTO public.score (id, date, value, user_id) VALUES (33, '2020-08-17 00:00:00', 1027, 1);
INSERT INTO public.score (id, date, value, user_id) VALUES (34, '2020-08-17 00:00:00', 946, 9);
INSERT INTO public.score (id, date, value, user_id) VALUES (35, '2020-08-17 00:00:00', 973, 4);
INSERT INTO public.score (id, date, value, user_id) VALUES (36, '2020-08-17 00:00:00', 1061, 4);
INSERT INTO public.score (id, date, value, user_id) VALUES (37, '2020-08-17 00:00:00', 1029, 1);
INSERT INTO public.score (id, date, value, user_id) VALUES (38, '2020-08-17 00:00:00', 1049, 1);
INSERT INTO public.score (id, date, value, user_id) VALUES (39, '2020-08-17 00:00:00', 1062, 1);
INSERT INTO public.score (id, date, value, user_id) VALUES (40, '2020-08-17 00:00:00', 1117, 1);
INSERT INTO public.score (id, date, value, user_id) VALUES (41, '2020-08-17 00:00:00', 1199, 1);
INSERT INTO public.score (id, date, value, user_id) VALUES (42, '2020-08-17 00:00:00', 872, 9);
INSERT INTO public.score (id, date, value, user_id) VALUES (43, '2020-08-17 00:00:00', 1072, 9);
INSERT INTO public.score (id, date, value, user_id) VALUES (44, '2020-08-17 00:00:00', 859, 9);
INSERT INTO public.score (id, date, value, user_id) VALUES (45, '2020-08-17 00:00:00', 1153, 5);
INSERT INTO public.score (id, date, value, user_id) VALUES (46, '2020-08-18 00:00:00', 1225, 5);
INSERT INTO public.score (id, date, value, user_id) VALUES (47, '2020-08-18 00:00:00', 1023, 9);
INSERT INTO public.score (id, date, value, user_id) VALUES (48, '2020-08-18 00:00:00', 1041, 9);
INSERT INTO public.score (id, date, value, user_id) VALUES (49, '2020-08-18 00:00:00', 857, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (50, '2020-08-18 00:00:00', 1194, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (51, '2020-08-18 00:00:00', 1131, 4);
INSERT INTO public.score (id, date, value, user_id) VALUES (52, '2020-08-18 00:00:00', 947, 4);
INSERT INTO public.score (id, date, value, user_id) VALUES (53, '2020-08-18 00:00:00', 681, 9);
INSERT INTO public.score (id, date, value, user_id) VALUES (54, '2020-08-18 00:00:00', 996, 4);
INSERT INTO public.score (id, date, value, user_id) VALUES (55, '2020-08-18 00:00:00', 858, 4);
INSERT INTO public.score (id, date, value, user_id) VALUES (56, '2020-08-18 00:00:00', 1128, 9);
INSERT INTO public.score (id, date, value, user_id) VALUES (57, '2020-08-18 00:00:00', 1250, 1);
INSERT INTO public.score (id, date, value, user_id) VALUES (58, '2020-08-18 00:00:00', 1088, 5);
INSERT INTO public.score (id, date, value, user_id) VALUES (59, '2020-08-18 00:00:00', 967, 9);
INSERT INTO public.score (id, date, value, user_id) VALUES (60, '2020-08-19 00:00:00', 1125, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (61, '2020-08-19 00:00:00', 962, 4);
INSERT INTO public.score (id, date, value, user_id) VALUES (62, '2020-08-19 00:00:00', 1037, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (63, '2020-08-19 00:00:00', 854, 4);
INSERT INTO public.score (id, date, value, user_id) VALUES (64, '2020-08-19 00:00:00', 931, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (65, '2020-08-19 00:00:00', 867, 4);
INSERT INTO public.score (id, date, value, user_id) VALUES (66, '2020-08-19 00:00:00', 759, 4);
INSERT INTO public.score (id, date, value, user_id) VALUES (67, '2020-08-19 00:00:00', 1088, 4);
INSERT INTO public.score (id, date, value, user_id) VALUES (68, '2020-08-19 00:00:00', 1045, 4);
INSERT INTO public.score (id, date, value, user_id) VALUES (69, '2020-08-19 00:00:00', 1097, 9);
INSERT INTO public.score (id, date, value, user_id) VALUES (70, '2020-08-19 00:00:00', 915, 9);
INSERT INTO public.score (id, date, value, user_id) VALUES (71, '2020-08-19 00:00:00', 905, 9);
INSERT INTO public.score (id, date, value, user_id) VALUES (72, '2020-08-20 00:00:00', 785, 9);
INSERT INTO public.score (id, date, value, user_id) VALUES (73, '2020-08-20 00:00:00', 948, 9);
INSERT INTO public.score (id, date, value, user_id) VALUES (74, '2020-08-20 00:00:00', 1144, 5);
INSERT INTO public.score (id, date, value, user_id) VALUES (75, '2020-08-20 00:00:00', 1089, 5);
INSERT INTO public.score (id, date, value, user_id) VALUES (76, '2020-08-20 00:00:00', 1270, 5);
INSERT INTO public.score (id, date, value, user_id) VALUES (77, '2020-08-20 00:00:00', 1108, 1);
INSERT INTO public.score (id, date, value, user_id) VALUES (78, '2020-08-20 00:00:00', 862, 9);
INSERT INTO public.score (id, date, value, user_id) VALUES (79, '2020-08-20 00:00:00', 873, 9);
INSERT INTO public.score (id, date, value, user_id) VALUES (80, '2020-08-20 00:00:00', 1139, 1);
INSERT INTO public.score (id, date, value, user_id) VALUES (81, '2020-08-20 00:00:00', 1102, 9);
INSERT INTO public.score (id, date, value, user_id) VALUES (85, '2020-08-21 00:00:00', 1121, 4);
INSERT INTO public.score (id, date, value, user_id) VALUES (86, '2020-08-21 00:00:00', 731, 4);
INSERT INTO public.score (id, date, value, user_id) VALUES (87, '2020-08-21 00:00:00', 1059, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (88, '2020-08-21 00:00:00', 808, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (89, '2020-08-21 00:00:00', 994, 9);
INSERT INTO public.score (id, date, value, user_id) VALUES (90, '2020-08-21 00:00:00', 843, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (91, '2020-08-21 00:00:00', 977, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (92, '2020-08-22 00:00:00', 1210, 9);
INSERT INTO public.score (id, date, value, user_id) VALUES (93, '2020-08-22 00:00:00', 928, 9);
INSERT INTO public.score (id, date, value, user_id) VALUES (94, '2020-08-22 00:00:00', 1201, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (95, '2020-08-22 00:00:00', 978, 4);
INSERT INTO public.score (id, date, value, user_id) VALUES (96, '2020-08-22 00:00:00', 1034, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (97, '2020-08-22 00:00:00', 1075, 9);
INSERT INTO public.score (id, date, value, user_id) VALUES (98, '2020-08-23 00:00:00', 1072, 1);
INSERT INTO public.score (id, date, value, user_id) VALUES (99, '2020-08-23 00:00:00', 770, 9);
INSERT INTO public.score (id, date, value, user_id) VALUES (100, '2020-08-23 00:00:00', 1236, 4);
INSERT INTO public.score (id, date, value, user_id) VALUES (101, '2020-08-23 00:00:00', 897, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (102, '2020-08-23 00:00:00', 1067, 9);
INSERT INTO public.score (id, date, value, user_id) VALUES (103, '2020-08-23 00:00:00', 960, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (104, '2020-08-23 00:00:00', 864, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (105, '2020-08-23 00:00:00', 1085, 9);
INSERT INTO public.score (id, date, value, user_id) VALUES (106, '2020-08-23 00:00:00', 783, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (107, '2020-08-23 00:00:00', 1001, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (108, '2020-08-23 00:00:00', 1094, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (109, '2020-08-23 00:00:00', 1040, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (110, '2020-08-23 00:00:00', 936, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (111, '2020-08-23 00:00:00', 860, 9);
INSERT INTO public.score (id, date, value, user_id) VALUES (112, '2020-08-23 00:00:00', 983, 9);
INSERT INTO public.score (id, date, value, user_id) VALUES (113, '2020-08-23 00:00:00', 991, 9);
INSERT INTO public.score (id, date, value, user_id) VALUES (114, '2020-08-23 00:00:00', 1032, 9);
INSERT INTO public.score (id, date, value, user_id) VALUES (115, '2020-08-24 00:00:00', 961, 9);
INSERT INTO public.score (id, date, value, user_id) VALUES (116, '2020-08-24 00:00:00', 971, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (117, '2020-08-24 00:00:00', 1054, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (118, '2020-08-24 00:00:00', 995, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (119, '2020-08-24 00:00:00', 929, 4);
INSERT INTO public.score (id, date, value, user_id) VALUES (120, '2020-08-24 00:00:00', 897, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (121, '2020-08-24 00:00:00', 796, 9);
INSERT INTO public.score (id, date, value, user_id) VALUES (122, '2020-08-24 00:00:00', 958, 9);
INSERT INTO public.score (id, date, value, user_id) VALUES (123, '2020-08-24 00:00:00', 1093, 9);
INSERT INTO public.score (id, date, value, user_id) VALUES (124, '2020-08-24 00:00:00', 912, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (125, '2020-08-24 00:00:00', 574, 9);
INSERT INTO public.score (id, date, value, user_id) VALUES (126, '2020-08-24 00:00:00', 975, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (127, '2020-08-24 00:00:00', 913, 9);
INSERT INTO public.score (id, date, value, user_id) VALUES (128, '2020-08-24 00:00:00', 888, 9);
INSERT INTO public.score (id, date, value, user_id) VALUES (129, '2020-08-24 00:00:00', 991, 9);
INSERT INTO public.score (id, date, value, user_id) VALUES (130, '2020-08-25 00:00:00', 810, 9);
INSERT INTO public.score (id, date, value, user_id) VALUES (131, '2020-08-25 00:00:00', 716, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (132, '2020-08-25 00:00:00', 1085, 9);
INSERT INTO public.score (id, date, value, user_id) VALUES (133, '2020-08-25 00:00:00', 1016, 9);
INSERT INTO public.score (id, date, value, user_id) VALUES (134, '2020-08-25 00:00:00', 931, 9);
INSERT INTO public.score (id, date, value, user_id) VALUES (135, '2020-08-26 00:00:00', 1107, 9);
INSERT INTO public.score (id, date, value, user_id) VALUES (136, '2020-08-26 00:00:00', 1175, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (137, '2020-08-26 00:00:00', 995, 4);
INSERT INTO public.score (id, date, value, user_id) VALUES (138, '2020-08-26 00:00:00', 955, 9);
INSERT INTO public.score (id, date, value, user_id) VALUES (139, '2020-08-26 00:00:00', 881, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (140, '2020-08-26 00:00:00', 936, 9);
INSERT INTO public.score (id, date, value, user_id) VALUES (141, '2020-08-26 00:00:00', 920, 9);
INSERT INTO public.score (id, date, value, user_id) VALUES (142, '2020-08-26 00:00:00', 894, 9);
INSERT INTO public.score (id, date, value, user_id) VALUES (143, '2020-08-26 00:00:00', 700, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (144, '2020-08-26 00:00:00', 937, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (145, '2020-08-26 00:00:00', 845, 9);
INSERT INTO public.score (id, date, value, user_id) VALUES (146, '2020-08-27 00:00:00', 1135, 4);
INSERT INTO public.score (id, date, value, user_id) VALUES (147, '2020-08-27 00:00:00', 1004, 9);
INSERT INTO public.score (id, date, value, user_id) VALUES (148, '2020-08-27 00:00:00', 1122, 9);
INSERT INTO public.score (id, date, value, user_id) VALUES (149, '2020-08-27 00:00:00', 1022, 1);
INSERT INTO public.score (id, date, value, user_id) VALUES (150, '2020-08-27 00:00:00', 946, 1);
INSERT INTO public.score (id, date, value, user_id) VALUES (151, '2020-08-27 00:00:00', 893, 9);
INSERT INTO public.score (id, date, value, user_id) VALUES (152, '2020-08-27 00:00:00', 862, 9);
INSERT INTO public.score (id, date, value, user_id) VALUES (153, '2020-08-27 00:00:00', 1221, 5);
INSERT INTO public.score (id, date, value, user_id) VALUES (154, '2020-08-27 00:00:00', 855, 9);
INSERT INTO public.score (id, date, value, user_id) VALUES (155, '2020-08-27 00:00:00', 825, 9);
INSERT INTO public.score (id, date, value, user_id) VALUES (156, '2020-08-27 00:00:00', 1207, 4);
INSERT INTO public.score (id, date, value, user_id) VALUES (157, '2020-08-28 00:00:00', 1116, 9);
INSERT INTO public.score (id, date, value, user_id) VALUES (158, '2020-08-28 00:00:00', 853, 9);
INSERT INTO public.score (id, date, value, user_id) VALUES (159, '2020-08-28 00:00:00', 1013, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (160, '2020-08-28 00:00:00', 959, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (161, '2020-08-28 00:00:00', 900, 9);
INSERT INTO public.score (id, date, value, user_id) VALUES (162, '2020-08-28 00:00:00', 947, 9);
INSERT INTO public.score (id, date, value, user_id) VALUES (163, '2020-08-28 00:00:00', 1092, 4);
INSERT INTO public.score (id, date, value, user_id) VALUES (164, '2020-08-28 00:00:00', 1013, 4);
INSERT INTO public.score (id, date, value, user_id) VALUES (165, '2020-08-28 00:00:00', 1077, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (166, '2020-08-28 00:00:00', 859, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (167, '2020-08-28 00:00:00', 914, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (168, '2020-08-28 00:00:00', 898, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (169, '2020-08-28 00:00:00', 906, 9);
INSERT INTO public.score (id, date, value, user_id) VALUES (170, '2020-08-28 00:00:00', 952, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (171, '2020-08-28 00:00:00', 1002, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (172, '2020-08-28 00:00:00', 1012, 9);
INSERT INTO public.score (id, date, value, user_id) VALUES (173, '2020-08-28 00:00:00', 956, 9);
INSERT INTO public.score (id, date, value, user_id) VALUES (174, '2020-08-28 00:00:00', 1012, 1);
INSERT INTO public.score (id, date, value, user_id) VALUES (175, '2020-08-29 00:00:00', 1045, 9);
INSERT INTO public.score (id, date, value, user_id) VALUES (177, '2020-08-29 15:17:09.367372', 925, 9);
INSERT INTO public.score (id, date, value, user_id) VALUES (178, '2020-08-29 15:27:28.631252', 880, 9);
INSERT INTO public.score (id, date, value, user_id) VALUES (179, '2020-08-29 16:08:10.638475', 857, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (180, '2020-08-29 16:19:17.386313', 1122, 9);
INSERT INTO public.score (id, date, value, user_id) VALUES (181, '2020-08-29 16:34:45.801874', 882, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (182, '2020-08-29 22:24:13.796756', 1220, 5);
INSERT INTO public.score (id, date, value, user_id) VALUES (183, '2020-08-30 06:15:07.125219', 940, 9);
INSERT INTO public.score (id, date, value, user_id) VALUES (184, '2020-08-30 10:06:52.930121', 845, 9);
INSERT INTO public.score (id, date, value, user_id) VALUES (185, '2020-08-30 11:34:51.146069', 1005, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (186, '2020-08-30 11:44:45.096871', 886, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (187, '2020-08-30 13:05:42.411105', 1002, 4);
INSERT INTO public.score (id, date, value, user_id) VALUES (188, '2020-08-30 13:18:24.254513', 1165, 4);
INSERT INTO public.score (id, date, value, user_id) VALUES (189, '2020-08-30 13:57:31.619794', 971, 9);
INSERT INTO public.score (id, date, value, user_id) VALUES (190, '2020-08-30 15:06:44.240328', 935, 9);
INSERT INTO public.score (id, date, value, user_id) VALUES (191, '2020-08-30 15:39:12.303027', 1080, 1);
INSERT INTO public.score (id, date, value, user_id) VALUES (192, '2020-08-30 15:59:56.487873', 977, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (193, '2020-08-30 16:09:27.928875', 927, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (194, '2020-08-30 16:20:06.646746', 813, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (195, '2020-08-30 18:34:03.128151', 1003, 9);
INSERT INTO public.score (id, date, value, user_id) VALUES (196, '2020-08-31 08:11:56.75173', 1083, 5);
INSERT INTO public.score (id, date, value, user_id) VALUES (197, '2020-08-31 08:59:54.972249', 1032, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (198, '2020-08-31 09:03:09.186449', 931, 4);
INSERT INTO public.score (id, date, value, user_id) VALUES (199, '2020-08-31 09:48:37.656402', 1040, 1);
INSERT INTO public.score (id, date, value, user_id) VALUES (200, '2020-08-31 09:59:09.268731', 847, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (201, '2020-08-31 10:09:11.689884', 967, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (202, '2020-08-31 10:18:30.199312', 831, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (203, '2020-08-31 10:47:42.764747', 1008, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (204, '2020-08-31 10:56:45.277288', 1070, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (205, '2020-08-31 11:07:20.007899', 1087, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (206, '2020-08-31 11:17:09.390353', 988, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (207, '2020-08-31 11:40:34.277894', 886, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (208, '2020-08-31 11:55:48.063747', 1121, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (209, '2020-08-31 12:45:12.299906', 961, 4);
INSERT INTO public.score (id, date, value, user_id) VALUES (210, '2020-08-31 12:58:12.881588', 1014, 4);
INSERT INTO public.score (id, date, value, user_id) VALUES (211, '2020-08-31 13:25:54.472761', 863, 4);
INSERT INTO public.score (id, date, value, user_id) VALUES (244, '2020-08-31 16:03:41.104852', 827, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (245, '2020-08-31 16:23:54.705793', 924, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (246, '2020-08-31 19:54:45.88562', 1257, 5);
INSERT INTO public.score (id, date, value, user_id) VALUES (247, '2020-08-31 20:42:53.523761', 950, 9);
INSERT INTO public.score (id, date, value, user_id) VALUES (248, '2020-09-01 08:10:21.710871', 970, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (249, '2020-09-01 10:03:12.650018', 746, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (250, '2020-09-01 13:30:27.059531', 688, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (251, '2020-09-01 13:39:49.291712', 943, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (252, '2020-09-01 13:49:26.341418', 729, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (253, '2020-09-01 15:31:47.609123', 838, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (254, '2020-09-01 16:13:15.472316', 904, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (255, '2020-09-01 16:20:42.596566', 1050, 4);
INSERT INTO public.score (id, date, value, user_id) VALUES (256, '2020-09-01 16:30:24.156919', 922, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (257, '2020-09-01 16:33:45.69869', 1060, 4);
INSERT INTO public.score (id, date, value, user_id) VALUES (258, '2020-09-01 16:46:10.880963', 882, 4);
INSERT INTO public.score (id, date, value, user_id) VALUES (259, '2020-09-02 15:09:03.485338', 854, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (260, '2020-09-03 08:36:55.442372', 1152, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (261, '2020-09-03 08:46:33.829813', 1171, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (262, '2020-09-03 09:44:17.151668', 953, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (263, '2020-09-03 09:49:34.648879', 895, 4);
INSERT INTO public.score (id, date, value, user_id) VALUES (264, '2020-09-03 09:53:29.011719', 1022, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (265, '2020-09-03 10:02:09.957582', 823, 4);
INSERT INTO public.score (id, date, value, user_id) VALUES (266, '2020-09-03 10:03:11.019683', 1101, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (267, '2020-09-03 10:14:38.146172', 968, 4);
INSERT INTO public.score (id, date, value, user_id) VALUES (268, '2020-09-03 10:17:46.732745', 980, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (269, '2020-09-03 10:27:16.845979', 1006, 4);
INSERT INTO public.score (id, date, value, user_id) VALUES (270, '2020-09-03 10:39:08.746111', 859, 4);
INSERT INTO public.score (id, date, value, user_id) VALUES (271, '2020-09-03 10:52:02.821158', 1048, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (272, '2020-09-03 11:00:54.818098', 914, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (273, '2020-09-03 11:38:35.778159', 843, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (274, '2020-09-03 12:03:53.585595', 690, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (275, '2020-09-03 14:09:09.644341', 1032, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (276, '2020-09-03 14:18:18.334288', 929, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (277, '2020-09-03 14:56:23.271149', 946, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (278, '2020-09-03 17:40:50.352617', 806, 4);
INSERT INTO public.score (id, date, value, user_id) VALUES (279, '2020-09-03 18:22:14.28521', 924, 9);
INSERT INTO public.score (id, date, value, user_id) VALUES (280, '2020-09-04 06:45:08.527948', 997, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (281, '2020-09-04 06:54:53.873352', 897, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (282, '2020-09-04 11:33:03.24895', 753, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (283, '2020-09-04 12:34:39.808104', 1216, 9);
INSERT INTO public.score (id, date, value, user_id) VALUES (284, '2020-09-04 16:20:16.253275', 1038, 4);
INSERT INTO public.score (id, date, value, user_id) VALUES (285, '2020-09-04 18:11:00.428875', 1100, 1);
INSERT INTO public.score (id, date, value, user_id) VALUES (286, '2020-09-04 20:04:12.653904', 1065, 9);
INSERT INTO public.score (id, date, value, user_id) VALUES (287, '2020-09-05 09:13:07.991129', 848, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (288, '2020-09-05 10:22:00.823624', 1002, 4);
INSERT INTO public.score (id, date, value, user_id) VALUES (289, '2020-09-05 10:37:27.013104', 783, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (290, '2020-09-05 12:05:39.05631', 938, 4);
INSERT INTO public.score (id, date, value, user_id) VALUES (291, '2020-09-05 13:43:58.768045', 917, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (292, '2020-09-05 14:46:52.203485', 1016, 9);
INSERT INTO public.score (id, date, value, user_id) VALUES (293, '2020-09-06 10:20:23.539332', 1074, 7);
INSERT INTO public.score (id, date, value, user_id) VALUES (294, '2020-09-06 10:35:48.401026', 934, 7);
INSERT INTO public.score (id, date, value, user_id) VALUES (295, '2020-09-06 10:52:34.945407', 935, 7);
INSERT INTO public.score (id, date, value, user_id) VALUES (296, '2020-09-06 16:04:01.522806', 1176, 1);
INSERT INTO public.score (id, date, value, user_id) VALUES (297, '2020-09-06 17:13:07.077685', 1192, 4);
INSERT INTO public.score (id, date, value, user_id) VALUES (298, '2020-09-06 19:25:38.508011', 1042, 9);
INSERT INTO public.score (id, date, value, user_id) VALUES (299, '2020-09-06 19:36:24.176225', 1074, 9);
INSERT INTO public.score (id, date, value, user_id) VALUES (300, '2020-09-07 09:31:09.783417', 915, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (301, '2020-09-07 09:40:44.877719', 863, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (302, '2020-09-07 09:41:48.43949', 1003, 4);
INSERT INTO public.score (id, date, value, user_id) VALUES (303, '2020-09-07 09:50:30.873242', 877, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (304, '2020-09-07 09:51:04.74675', 1081, 9);
INSERT INTO public.score (id, date, value, user_id) VALUES (305, '2020-09-07 09:54:19.622509', 949, 4);
INSERT INTO public.score (id, date, value, user_id) VALUES (306, '2020-09-07 09:59:46.660517', 862, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (307, '2020-09-07 10:25:07.641135', 971, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (308, '2020-09-07 10:34:22.993259', 938, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (309, '2020-09-07 12:17:20.936004', 975, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (310, '2020-09-07 12:19:58.90414', 1231, 9);
INSERT INTO public.score (id, date, value, user_id) VALUES (311, '2020-09-07 12:26:23.140128', 1000, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (312, '2020-09-07 12:34:55.810235', 871, 7);
INSERT INTO public.score (id, date, value, user_id) VALUES (313, '2020-09-07 12:35:58.393065', 856, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (314, '2020-09-07 12:50:39.340943', 832, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (315, '2020-09-07 12:51:25.104354', 1128, 7);
INSERT INTO public.score (id, date, value, user_id) VALUES (316, '2020-09-07 13:11:47.052324', 785, 4);
INSERT INTO public.score (id, date, value, user_id) VALUES (317, '2020-09-07 13:26:42.712189', 1097, 4);
INSERT INTO public.score (id, date, value, user_id) VALUES (318, '2020-09-07 13:28:59.250392', 1048, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (319, '2020-09-07 13:40:57.566449', 961, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (320, '2020-09-07 13:43:44.188464', 866, 4);
INSERT INTO public.score (id, date, value, user_id) VALUES (321, '2020-09-07 14:02:08.352301', 845, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (322, '2020-09-07 14:11:43.791357', 1081, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (323, '2020-09-07 14:21:32.934007', 1051, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (324, '2020-09-07 14:42:51.342131', 1019, 9);
INSERT INTO public.score (id, date, value, user_id) VALUES (325, '2020-09-07 14:44:56.584224', 942, 7);
INSERT INTO public.score (id, date, value, user_id) VALUES (326, '2020-09-07 16:14:31.351367', 832, 4);
INSERT INTO public.score (id, date, value, user_id) VALUES (327, '2020-09-07 16:42:13.261256', 667, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (328, '2020-09-07 19:57:16.497156', 1038, 9);
INSERT INTO public.score (id, date, value, user_id) VALUES (329, '2020-09-08 08:00:27.878793', 1163, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (330, '2020-09-08 10:09:34.562624', 892, 9);
INSERT INTO public.score (id, date, value, user_id) VALUES (331, '2020-09-08 11:02:33.072094', 1088, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (332, '2020-09-08 11:12:40.07716', 857, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (333, '2020-09-08 11:12:55.098387', 1164, 7);
INSERT INTO public.score (id, date, value, user_id) VALUES (334, '2020-09-08 11:25:31.779108', 1142, 7);
INSERT INTO public.score (id, date, value, user_id) VALUES (335, '2020-09-08 11:30:11.581882', 1117, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (336, '2020-09-08 11:41:51.864996', 993, 7);
INSERT INTO public.score (id, date, value, user_id) VALUES (337, '2020-09-08 11:54:17.031171', 967, 7);
INSERT INTO public.score (id, date, value, user_id) VALUES (338, '2020-09-08 12:21:44.310591', 1084, 7);
INSERT INTO public.score (id, date, value, user_id) VALUES (339, '2020-09-08 12:36:49.635559', 1017, 4);
INSERT INTO public.score (id, date, value, user_id) VALUES (340, '2020-09-08 12:48:32.959651', 1039, 4);
INSERT INTO public.score (id, date, value, user_id) VALUES (341, '2020-09-08 13:01:40.008241', 859, 4);
INSERT INTO public.score (id, date, value, user_id) VALUES (342, '2020-09-08 13:15:00.986774', 991, 4);
INSERT INTO public.score (id, date, value, user_id) VALUES (343, '2020-09-08 13:29:58.987908', 1031, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (344, '2020-09-08 13:31:53.102843', 1003, 4);
INSERT INTO public.score (id, date, value, user_id) VALUES (345, '2020-09-08 13:40:11.955295', 873, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (346, '2020-09-08 13:42:46.657381', 1138, 4);
INSERT INTO public.score (id, date, value, user_id) VALUES (347, '2020-09-08 13:53:34.653599', 895, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (348, '2020-09-08 13:54:33.575639', 1094, 4);
INSERT INTO public.score (id, date, value, user_id) VALUES (349, '2020-09-08 16:47:00.676762', 1127, 9);
INSERT INTO public.score (id, date, value, user_id) VALUES (350, '2020-09-08 17:55:30.824929', 937, 4);
INSERT INTO public.score (id, date, value, user_id) VALUES (351, '2020-09-08 18:07:10.682867', 1194, 4);
INSERT INTO public.score (id, date, value, user_id) VALUES (352, '2020-09-08 18:18:33.454547', 779, 4);
INSERT INTO public.score (id, date, value, user_id) VALUES (353, '2020-09-08 18:30:34.530158', 1065, 4);
INSERT INTO public.score (id, date, value, user_id) VALUES (354, '2020-09-08 18:42:23.832243', 1040, 4);
INSERT INTO public.score (id, date, value, user_id) VALUES (355, '2020-09-08 18:55:17.879553', 1165, 4);
INSERT INTO public.score (id, date, value, user_id) VALUES (356, '2020-09-08 19:48:11.668087', 806, 4);
INSERT INTO public.score (id, date, value, user_id) VALUES (357, '2020-09-09 08:39:27.746167', 960, 4);
INSERT INTO public.score (id, date, value, user_id) VALUES (358, '2020-09-09 10:05:47.746283', 859, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (359, '2020-09-09 10:15:04.733944', 885, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (360, '2020-09-09 10:32:04.469422', 961, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (361, '2020-09-09 10:41:35.138774', 1025, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (362, '2020-09-09 12:46:17.911281', 778, 9);
INSERT INTO public.score (id, date, value, user_id) VALUES (363, '2020-09-09 13:24:29.80315', 1044, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (364, '2020-09-09 15:35:26.918926', 1098, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (365, '2020-09-09 15:48:20.737772', 872, 4);
INSERT INTO public.score (id, date, value, user_id) VALUES (366, '2020-09-09 16:14:42.795544', 1024, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (367, '2020-09-09 17:46:42.778883', 1126, 9);
INSERT INTO public.score (id, date, value, user_id) VALUES (368, '2020-09-09 17:58:45.156015', 1096, 9);
INSERT INTO public.score (id, date, value, user_id) VALUES (369, '2020-09-10 03:56:24.658572', 1100, 9);
INSERT INTO public.score (id, date, value, user_id) VALUES (370, '2020-09-10 07:53:47.116798', 1163, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (371, '2020-09-10 09:43:26.676395', 981, 8);
INSERT INTO public.score (id, date, value, user_id) VALUES (372, '2020-09-10 11:22:01.546785', 981, 9);
INSERT INTO public.score (id, date, value, user_id) VALUES (373, '2020-09-10 13:24:16.161635', 874, 8);


--
-- TOC entry 3921 (class 0 OID 0)
-- Dependencies: 203
-- Name: auth_role_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tvwexrydbwrtnx
--

SELECT pg_catalog.setval('public.auth_role_id_seq', 1, false);


--
-- TOC entry 3922 (class 0 OID 0)
-- Dependencies: 205
-- Name: auth_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tvwexrydbwrtnx
--

SELECT pg_catalog.setval('public.auth_user_id_seq', 12, true);


--
-- TOC entry 3923 (class 0 OID 0)
-- Dependencies: 209
-- Name: column_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tvwexrydbwrtnx
--

SELECT pg_catalog.setval('public.column_id_seq', 3597, true);


--
-- TOC entry 3924 (class 0 OID 0)
-- Dependencies: 212
-- Name: form_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tvwexrydbwrtnx
--

SELECT pg_catalog.setval('public.form_id_seq', 924, true);


--
-- TOC entry 3925 (class 0 OID 0)
-- Dependencies: 214
-- Name: score_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tvwexrydbwrtnx
--

SELECT pg_catalog.setval('public.score_id_seq', 373, true);


-- Completed on 2020-09-10 15:45:13

--
-- PostgreSQL database dump complete
--
