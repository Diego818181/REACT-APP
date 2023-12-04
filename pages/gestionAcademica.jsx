import DefaultLayout from "@/layouts/default";
import { title, subtitle } from "@/components/primitives";
import React from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";


const GestionAcademicaPage = () => {
  return (
	<DefaultLayout>
	<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
				<div className="inline-block max-w-lg text-center justify-center">
	  <h1 className={title()}>Gesti&oacute;n Acad&eacute;mica</h1>
	  <div style={{ textAlign: 'center', margin: '20px' }}>
		
	  </div>
	  </div>
	  </section>
	  <Table aria-label="Example static collection table">
      <TableHeader>
        <TableColumn><h2 className={subtitle()}>Capacidades</h2></TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow key="1">
          <TableCell>Gesti&oacute;n de Planes de Estudio</TableCell>
        </TableRow>
        <TableRow key="2">
          <TableCell>Administraci&oacute;n de Calificaciones</TableCell>
        </TableRow>
        <TableRow key="3">
          <TableCell>Programaci&oacute;n de Cursos y Horarios</TableCell>
        </TableRow>
        <TableRow key="4">
          <TableCell>Seguimiento del Rendimiento Acad&eacute;mico</TableCell>
        </TableRow>
      </TableBody>
    </Table>
	</DefaultLayout>
  );
};

export default GestionAcademicaPage;