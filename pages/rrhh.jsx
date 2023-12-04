import DefaultLayout from "@/layouts/default";
import { title, subtitle } from "@/components/primitives";
import React from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";

const RrhhPage = () => {
  return (
    <DefaultLayout>
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
				<div className="inline-block max-w-lg text-center justify-center">
      <h1 className={title()}>Gesti&oacute;n de Recursos Humanos</h1>
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
              <TableCell>Gesti&oacute;n de Perfiles y Competencias</TableCell>
            </TableRow>
            <TableRow key="2">
              <TableCell>Planificaci&oacute;n de Recursos Humanos</TableCell>
            </TableRow>
            <TableRow key="3">
              <TableCell>Desarrollo Profesional y Formaci&oacute;n</TableCell>
            </TableRow>
            <TableRow key="4">
              <TableCell>Evaluaci&oacute;n del Desempe&ntilde;o Docente y Administrativo</TableCell>
            </TableRow>
          </TableBody>
        </Table>
    </DefaultLayout>
  );
};

export default RrhhPage;