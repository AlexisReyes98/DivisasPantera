#CREATE DATABASE DIVPANT;
USE DivisasPantera;
#DROP DATABASE DIVPANT;

CREATE TABLE DIRECCIONES(
	ID_D VARCHAR(10) PRIMARY KEY NOT NULL,
    CALLE VARCHAR(30) NOT NULL,
    NUMERO NUMERIC(3) NOT NULL,
    CP NUMERIC(5) NOT NULL
);
#DESCRIBE TABLE DIRECCIONES;
INSERT INTO DIRECCIONES VALUES ("DIR0000001", "EUGENIA", "25", "03100");
INSERT INTO DIRECCIONES VALUES ("DIR0000002", "BEISTEGUI", "43", "03100");
INSERT INTO DIRECCIONES VALUES ("DIR0000003", "COYOACAN", "29", "03100");
INSERT INTO DIRECCIONES VALUES ("DIR0000004", "AMORES", "37", "03100");
#SELECT * FROM DIRECCIONES;
CREATE TABLE CARGOS(
	ID_CAR BOOL PRIMARY KEY NOT NULL,
    TIPO VARCHAR (25) NOT NULL
);
INSERT INTO CARGOS VALUES ("0", "GERENTE");
INSERT INTO CARGOS VALUES ("1", "ADMINISTRADOR");
#SELECT * FROM CARGOS;
CREATE TABLE EMPLEADOS(
    ID_E VARCHAR(10) PRIMARY KEY NOT NULL,
    NUM_EMPLEADO NUMERIC(10) NOT NULL,
    NOMBRE_E VARCHAR(15) NOT NULL,
    APELLIDO_E VARCHAR(25) NOT NULL,
    CONTRA_E VARCHAR(30) NOT NULL,
    CORREO_E VARCHAR(30) NOT NULL,
    TELEFONO_E NUMERIC(10) NOT NULL,
    ID_D VARCHAR(10) NOT NULL,
    ID_CAR BOOL NOT NULL,
    FOREIGN KEY(ID_D) REFERENCES DIRECCIONES(ID_D) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY(ID_CAR) REFERENCES CARGOS(ID_CAR) ON UPDATE CASCADE ON DELETE CASCADE
);
INSERT INTO EMPLEADOS VALUES ("EMP0000001", "0123456789", "HECTOR", "ROSAS", "CONTRAEMP1", "HECTOR@LIVE.COM", "5532653891", "DIR0000001", "0");
INSERT INTO EMPLEADOS VALUES ("EMP0000002", "0123456789", "ALEXIS", "REYES", "CONTRAEMP2", "ALEXIS@GMAIL.COM", "5532389394", "DIR0000002", "1");

CREATE TABLE TARJETAS(
    NUM_TARJ NUMERIC(16) PRIMARY KEY NOT NULL,
    FECHA_V DATE NOT NULL,
    CVV NUMERIC(4) NOT NULL,
    NIP NUMERIC(4) NOT NULL
);
INSERT INTO TARJETAS VALUES ("0123456789123456", "24-06-01", "1234", "4321");
INSERT INTO TARJETAS VALUES ("8794351300465132", "25-09-23", "5678", "1551");
INSERT INTO TARJETAS VALUES ("2463540549216515", "21-12-02", "0198", "9836");

CREATE TABLE SOCIOS(
	ID_S VARCHAR(10) PRIMARY KEY NOT NULL,
    NUM_CUENTA NUMERIC(10) NOT NULL,
    CONTRA_S VARCHAR(30) NOT NULL,
    NOMBRE_S VARCHAR(15) NOT NULL,
    APELLIDO_S VARCHAR(25) NOT NULL,
	TELEFONO_S NUMERIC(10) NOT NULL,
	CORREO_S VARCHAR(30) NOT NULL,
    SALDO NUMERIC(5,2) NOT NULL,
    ID_D VARCHAR(10) NOT NULL, 
    NUM_TARJ NUMERIC(16) NOT NULL,
    FOREIGN KEY(ID_D) REFERENCES DIRECCIONES(ID_D) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY(NUM_TARJ) REFERENCES TARJETAS(NUM_TARJ) ON UPDATE CASCADE ON DELETE CASCADE
);
INSERT INTO SOCIOS VALUES ("SOC0000001", "2163071647", "CONTRA", "HECTOR", "ROSAS", "5532653891", "HECTOR@LIVE.COM", "100.05", "DIR0000004", "0123456789123456");
INSERT INTO SOCIOS VALUES ("SOC0000002", "2163071648", "CONTRA", "ALEXIS", "REYES", "5564512031", "ALEXIS@LIVE.COM", "200.45", "DIR0000001", "8794351300465132");
INSERT INTO SOCIOS VALUES ("SOC0000003", "2163071649", "CONTRA", "ANEL", "LOPEZZ", "5534648403", "ANEL@LIVE.COM", "300.05", "DIR0000003", "2463540549216515");
CREATE TABLE TRANSFERENCIAS(
	ID_TRAN VARCHAR(10) PRIMARY KEY NOT NULL,
    ID_SE VARCHAR(10) NOT NULL,
    ID_SR VARCHAR(10) NOT NULL,
    MONTO NUMERIC(4,2) NOT NULL,
    FECHA TIMESTAMP
);

CREATE TABLE TIPO_PAGO(
	ID_TP VARCHAR(10) PRIMARY KEY NOT NULL,
    TIPO VARCHAR(20) NOT NULL,
    MONTO NUMERIC(5,2) NOT NULL
);
#TRIM/ANUALIDAD/ER/COMEDOR/ADEUDO BIBL
INSERT INTO TIPO_PAGO VALUES ("TIPPAG0001", "TRIMESTRE", "128.43");
INSERT INTO TIPO_PAGO VALUES ("TIPPAG0002", "ANUALIDAD", "128.43");
INSERT INTO TIPO_PAGO VALUES ("TIPPAG0003", "EX REC", "2.50");
INSERT INTO TIPO_PAGO VALUES ("TIPPAG0004", "COMEDOR", "10.00");
INSERT INTO TIPO_PAGO VALUES ("TIPPAG0005", "ADEUDO BIBLIO", "25.50");

CREATE TABLE PAGOS(
	ID_P VARCHAR(10) PRIMARY KEY NOT NULL,
    ID_TP VARCHAR(10) NOT NULL,
    ID_S VARCHAR(10) NOT NULL,
    FECHA TIMESTAMP NOT NULL,
    FOREIGN KEY(ID_TP) REFERENCES TIPO_PAGO(ID_TP) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY(ID_S) REFERENCES SOCIOS(ID_S) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE AUTORES(
    ID_A VARCHAR(10) PRIMARY KEY NOT NULL,
    NOMBRE_A VARCHAR(15) NOT NULL,
    APELLIDO_A VARCHAR(25) NOT NULL
);

CREATE TABLE LIBROS(
    ISBN NUMERIC(13) PRIMARY KEY NOT NULL,
    TITULO VARCHAR(25) NOT NULL,
    EDITORIAL VARCHAR(25) NOT NULL
);

CREATE TABLE AUT_LIB(
    ID_A VARCHAR(10) NOT NULL,
    ISBN NUMERIC(13) NOT NULL,
	PRIMARY KEY(ID_A, ISBN)
);

CREATE TABLE ART_LIB(
    ID_AL VARCHAR(10) PRIMARY KEY NOT NULL,
    ISBN NUMERIC(13) NOT NULL,
	PRECIO NUMERIC(4,2) NOT NULL,
    FOREIGN KEY(ISBN) REFERENCES LIBROS(ISBN) ON UPDATE CASCADE ON DELETE  CASCADE
);

CREATE TABLE ART_BIBL(
    ID_AB VARCHAR(10) PRIMARY KEY NOT NULL,
    ISBN NUMERIC(13) NOT NULL,
	MONTO NUMERIC(4,2) NOT NULL,
    FOREIGN KEY(ISBN) REFERENCES LIBROS(ISBN) ON UPDATE CASCADE ON DELETE  CASCADE
);

CREATE TABLE ART_BF(
    ID_ABF VARCHAR(10) PRIMARY KEY NOT NULL,
    NOMBRE VARCHAR(15) NOT NULL,
    TIPO VARCHAR(15) NOT NULL,
	PRECIO NUMERIC(4,2) NOT NULL
);

CREATE TABLE ART_COMP(
	ID_ABF VARCHAR(10),
    ID_C VARCHAR(10),
    PRIMARY KEY(ID_ABF, ID_C)
);

CREATE TABLE TRABAJADORES(
    ID_TRAB VARCHAR(10) PRIMARY KEY NOT NULL,
    NOMBRE_T VARCHAR(15) NOT NULL,
    APELLIDO_T VARCHAR(25) NOT NULL
);

CREATE TABLE COMPRAS(
	ID_C VARCHAR(10) PRIMARY KEY NOT NULL,
    ID_S VARCHAR(10) NOT NULL,
    ID_TRAB VARCHAR(10) NOT NULL,
    FECHA NUMERIC(10) NOT NULL,
    ID_AB VARCHAR(10),
    ID_AL VARCHAR(10),
    ID_BF VARCHAR(10),
    FOREIGN KEY(ID_S) REFERENCES SOCIOS(ID_S) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY(ID_TRAB) REFERENCES TRABAJADORES(ID_TRAB) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY(ID_AB) REFERENCES ART_BIBL(ID_AB) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY(ID_AL) REFERENCES ART_LIB(ID_AL) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY(ID_BF) REFERENCES ART_BF(ID_AB) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE HISTORIAL(
	ID_H VARCHAR(10) PRIMARY KEY NOT NULL,
    ID_C VARCHAR(10),
    ID_TRAN VARCHAR(10),
    ID_P VARCHAR(10),
    FOREIGN KEY(ID_C) REFERENCES COMPRAS(ID_C) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY(ID_TRAN) REFERENCES TRANSFERENCIAS(ID_TRAN) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY(ID_P) REFERENCES PAGOS(ID_P) ON UPDATE CASCADE ON DELETE CASCADE
);

#▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
#▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
#▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
#▓▓▓▓▓-....:▓▓▓▓▓▓▓+................-▓▓▓▓▓▓▓
#▓▓▓▓▓-....:▓▓▓▓▓▓▓+.................#▓▓▓▓▓▓
#▓▓▓▓▓-....:▓▓▓▓▓▓▓#===========+.....#▓▓▓▓▓▓
#▓▓▓▓▓-....:▓▓▓▓▓▓▓+.....▓▓▓▓▓▓=.....#▓▓▓▓▓▓
#▓▓▓▓▓-....:@...........######*......#▓▓▓▓▓▓
#▓▓▓▓▓-....:@........................#▓▓▓▓▓▓
#▓▓▓▓▓-....:@+++++-.................@▓▓▓▓▓▓▓
#▓▓▓▓▓-....:▓▓▓▓▓▓▓+.....###-.....:@▓▓▓▓▓▓▓▓
#▓▓▓▓▓-....:▓▓▓▓▓▓▓+.....▓▓▓▓+.....-░▓▓▓▓▓▓▓
#▓▓▓▓▓-....:▓▓▓▓▓▓▓+.....▓▓▓▓▓=......#▓▓▓▓▓▓
#▓▓▓▓▓:----+▓▓▓▓▓▓▓*-----▓▓▓▓▓▓@------*▓▓▓▓▓
#▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
#▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
#▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓