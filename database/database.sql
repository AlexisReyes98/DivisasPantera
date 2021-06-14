USE DivisasPantera;

CREATE TABLE socios (
    id_s INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    num_cuenta,
    contra_s,
    nombre_s,
    apellido_s,
    telefono_s,
    correo_s,
    saldo,
    id_d,
    num_tarj
);

CREATE TABLE empleados (
    id_e INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    num_empleados,
    contra_e,
    nombre_e,
    apellido_e,
    telefono_e,
    correo_e,
    id_d
);