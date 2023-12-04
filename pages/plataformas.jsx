import DefaultLayout from "@/layouts/default";
import { title, subtitle } from "@/components/primitives";
import React from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";

const PlataformasPage = () => {
  return (
    <DefaultLayout>
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
				<div className="inline-block max-w-lg text-center justify-center">
      <h1 className={title()}>Plataformas Educativas</h1>
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
              <TableCell>Desarrollo de Contenido E-Learning</TableCell>
            </TableRow>
            <TableRow key="2">
              <TableCell>Interacci&oacute;n Estudiante-Profesor Online</TableCell>
            </TableRow>
            <TableRow key="3">
              <TableCell>Acceso a Recursos Educativos Virtuales</TableCell>
            </TableRow>
            <TableRow key="4">
              <TableCell>Evaluaci&oacute;n y Retroalimentaci&oacute;n en L&iacute;nea</TableCell>
            </TableRow>
          </TableBody>
        </Table>
    </DefaultLayout>
  );
};

export default PlataformasPage;